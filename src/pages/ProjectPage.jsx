import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { useSearchParams } from 'react-router-dom';
import { useGetAllGalleryQuery } from '../api/gallery.api';

const ProjectGallery = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { data: gallery, isLoading, isError } = useGetAllGalleryQuery();
  const data = gallery?.data;

  // Extract unique categories from API data
  const categories = data
    ? [
        { id: 'all', name: 'All Projects' },
        ...Array.from(new Set(data.map(item => item.category))).map(cat => ({
          id: cat,
          name: cat,
        })),
      ]
    : [];

  // Transform API data into product objects
  const products = data
    ? data.map(item => ({
        id: item._id,
        name: item.category,
        category: item.category,
        image: item.image?.public_url,
      }))
    : [];

  // Filter products based on selected category
  const filteredProducts = products.filter(product => {
    return selectedCategory === 'all' || product.category === selectedCategory;
  });

  // Set category from URL params
  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? filteredProducts.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === filteredProducts.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Breadcrumb
        title="Project Gallery"
        items={[
          { label: 'Home', link: '/' },
          { label: 'Projects', link: '/projects' },
        ]}
      />

      <div className="min-h-screen bg-gray-100 lg:p-8 lg:py-12 p-4">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-green-100 hover:to-blue-100 shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading projects...</p>
            </div>
          ) : isError ? (
            <div className="text-center py-12">
              <p className="text-red-600">Failed to load projects</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className="relative overflow-hidden shadow-lg bg-white group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  onClick={() => openModal(index)}
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full lg:h-64 object-cover"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition-all duration-300">
                    <div className="text-white opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 text-center">
                      <span className="text-xl font-bold"><ZoomIn size={50} /></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {!isLoading && filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ZoomIn className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="mt-4 bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300"
              >
                Show All Projects
              </button>
            </div>
          )}

          {/* Modal */}
          {isModalOpen && (
            <div 
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              onClick={closeModal}
            >
              <div className="relative max-w-5xl w-full h-[90vh] p-4 flex items-center justify-center">
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all z-10"
                >
                  <X size={24} />
                </button>

                {/* Previous Button */}
                <button 
                  onClick={goToPrevious}
                  className="absolute left-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all z-10"
                >
                  <ChevronLeft size={32} />
                </button>

                {/* Next Button */}
                <button 
                  onClick={goToNext}
                  className="absolute right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all z-10"
                >
                  <ChevronRight size={32} />
                </button>

                {/* Image */}
                <div className="w-full flex items-center justify-center">
                  <img 
                    src={filteredProducts[currentImageIndex]?.image} 
                    alt={filteredProducts[currentImageIndex]?.name} 
                    className="max-h-screen max-w-full object-contain rounded-md shadow-2xl"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectGallery;