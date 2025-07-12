import { useState, useEffect } from 'react';

export default function ClientSection() {
  const clients = [
    { 
      name: "Delhi International Airport Ltd. (DIAL)", 
      logo: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=200&h=200&fit=crop&crop=center"
    },
    { 
      name: "GMR Goa International Airport Ltd. (GGIAL)", 
      logo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=200&h=200&fit=crop&crop=center"
    },
    { 
      name: "CISF Unit at IGI Airport, New Delhi", 
      logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&crop=center"
    },
    { 
      name: "Municipal Corporation Gurugram", 
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop&crop=center"
    },
    { 
      name: "Public Works Department (PWD)", 
      logo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&h=200&fit=crop&crop=center"
    },
    { 
      name: "New Delhi Municipal Council (NDMC)", 
      logo: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=200&h=200&fit=crop&crop=center"
    },
    { 
      name: "Knight Frank India Pvt. Ltd.", 
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center"
    },
    { 
      name: "GMR Infrastructure Ltd.", 
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=center"
    },
    { 
      name: "Indira Gandhi International Airport", 
      logo: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=200&h=200&fit=crop&crop=center"
    },
    { 
      name: "Noida Authority", 
      logo: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=200&h=200&fit=crop&crop=center"
    },
    { 
      name: "Gurgaon Development Authority", 
      logo: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=200&fit=crop&crop=center"
    },
    { 
      name: "Delhi Metro Rail Corporation", 
      logo: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=200&h=200&fit=crop&crop=center"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Responsive items count
  const getItemsToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4; // lg screens
      if (window.innerWidth >= 768) return 3;  // md screens
      if (window.innerWidth >= 640) return 2;  // sm screens
      return 1; // mobile
    }
    return 4;
  };

  const [itemsToShow, setItemsToShow] = useState(getItemsToShow());

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsToShow());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto slide effect with infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = clients.length - itemsToShow;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, [clients.length, itemsToShow]);

  // Calculate total slides
  const totalSlides = Math.max(1, clients.length - itemsToShow + 1);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
            Our <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Clients</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-2"></div>
          <p className="lg:text-lg  text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by leading organizations across various sectors for comprehensive signage solutions.
          </p>
        </div>

        {/* Clients Slider */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out" 
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`
            }}
          >
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                  
                    <div className=" bg-gray-50 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 p-2 border border-gray-200">
                      <img 
                        src={client.logo} 
                        alt={`${client.name} logo`}
                        className="w-full h-40 object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  </div>
            ))}
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-green-600 w-6 sm:w-8' 
                  : 'bg-gray-300 hover:bg-green-300 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}