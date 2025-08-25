import React, { useState } from 'react';
import { Search, Grid, Eye, Monitor } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', count: 48 },
    { id: 'indoor', name: 'Indoor Displays', count: 24 },
    { id: 'outdoor', name: 'Outdoor Signage', count: 12 },
    { id: 'interactive', name: 'Interactive Kiosks', count: 8 },
    { id: 'led', name: 'LED Walls', count: 6 },
    { id: 'digital-menu', name: 'Digital Menu Boards', count: 10 }
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Indoor Display 55"',
      slug: 'premium-indoor-display-55',
      category: 'indoor',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
      tags: ['Premium', 'Best Seller']
    },
    {
      id: 2,
      name: 'Outdoor Weatherproof 65"',
      slug: 'outdoor-weatherproof-65',
      category: 'outdoor',
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop',
      tags: ['Weatherproof', 'High Brightness']
    },
    {
      id: 3,
      name: 'Interactive Touch Kiosk 43"',
      slug: 'interactive-touch-kiosk-43',
      category: 'interactive',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop',
      tags: ['Interactive', 'Touch Screen']
    },
    {
      id: 4,
      name: 'LED Video Wall Panel',
      slug: 'led-video-wall-panel',
      category: 'led',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      tags: ['LED', 'Video Wall']
    },
    {
      id: 5,
      name: 'Digital Menu Board 32"',
      slug: 'digital-menu-board-32',
      category: 'digital-menu',
      image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=400&h=300&fit=crop',
      tags: ['Menu Board', 'Restaurant']
    },
    {
      id: 6,
      name: 'Smart Kiosk 49"',
      slug: 'smart-kiosk-49',
      category: 'interactive',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
      tags: ['Smart', 'Interactive']
    },
    {
      id: 7,
      name: 'Curved Display 55"',
      slug: 'curved-display-55',
      category: 'indoor',
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&h=300&fit=crop',
      tags: ['Curved', 'Ultra Wide']
    },
    {
      id: 8,
      name: 'Outdoor Totem 75"',
      slug: 'outdoor-totem-75',
      category: 'outdoor',
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop',
      tags: ['Totem', 'Double Sided']
    },
    {
      id: 9,
      name: 'Indoor Video Wall 46"',
      slug: 'indoor-video-wall-46',
      category: 'indoor',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
      tags: ['Video Wall', 'Narrow Bezel']
    },
    {
      id: 10,
      name: 'LED Outdoor Screen 86"',
      slug: 'led-outdoor-screen-86',
      category: 'led',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      tags: ['LED', 'Large Format']
    },
    {
      id: 11,
      name: 'Touch Table Interactive',
      slug: 'touch-table-interactive',
      category: 'interactive',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop',
      tags: ['Touch Table', 'Multi-Touch']
    },
    {
      id: 12,
      name: 'Digital Poster Display',
      slug: 'digital-poster-display',
      category: 'indoor',
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&h=300&fit=crop',
      tags: ['Poster', 'Portrait']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTagColor = (index) => {
    const colors = [
      'bg-green-100 text-green-800',
      'bg-blue-100 text-blue-800',
      'bg-teal-100 text-teal-800',
      'bg-emerald-100 text-emerald-800',
      'bg-cyan-100 text-cyan-800',
      'bg-sky-100 text-sky-800'
    ];
    return colors[index % colors.length];
  };

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Product Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link 
            to={`/products/${product.slug}`}
            className="bg-white/90 backdrop-blur-sm text-green-700 px-4 py-2 rounded-lg hover:bg-white transition-colors font-medium flex items-center space-x-2"
          >
            <Eye className="w-4 h-4" />
            <span>View Details</span>
          </Link>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
          {product.name}
        </h3>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(index)}`}
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Action Button */}
        <Link 
          to={`/products/${product.slug}`}
          className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 text-sm font-medium"
        >
          <Eye className="w-4 h-4" />
          <span>View Details</span>
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <Breadcrumb 
        title="Our Digital Signage Solutions"
        items={[
          { label: 'Home', link: '/' },
          { label: 'Products', link: '/products' }
        ]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          
          {/* Header with Search and Filters */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 mb-6 border border-green-100">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
              
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/90"
                />
              </div>
              
              {/* Results Count and Grid Icon */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 text-sm font-medium">
                  {filteredProducts.length} products found
                </span>
                <div className="p-2 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg">
                  <Grid className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            {/* Categories */}
            <div className="mt-6 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-white/70 text-gray-700 hover:bg-gradient-to-r hover:from-green-100 hover:to-blue-100 border border-green-200'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-80">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid - Always 4 per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or category filters</p>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedCategory('all');}}
                className="mt-4 bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductPage;