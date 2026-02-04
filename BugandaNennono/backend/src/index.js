const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')
const connectDB = require('./db')
const exampleRoutes = require('./routes/example')

dotenv.config({ path: path.resolve(__dirname, '../.env') })

const app = express()

// Configure CORS to allow local dev and production frontends
const frontendEnv = process.env.FRONTEND_URLS || ''
const allowedOrigins = frontendEnv.split(',').map(s => s.trim()).filter(Boolean)

const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true)
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true)
    }
    return callback(new Error('CORS: Origin not allowed'))
  },
  credentials: true,
  methods: ['GET','POST','PUT','DELETE','OPTIONS']
}

// handle special Private Network Access preflight header
app.use((req, res, next) => {
  if (req.headers['access-control-request-private-network']) {
    res.setHeader('Access-Control-Allow-Private-Network', 'true')
  }
  next()
})

app.use(cors(corsOptions))
app.use(express.json())

const PORT = process.env.PORT || 4000

// connect to Mongo
;(async () => {
  try {
    await connectDB()
    console.log('DB connected')
  } catch (err) {
    console.error('Failed to connect to DB (continuing without DB):', err && err.message ? err.message : err)
  } finally {
    // routes
    const adminRoutes = require('./routes/admin')
    const productRoutes = require('./routes/products')
    app.use('/api/example', exampleRoutes)
    app.use('/api/admin', adminRoutes)
    app.use('/api/products', productRoutes)

    // seed default admin if not present
    try {
      const Admin = require('./models/Admin')
      const bcrypt = require('bcryptjs')
      const defaultUsername = process.env.ADMIN_USERNAME || 'admin'
      const defaultPassword = process.env.ADMIN_PASSWORD || 'Password123!'

      ;(async () => {
        try {
          const exists = await Admin.findOne({ username: defaultUsername })
          if (!exists) {
            const hash = await bcrypt.hash(defaultPassword, 10)
            await Admin.create({ username: defaultUsername, passwordHash: hash, name: 'Seed Admin', role: 'admin' })
            console.log(`Seeded default admin -> username: ${defaultUsername} password: ${defaultPassword}`)
          } else {
            console.log('Admin user already exists, skipping seed')
          }
        } catch (err) {
          console.error('Error seeding admin user:', err && err.message ? err.message : err)
        }
      })()
    } catch (err) {
      console.warn('Skipping admin seed; Admin model unavailable', err && err.message ? err.message : err)
    }

    app.listen(PORT, () => {
      console.log(`Backend server running on http://localhost:${PORT}`)
    })
  }
})()
