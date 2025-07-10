import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import Header from './components/Header'
import Footer from './components/Footer'
import ServicePage from './pages/ServicePage'
import ClientPage from './pages/ClientPage'
import ProjectPage from './pages/ProjectPage'
import TestimonialPage from './pages/TestimonialPage'
import ContactUsPage from './pages/ContactUsPage'
import ScrollToTop from './components/ScrollToTop'
import ProductPage from './pages/ProductPage'
import ProductDetailPage from './pages/ProductDetail'
function App() {
  return (
    <>
    <Header/>
    <ScrollToTop/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about-us' element={<AboutPage/>} />
      <Route path='/services' element={<ServicePage/>} />
      <Route path='/client' element={<ClientPage/>} />
      <Route path='/projects' element={<ProjectPage/>} />
      <Route path='/testimonial' element={<TestimonialPage/>} />
      <Route path='/contact' element={<ContactUsPage/>} />
      <Route path='/Products' element={<ProductPage/>} />
      <Route path='/Products/:slug' element={<ProductDetailPage/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App