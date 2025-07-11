import React, { useState, useEffect } from "react";
import { ChartNoAxesGantt, ChevronDown, Menu, MenuIcon, X } from "lucide-react";
import logo from "../assets/DSS_logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menu, setMenu] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about-us",
    },

    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Outdoor Signage", path: "/services/outdoor-signage" },
        { name: "Indoor Signage", path: "/services/indoor-signage" },
        { name: "High Rise Signage", path: "/services/high-rise-signage" },
        { name: "Navigation Signage", path: "/services/navigation-signage" },
        { name: "Retro Signage", path: "/services/retro-signage" },
        { name: "Neon Signage", path: "/services/neon-signage" },
      ],
    },
    {
      name: "Products",
      path: "/products",
      // dropdown: [
      //   { name: "LED Display Boards", path: "/products/led-display-boards" },
      //   { name: "Video Wall", path: "/products/video-wall" },
      //   { name: "Outdoor LED Display", path: "/products/outdoor-led-display" },
      //   { name: "Indoor LED Display", path: "/products/indoor-led-display" },
      //   { name: "Rental LED Display", path: "/products/rental-led-display" },
      //   { name: "Digital Billboards", path: "/products/digital-billboards" },
      // ],
    },
    {
      name: "Project Gallary",
      path: "/projects",
      dropdown: [
        { name: "Ongoing Projects", path: "/projects" },
        { name: "Completed Projects", path: "/projects" },
      ],
    },
    {
      name: "Client",
      path: "/client",
    },
    {
      name: "Testimonial",
      path: "/testimonial",
    },
    {
      name: "Latest Articles",
      path: "/blog",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];

  const handleClick = ()=>{
    setMenu(!menu)
  }
  return (
    <div className="">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? " shadow-lg bg-blac backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between  ">
            {/* Logo */}
            <div className="relative flex items-center justify-center bg-white mt-0.5 ">
              <img
                src={logo}
                alt="Logo"
                className={`${
                  isScrolled ? "h-17" : "h-26"
                }  z-20 transition-all duration-700 ease-in-out`}
              />

              {/* Triangle */}
              <div
                className={`${
                  isScrolled ? "bottom-[-20px]" : "bottom-[-30px]"
                } absolute  left-1/2 transform -translate-x-1/2 
                  w-0 h-0 border-l-[35px] border-r-[35px] border-t-[40px] 
                  border-l-transparent border-r-transparent border-t-white z-10 transition-all duration-700 ease-in-out `}
              ></div>
            </div>

            <nav
              className={`${
                isScrolled ? "text-base bg-black" : "text-lg "
              } hidden lg:flex  items-center space-x-8  backdrop-blur-3xl px-4 py-2 rounded-xl border  border-gray-300/10`}
            >
              {navItems.slice(0,5).map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    to={item.path}
                    className={`flex  items-center space-x-1 font-medium transition-all duration-200 py-2 text-white hover:bg-gradient-to-r to-green-400 from-blue-400 hover:bg-clip-text hover:text-transparent hover:-rotate-2 ${
                      isScrolled
                        ? "text-gray-100 hover:text-black"
                        : " "
                    }`}
                    onMouseEnter={() =>
                      setActiveDropdown(item.dropdown ? index : null)
                    }
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === index && (
                    <div
                      className="absolute top-full mt-1 left-0  w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                      style={{
                        opacity: activeDropdown === index ? 1 : 0,
                        transform:
                          activeDropdown === index
                            ? "translateY(0)"
                            : "translateY(8px)",
                      }}
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          to={subIndex.path}
                          className="block px-4  py-1.5 tracking-wide text-gray-700 hover:tracking-wider hover:bg-blue-50 hover:text-black-600 transition-colors duration-200 text-sm font-medium"
                        >
                          {subItem.name}
                        </Link>
                      ))}

                      {/* dropdown tringle */}
                      <div
                        className={` top-[-15px] absolute shadow-2xl  left-1/6 transform -translate-x-1/2 
                  w-0 h-0 border-r-[10px] border-l-[10px] border-b-[15px] border-b-white
                  border-l-transparent border-r-transparent border-t-white z-10 transition-all duration-700 ease-in-out`}
                      ></div>
                    </div>
                  )}


                  
                </div>
              ))}
              <button onClick={handleClick} className="text-white relative">
                 {!menu ?  <MenuIcon /> : <ChartNoAxesGantt /> }   
                  </button>
                   <div
                      className={` ${menu  ? "block h-auto opacity-100 w-36 top-0" : 'hidden h-0 opacity-0 w-0'}  ${isScrolled?'bg-black':'bg-white/5'} absolute top-full right-0    backdrop-blur-2xl rounded-lg shadow-2xl border mt-1  border-gray-300/20 py-3 z-50  `}
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {navItems?.slice(5).map((subItem, subIndex) => (
                        <Link
                          to={subIndex.path}
                          className="block px-4  py-1.5 tracking-wide text-gray-100 hover:tracking-wider hover:bg-white/10 hover:text-black-600 transition-colors duration-200 text-sm font-medium "
                        >
                          {subItem.name}
                        </Link>
                      ))}

                      {/* dropdown tringle */}
                      {/* <div
                        className={` top-[-15px] z-100 absolute shadow-2xl  right-1/4 transform -translate-x-1/2 
                  w-0 h-0 border-r-[10px] border-l-[10px] border-b-[15px] border-b-gray-400/20
                  border-l-transparent border-r-transparent border-t-white  transition-all duration-700 ease-in-out`}
                      ></div> */}
                    </div>
            </nav>

            {/* CTA Button */}
            {/* <div className="hidden lg:block">
              <Link
                to="/contact"
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer ${
                  isScrolled
                    ? "bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700"
                    : "bg-white text-black hover:bg-green-50"
                }`}
              >
                Contact Us
              </Link>
            </div> */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-900 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
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
                  <Link
                    to={item.path}
                    className="flex items-center justify-between py-3 text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
                    onClick={() => {
                      if (item.dropdown) {
                        setActiveDropdown(
                          activeDropdown === index ? null : index
                        );
                      }
                    }}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Mobile Dropdown */}
                  {item.dropdown && activeDropdown === index && (
                    <div className="ml-4 mt-2 space-y-2 pb-3">
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex.path}
                          path="#"
                          className="block py-2 text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA Button */}
              <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300">
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
