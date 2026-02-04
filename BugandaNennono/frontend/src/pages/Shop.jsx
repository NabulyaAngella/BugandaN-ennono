import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function Shop() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem('cart')
      return raw ? JSON.parse(raw) : []
    } catch (e) {
      return []
    }
  })
  const [showCart, setShowCart] = useState(false)
  const [currency, setCurrency] = useState(() => {
    return localStorage.getItem('selectedCurrency') || 'UGX'
  })
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [sizePromptProduct, setSizePromptProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)

  const wearableCategories = ['clothing', 'accessories']

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

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  // Save currency to localStorage
  useEffect(() => {
    localStorage.setItem('selectedCurrency', currency)
  }, [currency])

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5500/api/products')
        const data = await response.json()
        setProducts(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching products:', error)
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const categories = [
    { id: 'all', name: { en: 'All Items', lg: 'Ebintu Byonna' } },
    { id: 'books', name: { en: 'Books', lg: 'Ebitabo' } },
    { id: 'clothing', name: { en: 'Traditional Clothing', lg: 'Engoye z\'Obuwangwa' } },
    { id: 'crafts', name: { en: 'Crafts & Art', lg: 'Emikono n\'Eby\'Obukodyo' } },
    { id: 'music', name: { en: 'Music & Instruments', lg: 'Ennyimba n\'Ebivuga' } },
    { id: 'jewelry', name: { en: 'Jewelry', lg: 'Amayinja ag\'Omuwendo' } },
    { id: 'food', name: { en: 'Food & Drinks', lg: 'Emmere n\'Ebyokunywa' } },
    { id: 'accessories', name: { en: 'Accessories', lg: 'Ebintu Ebirala' } },
    { id: 'art', name: { en: 'Art', lg: 'Eby\'Obukodyo' } }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  const addToCart = (product) => {
    // If it's a wearable and has sizes, show size selection
    if (wearableCategories.includes(product.category) && product.sizes && product.sizes.length > 0) {
      setSizePromptProduct(product)
      setSelectedSize(null)
      return
    }

    // Otherwise add directly
    setCart(prev => {
      const existing = prev.find(item => item._id === product._id)
      if (existing) {
        return prev.map(item => 
          item._id === product._id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const confirmAddToCart = () => {
    // For non-wearables or wearables with selectedSize
    if (wearableCategories.includes(selectedProduct.category) && selectedProduct.sizes && selectedProduct.sizes.length > 0) {
      if (!selectedSize) return
      
      setCart(prev => {
        const existing = prev.find(item => item._id === selectedProduct._id && item.selectedSize === selectedSize)
        
        if (existing) {
          return prev.map(item => 
            item._id === selectedProduct._id && item.selectedSize === selectedSize
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
        return [...prev, { ...selectedProduct, quantity: 1, selectedSize }]
      })
    } else {
      // Non-wearable
      setCart(prev => {
        const existing = prev.find(item => item._id === selectedProduct._id)
        if (existing) {
          return prev.map(item => 
            item._id === selectedProduct._id 
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
        return [...prev, { ...selectedProduct, quantity: 1 }]
      })
    }

    setSelectedProduct(null)
    setSelectedSize(null)
  }

  const updateQuantity = (productId, change) => {
    setCart(prev => {
      return prev.map(item => {
        if (item._id === productId) {
          const newQuantity = item.quantity + change
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item
        }
        return item
      }).filter(item => item.quantity > 0)
    })
  }

  const removeFromCart = (productId, selectedSize = null) => {
    setCart(prev => prev.filter(item => {
      if (item._id !== productId) return true
      // If product has selectedSize, only remove if size matches
      if (item.selectedSize) {
        return item.selectedSize !== selectedSize
      }
      // For non-wearables, remove any matching productId
      return false
    }))
  }

  // persist cart to localStorage so other pages (Checkout) can read it
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart))
    } catch (e) {
      // ignore storage errors
    }
  }, [cart])

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

  const cartItemCount = cart.reduce((s, it) => s + (it.quantity || 0), 0)

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    )
  }

  const renderIcon = (key, sizeClass = 'w-16 h-16') => {
    // map known emoji/category keys to compact inline SVGs
    switch (key) {
      case '🛍️':
        return (
          <svg className={`${sizeClass} text-royal-600`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M6 2l1.5 3h9L18 2" />
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 7h16v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z" />
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 11a3 3 0 016 0" />
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
            <circle cx="9" cy="8" r="1" fill="currentColor" />
            <circle cx="13" cy="10" r="1" fill="currentColor" />
          </svg>
        )
      case '🧺':
        return (
          <svg className={`${sizeClass} text-orange-500`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 7h18l-2 12H5L3 7z" />
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M7 7V5a5 5 0 0110 0v2" />
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
      default:
        return (
          <svg className={`${sizeClass} text-gray-700`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v14a2 2 0 01-2 2H5a2 2 0 01-2-2V3z" />
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M16 3v4" />
          </svg>
        )
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header with Cart and Currency Selector */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {t({ en: 'Buganda Cultural Shop', lg: 'Eduuka ly\'Obuwangwa bwa Buganda' })}
          </h1>
          <p className="text-gray-600 max-w-2xl">
            {t({
              en: 'Discover authentic cultural treasures and support local artisans',
              lg: 'Zuula ebintu eby\'obuwangwa ebya nnono era oweereze abakola emikono'
            })}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {/* Currency Selector */}
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-royal-500"
          >
            <option value="UGX">UGX (Shs)</option>
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
          </select>
          
          <button 
            onClick={() => setShowCart(true)}
            className="relative p-3 bg-white rounded-xl shadow-sm border hover:shadow-md transition-all"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-royal-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {cart.length}
            </span>
          )}
        </button>
      </div>
    </div>

      {/* Featured Products Banner */}
      <div className="bg-gradient-to-r from-royal-500 to-royal-600 rounded-2xl p-6 mb-8 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">
              {t({ en: 'Featured Cultural Items', lg: 'Ebintu Eby\'Obuwangwa Ebikulu' })}
            </h2>
            <p className="text-royal-100">
              {t({ en: 'Handpicked authentic treasures from Buganda kingdom', lg: 'Ebintu eby\'amannyo ebya nnono okuva mu bwakabaka bwa Buganda' })}
            </p>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <p className="text-sm font-semibold">{products.length} {t({ en: 'Products', lg: 'Ebintu' })}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex overflow-x-auto gap-2 mb-8 pb-2 scrollbar-hide">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
              selectedCategory === category.id
                ? 'bg-royal-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-royal-50 border border-gray-200'
            }`}
          >
            <span>{t(category.name)}</span>
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {loading ? (
          <div className="col-span-full text-center py-12">
            <div className="text-lg text-gray-600">{t({ en: 'Loading products...', lg: 'Tukusindika ebintu...' })}</div>
          </div>
        ) : filteredProducts.map(product => (
          <div 
            key={product._id || product.id} 
            className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            {/* Product Image */}
            <div 
              className="relative h-48 bg-gray-100 flex items-center justify-center overflow-hidden cursor-pointer"
              onClick={() => {
                setSelectedProduct(product);
                setCurrentImageIndex(0);
              }}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
                }}
              />
              {/* View Details Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {t({ en: 'View Details', lg: 'Laba Ebikwata' })}
                </span>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 
                  className="font-semibold text-gray-900 line-clamp-2 flex-1 cursor-pointer hover:text-royal-600 transition"
                  onClick={() => {
                    setSelectedProduct(product);
                    setCurrentImageIndex(0);
                  }}
                >
                  {product.name}
                </h3>
                <div className="text-right">
                  <div className="text-lg font-bold text-royal-600">
                    {formatPrice(product.price)}
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                {product.description}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setSelectedProduct(product);
                    setCurrentImageIndex(0);
                  }}
                  className="flex-1 py-3 rounded-xl font-semibold transition-all duration-200 bg-white border-2 border-royal-500 text-royal-600 hover:bg-royal-50"
                >
                  {t({ en: 'View', lg: 'Laba' })}
                </button>
                <button
                  onClick={() => {
                    // For wearables with sizes, open the detail modal to show sizes
                    if (wearableCategories.includes(product.category) && product.sizes && product.sizes.length > 0) {
                      setSelectedProduct(product);
                      setCurrentImageIndex(0);
                      setSelectedSize(null);
                    } else {
                      // For non-wearables, add directly
                      addToCart(product);
                    }
                  }}
                  className="flex-1 py-3 rounded-xl font-semibold transition-all duration-200 bg-gradient-to-r from-royal-500 to-royal-600 text-white hover:from-royal-600 hover:to-royal-700 shadow-sm hover:shadow-md"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    {t({ en: 'Cart', lg: 'Cart' })}
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No products message */}
      {!loading && filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🛒</div>
          <p className="text-gray-500 text-lg mb-2">
            {t({ en: 'No products found in this category', lg: 'Tewali bintu mu kika kino' })}
          </p>
          <button 
            onClick={() => setSelectedCategory('all')}
            className="text-royal-600 hover:text-royal-700 font-medium"
          >
            {t({ en: 'Browse all items', lg: 'Zuula ebintu byonna' })}
          </button>
        </div>
      )}

      {/* Shopping Benefits */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-royal-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">
            {t({ en: 'Authentic Quality', lg: 'Ekituufu n\'Ekimala' })}
          </h3>
          <p className="text-sm text-gray-600">
            {t({ en: 'All items are genuine cultural artifacts', lg: 'Ebintu byonna bya nnono eby\'obuwangwa' })}
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-royal-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">
            {t({ en: 'Fast Delivery', lg: 'Okuweereza Amangu' })}
          </h3>
          <p className="text-sm text-gray-600">
            {t({ en: 'Quick shipping across Uganda', lg: 'Tuweereza amangu mu Uganda yonna' })}
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center">
          <div className="w-12 h-12 bg-royal-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">
            {t({ en: 'Secure Payment', lg: 'Okusasula Obuteefu' })}
          </h3>
          <p className="text-sm text-gray-600">
            {t({ en: 'Multiple safe payment options', lg: 'Enkola nkumi z\'okusasula eziteekeddwa obwetegefu' })}
          </p>
        </div>
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end" onClick={() => setShowCart(false)}>
          <div className="bg-white w-full max-w-md h-full overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Cart Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {t({ en: 'Shopping Cart', lg: 'Cart y\'Ebintu' })}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {cart.length} {t({ en: cart.length === 1 ? 'item' : 'items', lg: cart.length === 1 ? 'ekintu' : 'ebintu' })}
                  </p>
                </div>
                <button 
                  onClick={() => setShowCart(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Cart Content */}
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 px-6">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t({ en: 'Your cart is empty', lg: 'Cart yo temuli kintu' })}
                </h3>
                <p className="text-gray-500 text-center mb-6">
                  {t({ en: 'Add items to get started', lg: 'Yongeza ebintu okusooka' })}
                </p>
                <button 
                  onClick={() => setShowCart(false)}
                  className="px-8 py-3 bg-royal-600 text-white rounded-lg font-semibold hover:bg-royal-700 transition"
                >
                  {t({ en: 'Continue Shopping', lg: 'Komekerako Okugula' })}
                </button>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="p-6 space-y-4">
                  {cart.map((item, idx) => (
                    <div key={`${item._id}-${item.selectedSize || 'nosize'}-${idx}`} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-royal-200 transition">
                      {/* Product Image */}
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/80?text=No+Image';
                        }}
                      />
                      
                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 mb-1 line-clamp-2">{item.name}</h4>
                        {item.selectedSize && (
                          <p className="text-sm text-gray-500 mb-1">{t({ en: 'Size', lg: 'Size' })}: <span className="font-semibold">{item.selectedSize}</span></p>
                        )}
                        <p className="text-royal-600 font-bold text-lg">{formatPrice(item.price)}</p>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 mt-3">
                          <div className="flex items-center border border-gray-300 rounded-lg">
                            <button 
                              onClick={() => updateQuantity(item._id, -1)}
                              className="px-3 py-1 hover:bg-gray-100 transition text-gray-700 font-semibold"
                            >
                              −
                            </button>
                            <span className="px-4 py-1 border-x border-gray-300 font-semibold min-w-[3rem] text-center">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(item._id, 1)}
                              className="px-3 py-1 hover:bg-gray-100 transition text-gray-700 font-semibold"
                            >
                              +
                            </button>
                          </div>
                          
                          <button 
                            onClick={() => removeFromCart(item._id, item.selectedSize)}
                            className="ml-auto p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                            title={t({ en: 'Remove', lg: 'Gyawo' })}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Cart Footer */}
                <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>{t({ en: 'Subtotal', lg: 'Omugatte' })}</span>
                      <span className="font-semibold">{formatPrice(cartTotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{t({ en: 'Shipping', lg: 'Okuweereza' })}</span>
                      <span>{t({ en: 'Calculated at checkout', lg: 'Kinogerebwa ku kusasula' })}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-gray-900">
                          {t({ en: 'Total', lg: 'Omugatte Gwonna' })}
                        </span>
                        <span className="text-2xl font-bold text-royal-600">{formatPrice(cartTotal)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link 
                    to="/checkout" 
                    onClick={() => setShowCart(false)} 
                    className="w-full py-4 bg-gradient-to-r from-royal-500 to-royal-600 text-white rounded-xl font-semibold text-center block hover:from-royal-600 hover:to-royal-700 transition shadow-lg"
                  >
                    {t({ en: 'Proceed to Checkout', lg: 'Komekerako Okusasula' })}
                  </Link>
                  <button
                    onClick={() => setShowCart(false)}
                    className="w-full mt-3 py-3 text-gray-600 font-semibold hover:text-gray-900 transition"
                  >
                    {t({ en: 'Continue Shopping', lg: 'Komekerako Okugula' })}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      
      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
              <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Image Slider */}
                <div>
                  <div className="relative bg-gray-100 rounded-xl overflow-hidden mb-4">
                    <img 
                      src={selectedProduct.images && selectedProduct.images.length > 0 
                        ? selectedProduct.images[currentImageIndex] 
                        : selectedProduct.image
                      }
                      alt={selectedProduct.name}
                      className="w-full h-96 object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = selectedProduct.image;
                      }}
                    />
                    
                    {/* Navigation Arrows */}
                    {selectedProduct.images && selectedProduct.images.length > 1 && (
                      <>
                        <button
                          onClick={() => setCurrentImageIndex((prev) => 
                            prev === 0 ? selectedProduct.images.length - 1 : prev - 1
                          )}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => setCurrentImageIndex((prev) => 
                            prev === selectedProduct.images.length - 1 ? 0 : prev + 1
                          )}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Gallery */}
                  {selectedProduct.images && selectedProduct.images.length > 0 && (
                    <div className="grid grid-cols-4 gap-2">
                      {selectedProduct.images.map((img, idx) => (
                        <div
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`cursor-pointer rounded-lg overflow-hidden border-2 ${currentImageIndex === idx ? 'border-royal-500' : 'border-gray-200'}`}
                        >
                          <img 
                            src={img}
                            alt={`Image ${idx + 1}`}
                            className="w-full h-20 object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div>
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-royal-100 text-royal-700 rounded-full text-sm font-semibold mb-4">
                      {selectedProduct.category}
                    </span>
                    <div className="text-3xl font-bold text-royal-600 mb-4">
                      {formatPrice(selectedProduct.price)}
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Size Selection for Wearables */}
                    {wearableCategories.includes(selectedProduct.category) && selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
                      <div className="bg-gray-50 rounded-xl p-4">
                        <label className="block text-sm font-semibold text-gray-800 mb-3">
                          {t({ en: 'Select Size', lg: 'Pila Size' })}
                        </label>
                        <div className="grid grid-cols-4 gap-2">
                          {selectedProduct.sizes.map((size) => (
                            <button
                              key={size}
                              onClick={() => setSelectedSize(size)}
                              className={`py-2 px-3 rounded-lg font-semibold transition-all text-sm ${
                                selectedSize === size
                                  ? 'bg-royal-600 text-white shadow-lg'
                                  : 'bg-white text-gray-800 border border-gray-300 hover:border-royal-500'
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() => {
                        if (wearableCategories.includes(selectedProduct.category) && selectedProduct.sizes && selectedProduct.sizes.length > 0) {
                          // For wearables, require size selection
                          if (!selectedSize) return
                        }
                        confirmAddToCart();
                      }}
                      disabled={wearableCategories.includes(selectedProduct.category) && selectedProduct.sizes && selectedProduct.sizes.length > 0 && !selectedSize}
                      className="w-full py-4 bg-gradient-to-r from-royal-500 to-royal-600 text-white rounded-xl font-semibold hover:from-royal-600 hover:to-royal-700 transition shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      {t({ en: 'Add to Cart', lg: 'Teeka mu Cart' })}
                    </button>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-600">{t({ en: 'Authentic', lg: 'Ya nnono' })}</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-600">{t({ en: 'Fast Delivery', lg: 'Kuweereza amangu' })}</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-600">{t({ en: 'Quality', lg: 'Omutindo' })}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Cart Button (bottom-right) */}
      <button
        onClick={() => setShowCart(true)}
        aria-label="Open cart"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-royal-500 text-white flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4z" />
        </svg>
        {cartItemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
            {cartItemCount}
          </span>
        )}
      </button>

      {/* Size Selection Modal */}
      {sizePromptProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => {
          setSizePromptProduct(null)
          setSelectedSize(null)
        }}>
          <div className="bg-white rounded-2xl max-w-md w-full shadow-xl p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t({ en: 'Select Size', lg: 'Pila Size' })}
            </h3>
            <p className="text-gray-600 mb-6">
              {t({ en: 'Please select a size for', lg: 'Silinga size ya' })} <span className="font-semibold">{sizePromptProduct.name}</span>
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {sizePromptProduct.sizes && sizePromptProduct.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                    selectedSize === size
                      ? 'bg-royal-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => confirmAddToCart()}
                disabled={!selectedSize}
                className="flex-1 py-3 bg-royal-600 text-white rounded-lg font-semibold hover:bg-royal-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t({ en: 'Add to Cart', lg: 'Teeka mu Cart' })}
              </button>
              <button
                onClick={() => {
                  setSizePromptProduct(null)
                  setSelectedSize(null)
                }}
                className="flex-1 py-3 bg-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-400 transition"
              >
                {t({ en: 'Cancel', lg: 'Sazaamu' })}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}