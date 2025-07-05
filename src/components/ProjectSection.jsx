import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ProjectSection = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = ['ALL', 'BANNERS', 'COMMERCIAL', 'RESIDENTIAL', 'PRINTING'];

  const projects = [
    {
      id: 1,
      title: 'Bistro Bar',
      category: 'BANNERS',
      tags: ['Banners', 'Commercial'],
      image: '/api/placeholder/400/300',
      description: 'Restaurant branding and signage design'
    },
    {
      id: 2,
      title: 'Business Card Design',
      category: 'PRINTING',
      tags: ['Banners', 'Residential'],
      image: '/api/placeholder/400/300',
      description: 'Professional business card mockup design'
    },
    {
      id: 3,
      title: 'Airport Departures',
      category: 'COMMERCIAL',
      tags: ['Commercial', 'Signage'],
      image: '/api/placeholder/400/300',
      description: 'Airport departure gate signage system'
    },
    {
      id: 4,
      title: 'Retail Store Front',
      category: 'COMMERCIAL',
      tags: ['Commercial', 'Retail'],
      image: '/api/placeholder/400/300',
      description: 'Modern retail storefront design'
    },
    {
      id: 5,
      title: 'Residential Complex',
      category: 'RESIDENTIAL',
      tags: ['Residential', 'Signage'],
      image: '/api/placeholder/400/300',
      description: 'Residential building signage and wayfinding'
    },
    {
      id: 6,
      title: 'Corporate Brochure',
      category: 'PRINTING',
      tags: ['Printing', 'Corporate'],
      image: '/api/placeholder/400/300',
      description: 'Professional corporate brochure design'
    }
  ];

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      {/* Header */}
      <div className="mb-12">
        <p className="text-gray-500 text-sm font-medium tracking-wider uppercase mb-2">
          Recently Completed
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
          Our Latest Projects
        </h2>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            {/* Project Image */}
            <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              
              {/* Sample content based on project type */}
              {project.id === 1 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-2xl">🍺</span>
                    </div>
                    <h3 className="text-white text-2xl font-bold">BISTRO</h3>
                    <h3 className="text-white text-2xl font-bold">& BAR</h3>
                    <p className="text-yellow-400 text-sm mt-2">Best Restaurant</p>
                  </div>
                </div>
              )}
              
              {project.id === 2 && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold opacity-20 mb-4">MOCKUP</div>
                    <div className="text-2xl font-bold">DESIGN</div>
                    <div className="text-lg">STORE</div>
                  </div>
                </div>
              )}
              
              {project.id === 3 && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                  <div className="text-center text-white">
                    <div className="text-xl font-bold mb-2">Gates A-D</div>
                    <div className="text-3xl font-bold flex items-center justify-center gap-2">
                      Departures
                      <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
                        <span className="text-black text-sm">✈</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {project.id > 3 && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold">{project.title}</div>
                    <p className="text-gray-300 mt-2">{project.description}</p>
                  </div>
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <button className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-200">
                    View Project
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;