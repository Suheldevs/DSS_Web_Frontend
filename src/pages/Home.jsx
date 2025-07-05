import React from 'react'
import HeroSection from '../components/HeroSection'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'
import BlogFAQSection from '../components/BlogSection'
import ServiceSection from '../components/ServiceSection'
import TestimonialSection from '../components/TestimonialSection'

function Home() {
  return (
 <>
 <Header/>
 <HeroSection/>
 <AboutSection/>
 <ProjectSection/>
 <BlogFAQSection/>
 <ServiceSection/>
 <TestimonialSection/>
 <Footer/>
 </>
  )
}

export default Home