import React, { useState } from 'react';
import { Search, Filter, Grid, List, Star, Heart, ShoppingCart, Eye, ArrowRight, Zap, Monitor, Speaker, Wifi, Shield, ChevronDown, EyeIcon } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const categories = [
    { id: 'all', name: 'All Products', count: 48 },
    { id: 'indoor', name: 'Indoor Displays', count: 24 },
    { id: 'outdoor', name: 'Outdoor Signage', count: 12 },
    { id: 'interactive', name: 'Interactive Kiosks', count: 8 },
    { id: 'led', name: 'LED Walls', count: 6 },
    { id: 'digital-menu', name: 'Digital Menu Boards', count: 10 },
    { id: 'wayfinding', name: 'Wayfinding Systems', count: 5 }
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Indoor Display 55"',
      category: 'indoor',
      price: 899,
      originalPrice: 1299,
      rating: 4.8,
      reviews: 127,
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
      features: ['4K Ultra HD', 'Smart Connectivity', 'Energy Efficient'],
      badge: 'Best Seller',
      inStock: true
    },
    {
      id: 2,
      name: 'Outdoor Weatherproof 65"',
      category: 'outdoor',
      price: 1599,
      originalPrice: 1999,
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop',
      features: ['IP65 Rating', '2500 nits', 'Anti-Glare'],
      badge: 'New',
      inStock: true
    },
    {
      id: 3,
      name: 'Interactive Touch Kiosk 43"',
      category: 'interactive',
      price: 1299,
      originalPrice: 1599,
      rating: 4.7,
      reviews: 56,
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop',
      features: ['Multi-Touch', 'Android OS', 'Vandal Resistant'],
      badge: 'Hot Deal',
      inStock: true
    },
    {
      id: 4,
      name: 'LED Video Wall Panel',
      category: 'led',
      price: 2299,
      originalPrice: 2799,
      rating: 4.9,
      reviews: 34,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      features: ['P2.5 Pixel Pitch', 'Seamless Design', 'High Brightness'],
      badge: 'Premium',
      inStock: true
    },
    {
      id: 5,
      name: 'Digital Menu Board 32"',
      category: 'digital-menu',
      price: 599,
      originalPrice: 799,
      rating: 4.6,
      reviews: 92,
      image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=400&h=300&fit=crop',
      features: ['Portrait Mode', 'Cloud Management', 'Food Safe'],
      badge: 'Popular',
      inStock: true
    },
    {
      id: 6,
      name: 'Wayfinding Totem 49"',
      category: 'wayfinding',
      price: 1799,
      originalPrice: 2199,
      rating: 4.8,
      reviews: 23,
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
      features: ['Interactive Maps', 'ADA Compliant', 'Dual Sided'],
      badge: 'Exclusive',
      inStock: false
    },
    {
      id: 7,
      name: 'Curved Display 55"',
      category: 'indoor',
      price: 1199,
      originalPrice: 1499,
      rating: 4.7,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&h=300&fit=crop',
      features: ['Curved Design', 'Ultra Wide', 'HDR Support'],
      badge: 'Trending',
      inStock: true
    },
    {
      id: 8,
      name: 'Outdoor Totem 75"',
      category: 'outdoor',
      price: 2499,
      originalPrice: 2999,
      rating: 4.9,
      reviews: 45,
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop',
      features: ['Double Sided', 'Cooling System', 'Remote Control'],
      badge: 'Professional',
      inStock: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const getBadgeColor = (badge) => {
    const colors = {
      'Best Seller': 'bg-gradient-to-r from-yellow-400 to-orange-500',
      'New': 'bg-gradient-to-r from-green-400 to-blue-500',
      'Hot Deal': 'bg-gradient-to-r from-red-400 to-pink-500',
      'Premium': 'bg-gradient-to-r from-purple-400 to-indigo-500',
      'Popular': 'bg-gradient-to-r from-blue-400 to-cyan-500',
      'Exclusive': 'bg-gradient-to-r from-gray-400 to-gray-600',
      'Trending': 'bg-gradient-to-r from-pink-400 to-rose-500',
      'Professional': 'bg-gradient-to-r from-indigo-400 to-purple-500'
    };
    return colors[badge] || 'bg-gradient-to-r from-gray-400 to-gray-500';
  };

  const ProductCard = ({ product, index }) => (
    <div
      className={`group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
        hoveredProduct === product.id ? 'scale-105 z-10' : ''
      }`}
      onMouseEnter={() => setHoveredProduct(product.id)}
      onMouseLeave={() => setHoveredProduct(null)}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Product Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-bold ${getBadgeColor(product.badge)} shadow-lg`}>
          {product.badge}
        </div>
        
        {/* Stock Status */}
        <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium ${
          product.inStock 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </div>
        
        {/* Hover Actions */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
            <Eye className="w-5 h-5 text-gray-700" />
          </button>
          <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
            <Heart className="w-5 h-5 text-gray-700" />
          </button>
          <button className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full hover:from-green-600 hover:to-blue-700 transition-all shadow-lg">
            <ShoppingCart className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
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
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
        
        {/* Features */}
        {/* <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {product.features.map((feature, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        </div> */}
        
        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              ${product.price}
            </span>
            <span className="text-lg text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          </div>
          <Link to='/products/detail' className="group/btn bg-gradient-to-r from-green-500 to-blue-600 text-white px-3 py-1 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2">
            <EyeIcon/>
          </Link>
        </div>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
    

      <div className="max-w-7xl mx-auto px-4 py-14">

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-15 ">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Filters</h2>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Categories</label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-500'
                          : 'hover:bg-gray-50 border-2 border-transparent'
                      }`}
                    >
                      <span className={`font-medium ${
                        selectedCategory === category.id ? 'text-green-600' : 'text-gray-700'
                      }`}>
                        {category.name}
                      </span>
                      <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Price Range</label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="0"
                      max="3000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 font-medium">
                    {filteredProducts.length} products found
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === 'grid' 
                          ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === 'list' 
                          ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-700">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
            
            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductPage