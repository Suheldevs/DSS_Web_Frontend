import React, { useState, useMemo } from 'react';
import { Search, Grid, Eye, Monitor } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { useGetAllProductsQuery } from '../api/product.api';

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { data: apiResponse, isLoading, isError } = useGetAllProductsQuery();

  // Extract products from API response
  const products = apiResponse?.data || [];

  // Generate dynamic categories from actual product data
  const categories = useMemo(() => {
    if (!products.length) {
      return [{ id: 'all', name: 'All Products', count: 0 }];
    }

    // Count products by category
    const categoryCount = products.reduce((acc, product) => {
      const category = product.category || 'Uncategorized';
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});

    // Create categories array
    const dynamicCategories = [
      { id: 'all', name: 'All Products', count: products.length }
    ];

    Object.entries(categoryCount).forEach(([categoryName, count]) => {
      dynamicCategories.push({
        id: categoryName.toLowerCase().replace(/\s+/g, '-'),
        name: categoryName,
        count: count
      });
    });

    return dynamicCategories;
  }, [products]);

  // Filter products based on selected category and search term
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'all' || 
        (product.category && product.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory);
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchTerm]);

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


  const getProductImage = (product) => {
    if (product.images && product.images.length > 0) {
      return product.images[0].public_url;
    }
    // Fallback image
    return 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop';
  };


  const stripHtmlTags = (html) => {
    if (!html) return '';
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
   
      <div className="relative aspect-square overflow-hidden">
        <img
          src={getProductImage(product)}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop';
          }}
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link 
            to={`/products/${product.slug}`}
            className="bg-white/90 backdrop-blur-sm text-green-700 px-4 py-2 rounded-lg hover:bg-white transition-colors font-medium flex items-center space-x-2"
          >
            <Eye className="w-4 h-4" />
            <span>View Details</span>
          </Link>
        </div>
         {/* Category Badge */}
        {product.category && (
          <div className="mb-3 absolute z-20 top-1 left-1">
            <span className="inline-block px-2 py-1 bg-gradient-to-r from-green-500 to-blue-600 text-white  text-xs font-medium rounded-full">
              {product.category}
            </span>
          </div>
        )}
        <div className=" absolute z-10 bottom-0 w-full p-2">
    <div className="p-2 text-center bg-white/50 backdrop-blur-[2px] rounded">
      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
        {product.title}
      </h3>
    </div>
  </div>
      </div>
      
      {/* Product Info */}
      {/* <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
          {product.title}
        </h3>
        <Link 
          to={`/products/${product.slug}`}
          className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 text-sm font-medium"
        >
          <Eye className="w-4 h-4" />
          <span>View Details</span>
        </Link>
      </div> */}
    </div>
  );


  if (isLoading) {
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
            <div className="text-center py-12">
              <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading products...</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Error state
  if (isError) {
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
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Error loading products</h3>
              <p className="text-gray-600">Please try again later</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumb 
        title="Our Digital Signage Solutions"
        items={[
          { label: 'Home', link: '/' },
          { label: 'Products', link: '/products' }
        ]}
      />
      
      <div className="min-h-screen ">
        <div className="max-w-7xl mx-auto px-4 py-8">
          
          {/* Header with Search and Filters */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 mb-6 border border-gray-100">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
              
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg f bg-white/90"
                />
              </div>
            
            
            
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-2 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-white/70 text-gray-700 hover:bg-gradient-to-r hover:from-green-100 hover:to-blue-100 border border-gray-200'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-80">({category.count})</span>
                </button>
              ))}
            </div>
            </div>
          </div>

          {/* Products Grid - Always 4 per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          
          {/* No Results */}
          {filteredProducts.length === 0 && !isLoading && (
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