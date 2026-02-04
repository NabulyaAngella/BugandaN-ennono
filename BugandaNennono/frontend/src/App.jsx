import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Clans from './pages/Clans'
import Ceremonies from './pages/Ceremonies'
import Food from './pages/Food'
import News from './pages/News'
import SignIn from './pages/SignIn'
import LessonDetail from './pages/LessonDetail'
import Queen from './pages/Queen'
import History from './pages/History'
import Katikkiro from './pages/Katikkiro'
import Tours from './pages/Tours'
import DashboardLayout from './layouts/DashboardLayout'
import DashboardHome from './pages/DashboardHome'
import Lessons from './pages/Lessons'
import Shop from './pages/Shop'
import Checkout from './pages/Checkout'
import Donate from './pages/Donate'
import LearnLuganda from './pages/LearnLuganda'
import VerifyEmail from './pages/VerifyEmail'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import ManageProducts from './pages/ManageProducts'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

export default function App(){
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="clans" element={<Clans />} />
        <Route path="news" element={<News />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="ceremonies" element={<Ceremonies />} />
        <Route path="food" element={<Food />} />
        <Route path="history" element={<History />} />
        <Route path="katikkiro" element={<Katikkiro />} />
  <Route path="queen" element={<Queen />} />
        <Route path="shop" element={<Shop />} />
  <Route path="checkout" element={<Checkout />} />
        <Route path="donate" element={<Donate />} />
        <Route path="learn-luganda" element={<LearnLuganda />} />
        <Route path="verify-email" element={<VerifyEmail />} />
        <Route path="tours" element={<Tours />} />
      </Route>

      {/* Dashboard is NOT wrapped by MainLayout - it has its own layout */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="lessons" element={<Lessons />} />
          <Route path="lesson/:id" element={<LessonDetail />} />
        {/* additional nested dashboard routes can be added here */}
      </Route>

      {/* Admin Login - not wrapped by MainLayout */}
      <Route path="/admin/login" element={<AdminLogin />} />
      
      {/* Admin Dashboard - not wrapped by MainLayout */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      
      {/* Admin Product Management - not wrapped by MainLayout */}
      <Route path="/admin/products" element={<ManageProducts />} />
    </Routes>
    </>
  )
}
