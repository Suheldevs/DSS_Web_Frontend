import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Truck, Shield, RefreshCw, Share2, Eye, ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedSize, setSelectedSize] = useState('medium');
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);

  const images = [
    'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=800&fit=crop'
  ];

  const sizes = [
    { id: 'small', name: 'Small', dimensions: '24" × 18"', price: 299 },
    { id: 'medium', name: 'Medium', dimensions: '36" × 24"', price: 399 },
    { id: 'large', name: 'Large', dimensions: '48" × 36"', price: 599 },
    { id: 'xl', name: 'Extra Large', dimensions: '60" × 48"', price: 799 }
  ];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  const getCurrentPrice = () => {
    return sizes.find(size => size.id === selectedSize)?.price || 399;
  };

  return (
    <>
<Breadcrumb 
  title="Product Detail Page"
  items={[
    { label: 'Home', link: '/' },
    { label: 'Products', link: '/products' }
  ]}
/>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              <div 
                className="relative aspect-square cursor-crosshair"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsZooming(true)}
                onMouseLeave={() => setIsZooming(false)}
              >
                <img
                  src={images[selectedImage]}
                  alt="Digital Signage Display"
                  className="w-full h-full object-cover transition-transform duration-300"
                />
                {isZooming && (
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle 150px at ${zoomPosition.x}% ${zoomPosition.y}%, transparent 0%, rgba(0,0,0,0.1) 100%)`
                    }}
                  />
                )}
              </div>
              
              {/* Zoom View */}
              {isZooming && (
                <div className="absolute top-4 right-4 w-48 h-48 bg-white rounded-xl shadow-2xl border-2 border-gray-200 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url(${images[selectedImage]})`,
                      backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                      backgroundSize: '250%'
                    }}
                  />
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-3">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                    selectedImage === index 
                      ? 'ring-2 ring-green-500 ring-offset-2' 
                      : 'hover:ring-2 hover:ring-blue-300 hover:ring-offset-2'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Product Title & Rating */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Premium Digital Signage Display
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">4.8 (127 reviews)</span>
                </div>
                <span className="text-green-600 font-medium">In Stock</span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Professional-grade LED display perfect for retail, corporate, and hospitality environments. 
                Features 4K resolution, smart connectivity, and energy-efficient design.
              </p>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
              <div className="flex items-baseline space-x-2 mb-2">
                <span className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  ${getCurrentPrice()}
                </span>
                <span className="text-lg text-gray-500 line-through">$899</span>
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Save 33%
                </span>
              </div>
              <p className="text-sm text-gray-600">Free shipping on orders over $299</p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Size Options</h3>
              <div className="grid grid-cols-2 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      selectedSize === size.id
                        ? 'border-green-500 bg-gradient-to-r from-green-50 to-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">{size.name}</div>
                      <div className="text-sm text-gray-600">{size.dimensions}</div>
                      <div className="text-lg font-bold text-green-600">${size.price}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-lg font-medium text-gray-900">Quantity:</span>
                <div className="flex items-center border-2 border-gray-200 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    isWishlisted
                      ? 'border-red-500 bg-red-50 text-red-600'
                      : 'border-gray-200 hover:border-red-300 text-gray-600'
                  }`}
                >
                  <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Free Shipping</div>
                    <div className="text-sm text-gray-600">2-3 business days</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">3-Year Warranty</div>
                    <div className="text-sm text-gray-600">Full coverage</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">30-Day Returns</div>
                    <div className="text-sm text-gray-600">Easy returns</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Display</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• 4K Ultra HD Resolution</li>
                <li>• LED Backlight</li>
                <li>• 500 nits brightness</li>
                <li>• 178° viewing angle</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Connectivity</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Wi-Fi 6 & Ethernet</li>
                <li>• HDMI 2.1</li>
                <li>• USB-C & USB-A</li>
                <li>• Bluetooth 5.0</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Power</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Energy Star Certified</li>
                <li>• 85W power consumption</li>
                <li>• Auto power scheduling</li>
                <li>• Remote power control</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Installation</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• VESA mount compatible</li>
                <li>• Portrait/landscape modes</li>
                <li>• Tool-free installation</li>
                <li>• Cable management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetailPage;