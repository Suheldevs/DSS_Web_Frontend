import React from 'react'
import HeroSection from '../components/HeroSection'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'
import BlogFAQSection from '../components/BlogSection'
import ServiceSection from '../components/ServiceSection'
import TestimonialSection from '../components/TestimonialSection'
import WhyChooseUs from '../components/WhyChooseUs'
import HowWeWork from '../components/HowWeWork'
import BlogSection from '../components/BlogSection'
import TextMarquee from '../components/TextMarquee'

function Home() {
  return (
 <>
 <HeroSection/>
 <AboutSection/>
 <ServiceSection/>
 <ProjectSection/>
 <TextMarquee/>
 <HowWeWork/>
 <WhyChooseUs/>
 <TestimonialSection/>
 <BlogSection/>
 {/* <BlogFAQSection/> */}
 </>
  )
}

export default Home