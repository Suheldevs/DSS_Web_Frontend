import { ArrowRight, Clock, Tag } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb';

function BlogPage() {

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
  return (
    <>
<Breadcrumb 
  title="Our Latest Articles "
  items={[
    { label: 'Home', link: '/' },
    { label: 'Blog', link: '/blog' }
  ]}
/>
    <div className='max-w-7xl mx-auto px-4 grid grid-cols-3 py-8 gap-4'>
{blogPosts.map(post => (
                <div 
                  key={post.id} 
                  className=""

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
        </>
  )
}

export default BlogPage