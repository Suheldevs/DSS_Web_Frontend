import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, Monitor, Zap, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80",
      title: "Transform Your Brand with",
      highlight: "3D Digital Signage Solutions",
      subtitle: "Leading digital signage company in Lucknow providing cutting-edge LED walls, outdoor displays, and interactive digital solutions since 2006.",
      buttonText: "View Our Work"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Revolutionize Your Business with",
      highlight: "Interactive LED Displays",
      subtitle: "Experience the future of advertising with our premium LED walls and interactive displays that captivate audiences and drive engagement.",
      buttonText: "Explore Solutions"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "Elevate Your Space with",
      highlight: "Smart Digital Solutions",
      subtitle: "From corporate offices to retail spaces, our intelligent digital signage solutions create immersive experiences that leave lasting impressions.",
      buttonText: "Get Started"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      title: "Partner with Experts in",
      highlight: "Digital Innovation",
      subtitle: "Join hundreds of satisfied clients who trust our expertise in delivering cutting-edge digital signage solutions that drive results.",
      buttonText: "Contact Us"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
          </div>
        ))}
      </div>

      {/* Animated Overlay Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/10 to-teal-500/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] animate-pulse"></div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 group"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Hero Content */}
      <div className="relative mt-20 z-10 flex items-center justify-center min-h-screen px-6 lg:px-8 pt-20">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Title with Animation */}
          <div className="mb-8 overflow-hidden">
            <h1 
              key={currentSlide}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up"
            >
              <span className="text-white block mb-2">
                {currentSlideData.title}
              </span>
              <span className="bg-gradient-to-r from-green-500  to-blue-500 bg-clip-text text-transparent block">
                {currentSlideData.highlight}
              </span>
            </h1>
          </div>

          {/* Subtitle with Animation */}
          <div className="mb-12 overflow-hidden">
            <p 
              key={`subtitle-${currentSlide}`}
              className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200"
            >
              {currentSlideData.subtitle}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group px-8 py-4 bg-white text-gray-900 hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500">
              <span className="flex items-center">
                {currentSlideData.buttonText}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="group flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
              {/* <Play className="w-5 h-5 mr-2" /> */}
              Our Portfolio
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div> 
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;

// import React from 'react';
// import { Phone, ExternalLink, ShoppingCart, Headphones } from 'lucide-react';

// const HeroSection = () => {
//   const brandLogos = [
//     { name: 'Brand 1', color: 'text-pink-500' },
//     { name: 'Brand 2', color: 'text-green-500' },
//     { name: 'Brand 3', color: 'text-blue-500' },
//     { name: 'Brand 4', color: 'text-green-500' },
//     { name: 'Brand 5', color: 'text-purple-500' },
//     { name: 'Brand 6', color: 'text-red-500' }
//   ];

//   return (
//     <div className="relative min-h-screen bg-black text-white overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-gray-900 to-transparent"></div>
//         <div className="absolute top-20 left-20 w-96 h-96 border border-gray-700 rounded-full opacity-20"></div>
//         <div className="absolute bottom-20 right-20 w-80 h-80 border border-gray-700 rounded-full opacity-20"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] border border-gray-700 rounded-full opacity-10"></div>
//       </div>

//       {/* Navigation */}
//       <nav className="relative z-10 flex items-center justify-between px-6 py-4">
//         <div className="flex items-center">
//           <div className="text-2xl font-bold">
//             <span className="text-green-400">V</span>
//             <span className="text-white">emlo</span>
//           </div>
//         </div>
        
//         <div className="hidden md:flex items-center space-x-8">
//           <a href="#" className="text-green-400 hover:text-green-300 transition-colors">Home</a>
//           <a href="#" className="text-white hover:text-green-400 transition-colors">Pages</a>
//           <a href="#" className="text-white hover:text-green-400 transition-colors">Services</a>
//           <a href="#" className="text-white hover:text-green-400 transition-colors">Blog</a>
//           <a href="#" className="text-white hover:text-green-400 transition-colors">Shop</a>
//           <a href="#" className="text-white hover:text-green-400 transition-colors">Contact Us</a>
//         </div>
        
//         <button className="border border-gray-500 text-white px-6 py-2 rounded-full hover:bg-green-400 hover:text-black hover:border-green-400 transition-all duration-300">
//           Lets Talk
//         </button>
//       </nav>

//       {/* Main Content */}
//       <div className="relative z-10 px-6 py-20">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
//           {/* Left Content */}
//           <div className="space-y-8">
//             <div>
//               <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
//                 Brilliant digital signage
//                 <br />
//                 <span className="text-green-400">services.</span>
//               </h1>
              
//               <button className="bg-transparent border border-gray-500 text-white px-8 py-3 rounded-full hover:bg-green-400 hover:text-black hover:border-green-400 transition-all duration-300">
//                 Contact us
//               </button>
//             </div>

//             {/* Brand Partners Section */}
//             <div className="pt-16">
//               <div className="flex items-center mb-6">
//                 <span className="text-white font-medium mr-4">Brands partners:</span>
//                 <div className="flex space-x-3">
//                   {brandLogos.map((brand, index) => (
//                     <div key={index} className={`w-8 h-8 rounded-full bg-current ${brand.color} opacity-80`}></div>
//                   ))}
//                 </div>
//               </div>
              
//               <p className="text-gray-300 text-sm leading-relaxed max-w-md">
//                 Our brand partnership is a mutual agreement between two or more businesses 
//                 or organizations. Through these partnerships companies help one another to increase 
//                 and add extra value to products/services.
//               </p>
//             </div>
//           </div>

//           {/* Right Content - Image */}
//           <div className="relative">
//             <div className="relative">
//               {/* Main Image Container */}
//               <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
//                 {/* Sample Mall/Shopping Center Image */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900"></div>
                
//                 {/* Mall Interior Mockup */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-full h-full bg-cover bg-center opacity-80" 
//                        style={{
//                          backgroundImage: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)"
//                        }}>
//                     {/* Shopping Mall Interior Simulation */}
//                     <div className="relative w-full h-full">
//                       {/* Upper level */}
//                       <div className="absolute top-8 left-8 right-8 h-16 bg-gray-200 rounded opacity-30"></div>
//                       <div className="absolute top-8 left-8 w-20 h-16 bg-blue-400 rounded opacity-60"></div>
                      
//                       {/* Lower level */}
//                       <div className="absolute bottom-20 left-8 right-8 h-20 bg-gray-300 rounded opacity-40"></div>
                      
//                       {/* Storefronts */}
//                       <div className="absolute bottom-20 left-12 w-24 h-20 bg-blue-400 rounded opacity-50"></div>
//                       <div className="absolute bottom-20 left-40 w-24 h-20 bg-green-400 rounded opacity-50"></div>
//                       <div className="absolute bottom-20 right-12 w-24 h-20 bg-purple-400 rounded opacity-50"></div>
                      
//                       {/* Central area */}
//                       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-16 bg-white rounded-lg opacity-90 flex items-center justify-center">
//                         <div className="text-center">
//                           <div className="text-gray-800 font-bold text-lg">Welcome to</div>
//                           <div className="text-gray-600 text-sm">cabot circus</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Action Buttons */}
//       <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20 space-y-4">
//         <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-green-400 transition-colors shadow-lg">
//           <Headphones size={20} />
//         </button>
//         <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-green-400 transition-colors shadow-lg">
//           <ExternalLink size={20} />
//         </button>
//         <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-green-400 transition-colors shadow-lg">
//           <ShoppingCart size={20} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;