import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function SignIn(){
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder: in a real app you'd call your auth API here.
    // For now assume success and redirect to home or learning area.
    navigate('/dashboard')
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow p-8">
      <h2 className="text-2xl font-bold mb-4">{t({ en: 'Sign in to your account', lg: 'Yingira mu akawunti yo' })}</h2>
      <p className="text-sm text-gray-600 mb-6">{t({ en: 'Enter your email and password to continue.', lg: 'Wandiika siimu n\'ensimbi z\'obuyinza okusobola okugenda mu maaso.' })}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">{t({ en: 'Email', lg: 'Siimu' })}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-500 outline-none"
            placeholder={t({ en: 'you@example.com', lg: 'siimu@yooze.com' })}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">{t({ en: 'Password', lg: 'Ensimbi z\'obuyinza' })}</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-500 outline-none"
            placeholder={t({ en: 'Your password', lg: 'Ensimbi zo' })}
          />
        </div>

        <div className="flex items-center justify-between">
          <button type="submit" className="px-6 py-3 bg-gradient-to-r from-royal-500 to-royal-600 text-white rounded-lg font-semibold">
            {t({ en: 'Sign in', lg: 'Yingira' })}
          </button>
          <button type="button" onClick={() => navigate('/verify-email')} className="text-sm text-royal-600 hover:underline">
            {t({ en: 'Forgot password?', lg: 'Waasaze ensimbi?' })}
          </button>
        </div>
      </form>
      <div className="mt-6 text-center text-sm text-gray-600">
        <p>
          {t({ en: "Don't have an account?", lg: 'Togulawo akawunti?' })}
          <button
            onClick={() => navigate('/learn-luganda')}
            className="text-royal-600 font-semibold hover:underline ml-2"
          >
            {t({ en: 'Start your first lesson', lg: 'Tandika essomo lyo eddaaisooka' })}
          </button>
        </p>
      </div>
    </div>
  )
}
