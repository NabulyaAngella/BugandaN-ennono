import React, { useState, useRef, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import logoImg from '../logo/the-kingdom-of-buganda-uganda-logo-png_seeklogo-556196.png'
import { useLanguage } from '../context/LanguageContext'
import { searchIndex } from '../data/searchIndex'

export default function MainLayout(){
  const { language, toggleLanguage, t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCultureDropdownOpen, setIsCultureDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const searchRef = useRef(null)
  const mobileSearchRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const onDocClick = (e) => {
      const clickedOutsideDesktop = searchRef.current && !searchRef.current.contains(e.target)
      const clickedOutsideMobile = mobileSearchRef.current && !mobileSearchRef.current.contains(e.target)
      if (clickedOutsideDesktop && clickedOutsideMobile) {
        setIsSearchOpen(false)
      }
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Utility Bar */}
      <div className="bg-gray-900 text-gray-300 text-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-2.5">
          <div className="flex items-center justify-between">
            {/* Left: Contact Info */}
            <div className="flex items-center gap-6">
              <a href="mailto:info@buganda.org" className="flex items-center gap-2 hover:text-gold-400 transition">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="hidden sm:inline">info@buganda.org</span>
              </a>
              <div className="hidden md:flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+256 414 000000</span>
              </div>
            </div>

            {/* Right: Quick Links & Language */}
            <div className="flex items-center gap-6">
              
              <Link to="/news" className="hidden md:inline hover:text-gold-400 transition">
                {t({ en: 'News', lg: 'Amawulire' })}
              </Link>
              <Link to="/learn-luganda" className="hidden lg:inline hover:text-gold-400 transition">
                {t({ en: 'Learn Luganda', lg: 'Yiga Oluganda' })}
              </Link>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded transition"
                aria-label="Toggle language"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span>{language === 'en' ? 'LG' : 'EN'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header / Title Bar */}
      <header className="bg-white shadow-md sticky top-0 z-50 mb-4 py-4">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo & Brand */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-14 h-14 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <img src={logoImg} alt={t({ en: 'Buganda N\'ennono', lg: 'Buganda Nennono' })} className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 leading-tight">
                  {t({ en: 'Buganda N\'ennono', lg: 'Buganda Nennono' })}
                </h1>
                <p className="text-xs text-gray-500">
                  {t({ en: 'Preserving Heritage & Culture', lg: 'Tukuuma Obulombolombo' })}
                </p>
              </div>
            </Link>

            {/* Main Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link 
                className="text-gray-700 hover:text-royal-500 font-medium transition relative group" 
                to="/"
              >
                {t({ en: 'Home', lg: 'Awaka' })}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all"></span>
              </Link>
              <Link 
                className="text-gray-700 hover:text-royal-500 font-medium transition relative group" 
                to="/about"
              >
                {t({ en: 'The King', lg: 'Kabaka' })}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all"></span>
              </Link>
              {/* Culture dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-royal-500 font-medium transition flex items-center gap-2">
                  {t({ en: 'Culture', lg: 'Obuwangwa' })}
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-royal-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-3 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
                  <ul className="py-2">
                    <li>
                      <Link to="/clans" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gold-50 hover:text-royal-600">{t({ en: 'Clans', lg: 'Ebika' })}</Link>
                    </li>
                    <li>
                      <Link to="/ceremonies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gold-50 hover:text-royal-600">{t({ en: 'Ceremonies', lg: 'Emikolo' })}</Link>
                    </li>
                    
                    <li>
                      <Link to="/food" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gold-50 hover:text-royal-600">{t({ en: 'Food', lg: 'Emmere' })}</Link>
                    </li>
                    <li>
                      <Link to="/history" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gold-50 hover:text-royal-600">{t({ en: 'History', lg: 'Ebyafaayo' })}</Link>
                    </li>
                    <li>
                      <Link to="/katikkiro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gold-50 hover:text-royal-600">{t({ en: 'Katikkiro', lg: 'Katikkiro' })}</Link>
                    </li>
                      <li>
                        <Link to="/queen" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gold-50 hover:text-royal-600">{t({ en: 'Queen', lg: 'Nnabagereka' })}</Link>
                      </li>
                      <li>
                        <Link to="/tours" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gold-50 hover:text-royal-600">{t({ en: 'Tours', lg: 'Obulambuze' })}</Link>
                      </li>
                  </ul>
                </div>
              </div>
             
              <Link 
                className="text-gray-700 hover:text-royal-500 font-medium transition relative group" 
                to="/shop"
              >
                {t({ en: 'Shop', lg: 'Gula' })}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all"></span>
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-4 py-2 w-48 lg:w-64 relative" ref={searchRef}>
                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="search" 
                  placeholder={t({ en: 'Search...', lg: 'Noonya...' })}
                  value={searchQuery}
                  onChange={(e) => {
                    const q = e.target.value
                    setSearchQuery(q)
                    if (q.trim().length === 0) {
                      setSearchResults([])
                      setIsSearchOpen(false)
                      return
                    }
                    const ql = q.toLowerCase()
                    const results = searchIndex
                      .map(item => {
                        const title = item.title[language] || item.title.en
                        const body = item.body[language] || item.body.en
                        const score = (title.toLowerCase().includes(ql) ? 3 : 0) + (body.toLowerCase().includes(ql) ? 1 : 0)
                        return { ...item, title, body, score }
                      })
                      .filter(r => r.score > 0)
                      .sort((a,b) => b.score - a.score)
                    setSearchResults(results)
                    setIsSearchOpen(true)
                  }}
                  className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
                  onFocus={() => { if (searchResults.length) setIsSearchOpen(true) }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchResults[0]) {
                      navigate(searchResults[0].path)
                      setIsSearchOpen(false)
                      setSearchQuery('')
                    }
                  }}
                />
                {isSearchOpen && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-md shadow-lg z-50">
                    <ul>
                      {searchResults.slice(0,6).map((res, i) => (
                        <li key={i}>
                          <button
                            onClick={() => {
                              navigate(res.path)
                              setIsSearchOpen(false)
                              setSearchQuery('')
                            }}
                            className="w-full text-left px-3 py-2 hover:bg-gray-50"
                          >
                            <div className="text-sm font-semibold text-gray-800">{res.title}</div>
                            <div className="text-xs text-gray-500 truncate">{res.body}</div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Donate CTA */}
              <Link 
                to="/donate" 
                className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-royal-500 to-royal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-royal-600 hover:to-royal-700 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                {t({ en: 'Donate', lg: 'Waayo' })}
              </Link>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-2 mt-4">
                <Link 
                  to="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-700 hover:bg-gold-50 hover:text-royal-600 rounded-lg transition font-medium"
                >
                  {t({ en: 'Home', lg: 'Awaka' })}
                </Link>
                
                <Link 
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-700 hover:bg-gold-50 hover:text-royal-600 rounded-lg transition font-medium"
                >
                  {t({ en: 'The King', lg: 'Kabaka' })}
                </Link>

                {/* Mobile Culture Dropdown */}
                <div>
                  <button 
                    onClick={() => setIsCultureDropdownOpen(!isCultureDropdownOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gold-50 hover:text-royal-600 rounded-lg transition font-medium"
                  >
                    <span>{t({ en: 'Culture', lg: 'Obuwangwa' })}</span>
                    <svg 
                      className={`w-4 h-4 transition-transform ${isCultureDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isCultureDropdownOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      <Link 
                        to="/clans"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsCultureDropdownOpen(false)
                        }}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gold-50 hover:text-royal-600 rounded-lg transition"
                      >
                        {t({ en: 'Clans', lg: 'Ebika' })}
                      </Link>
                      <Link 
                        to="/ceremonies"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsCultureDropdownOpen(false)
                        }}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gold-50 hover:text-royal-600 rounded-lg transition"
                      >
                        {t({ en: 'Ceremonies', lg: 'Emikolo' })}
                      </Link>
                      <Link 
                        to="/food"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsCultureDropdownOpen(false)
                        }}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gold-50 hover:text-royal-600 rounded-lg transition"
                      >
                        {t({ en: 'Food', lg: 'Emmere' })}
                      </Link>
                      <Link 
                        to="/history"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsCultureDropdownOpen(false)
                        }}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gold-50 hover:text-royal-600 rounded-lg transition"
                      >
                        {t({ en: 'History', lg: 'Ebyafaayo' })}
                      </Link>
                      <Link 
                        to="/katikkiro"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsCultureDropdownOpen(false)
                        }}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gold-50 hover:text-royal-600 rounded-lg transition"
                      >
                        {t({ en: 'Katikkiro', lg: 'Katikkiro' })}
                      </Link>
                      <Link 
                        to="/queen"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsCultureDropdownOpen(false)
                        }}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gold-50 hover:text-royal-600 rounded-lg transition"
                      >
                        {t({ en: 'Queen', lg: 'Nnabagereka' })}
                      </Link>
                      <Link 
                        to="/tours"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsCultureDropdownOpen(false)
                        }}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gold-50 hover:text-royal-600 rounded-lg transition"
                      >
                        {t({ en: 'Tours', lg: 'Obulambuze' })}
                      </Link>
                    </div>
                  )}
                </div>

                <Link 
                  to="/shop"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-700 hover:bg-gold-50 hover:text-royal-600 rounded-lg transition font-medium"
                >
                  {t({ en: 'Shop', lg: 'Gula' })}
                </Link>

                <Link 
                  to="/learn-luganda"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-700 hover:bg-gold-50 hover:text-royal-600 rounded-lg transition font-medium"
                >
                  {t({ en: 'Learn Luganda', lg: 'Yiga Oluganda' })}
                </Link>

                {/* Mobile Search */}
                <div className="px-4 pt-2" ref={mobileSearchRef}>
                  <div className="relative">
                    <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
                      <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input 
                        type="search" 
                        placeholder={t({ en: 'Search...', lg: 'Noonya...' })}
                        value={searchQuery}
                        onChange={(e) => {
                          const q = e.target.value
                          setSearchQuery(q)
                          if (q.trim().length === 0) {
                            setSearchResults([])
                            setIsSearchOpen(false)
                            return
                          }
                          const ql = q.toLowerCase()
                          const results = searchIndex
                            .map(item => {
                              const title = item.title[language] || item.title.en
                              const body = item.body[language] || item.body.en
                              const score = (title.toLowerCase().includes(ql) ? 3 : 0) + (body.toLowerCase().includes(ql) ? 1 : 0)
                              return { ...item, title, body, score }
                            })
                            .filter(r => r.score > 0)
                            .sort((a,b) => b.score - a.score)
                          setSearchResults(results)
                          setIsSearchOpen(true)
                        }}
                        className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
                        onFocus={() => { if (searchResults.length) setIsSearchOpen(true) }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && searchResults[0]) {
                            navigate(searchResults[0].path)
                            setIsSearchOpen(false)
                            setSearchQuery('')
                            setIsMobileMenuOpen(false)
                          }
                        }}
                      />
                    </div>
                    {isSearchOpen && searchResults.length > 0 && (
                      <div className="absolute left-0 right-0 mt-2 w-full bg-white rounded-md shadow-lg z-50">
                        <ul>
                          {searchResults.slice(0,6).map((res, i) => (
                            <li key={i}>
                              <button
                                onClick={() => {
                                  navigate(res.path)
                                  setIsSearchOpen(false)
                                  setSearchQuery('')
                                  setIsMobileMenuOpen(false)
                                }}
                                className="w-full text-left px-3 py-2 hover:bg-gray-50"
                              >
                                <div className="text-sm font-semibold text-gray-800">{res.title}</div>
                                <div className="text-xs text-gray-500 truncate">{res.body}</div>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile Donate Button */}
                <div className="px-4 pt-2">
                  <Link 
                    to="/donate"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-royal-500 to-royal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    {t({ en: 'Donate', lg: 'Waayo' })}
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 container mx-auto px-6 py-8">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-gray-300 mt-4 py-8">
        <div className="container mx-auto px-6 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">
                {t({ en: "Buganda N'ennono", lg: 'Buganda Nennono' })}
              </h3>
              <p className="text-sm leading-relaxed">
                {t({ 
                  en: 'Preserving our rich heritage and culture for future generations. Emikono gya Buganda tegikoma!',
                  lg: 'Tukuuma obulombolombo n\'obuwangwa bwaffe eri abaazzukulu. Emikono gya Buganda tegikoma!'
                })}
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">
                {t({ en: 'Quick Links', lg: 'Ebinyunzi' })}
              </h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-gold-400 transition">{t({ en: 'Home', lg: 'Awaka' })}</Link></li>
                <li><Link to="/about" className="hover:text-gold-400 transition">{t({ en: 'The King', lg: 'Kabaka' })}</Link></li>
                <li><Link to="/culture" className="hover:text-gold-400 transition">{t({ en: 'Our Culture', lg: 'Obuwangwa Bwaffe' })}</Link></li>
                <li><Link to="/clans" className="hover:text-gold-400 transition">{t({ en: 'Clans', lg: 'Ebika' })}</Link></li>
                <li><Link to="/ceremonies" className="hover:text-gold-400 transition">{t({ en: 'Ceremonies', lg: 'Emikolo' })}</Link></li>
                <li><Link to="/food" className="hover:text-gold-400 transition">{t({ en: 'Food', lg: 'Emmere' })}</Link></li>
                <li><Link to="/shop" className="hover:text-gold-400 transition">{t({ en: 'Shop', lg: 'Gula' })}</Link></li>
                <li><Link to="/admin/login" className="hover:text-gold-400 transition font-semibold text-yellow-400">{t({ en: 'Management', lg: 'Okukuuma' })}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">
                {t({ en: 'Connect With Us', lg: 'Tukolagane' })}
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gold-400 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-gold-400 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-gold-400 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
            <p>
              © {new Date().getFullYear()} {t({ en: 'Buganda N\'ennono. All rights reserved.', lg: 'Abalangira. Eddembe lyonna.' })} | 
              <span className="italic ml-1">Obuganda bukyali bwannaa</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
