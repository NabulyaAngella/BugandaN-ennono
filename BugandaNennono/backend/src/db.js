const mongoose = require('mongoose')

async function connectDB(){
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/angella'
  console.log(`Connecting to MongoDB at ${uri}...`)
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000 // 5 seconds timeout
    })
    console.log('Connected to MongoDB')
  } catch (err) {
    console.error('MongoDB connection error:', err.message)
    throw err
  }
}

module.exports = connectDB

