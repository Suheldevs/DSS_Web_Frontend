import React, { useState } from 'react';
import { ArrowRight, Tag, MapPin } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const ProjectPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Bistro & Bar",
      category: "Restaurant",
      location: "Downtown",
      image: "https://picsum.photos/400/300?random=1",
      tags: ["Outdoor", "Illuminated"]
    },
    {
      id: 2,
      title: "Business Card Design",
      category: "Corporate",
      location: "Business District",
      image: "https://picsum.photos/400/300?random=2",
      tags: ["Banners", "Residential"]
    },
    {
      id: 3,
      title: "Airport Departures",
      category: "Navigation",
      location: "Airport Terminal",
      image: "https://picsum.photos/400/300?random=3",
      tags: ["Wayfinding", "Digital"]
    },
    {
      id: 4,
      title: "Minimal Design",
      category: "Modern",
      location: "Creative Studio",
      image: "https://picsum.photos/400/300?random=4",
      tags: ["Minimalist", "Indoor"]
    },
    {
      id: 5,
      title: "Corporate Signage",
      category: "Office",
      location: "Business Center",
      image: "https://picsum.photos/400/300?random=5",
      tags: ["Professional", "Branding"]
    },
    {
      id: 6,
      title: "Outdoor Business Signs",
      category: "Commercial",
      location: "Shopping District",
      image: "https://picsum.photos/400/300?random=6",
      tags: ["Outdoor", "LED"]
    }
  ];

  return (
    <>
    <Breadcrumb 
  title="Our Latest Projects"
  items={[
    { label: 'Home', link: '/' },
    { label: 'Projects', link: '/projects' }
  ]}
/>
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto px-4">
       

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Tags - Top Left */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm  border border-white/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Overlay */}
                {hoveredCard === project.id && (
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/80 to-blue-600/80 flex items-center justify-center transition-all duration-300">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-lg mb-4 opacity-90">{project.category}</p>
                      <div className="flex items-center justify-center space-x-2 mb-4">
                        <MapPin size={16} />
                        <span>{project.location}</span>
                      </div>
                      <button className="flex items-center space-x-2 mx-auto px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200">
                        <span>View Details</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              {/* <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Tag size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-500 uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                
                <div className="flex items-center space-x-2 text-gray-600 mb-4">
                  <MapPin size={14} />
                  <span className="text-sm">{project.location}</span>
                </div>

                <button className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200 group-hover:translate-x-1">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div> */}
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Load More Projects
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProjectPage;