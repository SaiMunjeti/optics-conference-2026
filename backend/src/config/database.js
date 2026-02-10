const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/opticphoton2026');
    
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    console.log('\n⚠️  Make sure MongoDB is running on your system');
    console.log('   Or update MONGODB_URI in .env to use MongoDB Atlas\n');
    // Don't exit, allow server to run without DB for now
  }
};

module.exports = connectDB;
