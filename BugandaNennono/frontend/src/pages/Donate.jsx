import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Donate() {
  const { t } = useLanguage()
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState('')
  const [selectedCause, setSelectedCause] = useState('general')
  const [donationType, setDonationType] = useState('one-time')

  const causes = [
    {
      id: 'general',
      name: { en: 'General Support', lg: 'Obuyambi Obwa Bulijjo' },
      description: {
        en: 'Support the overall activities and operations of the Kingdom',
        lg: 'Yamba emirimu n\'ebikozesebwa mu bwakabaka'
      },
      icon: (
        <svg className="w-10 h-10 text-gold-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 9l4 2 3-5 3 5 3-5 3 5 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'education',
      name: { en: 'Education & Scholarships', lg: 'Ebyenjigiriza n\'Obuyambi' },
      description: {
        en: 'Fund education programs and scholarships for Baganda youth',
        lg: 'Yamba pulogulaamu z\'ebyenjigiriza n\'obuyambi bw\'abavubuka Baganda'
      },
      icon: (
        <svg className="w-10 h-10 text-gold-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M3 7a2 2 0 012-2h13v13a1 1 0 01-1 1H6a1 1 0 01-1-1V7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 5v13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 9h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'cultural',
      name: { en: 'Cultural Preservation', lg: 'Okukuuma Obuwangwa' },
      description: {
        en: 'Preserve and promote Buganda traditions, language, and heritage',
        lg: 'Kuuma n\'okutumbula empisa, olulimi, n\'obulombolombo bwa Buganda'
      },
      icon: (
        <svg className="w-10 h-10 text-gold-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M8 14s-1.5-1.5-1.5-3A3.5 3.5 0 0110 7s1.5 1.5 1.5 3A3.5 3.5 0 018 14z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 14s1.5-1.5 1.5-3A3.5 3.5 0 0014 7s-1.5 1.5-1.5 3A3.5 3.5 0 0016 14z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 20s4-4 10-4 10 4 10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'health',
      name: { en: 'Health Initiatives', lg: 'Emirimu gy\'Obulamu' },
      description: {
        en: 'Support healthcare programs and medical facilities in Buganda',
        lg: 'Yamba pulogulaamu z\'obulamu n\'amalwaliro mu Buganda'
      },
      icon: (
        <svg className="w-10 h-10 text-gold-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 11h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'community',
      name: { en: 'Community Development', lg: 'Okulaakulanya Ekitundu' },
      description: {
        en: 'Fund infrastructure and community development projects',
        lg: 'Yamba pulojekiti z\'okulakulanya ekitundu n\'ebizimbe'
      },
      icon: (
        <svg className="w-10 h-10 text-gold-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M3 21v-7a2 2 0 012-2h3v9H3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 21V10l4-4 4 4v11h-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 7v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'youth',
      name: { en: 'Youth Empowerment', lg: 'Okuzzaamu Amaanyi Abavubuka' },
      description: {
        en: 'Empower young Baganda through skills training and entrepreneurship',
        lg: 'Zzaamu amaanyi abavubuka Baganda mu kusomesa emikono n\'ebyobusuubuzi'
      },
      icon: (
        <svg className="w-10 h-10 text-gold-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 2l2 5 5 .5-3.5 3 1 5L12 14l-4.5 2.5 1-5L5 7.5 10 7 12 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ]

  const quickAmounts = [10000, 25000, 50000, 100000, 250000, 500000]

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      minimumFractionDigits: 0
    }).format(price)
  }

  const handleDonate = () => {
    const amount = selectedAmount || parseInt(customAmount)
    if (!amount || amount <= 0) {
      alert(t({ 
        en: 'Please select or enter a valid amount', 
        lg: 'Nsaba londawo oba wandiika omuwendo ogutuufu' 
      }))
      return
    }
    
    alert(t({
      en: `Thank you for your ${formatPrice(amount)} ${donationType} donation to ${causes.find(c => c.id === selectedCause)?.name.en}!`,
      lg: `Webale nnyo ku ssente ${formatPrice(amount)} ez'okuwa eri ${causes.find(c => c.id === selectedCause)?.name.lg}!`
    }))
  }

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {t({ en: 'Support the Kingdom', lg: 'Yamba Obwakabaka' })}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {t({
            en: 'Your generous donations help preserve our culture, empower our communities, and build a brighter future for The Royal Clan',
            lg: 'Ebirabo byammwe ebya mugaso biyamba okukuuma obuwangwa bwaffe, okuzzaamu amaanyi ebitundu byaffe, n\'okuzimba ebiseera eby\'omu maaso ebirungi eri Obwakabaka bwa Buganda'
          })}
        </p>
      </div>

      {/* Donation Type Toggle */}
      <div className="flex justify-center">
        <div className="bg-gray-100 p-1.5 rounded-full inline-flex">
          <button
            onClick={() => setDonationType('one-time')}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              donationType === 'one-time'
                ? 'bg-white text-royal-600 shadow-md'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {t({ en: 'One-Time', lg: 'Omulundi Gumu' })}
          </button>
          <button
            onClick={() => setDonationType('monthly')}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              donationType === 'monthly'
                ? 'bg-white text-royal-600 shadow-md'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {t({ en: 'Monthly', lg: 'Buli Mwezi' })}
          </button>
        </div>
      </div>

      {/* Causes Section */}
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {t({ en: 'Choose a Cause', lg: 'Londa Ensonga' })}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {causes.map(cause => (
            <div
              key={cause.id}
              onClick={() => setSelectedCause(cause.id)}
              className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                selectedCause === cause.id
                  ? 'border-amber-600 bg-gradient-to-br from-amber-50 to-gold-100 shadow-xl'
                  : 'border-gray-200 bg-white hover:border-gold-300 hover:shadow-lg'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center">{cause.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {t(cause.name)}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t(cause.description)}
                  </p>
                </div>
                {selectedCause === cause.id && (
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Donation Amount Section */}
      <div className="bg-gradient-to-br from-amber-50 to-gold-100 rounded-2xl p-8 md:p-12 border border-gold-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {t({ en: 'Select Amount', lg: 'Londa Omuwendo' })}
        </h2>

        {/* Quick Amount Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {quickAmounts.map(amount => (
            <button
              key={amount}
              onClick={() => {
                setSelectedAmount(amount)
                setCustomAmount('')
              }}
              className={`p-6 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 ${
                selectedAmount === amount
                  ? 'bg-gradient-to-r from-royal-500 to-gold-500 text-white shadow-xl'
                  : 'bg-white text-gray-700 hover:bg-gold-100 border-2 border-gray-200 hover:border-gold-400'
              }`}
            >
              {formatPrice(amount)}
            </button>
          ))}
        </div>

        {/* Custom Amount Input */}
        <div className="max-w-md mx-auto">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {t({ en: 'Or enter custom amount:', lg: 'Oba wandiika omuwendo gwoyagala:' })}
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
              UGX
            </span>
            <input
              type="number"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value)
                setSelectedAmount(null)
              }}
              placeholder={t({ en: 'Enter amount', lg: 'Wandiika omuwendo' })}
              className="w-full pl-16 pr-4 py-4 text-lg font-semibold border-2 border-gray-300 rounded-xl focus:border-gold-500 focus:ring-4 focus:ring-royal-200 outline-none transition-all"
            />
          </div>
        </div>

        {/* Donate Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleDonate}
            className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-royal-500 to-gold-500 text-white text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <svg className="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            {t({ en: 'Donate Now', lg: 'Waayo Kati' })}
          </button>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="bg-gradient-to-r from-royal-600 to-gold-600 rounded-2xl p-8 md:p-12 text-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          {t({ en: 'Your Impact', lg: 'Enkola Yo' })}
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">2,500+</div>
            <p className="text-gold-100">
              {t({ en: 'Students Supported', lg: 'Abayizi Abayambiddwa' })}
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">50+</div>
            <p className="text-gold-100">
              {t({ en: 'Communities Reached', lg: 'Ebitundu Ebituusiddwako' })}
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">100+</div>
            <p className="text-gold-100">
              {t({ en: 'Cultural Events', lg: 'Emikolo gy\'Obuwangwa' })}
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">15+</div>
            <p className="text-gold-100">
              {t({ en: 'Health Centers', lg: 'Amalwaliro' })}
            </p>
          </div>
        </div>
      </div>

      {/* Why Donate Section */}
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {t({ en: 'Why Your Donation Matters', lg: 'Lwaki Ekirabo Kyo Kikulu' })}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {t({ en: 'Preserve Our Heritage', lg: 'Kuuma Obulombolombo Bwaffe' })}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t({
                en: 'Help preserve the rich culture, language, and traditions of Buganda for future generations to cherish and learn from.',
                lg: 'Yamba okukuuma obuwangwa, olulimi, n\'empisa za Buganda eri abaazzukulu okubisiima n\'okubiyiga.'
              })}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {t({ en: 'Empower Communities', lg: 'Zzaamu Amaanyi Ebitundu' })}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t({
                en: 'Support education, healthcare, and development projects that improve lives across Buganda communities.',
                lg: 'Yamba ebyenjigiriza, obulamu, n\'emirimu egy\'okulaakulanya ebitundu okutumbula obulamu mu Buganda.'
              })}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {t({ en: 'Transparent & Accountable', lg: 'Obwereere n\'Obuvunaanyizibwa' })}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t({
                en: 'Every donation is carefully tracked and used directly for Kingdom programs. We provide regular updates on impact.',
                lg: 'Buli kirabo kigoberebwa n\'okukozesebwa mu pulogulaamu za kabaka. Tuwa amawulire ga bulijjo ku by\'okukolebwa.'
              })}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {t({ en: 'Immediate Impact', lg: 'Enkola ya Mangu' })}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t({
                en: 'Your contribution creates immediate positive change, from feeding programs to scholarship funds and cultural events.',
                lg: 'Ekirabo kyo kileeta enkyukakyuka ennungi amangu, okuva mu pulogulaamu z\'emmere okutuuka ku buyambi n\'emikolo gy\'obuwangwa.'
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          {t({ en: 'Questions About Donating?', lg: 'Ebibuuzo Ebikwata ku Kuwaayo?' })}
        </h3>
        <p className="text-gray-600 mb-6">
          {t({
            en: 'Contact our donations team for more information or assistance',
            lg: 'Tusobola okukuyamba mu bibuuzo byonna'
          })}
        </p>
        <a
          href="mailto:donations@buganda.org"
          className="inline-flex items-center gap-2 px-8 py-3 bg-white text-royal-600 font-semibold rounded-full hover:bg-gold-50 transition-colors border-2 border-gold-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          donations@buganda.org
        </a>
      </div>
    </div>
  )
}
