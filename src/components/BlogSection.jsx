import React, { useState, useEffect } from 'react';
import { Clock, Tag, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// import blogPosts from '../data/BlogData';
// Mock Link component since react-router-dom isn't available
const Link = ({ to, children, className, ...props }) => (
  <a href={to} className={className} {...props}>
    {children}
  </a>
);


const blogPosts = [
  {
    id: 1,
    title: "Transforming Airports with Wayfinding Signage",
    description: "Explore how effective signage enhances navigation and improves passenger experience in busy airport environments.",
    image: "https://picsum.photos/400/300?random=1",
    date: "Dec 15, 2024",
    category: "Airport Signage",
    slug: "airport-wayfinding-signage"
  },
  {
    id: 2,
    title: "Eco-Friendly Materials in Signage Fabrication",
    description: "Discover sustainable materials that reduce environmental impact while maintaining quality and durability in signage.",
    image: "https://picsum.photos/400/300?random=2",
    date: "Dec 12, 2024",
    category: "Sustainability",
    slug: "eco-friendly-signage-materials"
  },
  {
    id: 3,
    title: "Smart Signage for Smart Cities for better Apperience.",
    description: "How digital signage and smart displays are redefining urban infrastructure and public communication in smart cities.",
    image: "https://picsum.photos/400/300?random=3",
    date: "Dec 10, 2024",
    category: "Digital Signage",
    slug: "smart-city-digital-signage"
  },
  {
    id: 4,
    title: "Creative Retail Signage at DSS That Drives Sales",
    description: "Uncover signage strategies that attract foot traffic and boost conversion in competitive retail spaces.",
    image: "https://picsum.photos/400/300?random=4",
    date: "Dec 8, 2024",
    category: "Retail Signage",
    slug: "retail-signage-strategies"
  },
  {
    id: 5,
    title: "Navigational Signage for Large Campuses",
    description: "Learn how proper directional signage simplifies movement across hospitals, universities, and corporate parks.",
    image: "https://picsum.photos/400/300?random=5",
    date: "Dec 5, 2024",
    category: "Wayfinding",
    slug: "campus-navigation-signage"
  },
  {
    id: 6,
    title: "Mastering Signage Project Management from DSS",
    description: "From client briefing to installation—best practices for ensuring signage projects are smooth and successful.",
    image: "https://picsum.photos/400/300?random=6",
    date: "Dec 3, 2024",
    category: "Project Management",
    slug: "signage-project-management"
  }
];


export default function BlogSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Responsive slides per view
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => {
        const maxSlide = Math.max(0, blogPosts.length - slidesToShow);
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slidesToShow]);

  const nextSlide = () => {
    const maxSlide = Math.max(0, blogPosts.length - slidesToShow);
    setCurrentSlide(prev => prev >= maxSlide ? 0 : prev + 1);
  };

  const prevSlide = () => {
    const maxSlide = Math.max(0, blogPosts.length - slidesToShow);
    setCurrentSlide(prev => prev <= 0 ? maxSlide : prev - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const maxSlide = Math.max(0, blogPosts.length - slidesToShow);

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
       <div className="text-center mb-6">

  {/* Heading */}
  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-2">
    Latest<span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Articles</span>
  </h2>

  {/* Bottom Gradient Line */}
  <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-2"></div>

  {/* Subtitle */}
  <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
    Stay updated with the latest trends, insights, and innovations in signage, branding, and digital display solutions.
  </p>
</div>


        {/* Slider Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-green-50 border border-gray-200"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-green-50 border border-gray-200"
            disabled={currentSlide >= maxSlide}
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors duration-300" />
          </button>

          {/* Slider Track */}
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`
              }}
            >
              {blogPosts.map(post => (
                <div 
                  key={post.id} 
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div className="bg-white aspect-auto flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200  group">
                    {/* Image section */}
                    <div className="h-1/2 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Content section */}
                    <div className="p-4 flex flex-col flex-grow">
                      {/* Date and Category row */}
                      <div className="flex justify-between items-center mb-3 text-xs">
                        <div className="flex items-center text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                        <div className="inline-flex items-center bg-green-600 px-2 py-1 rounded-sm text-xs font-medium text-white">
                          <Tag className="h-3 w-3 mr-1" />
                          {post.category}
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-bold text-lg text-black mb-2 line-clamp-2 group-hover:text-green-600 group-hover:underline transition-colors duration-300">
                        {post.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 mb-4 line-clamp-2 flex-grow text-sm">
                        {post.description}
                      </p>
                      
                      {/* Read More button */}
                      <div className="mt-auto">
                        <Link 
                          to={`/blog-detail/${post.slug}`}
                          className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700 transition-colors duration-300 group-hover:translate-x-1"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-green-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}