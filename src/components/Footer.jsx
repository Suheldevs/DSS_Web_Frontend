import React, { useEffect, useState } from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  ArrowRight,
  ExternalLink,
  QrCode,
  ChevronUp
} from 'lucide-react';
import logo from '../assets/DSS_logo.png'
import cclogo from '../assets/cc-logo.png'
import { Link } from 'react-router-dom';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isScrolled, setIsScrolled] = useState(false);
  const branches = [
    { name: 'Lucknow (Head Office)', address: 'Sector 10, Indira Nagar, Lucknow - 226016' },
    { name: 'Azamgarh', address: 'Civil Lines, Azamgarh - 276001' },
    { name: 'Thakurganj', address: 'Main Road, Thakurganj - 224001' },
    { name: 'Barabanki', address: 'Station Road, Barabanki - 225001' },
    { name: 'Saraimeer', address: 'Market Area, Saraimeer - 225412' }
  ];

  const services = [
    'LED Video Walls',
    'Outdoor Digital Displays',
    'Indoor Digital Signage',
    'Interactive Kiosks',
    'High Rise Billboards',
    'Navigation Displays',
    'Retail Digital Screens',
    'Corporate Signage',
    'Event LED Screens',
    'Smart City Solutions'
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Portfolio', href: '#portfolio' },
    { name: 'Technology', href: '#technology' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Careers', href: '#careers' },
    { name: 'Support', href: '#support' },
    { name: 'Blog', href: '#blog' },
    { name: 'Admin Login', href: '#admin' }
  ];

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
            <img src={logo} alt='Logo' className='bg-white h-30' />
            </div>
            {/* <p className="text-gray-300 leading-relaxed mb-6">
              Leading digital signage solutions provider in Lucknow since 2006. We transform spaces with cutting-edge LED displays and interactive digital solutions.
            </p> */}
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-sm">Sector 10, Indira Nagar, Lucknow - 226016</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-sm">info@dssdigital.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-sm">Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">
              Our Services
              <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-blue-400 mt-2"></div>
            </h3>
            <div className="space-y-3">
              {services.slice(0, 8).map((service, index) => (
                <a 
                  key={index}
                  href="#"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300 group"
                >
                  <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                 <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Our Branches */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">
              Our Branches
              <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-blue-400 mt-2"></div>
            </h3>
            <div className="space-y-2">
              {branches.map((branch, index) => (
                <div key={index} className="group">
                  <h4 className="text-sm font-medium text-white mb-0.5 group-hover:text-green-400 transition-colors">
                    {branch.name}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {branch.address}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links & Social */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
              <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-blue-400 mt-2"></div>
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {quickLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-sm font-medium text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { Icon: Facebook, href: '#', color: 'hover:text-blue-400' },
                  { Icon: Twitter, href: '#', color: 'hover:text-sky-400' },
                  { Icon: Instagram, href: '#', color: 'hover:text-pink-400' },
                  { Icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
                  { Icon: Youtube, href: '#', color: 'hover:text-red-500' }
                ].map(({ Icon, href, color }, index) => (
                  <a 
                    key={index}
                    href={href}
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 ${color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-white mb-4">
              Stay Updated with Latest Digital Signage Trends
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for industry insights, product updates, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-400 text-white font-medium rounded-lg hover:from-green-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <div className="justify-center items-center flex gap-2">
             Copyright © {currentYear} 3S Digital Signage Solutions. All rights reserved.
                  <div>Designed By</div>
                  <Link
                    aria-label="Code Crafter"
                    to="https://www.codecrafter.co.in/"
                    target="_blank"
                  >
                    <img
                      src={cclogo}
                      className="lg:w-24 md:w-20 w-20 transition transform hover:scale-105"
                      alt="CodeCrafter Logo"
                    />
                  </Link>
                </div>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
{isScrolled &&   <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
      >
        <ChevronUp className="h-5 w-5 " />
      </button> }

    
    </footer>
  );
};

export default Footer;