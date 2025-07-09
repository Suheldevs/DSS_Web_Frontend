import React, { useState } from 'react';
import { Monitor, Zap, Fan, Calendar, Building } from 'lucide-react';

const ServiceSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      title: "Commercial signage",
      description: "Professional business signage solutions for storefronts, offices, and commercial properties",
      icon: <Building className="w-6 h-6" />,
      image: "https://picsum.photos/600/800?random=1",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 1,
      title: "Dimensional sign",
      description: "3S raised lettering and logos that create depth and visual impact for your brand",
      icon: <Monitor className="w-6 h-6" />,
      image: "https://picsum.photos/600/800?random=2",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 2,
      title: "LED digital signage",
      description: "Dynamic digital displays with LED technology for maximum visibility and engagement",
      icon: <Zap className="w-6 h-6" />,
      image: "https://picsum.photos/600/800?random=3",
      color: "from-yellow-500 to-green-600"
    },
    // {
    //   id: 3,
    //   title: "Pleated fan bunting",
    //   description: "Decorative bunting and fan displays perfect for events, grand openings, and celebrations",
    //   icon: <Fan className="w-6 h-6" />,
    //   image: "/api/placeholder/500/400",
    //   color: "from-pink-500 to-red-600"
    // },
    {
      id: 4,
      title: "Seasonal signage",
      description: "Temporary and seasonal signage solutions for holidays, sales, and special events",
      icon: <Calendar className="w-6 h-6" />,
      image: "https://picsum.photos/600/800?random=4",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const handleServiceHover = (index) => {
    setActiveService(index);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
    Our <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Services</span>
  </h2>
  <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
    We provide comprehensive signage solutions for all your business needs.
  </p>
</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Services List */}
          <div className="space-y-6">
          
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  onMouseEnter={() => handleServiceHover(index)}
                  className={`group relative p-6 rounded-xl cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                    activeService === index
                      ? 'bg-white shadow-xl border-l-4 border-green-500'
                      : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      activeService === index
                        ? 'bg-green-500 text-white scale-110'
                        : 'bg-gray-200 text-gray-600 group-hover:bg-green-100 group-hover:text-green-600'
                    }`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                        activeService === index ? 'text-green-500' : 'text-gray-800 group-hover:text-green-500'
                      }`}>
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Active indicator */}
                  <div className={`absolute top-0 right-0 w-2 h-full bg-green-500 rounded-r-xl transition-all duration-300 ${
                    activeService === index ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </div>
              ))}
            </div>
          </div>


          {/* Right Side - Image Display */}
          <div className="relative">
            <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Background Images */}
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    activeService === index 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-110'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`}></div>
                  
                  {/* Service-specific content */}
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                   
                   <img src={services[index].image} alt={service.title} />


                   
                    {/* {index === 0 && (
                      <div className="text-center">
                        <div className="text-6xl mb-4">🏢</div>
                        <h3 className="text-2xl font-bold mb-2">COMMERCIAL</h3>
                        <p className="text-lg opacity-90">Professional Business Signs</p>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="text-center">
                        <div className="text-6xl mb-4">📐</div>
                        <h3 className="text-2xl font-bold mb-2">3D DIMENSIONAL</h3>
                        <p className="text-lg opacity-90">Raised Letter Signage</p>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="text-center">
                        <div className="text-6xl mb-4">💡</div>
                        <h3 className="text-2xl font-bold mb-2">LED DIGITAL</h3>
                        <p className="text-lg opacity-90">Dynamic Display Solutions</p>
                      </div>
                    )}
                    {index === 3 && (
                      <div className="text-center">
                        <div className="text-6xl mb-4">🎪</div>
                        <h3 className="text-2xl font-bold mb-2">FAN BUNTING</h3>
                        <p className="text-lg opacity-90">Decorative Event Displays</p>
                      </div>
                    )}
                    {index === 4 && (
                      <div className="text-center">
                        <div className="text-6xl mb-4">🎄</div>
                        <h3 className="text-2xl font-bold mb-2">SEASONAL</h3>
                        <p className="text-lg opacity-90">Holiday & Event Signage</p>
                      </div>
                    )} */}
                  </div>
                </div>
              ))}

              {/* Motivational Sign Overlay (like in screenshot) */}
              <div className={`absolute top-8 right-8 bg-white p-4 rounded-lg shadow-lg transition-all duration-500 ${
                activeService === 0 ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'
              }`}>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-gray-800 mb-1">YOU ARE</h4>
                  <h4 className="text-lg font-bold text-gray-800 mb-1">WORTHY</h4>
                  <h4 className="text-lg font-bold text-gray-800">OF LOVE</h4>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute bottom-6 left-6 flex space-x-2">
                {services.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeService === index ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Floating service cards */}
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 space-y-4 hidden lg:block">
              {services?.map((service, index) => (
                <div
                onClick={() => handleServiceHover(index)}
                  key={index}
                  className={`bg-white p-2 rounded-lg shadow-lg transition-all duration-500 ${
                    activeService === index ? 'scale-110 shadow-xl' : 'scale-95 opacity-60'
                  }`}
                >
                  <div className="w-10 h-10">
                    <img src={service.image}  className='object-cover h-10 w-10 rounded'/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;