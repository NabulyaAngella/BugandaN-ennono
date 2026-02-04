const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Admin = require('../models/Admin')

// POST /api/admin/login
router.post('/login', async (req, res) => {
  const { username, password } = req.body || {}
  if (!username || !password) return res.status(400).json({ message: 'Username and password required' })

  try {
    const admin = await Admin.findOne({ username })
    if (!admin) return res.status(401).json({ message: 'Invalid credentials' })

    const match = await bcrypt.compare(password, admin.passwordHash)
    if (!match) return res.status(401).json({ message: 'Invalid credentials' })

    const secret = process.env.JWT_SECRET || 'dev_jwt_secret'
    const token = jwt.sign({ id: admin._id, username: admin.username, role: admin.role }, secret, { expiresIn: '12h' })

    res.json({ token, user: { name: admin.name, username: admin.username, role: admin.role } })
  } catch (err) {
    console.error('Admin login error:', err)
    res.status(500).json({ message: 'Server error' })
  }
})

module.exports = router
