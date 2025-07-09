import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const TestimonialsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      position: "Marketing Director",
      rating: 5,
      text: "The signage solutions provided by this team exceeded our expectations. The quality is outstanding and the installation was seamless. Our brand visibility has increased significantly since implementing their outdoor signage.",
      image: "https://picsum.photos/100/100?random=1",
      location: "New York, NY",
      date: "2 weeks ago",
      project: "Outdoor LED Signage"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Urban Bistro",
      position: "Restaurant Owner",
      rating: 5,
      text: "From concept to completion, the entire process was professional and efficient. The neon signage they created for our restaurant has become a landmark in the neighborhood. Highly recommended!",
      image: "https://picsum.photos/100/100?random=2",
      location: "Los Angeles, CA",
      date: "1 month ago",
      project: "Custom Neon Signage"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Metro Hospital",
      position: "Facility Manager",
      rating: 4,
      text: "The navigation signage system they installed has dramatically improved patient flow in our hospital. The design is clean, modern, and incredibly functional. Great attention to detail.",
      image: "https://picsum.photos/100/100?random=3",
      location: "Chicago, IL",
      date: "3 weeks ago",
      project: "Navigation Signage System"
    },
    {
      id: 4,
      name: "David Park",
      company: "Skyline Towers",
      position: "Property Manager",
      rating: 5,
      text: "The high-rise signage installation was completed on time and within budget. The team's expertise in handling complex installations is impressive. The final result looks absolutely stunning.",
      image: "https://picsum.photos/100/100?random=4",
      location: "Miami, FL",
      date: "1 week ago",
      project: "High-Rise Building Signage"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      company: "Creative Studio",
      position: "Art Director",
      rating: 5,
      text: "Working with this team was a pleasure. They understood our vision perfectly and delivered beyond our expectations. The indoor signage adds such a professional touch to our studio space.",
      image: "https://picsum.photos/100/100?random=5",
      location: "Austin, TX",
      date: "2 months ago",
      project: "Indoor Branding Signage"
    },
    {
      id: 6,
      name: "James Wilson",
      company: "Heritage Mall",
      position: "Operations Director",
      rating: 4,
      text: "The retro-style signage they created perfectly matches our mall's aesthetic. The craftsmanship is excellent and the materials used are clearly high quality. Very satisfied with the outcome.",
      image: "https://picsum.photos/100/100?random=6",
      location: "Seattle, WA",
      date: "5 days ago",
      project: "Retro Mall Signage"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  const averageRating = testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0) / testimonials.length;

  return (
    <>
   <Breadcrumb 
  title="What Our Clients Say"
  items={[
    { label: 'Home', link: '/' },
    { label: 'Testimonial', link: '/testimonial' }
  ]}
/>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        

        {/* Featured Testimonial Slider */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
              {/* Background Quote */}
              <Quote className="absolute top-4 right-4 text-gray-200 opacity-50" size={80} />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  {/* Avatar */}
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-gradient-to-r from-emerald-400 to-blue-500"
                  />
                  
                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start space-x-1 mb-4">
                      {renderStars(testimonials[currentSlide].rating)}
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      "{testimonials[currentSlide].text}"
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold text-gray-800">
                        {testimonials[currentSlide].name}
                      </h4>
                      <p className="text-gray-600">
                        {testimonials[currentSlide].position} at {testimonials[currentSlide].company}
                      </p>
                      <div className="flex items-center justify-center md:justify-start space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{testimonials[currentSlide].location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{testimonials[currentSlide].date}</span>
                        </div>
                      </div>
                      <p className="text-sm text-emerald-600 font-medium">
                        Project: {testimonials[currentSlide].project}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-50"
            >
              <ChevronLeft size={24} className="text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-50"
            >
              <ChevronRight size={24} className="text-gray-600" />
            </button>
          </div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-emerald-400 to-blue-500' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <MapPin size={12} />
                  <span>{testimonial.location}</span>
                </div>
                <span>{testimonial.date}</span>
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-sm text-emerald-600 font-medium">
                  {testimonial.project}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our satisfied clients and transform your space with professional signage solutions
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <button className="px-8 py-3 bg-white text-emerald-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Get Free Quote
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-200">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
     </>
  );
};

export default TestimonialsPage;