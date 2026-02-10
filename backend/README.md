# OPTICPHOTONSUMMIT2026 Backend API

Backend API for the Global Summit on Optics Photonics and Laser Technology.

## Features

- Conference registration management
- Contact form submissions
- MongoDB database integration
- Input validation
- Error handling
- RESTful API design

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- Express Validator
- CORS enabled

## Installation

```bash
cd backend
npm install
```

## Environment Setup

Create a `.env` file in the backend directory:

```env
NODE_ENV=development
PORT=5000
CORS_ORIGIN=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/opticphoton2026
```

## Running the Server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

### Health Check
- **GET** `/api/health` - Check server status

### Registration
- **POST** `/api/registration` - Register for conference
- **GET** `/api/registration/:confirmationCode` - Get registration by confirmation code
- **GET** `/api/registration` - Get all registrations (admin)

### Contact
- **POST** `/api/contact` - Submit contact form
- **GET** `/api/contact` - Get all contact messages (admin)
- **GET** `/api/contact/:id` - Get single contact message (admin)

## Registration API

### POST /api/registration

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "organization": "MIT",
  "designation": "Professor",
  "country": "USA",
  "registrationType": "early-bird",
  "dietaryRequirements": "Vegetarian",
  "specialRequests": "Wheelchair access",
  "presentingPaper": true,
  "paperTitle": "Quantum Optics Research"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Registration successful",
  "data": {
    "confirmationCode": "OPS2026-ABC123XYZ",
    "email": "john@example.com",
    "amount": 299,
    "registrationType": "early-bird"
  }
}
```

## Contact API

### POST /api/contact

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "subject": "Sponsorship Inquiry",
  "phone": "+1234567890",
  "message": "I would like to know about sponsorship opportunities."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been sent successfully. We will get back to you soon!",
  "data": {
    "id": "60d5ec49f1b2c72b8c8e4f1a",
    "name": "Jane Smith",
    "email": "jane@example.com"
  }
}
```

## Database Models

### Registration Model
- Personal information (name, email, phone)
- Professional details (organization, designation, country)
- Registration type (early-bird, regular, student)
- Payment status
- Confirmation code
- Paper presentation details

### Contact Model
- Contact information
- Message details
- Status tracking (new, read, replied)
- Timestamps

## Error Handling

All endpoints return consistent error responses:

```json
{
  "success": false,
  "message": "Error description",
  "errors": []
}
```

## Future Enhancements

- [ ] Email notifications
- [ ] Payment gateway integration
- [ ] Admin authentication
- [ ] File upload for abstracts
- [ ] Certificate generation
- [ ] Attendee dashboard

## License

MIT
