import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useLocation, useNavigate } from 'react-router-dom'

export default function VerifyEmail() {
  const { t } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', ''])
  const [isVerifying, setIsVerifying] = useState(false)
  const [error, setError] = useState('')
  
  // Get user data from navigation state
  const userData = location.state || {}
  const userEmail = userData.email || 'your email'

  const handleCodeChange = (index, value) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return

    const newCode = [...verificationCode]
    newCode[index] = value
    setVerificationCode(newCode)

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`)
      if (nextInput) nextInput.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`)
      if (prevInput) prevInput.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').slice(0, 6)
    if (!/^\d+$/.test(pastedData)) return

    const newCode = [...verificationCode]
    pastedData.split('').forEach((char, index) => {
      if (index < 6) newCode[index] = char
    })
    setVerificationCode(newCode)

    // Focus last filled input
    const lastIndex = Math.min(pastedData.length, 5)
    const lastInput = document.getElementById(`code-${lastIndex}`)
    if (lastInput) lastInput.focus()
  }

  const handleVerify = async (e) => {
    e.preventDefault()
    setError('')
    
    const code = verificationCode.join('')
    if (code.length !== 6) {
      setError(t({ 
        en: 'Please enter all 6 digits', 
        lg: 'Wandiika ennamba zonna 6' 
      }))
      return
    }

    setIsVerifying(true)
    
    // Simulate verification (replace with actual API call)
    setTimeout(() => {
      setIsVerifying(false)
      // On success, navigate to learning dashboard or home
      alert(t({ 
        en: 'Email verified successfully! Welcome to your learning journey.', 
        lg: 'Siimu ekakasiddwa obulungi! Tukwaniriza mu lugendo lwo lw\'okuyiga.' 
      }))
      navigate('/learn-luganda')
    }, 2000)
  }

  const handleResendCode = () => {
    setError('')
    setVerificationCode(['', '', '', '', '', ''])
    // Simulate resend (replace with actual API call)
    alert(t({ 
      en: 'A new verification code has been sent to your email', 
      lg: 'Koodi empya ey\'okukakasa etumiddwa ku siimu yo' 
    }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-royal-50 via-white to-gold-50 px-4 py-12">
      <div className="max-w-md w-full">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Icon */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-royal-500 to-royal-600 rounded-full mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {t({ en: 'Verify Your Email', lg: 'Kakasa Siimu Yo' })}
            </h1>
            <p className="text-gray-600">
              {t({ 
                en: 'We sent a verification code to', 
                lg: 'Tuweerezza koodi ey\'okukakasa ku' 
              })}
            </p>
            <p className="text-royal-600 font-semibold mt-1">{userEmail}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleVerify} className="space-y-6">
            {/* Code Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 text-center">
                {t({ en: 'Enter 6-digit code', lg: 'Wandiika koodi ey\'ennamba 6' })}
              </label>
              <div className="flex gap-2 justify-center" onPaste={handlePaste}>
                {verificationCode.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-royal-500 focus:ring-2 focus:ring-royal-200 outline-none transition"
                    required
                  />
                ))}
              </div>
              {error && (
                <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
              )}
            </div>

            {/* Verify Button */}
            <button
              type="submit"
              disabled={isVerifying}
              className="w-full py-4 bg-gradient-to-r from-royal-500 to-royal-600 text-white font-bold text-lg rounded-lg hover:shadow-lg hover:from-royal-600 hover:to-royal-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isVerifying ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t({ en: 'Verifying...', lg: 'Tukakasa...' })}
                </span>
              ) : (
                t({ en: 'Verify Email', lg: 'Kakasa Siimu' })
              )}
            </button>
          </form>

          {/* Resend Code */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm mb-2">
              {t({ en: 'Didn\'t receive the code?', lg: 'Tewafuna koodi?' })}
            </p>
            <button
              type="button"
              onClick={handleResendCode}
              className="text-royal-600 font-semibold hover:text-royal-700 transition"
            >
              {t({ en: 'Resend Code', lg: 'Ddamu Okuweereza Koodi' })}
            </button>
          </div>

          {/* Help Text */}
          <div className="mt-6 p-4 bg-gold-50 border border-gold-200 rounded-lg">
            <p className="text-sm text-gray-700 text-center">
              {t({ 
                en: 'Check your spam folder if you don\'t see the email in your inbox',
                lg: 'Kebera mu spam folder singa tolaba siimu mu inbox yo'
              })}
            </p>
          </div>

          {/* User Info Display (if available) */}
          {userData.name && userData.assignedName && (
            <div className="mt-6 p-4 bg-gradient-to-r from-royal-50 to-gold-50 border-2 border-royal-200 rounded-lg">
              <p className="text-sm text-gray-600 mb-2 text-center">
                {t({ en: 'Your Buganda Name', lg: 'Erinnya Lyo Ery\'Oluganda' })}
              </p>
              <p className="text-2xl font-bold text-royal-700 text-center">{userData.assignedName}</p>
              {userData.assignedClan && (
                <p className="text-sm text-gray-600 mt-1 text-center">
                  {t({ en: 'Clan:', lg: 'Ekika:' })} <span className="font-semibold text-gray-800">{userData.assignedClan.name}</span>
                </p>
              )}
            </div>
          )}
        </div>

        {/* Back Link */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/learn-luganda')}
            className="text-gray-600 hover:text-gray-800 transition text-sm"
          >
            ← {t({ en: 'Back to Learn Luganda', lg: 'Ddayo ku Yiga Oluganda' })}
          </button>
        </div>
      </div>
    </div>
  )
}
