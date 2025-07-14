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
        
<div >
  <iframe src="https://widget.tagembed.com/218020?website=1" className='w-full h-screen' ></iframe>
</div>
      </div>
    </div>
     </>
  );
};

export default TestimonialsPage;