const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  // Personal Information
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  
  // Professional Information
  organization: {
    type: String,
    required: [true, 'Organization is required'],
    trim: true
  },
  designation: {
    type: String,
    required: [true, 'Designation is required'],
    trim: true
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
    trim: true
  },
  
  // Registration Details
  registrationType: {
    type: String,
    enum: ['early-bird', 'regular', 'student'],
    required: [true, 'Registration type is required']
  },
  amount: {
    type: Number,
    required: true
  },
  
  // Additional Information
  dietaryRequirements: {
    type: String,
    trim: true
  },
  specialRequests: {
    type: String,
    trim: true
  },
  
  // Presentation
  presentingPaper: {
    type: Boolean,
    default: false
  },
  paperTitle: {
    type: String,
    trim: true
  },
  abstractSubmitted: {
    type: Boolean,
    default: false
  },
  
  // Payment Status
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  paymentId: {
    type: String,
    trim: true
  },
  
  // Registration Status
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  },
  
  // Confirmation
  confirmationCode: {
    type: String,
    unique: true
  },
  
  // Timestamps
  registeredAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Generate confirmation code before saving
registrationSchema.pre('save', function(next) {
  if (!this.confirmationCode) {
    this.confirmationCode = 'OPS2026-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  }
  next();
});

module.exports = mongoose.model('Registration', registrationSchema);
