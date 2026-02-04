import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function Checkout(){
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [cart, setCart] = useState([])
  const [currency, setCurrency] = useState(() => {
    return localStorage.getItem('selectedCurrency') || 'UGX'
  })
  const [shipping, setShipping] = useState({ 
    name: '', 
    email: '', 
    address: '', 
    city: '', 
    country: 'Uganda', 
    phone: '',
    saveInfo: false 
  })
  const [payment, setPayment] = useState({
    method: 'card',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
    mobileProvider: 'mtn',
    mobileNumber: '',
    paypalEmail: ''
  })
  const [loading, setLoading] = useState(false)
  const [placed, setPlaced] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [error, setError] = useState(null)

  // Currency conversion rates (base: UGX)
  const exchangeRates = {
    UGX: 1,
    USD: 0.00027,
    EUR: 0.00025,
    GBP: 0.00021
  }

  const convertPrice = (priceInUGX) => {
    return priceInUGX * exchangeRates[currency]
  }

  const formatPrice = (price) => {
    const convertedPrice = convertPrice(price)
    
    switch(currency) {
      case 'USD':
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2
        }).format(convertedPrice)
      case 'EUR':
        return new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'EUR',
          minimumFractionDigits: 2
        }).format(convertedPrice)
      case 'GBP':
        return new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: 'GBP',
          minimumFractionDigits: 2
        }).format(convertedPrice)
      default:
        return new Intl.NumberFormat('en-UG', {
          style: 'currency',
          currency: 'UGX',
          minimumFractionDigits: 0
        }).format(convertedPrice)
    }
  }

  useEffect(() => {
    try{
      const raw = localStorage.getItem('cart')
      setCart(raw ? JSON.parse(raw) : [])
    } catch (e) {
      setCart([])
    }
  }, [])

  const cartTotal = cart.reduce((s, it) => s + (it.price * it.quantity), 0)

  const taxRateFor = (country) => {
    if (!country) return 0
    if (country.toLowerCase() === 'uganda') return 0.18
    return 0
  }

  const shippingFor = (country) => {
    if (!country) return 0
    const c = country.toLowerCase()
    if (c === 'uganda') return 5000
    if (['kenya','tanzania','rwanda','south sudan'].includes(c)) return 20000
    return 50000
  }

  const taxRate = taxRateFor(shipping.country)
  const shippingCost = shippingFor(shipping.country)
  const taxAmount = Math.round(cartTotal * taxRate)
  const grandTotal = cartTotal + taxAmount + shippingCost

  const updateQuantity = (id, qty) => {
    const next = cart.map(it => it.id === id ? { ...it, quantity: Math.max(1, qty) } : it)
    setCart(next)
    localStorage.setItem('cart', JSON.stringify(next))
  }

  const removeItem = (id) => {
    const next = cart.filter(it => it.id !== id)
    setCart(next)
    localStorage.setItem('cart', JSON.stringify(next))
  }

  const validateStep1 = () => {
    if (!shipping.name || !shipping.email || !shipping.address || !shipping.phone) {
      setError(t({ en: 'Please fill in all required fields', lg: 'Tondeka ebisala byonna ebyetaagisa' }))
      return false
    }
    if (!/\S+@\S+\.\S+/.test(shipping.email)) {
      setError(t({ en: 'Please enter a valid email address', lg: 'Tondeka email entuufu' }))
      return false
    }
    setError(null)
    return true
  }

  const validateStep2 = () => {
    if (payment.method === 'card') {
      if (!payment.cardNumber || !payment.cardName || !payment.expiry || !payment.cvv) {
        setError(t({ en: 'Please fill in all card details', lg: 'Tondeka ebipimo byonna bya kaadi' }))
        return false
      }
      if (payment.cardNumber.replace(/\s/g, '').length !== 16) {
        setError(t({ en: 'Please enter a valid 16-digit card number', lg: 'Tondeka ennamba entuufu ya kaadi (digiti 16)' }))
        return false
      }
      if (payment.cvv.length !== 3) {
        setError(t({ en: 'Please enter a valid 3-digit CVV', lg: 'Tondeka CVV entuufu (digiti 3)' }))
        return false
      }
    } else if (payment.method === 'mobile_money') {
      if (!payment.mobileNumber) {
        setError(t({ en: 'Please enter your mobile money number', lg: 'Tondeka ennamba yo ya mobile money' }))
        return false
      }
    } else if (payment.method === 'paypal') {
      if (!payment.paypalEmail || !/\S+@\S+\.\S+/.test(payment.paypalEmail)) {
        setError(t({ en: 'Please enter a valid PayPal email', lg: 'Tondeka email entuufu ya PayPal' }))
        return false
      }
    }
    setError(null)
    return true
  }

  const nextStep = () => {
    if (currentStep === 1 && !validateStep1()) return
    if (currentStep === 2 && !validateStep2()) return
    setCurrentStep(prev => Math.min(prev + 1, 3))
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g)
    const match = matches && matches[0] || ''
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    return parts.length ? parts.join(' ') : value
  }

  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    if (v.length >= 2) {
      return v.substring(0, 2) + (v.length > 2 ? '/' + v.substring(2, 4) : '')
    }
    return v
  }

  const placeOrder = async () => {
    setError(null)
    
    if (cart.length === 0) {
      setError(t({ en: 'Your cart is empty', lg: 'Cart yo temuli kintu' }))
      return
    }

    if (payment.method === 'mobile_money' && shipping.country.toLowerCase() !== 'uganda') {
      setError(t({ en: 'Mobile money payments are only available for Uganda', lg: 'Okusasula Mobile Money kukolebwa mu Uganda yekka' }))
      return
    }

    setLoading(true)
    await new Promise(r => setTimeout(r, 2000))
    
    localStorage.removeItem('cart')
    setCart([])
    setPlaced(true)
    setLoading(false)
  }

  const renderIcon = (key, sizeClass = 'w-6 h-6') => {
    switch (key) {
      case '🛍️':
      case '🛒':
        return (
          <svg className={`${sizeClass} text-gray-700`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M7 13L5.4 5M7 13l-2.293 2.293" />
          </svg>
        )
      case '📚':
      case '📖':
        return (
          <svg className={`${sizeClass} text-amber-600`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h6v14H5a2 2 0 01-2-2V7z" />
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M13 5h6a2 2 0 012 2v10a2 2 0 01-2 2h-6V5z" />
          </svg>
        )
      case '👗':
      case '🥋':
        return (
          <svg className={`${sizeClass} text-pink-500`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 3l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1 2-4z" />
          </svg>
        )
      case '🎨':
        return (
          <svg className={`${sizeClass} text-emerald-600`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2a7 7 0 100 14 3 3 0 013-3h1a2 2 0 002-2 7 7 0 00-6-7z" />
          </svg>
        )
      case '🎵':
      case '🎶':
        return (
          <svg className={`${sizeClass} text-blue-500`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 17V5l12-2v12" />
            <circle cx="6" cy="18" r="2" fill="currentColor" />
          </svg>
        )
      case '🥁':
        return (
          <svg className={`${sizeClass} text-amber-500`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <ellipse cx="12" cy="12" rx="8" ry="4" strokeWidth="1.5" />
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 12v4c0 2 4 4 8 4s8-2 8-4v-4" />
          </svg>
        )
      case '📿':
        return (
          <svg className={`${sizeClass} text-fuchsia-600`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="7" r="3" strokeWidth="1.5" />
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 10v8" />
          </svg>
        )
      case '📜':
        return (
          <svg className={`${sizeClass} text-yellow-700`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 6h12v12H4z" />
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8 6v12" />
          </svg>
        )
      case '💳':
        return (
          <svg className={`${sizeClass} text-gray-700`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth="1.5" />
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M2 10h20" />
          </svg>
        )
      case '📱':
        return (
          <svg className={`${sizeClass} text-indigo-600`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="6" y="2" width="12" height="20" rx="2" strokeWidth="1.5" />
            <circle cx="12" cy="18" r="1" />
          </svg>
        )
      case '🔵':
        return (
          <svg className={`${sizeClass} text-blue-600`} viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
          </svg>
        )
      case 'ⓘ':
        return (
          <svg className={`${sizeClass} text-yellow-700`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 8h.01M11 12h1v4h1" />
          </svg>
        )
      case '✅':
        return (
          <svg className={`${sizeClass} text-white`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )
      default:
        return (
          <svg className={`${sizeClass} text-gray-500`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
          </svg>
        )
    }
  }

  const renderPaymentDetails = () => {
    switch (payment.method) {
      case 'card':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t({ en: 'Card Number', lg: 'Ennamba ya Kaadi' })} *
              </label>
              <div className="relative">
                <input
                  type="text"
                  maxLength={19}
                  value={payment.cardNumber}
                  onChange={(e) => setPayment(p => ({ 
                    ...p, 
                    cardNumber: formatCardNumber(e.target.value) 
                  }))}
                  placeholder="1234 5678 9012 3456"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-500 focus:border-transparent transition-all pl-12"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-4 bg-royal-500 rounded-sm"></div>
                    <div className="w-6 h-4 bg-gold-400 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t({ en: 'Name on Card', lg: 'Erinnya ku Kaadi' })} *
              </label>
              <input
                type="text"
                value={payment.cardName}
                onChange={(e) => setPayment(p => ({ ...p, cardName: e.target.value }))}
                placeholder={t({ en: 'Full name as shown on card', lg: 'Erinnya lyonna nga liri ku kaadi' })}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t({ en: 'Expiry Date', lg: 'Ennaku Ezisigadde' })} *
                </label>
                <input
                  type="text"
                  maxLength={5}
                  value={payment.expiry}
                  onChange={(e) => setPayment(p => ({ 
                    ...p, 
                    expiry: formatExpiry(e.target.value) 
                  }))}
                  placeholder="MM/YY"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CVV *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    maxLength={3}
                    value={payment.cvv}
                    onChange={(e) => setPayment(p => ({ 
                      ...p, 
                      cvv: e.target.value.replace(/\D/g, '') 
                    }))}
                    placeholder="123"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-500 focus:border-transparent transition-all"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <button type="button" className="text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Badges */}
            <div className="flex items-center justify-center gap-4 pt-4 border-t">
              <div className="text-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-xs text-gray-600">{t({ en: 'Secure', lg: 'Ekiteteefu' })}</span>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="text-xs text-gray-600">{t({ en: 'Encrypted', lg: 'Ekiyitibwa' })}</span>
              </div>
            </div>
          </div>
        )

      case 'mobile_money':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t({ en: 'Mobile Money Provider', lg: 'Okuweereza kwa Mobile Money' })} *
              </label>
              <select
                value={payment.mobileProvider}
                onChange={(e) => setPayment(p => ({ ...p, mobileProvider: e.target.value }))}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-500 focus:border-transparent transition-all"
              >
                <option value="mtn">MTN Mobile Money</option>
                <option value="airtel">Airtel Money</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t({ en: 'Mobile Number', lg: 'Ennamba ya Phone' })} *
              </label>
              <input
                type="tel"
                value={payment.mobileNumber}
                onChange={(e) => setPayment(p => ({ ...p, mobileNumber: e.target.value }))}
                placeholder={t({ en: 'Your mobile money number', lg: 'Ennamba yo ya mobile money' })}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-white text-xs mt-0.5">
                  {renderIcon('ⓘ','w-3 h-3')}
                </div>
                <div>
                  <p className="text-sm text-yellow-800">
                    {t({ 
                      en: 'You will receive a payment request on your phone. Please authorize the payment to complete your order.', 
                      lg: 'Ojja kufuna okusaba okusasula ku phone yo. Tonda okukakasa okusasula okumaliriza ekiragiro kyo.' 
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      case 'paypal':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t({ en: 'PayPal Email', lg: 'Email ya PayPal' })} *
              </label>
              <input
                type="email"
                value={payment.paypalEmail}
                onChange={(e) => setPayment(p => ({ ...p, paypalEmail: e.target.value }))}
                placeholder="your-email@example.com"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="text-blue-600 text-lg">{renderIcon('🔵','w-6 h-6')}</div>
                <p className="text-sm text-blue-800">
                  {t({ 
                    en: 'You will be redirected to PayPal to complete your payment securely.', 
                    lg: 'Ojja kugenderezebwa ku PayPal okumaliriza okusasula kwo obuteekedde.' 
                  })}
                </p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  if (placed) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16 px-4">
        <div className="bg-white rounded-3xl shadow-sm border p-8 md:p-12">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
            {renderIcon('✅','w-10 h-10')}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t({ en: 'Order Placed Successfully!', lg: 'Omukubo Guweerezedde Bulungi!' })}
          </h2>
          <p className="text-gray-600 mb-2">
            {t({ en: 'Thank you for your purchase!', lg: 'Webale nnyo okugula!' })}
          </p>
          <p className="text-gray-500 text-sm mb-8">
            {t({ en: 'You will receive a confirmation email shortly.', lg: 'Ojja kufuna email eyokukakasa mu ddaaki.' })}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
              onClick={() => navigate('/shop')}
              className="px-6 py-3 bg-royal-500 text-white rounded-xl font-semibold hover:bg-royal-600 transition-colors"
            >
              {t({ en: 'Continue Shopping', lg: 'Komekerako Okugula' })}
            </button>
            <button 
              onClick={() => navigate('/dashboard')}
              className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              {t({ en: 'Go to Dashboard', lg: 'Genda ku Dashboard' })}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {t({ en: 'Checkout', lg: 'Okusasula' })}
        </h1>
        <p className="text-gray-600">
          {t({ en: 'Complete your purchase securely', lg: 'Maliriza okugula kwo obuteekedde' })}
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center w-full max-w-md">
          {[1, 2, 3].map((step) => (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm border-2 ${
                  currentStep >= step 
                    ? 'bg-royal-500 border-royal-500 text-white' 
                    : 'bg-white border-gray-300 text-gray-400'
                }`}>
                  {step}
                </div>
                <span className={`text-xs mt-2 ${
                  currentStep >= step ? 'text-royal-600 font-semibold' : 'text-gray-400'
                }`}>
                  {step === 1 && t({ en: 'Shipping', lg: 'Okuweereza' })}
                  {step === 2 && t({ en: 'Payment', lg: 'Okusasula' })}
                  {step === 3 && t({ en: 'Review', lg: 'Okunnyonnyola' })}
                </span>
              </div>
              {step < 3 && (
                <div className={`flex-1 h-1 mx-2 ${
                  currentStep > step ? 'bg-royal-500' : 'bg-gray-200'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Shipping Information */}
          {currentStep === 1 && (
            <div className="bg-white rounded-2xl shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-royal-100 text-royal-600 rounded-full flex items-center justify-center">
                  1
                </div>
                {t({ en: 'Shipping Information', lg: 'Ebikwata ku Kutuusa' })}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t({ en: 'Full Name', lg: 'Erinnya Lyonna' })} *
                  </label>
                  <input 
                    value={shipping.name} 
                    onChange={e => setShipping(s => ({ ...s, name: e.target.value }))} 
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-500 focus:border-transparent transition-all"
                    placeholder={t({ en: 'Enter your full name', lg: 'Wandika erinnya lyo lyonna' })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t({ en: 'Email Address', lg: 'Email' })} *
                  </label>
                  <input 
                    type="email"
                    value={shipping.email} 
                    onChange={e => setShipping(s => ({ ...s, email: e.target.value }))} 
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-500 focus:border-transparent transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t({ en: 'Phone Number', lg: 'Ennyo ya Phone' })} *
                  </label>
                  <input 
                    value={shipping.phone} 
                    onChange={e => setShipping(s => ({ ...s, phone: e.target.value }))} 
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-500 focus:border-transparent transition-all"
                    placeholder={t({ en: 'Your phone number', lg: 'Ennyo yo ya phone' })}
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t({ en: 'Address', lg: 'Ekitundu' })} *
                  </label>
                  <input 
                    value={shipping.address} 
                    onChange={e => setShipping(s => ({ ...s, address: e.target.value }))} 
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-500 focus:border-transparent transition-all"
                    placeholder={t({ en: 'Street address, P.O. Box', lg: 'Address, P.O. Box' })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t({ en: 'City', lg: 'Lugga' })}
                  </label>
                  <input 
                    value={shipping.city} 
                    onChange={e => setShipping(s => ({ ...s, city: e.target.value }))} 
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-500 focus:border-transparent transition-all"
                    placeholder={t({ en: 'City or town', lg: 'Lugga oba ekibuga' })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t({ en: 'Country', lg: 'Kibuga' })} *
                  </label>
                  <select 
                    value={shipping.country} 
                    onChange={e => setShipping(s => ({ ...s, country: e.target.value }))} 
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-500 focus:border-transparent transition-all"
                  >
                    <option>Uganda</option>
                    <option>Kenya</option>
                    <option>Tanzania</option>
                    <option>Rwanda</option>
                    <option>South Sudan</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                  {error}
                </div>
              )}

              <div className="flex justify-between mt-8">
                <button 
                  onClick={() => navigate('/shop')}
                  className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium flex items-center gap-2 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  {t({ en: 'Back to Shop', lg: 'Dda mu Dduuka' })}
                </button>
                <button 
                  onClick={nextStep}
                  className="px-8 py-3 bg-royal-500 text-white rounded-xl font-semibold hover:bg-royal-600 transition-colors"
                >
                  {t({ en: 'Continue to Payment', lg: 'Komekerako Okusasula' })}
                </button>
              </div>
            </div>
          )}

          {/* Payment Method */}
          {currentStep === 2 && (
            <div className="bg-white rounded-2xl shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-royal-100 text-royal-600 rounded-full flex items-center justify-center">
                  2
                </div>
                {t({ en: 'Payment Method', lg: 'Enkola yo Okusasula' })}
              </h2>

              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm">
                    {t({ en: 'This is a demo checkout. No real payments will be processed.', lg: 'Kino kwekuwanagana kyokka. Tewali sente zisasulwa.' })}
                  </p>

                          {[
                    {
                      id: 'card',
                      name: t({ en: 'Credit/Debit Card', lg: 'Kaadi' }),
                      description: t({ en: 'Pay securely with your card', lg: 'Sasula obuteekedde ne kaadi yo' }),
                              icon: '💳',
                      disabled: false
                    },
                    {
                      id: 'mobile_money',
                      name: t({ en: 'Mobile Money', lg: 'Mobile Money' }),
                      description: t({ en: 'MTN Mobile Money or Airtel Money', lg: 'MTN Mobile Money oba Airtel Money' }),
                              icon: '📱',
                      disabled: shipping.country.toLowerCase() !== 'uganda'
                    },
                    {
                      id: 'paypal',
                      name: 'PayPal',
                      description: t({ en: 'Pay with your PayPal account', lg: 'Sasula ne PayPal account yo' }),
                              icon: '🔵',
                      disabled: false
                    }
                  ].map(method => (
                    <label 
                      key={method.id}
                      className={`flex items-start gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        payment.method === method.id 
                          ? 'border-royal-500 bg-royal-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      } ${method.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <input 
                        type="radio" 
                        name="payment" 
                        value={method.id} 
                        checked={payment.method === method.id} 
                        onChange={() => !method.disabled && setPayment(p => ({ ...p, method: method.id }))}
                        className="mt-1"
                        disabled={method.disabled}
                      />
                      <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                          {renderIcon(method.icon,'w-6 h-6')}
                          <span className="font-semibold">{method.name}</span>
                        </div>
                        <p className="text-sm text-gray-600">{method.description}</p>
                        {method.disabled && (
                          <p className="text-xs text-red-500 mt-1">
                            {t({ en: 'Available for Uganda only', lg: 'Kikolebwa mu Uganda yekka' })}
                          </p>
                        )}
                      </div>
                    </label>
                  ))}
                </div>

                {/* Payment Details Form */}
                {payment.method && (
                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-4">
                      {t({ en: 'Payment Details', lg: 'Ebipimo by\'Okusasula' })}
                    </h3>
                    {renderPaymentDetails()}
                  </div>
                )}
              </div>

              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                  {error}
                </div>
              )}

              <div className="flex justify-between mt-8">
                <button 
                  onClick={prevStep}
                  className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium flex items-center gap-2 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  {t({ en: 'Back to Shipping', lg: 'Dda ku Bweerere' })}
                </button>
                <button 
                  onClick={nextStep}
                  className="px-8 py-3 bg-royal-500 text-white rounded-xl font-semibold hover:bg-royal-600 transition-colors"
                >
                  {t({ en: 'Review Order', lg: 'Laba Ekiragiro' })}
                </button>
              </div>
            </div>
          )}

          {/* Review Order */}
          {currentStep === 3 && (
            <div className="bg-white rounded-2xl shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-royal-100 text-royal-600 rounded-full flex items-center justify-center">
                  3
                </div>
                {t({ en: 'Review Your Order', lg: 'Nyiga Ekiragiro Kyo' })}
              </h2>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold mb-2">{t({ en: 'Shipping Address', lg: 'Ekitundu Kweerere' })}</h3>
                  <p className="text-sm text-gray-600">
                    {shipping.name}<br />
                    {shipping.address}<br />
                    {shipping.city && `${shipping.city}, `}{shipping.country}<br />
                    {shipping.phone}<br />
                    {shipping.email}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold mb-2">{t({ en: 'Payment Method', lg: 'Enkola yo Okusasula' })}</h3>
                  <p className="text-sm text-gray-600">
                    {payment.method === 'card' && `${t({ en: 'Credit/Debit Card', lg: 'Kaadi' })} •••• ${payment.cardNumber.slice(-4)}`}
                    {payment.method === 'mobile_money' && `${t({ en: 'Mobile Money', lg: 'Mobile Money' })} (${payment.mobileProvider.toUpperCase()})`}
                    {payment.method === 'paypal' && `PayPal (${payment.paypalEmail})`}
                  </p>
                </div>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                  {error}
                </div>
              )}

              <div className="flex justify-between mt-8">
                <button 
                  onClick={prevStep}
                  className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium flex items-center gap-2 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  {t({ en: 'Back to Payment', lg: 'Dda ku Ssasula' })}
                </button>
                <button 
                  onClick={placeOrder}
                  disabled={loading}
                  className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {t({ en: 'Placing Order...', lg: 'Okukyusa Ekiragiro...' })}
                    </span>
                  ) : (
                    t({ en: 'Place Order', lg: 'Kola Ekiragiro' })
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border p-6 sticky top-6">
            <h3 className="text-lg font-semibold mb-4">
              {t({ en: 'Order Summary', lg: 'Ennukuta y\'Ekiragiro' })}
            </h3>

            {cart.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">{renderIcon('🛒','w-12 h-12')}</div>
                <p className="text-gray-500">{t({ en: 'Your cart is empty', lg: 'Cart yo temuli kintu' })}</p>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl">{renderIcon(item.image,'w-8 h-8')}</div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">{t(item.name)}</h4>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-royal-600 font-semibold text-sm">
                            {formatPrice(item.price)}
                          </span>
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-xs hover:bg-gray-300"
                            >
                              -
                            </button>
                            <span className="text-sm w-8 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-xs hover:bg-gray-300"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>{t({ en: 'Subtotal', lg: 'Ebirimu' })}</span>
                    <span className="font-semibold">
                      {formatPrice(cartTotal)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>{t({ en: 'Shipping', lg: 'Okuweereza' })}</span>
                    <span>
                      {formatPrice(shippingCost)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>{t({ en: 'Tax', lg: 'Enssente ya Tax' })} ({Math.round(taxRate * 100)}%)</span>
                    <span>
                      {formatPrice(taxAmount)}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t pt-3">
                    <span>{t({ en: 'Total', lg: 'Omugatte' })}</span>
                    <span className="text-royal-600">
                      {formatPrice(grandTotal)}
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}