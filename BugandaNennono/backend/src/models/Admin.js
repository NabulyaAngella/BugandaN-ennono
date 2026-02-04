const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  name: { type: String, default: 'Administrator' },
  role: { type: String, default: 'admin' },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Admin', AdminSchema)
