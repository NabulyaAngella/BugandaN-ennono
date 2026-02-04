import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function AdminLogin() {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Make API call to backend
      const response = await fetch('http://localhost:4000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || t({ en: 'Invalid credentials', lg: 'Emboozi z\'okwegatta si kituufu' }))
        return
      }

      // Store token
      localStorage.setItem('adminToken', data.token)
      localStorage.setItem('adminUser', JSON.stringify(data.user))
      
      // Redirect to dashboard
      navigate('/admin/dashboard')
    } catch (err) {
      setError(err.message || t({ en: 'An error occurred. Please try again.', lg: 'Kifo kinabadde. Kkiriza okuddewo.' }))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-royal-900 to-gray-900 flex items-center justify-center px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: 'url(data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60"><rect fill="%23fff" width="60" height="60"/><circle cx="30" cy="30" r="20" fill="none" stroke="%23gold" stroke-width="2"/></svg>)'
        }}></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-royal-600 to-royal-800 px-8 py-12 text-center">
            <h1 className="text-4xl font-bold text-white mb-2">
              {t({ en: 'Admin Portal', lg: 'Ekifo ky\'Okukuuma' })}
            </h1>
            <p className="text-royal-100">
              {t({ en: 'The Royal Clan Management', lg: 'Okukuuma Abalangira' })}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-8 py-8">
            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm font-medium">{error}</p>
              </div>
            )}

            {/* Username Field */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                {t({ en: 'Username', lg: 'Zina lya Mukola' })}
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={t({ en: 'Enter your username', lg: 'Wandiika zina lyo' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent"
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                {t({ en: 'Password', lg: 'Emboozi y\'obanga' })}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t({ en: '••••••••', lg: '••••••••' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="mb-6 flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="ml-2 text-gray-700">{t({ en: 'Remember me', lg: 'Nkukulemberanga' })}</span>
              </label>
              <Link to="/admin/forgot-password" className="text-royal-600 hover:text-royal-700 font-medium">
                {t({ en: 'Forgot password?', lg: 'Waliwo okubala?' })}
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-700 hover:to-royal-800 text-white font-bold py-3 rounded-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? t({ en: 'Signing in...', lg: 'Kikutte...' }) : t({ en: 'Sign In', lg: 'Kigide' })}
            </button>
          </form>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-700">
              {t({ en: 'Contact administrator if you don\'t have access', lg: 'Kolagana mu wankulukuta ki toyina mu kwegatta' })}
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link to="/" className="text-white hover:text-gold-400 transition font-medium">
            ← {t({ en: 'Back to Home', lg: 'Ddanamu mu Awaka' })}
          </Link>
        </div>
      </div>
    </div>
  )
}
