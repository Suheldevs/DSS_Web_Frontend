import { useState, useEffect } from 'react';
import c1 from "../assets/client/alyantra.jpg";
import c2 from "../assets/client/barista.jpg";
import c3 from "../assets/client/bhalla.jpg";
import c4 from "../assets/client/bikaner.jpg";
import c6 from "../assets/client/coca-cola.jpg";
import c7 from "../assets/client/dr-bagchi.jpg";
import c8 from "../assets/client/f.jpg";
import c9 from "../assets/client/golden-tea.jpg";
import c10 from "../assets/client/health-city-vistra.jpg";
import c11 from "../assets/client/naushijaan.jpg";
import c12 from "../assets/client/rolex.jpg";
import c13 from "../assets/client/rominus.jpg";
import c14 from "../assets/client/salasar.jpg";
import c15 from "../assets/client/slmg.jpg";
import c16 from "../assets/client/smile-n-glow.jpg";
import c17 from "../assets/client/uday.jpg";
import c18 from "../assets/client/webley.jpg";

const clients = [
  { name: "alyantra", logo: c1 },
  { name: "barista", logo: c2 },
  { name: "bhalla", logo: c3 },
  { name: "bikaner", logo: c4 },
  { name: "coca-cola", logo: c6 },
  { name: "dr-bagchi", logo: c7 },
  { name: "f", logo: c8 },
  { name: "golden-tea", logo: c9 },
  { name: "health-city-vistra", logo: c10 },
  { name: "naushijaan", logo: c11 },
  { name: "rolex", logo: c12 },
  { name: "rominus", logo: c13 },
  { name: "salasar", logo: c14 },
  { name: "slmg", logo: c15 },
  { name: "smile-n-glow", logo: c16 },
  { name: "uday", logo: c17 },
  { name: "webley", logo: c18 },
];

export default function ClientSection() {
  

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