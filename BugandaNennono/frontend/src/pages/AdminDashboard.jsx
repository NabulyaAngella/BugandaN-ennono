import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function AdminDashboard() {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    pendingOrders: 0,
    totalRevenue: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('adminToken')
    const adminUser = localStorage.getItem('adminUser')

    if (!token) {
      navigate('/admin/login')
      return
    }

    if (adminUser) {
      setUser(JSON.parse(adminUser))
    }

    // Fetch real product count from API
    const fetchStats = async () => {
      try {
        const response = await fetch('http://localhost:5500/api/products')
        const products = await response.json()
        setStats({
          totalProducts: products.length,
          totalOrders: 0,
          pendingOrders: 0,
          totalRevenue: 0
        })
        setLoading(false)
      } catch (error) {
        console.error('Error fetching stats:', error)
        setStats({
          totalProducts: 0,
          totalOrders: 0,
          pendingOrders: 0,
          totalRevenue: 0
        })
        setLoading(false)
      }
    }
    
    fetchStats()
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    localStorage.removeItem('adminUser')
    navigate('/admin/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-500"></div>
          <p className="mt-4 text-lg">{t({ en: 'Loading...', lg: 'Nalinnyiza...' })}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {t({ en: 'Admin Dashboard', lg: 'Dashbodi y\'Okukuuma' })}
            </h2>
            <p className="text-sm text-gray-600">
              {t({ en: 'Welcome back, ', lg: 'Enkukubaganya ' })}{user?.name || 'Admin'}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition"
          >
            {t({ en: 'Logout', lg: 'Sumulako' })}
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Total Products */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{t({ en: 'Total Products', lg: 'Ebintu Byonna' })}</p>
                <p className="text-4xl font-bold text-gray-800 mt-2">{stats.totalProducts}</p>
              </div>
              <svg className="w-12 h-12 text-blue-500 opacity-20" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Total Orders */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{t({ en: 'Total Orders', lg: 'Obukuŋŋaanya Bwonna' })}</p>
                <p className="text-4xl font-bold text-gray-800 mt-2">{stats.totalOrders}</p>
              </div>
              <svg className="w-12 h-12 text-purple-500 opacity-20" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Pending Orders */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{t({ en: 'Pending Orders', lg: 'Obukuŋŋaanya Obutannakwaŋŋaanyizibwa' })}</p>
                <p className="text-4xl font-bold text-gray-800 mt-2">{stats.pendingOrders}</p>
              </div>
              <svg className="w-12 h-12 text-orange-500 opacity-20" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Total Revenue */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{t({ en: 'Total Revenue', lg: 'Ssente Zyonna' })}</p>
                <p className="text-4xl font-bold text-gray-800 mt-2">${stats.totalRevenue.toLocaleString()}</p>
              </div>
              <svg className="w-12 h-12 text-yellow-500 opacity-20" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.16 5.314l-5.396 3.178c-.283.167-.283.621 0 .788l5.396 3.178c.283.167.747.167 1.03 0l5.397-3.178c.283-.167.283-.621 0-.788l-5.397-3.178c-.283-.167-.747-.167-1.03 0zM13.477 9.53l4.396 2.592c.283.167.283.621 0 .788l-5.396 3.178c-.283.167-.747.167-1.03 0l-.396-.234v3.884c0 .414-.373.75-.835.75H3.586c-.462 0-.835-.336-.835-.75v-10.84c0-.414.373-.75.835-.75h6.23v3.884l.396-.234c.283-.167.747-.167 1.03 0l5.396 3.178c.283.167.283.621 0 .788l-4.396 2.592z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                {t({ en: 'Shop Management', lg: 'Okukuuma Dduuka' })}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Link to="/admin/products" className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition text-center">
                  <svg className="w-8 h-8 text-blue-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <p className="font-semibold text-sm text-gray-800">{t({ en: 'Add Product', lg: 'Yongeza Ekintu' })}</p>
                </Link>

                <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition text-center">
                  <svg className="w-8 h-8 text-purple-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <p className="font-semibold text-sm text-gray-800">{t({ en: 'View Orders', lg: 'Laba Obukuŋŋaanya' })}</p>
                </button>

                <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg transition text-center">
                  <svg className="w-8 h-8 text-green-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <p className="font-semibold text-sm text-gray-800">{t({ en: 'Manage Inventory', lg: 'Kukuuma Ebintu' })}</p>
                </button>

                <button className="p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition text-center">
                  <svg className="w-8 h-8 text-yellow-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-semibold text-sm text-gray-800">{t({ en: 'Sales Reports', lg: 'Pulipoti z\'Okutunda' })}</p>
                </button>

                <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition text-center">
                  <svg className="w-8 h-8 text-orange-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="font-semibold text-sm text-gray-800">{t({ en: 'Payments', lg: 'Ssente' })}</p>
                </button>

                <button className="p-4 bg-red-50 hover:bg-red-100 rounded-lg transition text-center">
                  <svg className="w-8 h-8 text-red-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="font-semibold text-sm text-gray-800">{t({ en: 'Shop Settings', lg: 'Ensigaliro za Dduuka' })}</p>
                </button>

                <button className="p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition text-center">
                  <svg className="w-8 h-8 text-indigo-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <p className="font-semibold text-sm text-gray-800">{t({ en: 'Help & Support', lg: 'Obuyambi' })}</p>
                </button>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              {t({ en: 'Admin Info', lg: 'Amawulire ga Admin' })}
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">{t({ en: 'Name', lg: 'Zina' })}</p>
                <p className="font-semibold text-gray-800">{user?.name || 'Administrator'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">{t({ en: 'Role', lg: 'Kintu' })}</p>
                <p className="font-semibold text-gray-800">{user?.role || 'Admin'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">{t({ en: 'Last Login', lg: 'Okukigide Okwa Lastki' })}</p>
                <p className="font-semibold text-gray-800">Just now</p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/admin/profile"
                  className="block text-center px-4 py-2 bg-royal-600 hover:bg-royal-700 text-white font-semibold rounded-lg transition"
                >
                  {t({ en: 'View Profile', lg: 'Laba Pofiili' })}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
