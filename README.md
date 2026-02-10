# Optics & Photonics 2026 - SCIENCA SUMMITS

A full-stack application for the Optics & Photonics 2026 Summit under SCIENCA SUMMITS initiative.

## 📋 Project Overview

This is a comprehensive platform for managing, showcasing, and coordinating the 2026 Optics & Photonics Summit. The application includes both backend API services and a modern frontend interface.

## 🏗️ Architecture

### Technology Stack

**Backend:**
- Node.js Runtime
- Express.js Framework
- RESTful API Architecture

**Frontend:**
- React 18
- TypeScript
- Modern CSS3

**Deployment Ready:**
- Modular structure for scalability
- Environment configuration support
- Development and production builds

## 📂 Project Structure

```
optics-photonics-2026/
├── backend/
│   ├── src/
│   │   └── index.js          # Express server entry point
│   ├── package.json          # Backend dependencies
│   ├── .env.example          # Environment template
│   └── README.md             # Backend documentation
│
├── frontend/
│   ├── public/
│   │   ├── index.html        # Main HTML
│   │   └── manifest.json     # PWA manifest
│   ├── src/
│   │   ├── App.tsx           # Main React component
│   │   ├── index.tsx         # React entry point
│   │   └── ...styles         # CSS files
│   ├── package.json          # Frontend dependencies
│   ├── tsconfig.json         # TypeScript config
│   └── README.md             # Frontend documentation
│
├── .gitignore                # Git ignore rules
└── README.md                 # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js v14+ 
- npm or yarn

### Installation

1. **Backend Setup**
```bash
cd backend
npm install
cp .env.example .env
# Update .env with your configuration
```

2. **Frontend Setup**
```bash
cd frontend
npm install
```

### Running the Application

**Terminal 1 - Backend (Port 5000):**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend (Port 3000):**
```bash
cd frontend
npm start
```

The application will be available at `http://localhost:3000`

## 📚 Documentation

- [Backend Documentation](./backend/README.md) - API setup and usage
- [Frontend Documentation](./frontend/README.md) - UI setup and development

## 🔧 Available Commands

### Backend
- `npm start` - Run production server
- `npm run dev` - Run with auto-reload (requires nodemon)
- `npm test` - Run tests

### Frontend
- `npm start` - Development server with hot reload
- `npm run build` - Create production build
- `npm test` - Run test suite

## 🌐 API Endpoints

Base URL: `http://localhost:5000/api`

- `GET /health` - Health check
- `GET /` - API info

See [Backend README](./backend/README.md) for complete API documentation.

## 🔐 Environment Variables

### Backend (.env)
```
NODE_ENV=development
PORT=5000
CORS_ORIGIN=http://localhost:3000
```

## 📦 Building for Production

### Backend Build
```bash
cd backend
npm start
```

### Frontend Build
```bash
cd frontend
npm run build
```

The frontend build output will be in the `build/` directory.

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/your-feature`)
2. Commit changes (`git commit -m 'Add your feature'`)
3. Push to branch (`git push origin feature/your-feature`)
4. Open Pull Request

## 📝 License

MIT License - See individual project files for details

## 👥 Team

Developed for SCIENCA SUMMITS - Optics & Photonics 2026

## 📧 Support

For issues and questions, please create an issue in the repository.

---

**Last Updated:** February 2026
