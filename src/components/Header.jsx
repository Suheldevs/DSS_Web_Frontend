import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/DSS_Logo.png'
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: 'Home',
      href: '#'
    },
    {
      name: 'About Us',
      href: '#'
    },
    {
      name: 'Products',
      href: '#',
      dropdown: [
        'LED Display Boards',
        'Video Wall',
        'Outdoor LED Display',
        'Indoor LED Display',
        'Rental LED Display',
        'Digital Billboards'
      ]
    },
    {
      name: 'Services',
      href: '#',
      dropdown: [
        'LED Wall Installation',
        'Digital Signage Solutions',
        'Outdoor Signage',
        'In-Shop Branding',
        'Event Solutions',
        'Maintenance & Support'
      ]
    },
    {
      name: 'Portfolio',
      href: '#'
    },
    {
      name: 'Contact',
      href: '#'
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt='Logo' className='h-20'/>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <a
                  href={item.href}
                  className={`flex items-center space-x-1 font-medium transition-all duration-200 py-2 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-purple-600' 
                      : 'text-white hover:text-purple-200'
                  }`}
                  onMouseEnter={() => setActiveDropdown(item.dropdown ? index : null)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === index ? 'rotate-180' : ''
                    }`} />
                  )}
                </a>
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === index && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                    style={{
                      opacity: activeDropdown === index ? 1 : 0,
                      transform: activeDropdown === index ? 'translateY(0)' : 'translateY(8px)'
                    }}
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200 text-sm font-medium"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
              isScrolled
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                : 'bg-white text-purple-600 hover:bg-purple-50'
            }`}>
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-900 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3 max-h-96 overflow-y-auto">
            {navItems.map((item, index) => (
              <div key={index}>
                <a
                  href={item.href}
                  className="flex items-center justify-between py-3 text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
                  onClick={() => {
                    if (item.dropdown) {
                      setActiveDropdown(activeDropdown === index ? null : index);
                    }
                  }}
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === index ? 'rotate-180' : ''
                    }`} />
                  )}
                </a>
                
                {/* Mobile Dropdown */}
                {item.dropdown && activeDropdown === index && (
                  <div className="ml-4 mt-2 space-y-2 pb-3">
                    {item.dropdown.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="block py-2 text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile CTA Button */}
            <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;