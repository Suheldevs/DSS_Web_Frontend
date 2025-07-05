import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const testimonials = [
    {
      id: 1,
      quote: "It was amazing signage service given by them",
      name: "Victor Wilson",
      position: "Security Head",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
      bgColor: "bg-gray-800"
    },
    {
      id: 2,
      quote: "Installation process such pleasant experience!",
      name: "Alex Martin",
      position: "Main Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
      bgColor: "bg-yellow-400",
      textColor: "text-black"
    },
    {
      id: 3,
      quote: "Vemlo has completed high standard the project",
      name: "Alena Cartin",
      position: "Main Director",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b412?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
      bgColor: "bg-gray-800"
    },
    {
      id: 4,
      quote: "Heartily thankful to Vemlo for quality signage",
      name: "Julia Roses",
      position: "Consular",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
      bgColor: "bg-gray-800"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">Testimonials</p>
          <h2 className="text-5xl md:text-6xl font-bold">
            What our clients say!
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`
                ${testimonial.bgColor} 
                ${testimonial.textColor || 'text-white'}
                p-8 rounded-2xl relative overflow-hidden transition-all duration-500 ease-in-out transform
                ${hoveredIndex === index ? 'scale-105 shadow-2xl ring-4 ring-yellow-400/30' : 'hover:scale-102'}
                cursor-pointer group
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Quote Icon */}
              <div className={`
                absolute top-6 right-6 opacity-20 transition-all duration-300
                ${hoveredIndex === index ? 'opacity-40 scale-110' : ''}
              `}>
                <Quote size={32} />
              </div>

              {/* Quote Text */}
              <div className="mb-8">
                <p className={`
                  text-lg italic leading-relaxed font-medium
                  ${hoveredIndex === index ? 'text-opacity-100' : ''}
                `}>
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className={`
                  relative transition-all duration-300
                  ${hoveredIndex === index ? 'scale-110' : ''}
                `}>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                  />
                  {/* Glow effect on hover */}
                  <div className={`
                    absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20
                    transition-opacity duration-300
                    ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
                  `} />
                </div>
                
                <div className={`
                  transition-all duration-300
                  ${hoveredIndex === index ? 'transform translate-x-2' : ''}
                `}>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className={`
                    text-sm opacity-70
                    ${testimonial.textColor ? 'text-black/70' : 'text-gray-300'}
                  `}>
                    {testimonial.position}
                  </p>
                </div>
              </div>

              {/* Hover Stars */}
              <div className={`
                absolute bottom-4 right-4 flex space-x-1 transition-all duration-300
                ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`
                      fill-yellow-400 text-yellow-400
                      transition-all duration-300 delay-${i * 100}
                      ${hoveredIndex === index ? 'scale-100' : 'scale-0'}
                    `}
                  />
                ))}
              </div>

              {/* Animated Background Elements */}
              <div className={`
                absolute inset-0 bg-gradient-to-br from-white/5 to-transparent
                transition-opacity duration-500
                ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
              `} />
              
              {/* Pulse effect */}
              <div className={`
                absolute inset-0 rounded-2xl
                transition-all duration-1000
                ${hoveredIndex === index ? 'animate-pulse bg-white/5' : ''}
              `} />
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 text-center">
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">500+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">4.9</div>
              <div className="text-gray-400 text-sm">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">99%</div>
              <div className="text-gray-400 text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;