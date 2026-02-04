import React from 'react'
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function DashboardLayout(){
  const { t } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()

  const handleSignOut = () => {
    // Placeholder: clear auth tokens here if implemented
    navigate('/')
  }

  const isActiveLink = (path) => {
    return location.pathname === path ? 'bg-royal-50 text-royal-600 border-r-2 border-royal-500' : 'text-gray-600 hover:bg-gray-50'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <header className="bg-white shadow-sm md:hidden p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-royal-500 text-white flex items-center justify-center font-bold text-sm">JP</div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800">{t({ en: 'Dashboard', lg: 'Ekitongole' })}</h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-royal-50 px-2 py-1 rounded-full">
              <span role="img" aria-label="streak" className="text-sm">🔥</span>
              <span className="text-xs font-bold">7</span>
            </div>
            <button className="text-sm text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="w-64 bg-white border-r hidden md:flex flex-col h-screen sticky top-0">
          <div className="p-6 border-b">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-royal-500 text-white flex items-center justify-center font-bold">YL</div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">{t({ en: 'Learner Dashboard', lg: 'Ekitongole ky\'Abayigi' })}</h2>
                <p className="text-xs text-gray-500">{t({ en: 'Yiga Oluganda', lg: 'Yiga Oluganda' })}</p>
              </div>
            </div>
          </div>
          
          <nav className="flex-1 p-4 space-y-1">
            <Link 
              to="/dashboard" 
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${isActiveLink('/dashboard')}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {t({ en: 'Overview', lg: 'Ebigambo eby\'Omuwendo' })}
            </Link>
            <Link 
              to="/dashboard/lessons" 
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${isActiveLink('/dashboard/lessons')}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {t({ en: 'Lessons', lg: 'Amasomo' })}
            </Link>
            <Link 
              to="/dashboard/progress" 
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${isActiveLink('/dashboard/progress')}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              {t({ en: 'Progress', lg: 'Okukulaakulana' })}
            </Link>
            <Link 
              to="/dashboard/profile" 
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${isActiveLink('/dashboard/profile')}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {t({ en: 'Profile', lg: 'Ekipapula' })}
            </Link>
          </nav>
          
          <div className="p-4 border-t">
            <button 
              onClick={handleSignOut} 
              className="flex items-center gap-3 w-full text-left px-3 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              {t({ en: 'Sign out', lg: 'Genda wabaawo' })}
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Desktop Header */}
          <header className="bg-white shadow-sm p-4 md:p-6 hidden md:block">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{t({ en: 'Dashboard', lg: 'Ekitongole' })}</h3>
                <p className="text-sm text-gray-500">{t({ en: 'Your learning hub', lg: 'Ekifo ky\'okusoma' })}</p>
              </div>
              <div className="flex items-center gap-6">
                {/* XP and streak display */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3 bg-royal-50 px-4 py-2 rounded-full">
                    <div className="text-sm">
                      <div className="text-xs text-gray-500">XP</div>
                      <div className="font-bold text-royal-600">120</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-orange-50 px-4 py-2 rounded-full">
                    <span role="img" aria-label="streak" className="text-xl">🔥</span>
                    <div className="text-sm">
                      <div className="text-xs text-gray-500">{t({ en: 'Streak', lg: 'Ekisikirize' })}</div>
                      <div className="font-bold text-orange-600">7</div>
                    </div>
                  </div>
                </div>

                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-royal-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t({ en: 'Help', lg: 'Obuyambi' })}
                </button>
              </div>
            </div>
          </header>

          <main className="flex-1 p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}