import React from 'react';
import { Store, Home, Building2, Navigation, Radio, Zap, ArrowRight } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const ServicePage = () => {
  const services = [
    {
      name: "Outdoor Signage",
      path: "/services/outdoor-signage",
      icon: Store,
      description: "Weather-resistant and durable outdoor signage solutions that make your business stand out and attract customers from every direction."
    },
    {
      name: "Indoor Signage", 
      path: "/services/indoor-signage",
      icon: Home,
      description: "Professional indoor signage that enhances your interior space, guides visitors, and reinforces your brand identity throughout your facility."
    },
    {
      name: "High Rise Signage",
      path: "/services/high-rise-signage", 
      icon: Building2,
      description: "Spectacular high-rise signage solutions that command attention from great distances and establish your presence in the urban landscape."
    },
    {
      name: "Navigation Signage",
      path: "/services/navigation-signage",
      icon: Navigation,
      description: "Clear and intuitive wayfinding solutions that help visitors navigate your space efficiently while maintaining a professional appearance."
    },
    {
      name: "Retro Signage",
      path: "/services/retro-signage",
      icon: Radio,
      description: "Vintage-inspired signage that brings nostalgic charm and character to your business, perfect for creating memorable brand experiences."
    },
    {
      name: "Neon Signage",
      path: "/services/neon-signage",
      icon: Zap,
      description: "Eye-catching neon signage that illuminates your brand with vibrant colors and dynamic lighting effects for maximum visual impact."
    }
  ];

  return (
    <>
    <Breadcrumb 
     title="Our Signage Services"
  items={[
    { label: 'Home', link: '/' },
    { label: 'Services', link: '/services' }
  ]}
  />
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {/* <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Signage Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming spaces with innovative signage solutions that captivate, inform, and inspire your audience
          </p>
        </div> */}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Gradient overlay for hover effect */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
                
                {/* Orange bottom border - only visible on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <IconComponent 
                      size={32} 
                      className="text-white group-hover:rotate-360 transition-all duration-1000" 
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-500 mb-4 transition-colors duration-300 text-center">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 group-hover:text-grren-500/95 mb-6 text-center leading-relaxed transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Read More Button */}
                  <div className="flex items-center justify-center">
                    <button className="flex items-center space-x-2 text-emerald-600 group-hover:text-green-500 font-medium transition-colors duration-300 group-hover:transform group-hover:translate-x-1">
                      <span>READ MORE</span>
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
};

export default ServicePage;