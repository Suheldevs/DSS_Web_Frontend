import React, { useState } from 'react';
import { ArrowRight, Tag, MapPin, ChevronsRight, Loader } from 'lucide-react';
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
       
              
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project ,index) => (
            <div key={project.id} className="px-2" data-aos="fade-up"
              data-aos-delay={index * 100}>
            <div className="group relative overflow-hidden  shadow-lg hover:shadow-2xl transition-all duration-500">
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full lg:h-96 h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />

              {/* Category Tag */}
              <div className="absolute top-12 -left-4 -rotate-90 text-xs bg-white px-2 py-1 font-semibold">
                {project.category}
              </div>

              {/* Slide-in Content */}
              <div
                className="absolute right-0  bottom-0 w-72 scale-0 px-6 py-4 flex flex-col items-start 
                bg-white lg:translate-x-full group-hover:translate-x-0
                lg:opacity-0 opacity-100 group-hover:opacity-100 group-hover:w-72 group-hover:z-10
                 group-hover:scale-100 transition-all duration-700 ease-in-out shadow-xl"
              >
                <h3 className="text-black text-lg font-bold mb-1">
                  {project.title}
                </h3>
                {/* <p className="text-gray-600 text-sm mb-3">{project.description}</p> */}
                <button className="inline-flex items-center cursor-pointer gap-2 text-primary text-sm font-semibold group-hover:text-green-600 transition-colors">
                  View Project <ChevronsRight size={18} />
                </button>
              </div>
            </div>
          </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-4">
          <button className="px-6  cursor-pointer py-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            More Projects <Loader  className='inline ml-0.5' size={18}/>
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProjectPage;

