const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Registration = require('../models/Registration');

// Validation middleware
const validateRegistration = [
  body('firstName').trim().notEmpty().withMessage('First name is required'),
  body('lastName').trim().notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone number is required'),
  body('organization').trim().notEmpty().withMessage('Organization is required'),
  body('designation').trim().notEmpty().withMessage('Designation is required'),
  body('country').trim().notEmpty().withMessage('Country is required'),
  body('registrationType').isIn(['early-bird', 'regular', 'student']).withMessage('Valid registration type is required')
];

// @route   POST /api/registration
// @desc    Register for conference
// @access  Public
router.post('/', validateRegistration, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      organization,
      designation,
      country,
      registrationType,
      dietaryRequirements,
      specialRequests,
      presentingPaper,
      paperTitle
    } = req.body;

    // Check if email already registered
    const existingRegistration = await Registration.findOne({ email });
    if (existingRegistration) {
      return res.status(400).json({ 
        success: false,
        message: 'This email is already registered' 
      });
    }

    // Determine amount based on registration type
    let amount;
    switch (registrationType) {
      case 'early-bird':
        amount = 299;
        break;
      case 'regular':
        amount = 399;
        break;
      case 'student':
        amount = 199;
        break;
      default:
        amount = 399;
    }

    // Create new registration
    const registration = new Registration({
      firstName,
      lastName,
      email,
      phone,
      organization,
      designation,
      country,
      registrationType,
      amount,
      dietaryRequirements,
      specialRequests,
      presentingPaper,
      paperTitle
    });

    await registration.save();

    res.status(201).json({
      success: true,
      message: 'Registration successful',
      data: {
        confirmationCode: registration.confirmationCode,
        email: registration.email,
        amount: registration.amount,
        registrationType: registration.registrationType
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error during registration',
      error: error.message 
    });
  }
});

// @route   GET /api/registration/:confirmationCode
// @desc    Get registration details by confirmation code
// @access  Public
router.get('/:confirmationCode', async (req, res) => {
  try {
    const registration = await Registration.findOne({ 
      confirmationCode: req.params.confirmationCode 
    }).select('-__v');

    if (!registration) {
      return res.status(404).json({ 
        success: false,
        message: 'Registration not found' 
      });
    }

    res.json({
      success: true,
      data: registration
    });

  } catch (error) {
    console.error('Error fetching registration:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error',
      error: error.message 
    });
  }
});

// @route   GET /api/registration
// @desc    Get all registrations (for admin)
// @access  Public (should be protected in production)
router.get('/', async (req, res) => {
  try {
    const registrations = await Registration.find()
      .sort({ createdAt: -1 })
      .select('-__v');

    res.json({
      success: true,
      count: registrations.length,
      data: registrations
    });

  } catch (error) {
    console.error('Error fetching registrations:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error',
      error: error.message 
    });
  }
});

module.exports = router;
