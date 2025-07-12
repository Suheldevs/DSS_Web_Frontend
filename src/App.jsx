import React, { useEffect } from 'react'
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

import AOS from 'aos';
import 'aos/dist/aos.css';
import BrandStory from './pages/about/BrandStory'
import DirectorMessage from './pages/about/DirectorMessage'
import VisionMission from './pages/about/VisionMission'
import TeamPage from './pages/about/TeamPage'
function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,
    });
  }, []);
  return (
    <>
    <Header/>
    <ScrollToTop/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/about/story' element={<BrandStory/>} />
      <Route path='/about/director-message' element={<DirectorMessage/>} />
      <Route path='/about/vision&mission' element={<VisionMission/>} />
      <Route path='/about/team' element={<TeamPage/>} />
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