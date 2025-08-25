import React, { useState } from 'react';
import { Search, Grid, List, Star, Heart, Eye, Monitor } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredProduct, setHoveredProduct] = useState(null);

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
      category: 'indoor',
      rating: 4.8,
      reviews: 127,
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
      features: ['4K Ultra HD', 'Smart Connectivity', 'Energy Efficient'],
      tags: ['Premium', 'Best Seller'],
      inStock: true
    },
    {
      id: 2,
      name: 'Outdoor Weatherproof 65"',
      category: 'outdoor',
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop',
      features: ['IP65 Rating', '2500 nits', 'Anti-Glare'],
      tags: ['Weatherproof', 'High Brightness'],
      inStock: true
    },
    {
      id: 3,
      name: 'Interactive Touch Kiosk 43"',
      category: 'interactive',
      rating: 4.7,
      reviews: 56,
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop',
      features: ['Multi-Touch', 'Android OS', 'Vandal Resistant'],
      tags: ['Interactive', 'Touch Screen'],
      inStock: true
    },
    {
      id: 4,
      name: 'LED Video Wall Panel',
      category: 'led',
      rating: 4.9,
      reviews: 34,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      features: ['P2.5 Pixel Pitch', 'Seamless Design', 'High Brightness'],
      tags: ['LED', 'Video Wall'],
      inStock: true
    },
    {
      id: 5,
      name: 'Digital Menu Board 32"',
      category: 'digital-menu',
      rating: 4.6,
      reviews: 92,
      image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=400&h=300&fit=crop',
      features: ['Portrait Mode', 'Cloud Management', 'Food Safe'],
      tags: ['Menu Board', 'Restaurant'],
      inStock: true
    },
    {
      id: 6,
      name: 'Smart Kiosk 49"',
      category: 'interactive',
      rating: 4.8,
      reviews: 23,
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
      features: ['Interactive Maps', 'ADA Compliant', 'Dual Sided'],
      tags: ['Smart', 'Interactive'],
      inStock: false
    },
    {
      id: 7,
      name: 'Curved Display 55"',
      category: 'indoor',
      rating: 4.7,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&h=300&fit=crop',
      features: ['Curved Design', 'Ultra Wide', 'HDR Support'],
      tags: ['Curved', 'Ultra Wide'],
      inStock: true
    },
    {
      id: 8,
      name: 'Outdoor Totem 75"',
      category: 'outdoor',
      rating: 4.9,
      reviews: 45,
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop',
      features: ['Double Sided', 'Cooling System', 'Remote Control'],
      tags: ['Totem', 'Double Sided'],
      inStock: true
    },
    {
      id: 9,
      name: 'Indoor Video Wall 46"',
      category: 'indoor',
      rating: 4.8,
      reviews: 65,
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
      features: ['Ultra Narrow Bezel', '500 nits', 'HDMI Input'],
      tags: ['Video Wall', 'Narrow Bezel'],
      inStock: true
    },
    {
      id: 10,
      name: 'LED Outdoor Screen 86"',
      category: 'led',
      rating: 4.9,
      reviews: 41,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      features: ['P4 Pixel Pitch', 'IP65 Rating', '6000 nits'],
      tags: ['LED', 'Large Format'],
      inStock: true
    },
    {
      id: 11,
      name: 'Touch Table Interactive',
      category: 'interactive',
      rating: 4.6,
      reviews: 38,
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop',
      features: ['Multi-Touch', '32 Touch Points', 'Tempered Glass'],
      tags: ['Touch Table', 'Multi-Touch'],
      inStock: true
    },
    {
      id: 12,
      name: 'Digital Poster Display',
      category: 'indoor',
      rating: 4.5,
      reviews: 72,
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&h=300&fit=crop',
      features: ['Portrait Orientation', 'WiFi Enabled', 'Remote Management'],
      tags: ['Poster', 'Portrait'],
      inStock: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTagColor = (index) => {
    const colors = [
      'bg-blue-100 text-blue-800',
      'bg-green-100 text-green-800',
      'bg-purple-100 text-purple-800',
      'bg-orange-100 text-orange-800',
      'bg-pink-100 text-pink-800',
      'bg-indigo-100 text-indigo-800'
    ];
    return colors[index % colors.length];
  };

  const ProductCard = ({ product }) => (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
      onMouseEnter={() => setHoveredProduct(product.id)}
      onMouseLeave={() => setHoveredProduct(null)}
    >
      {/* Product Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Stock Status */}
        <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${
          product.inStock 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </div>
        
        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
          <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
            <Eye className="w-4 h-4 text-gray-700" />
          </button>
          <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
            <Heart className="w-4 h-4 text-gray-700" />
          </button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-2">
          {product.tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-1 rounded-full text-xs font-medium ${getTagColor(index)}`}
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Rating */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviews})
          </span>
        </div>
        
        {/* Features */}
        <div className="mb-3">
          <div className="text-sm text-gray-600">
            {product.features.slice(0, 2).join(' • ')}
          </div>
        </div>
        
        {/* Action Button */}
        <Link 
          to='/products/detail' 
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 text-sm font-medium"
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
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header with Search and Filters */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              {/* View Mode and Results Count */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 text-sm">
                  {filteredProducts.length} products
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-blue-500 text-white' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-blue-500 text-white' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Categories */}
            <div className="mt-6 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-4 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1 md:grid-cols-2'
          }`}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or category filters</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductPage;