import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Star,
  Heart,
  ShoppingCart,
  Truck,
  Shield,
  RefreshCw,
  Share2,
  Eye,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import { useGetProductBySlugQuery } from "../api/product.api";
import { Link } from "react-router-dom";
import Loader from "../utils/Loader";
const ProductDetailPage = () => {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);

  // Fetch product data by slug
  const {
    data: apiResponse,
    isLoading,
    isError,
  } = useGetProductBySlugQuery(slug);
  const product = apiResponse?.data;
  console.log(apiResponse);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  // Get product images with fallback
  const getProductImages = () => {
    if (product?.images && product.images.length > 0) {
      return product.images.map((img) => img.public_url);
    }
    // Fallback images if no images available
    return [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=800&fit=crop",
    ];
  };

  // Strip HTML from description
  const stripHtmlTags = (html) => {
    if (!html) return "";
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

 
  // Format date for breadcrumb or display
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString();
  };

  // Loading state
  if (isLoading) {
    return (
      <>
        <Breadcrumb
          title="Product Details"
          items={[
            { label: "Home", link: "/" },
            { label: "Products", link: "/products" },
            { label: "Loading...", link: "#" },
          ]}
        />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <Loader />
        </div>
      </>
    );
  }

  // Error state
  if (isError || !product) {
    return (
      <>
        <Breadcrumb
          title="Product Not Found"
          items={[
            { label: "Home", link: "/" },
            { label: "Products", link: "/products" },
            { label: "Not Found", link: "#" },
          ]}
        />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Product not found
              </h3>
              <p className="text-gray-600">
                The product you're looking for doesn't exist or has been
                removed.
              </p>
              <a
                href="/products"
                className="mt-4 inline-block bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300"
              >
                Back to Products
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  const images = getProductImages();

  return (
    <>
      <Breadcrumb
        title={product.title}
        items={[
          { label: "Home", link: "/" },
          { label: "Products", link: "/products" },
          { label: product.title, link: `#` },
        ]}
      />
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative bg-white h-96 rounded-2xl shadow-lg overflow-hidden">
                <div
                  className="relative aspect-square cursor-crosshair"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setIsZooming(true)}
                  onMouseLeave={() => setIsZooming(false)}
                >
                  <img
                    src={images[selectedImage]}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=800&fit=crop";
                    }}
                  />
                  {isZooming && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle 150px at ${zoomPosition.x}% ${zoomPosition.y}%, transparent 0%, rgba(0,0,0,0.1) 100%)`,
                      }}
                    />
                  )}
                </div>

                {/* Zoom View */}
                {isZooming && (
                  <div className="absolute top-4 right-4 w-36 h-36 bg-white rounded-xl shadow-2xl border-2 border-gray-200 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-no-repeat"
                      style={{
                        backgroundImage: `url(${images[selectedImage]})`,
                        backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                        backgroundSize: "250%",
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              {images.length > 1 && (
                <div className="flex space-x-3 overflow-x-auto">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative w-18 h-18 rounded-lg overflow-hidden transition-all duration-300 flex-shrink-0 ${
                        selectedImage === index
                          ? "ring-2 ring-green-500 ring-offset-2"
                          : "hover:ring-2 hover:ring-blue-300 hover:ring-offset-2"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} view ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop";
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              {/* Product Title & Category */}
              <div>
                {product.category && (
                  <div className="">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 text-sm font-medium rounded-full">
                      {product.category}
                    </span>
                  </div>
                )}
                <h1 className="text-3xl font-bold text-gray-900 mt-2">
                  {product.title}
                </h1>

                <div className="grid grid-cols-1 mt-3 sm:grid-cols-2 gap-1">
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-800">
                      Material:
                    </span>
                    <span className="text-gray-900">Aluminium</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-800">Color:</span>
                    <span className="text-gray-900">Black</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-800">Size:</span>
                    <span className="text-gray-900">120 x 80 cm</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-800">Weight:</span>
                    <span className="text-gray-900">15 Kg</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-800">
                      Warranty:
                    </span>
                    <span className="text-gray-900">2 Years</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  Why Choose Us
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Truck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Free Consultation
                      </div>
                      <div className="text-sm text-gray-600">
                        Expert guidance
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Quality Assured
                      </div>
                      <div className="text-sm text-gray-600">
                        Premium products
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        Full Support
                      </div>
                      <div className="text-sm text-gray-600">
                        24/7 assistance
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Contact for Price */}
              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>

              {/* Product Info */}
              {/* {(product.createdAt || product.updatedAt) && (
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {product.createdAt && (
                      <div>
                        <span className="font-medium text-gray-900">Added:</span>
                        <span className="text-gray-600 ml-2">{formatDate(product.createdAt)}</span>
                      </div>
                    )}
                    {product.updatedAt && (
                      <div>
                        <span className="font-medium text-gray-900">Updated:</span>
                        <span className="text-gray-600 ml-2">{formatDate(product.updatedAt)}</span>
                      </div>
                    )}
                  </div>
                </div>
              )} */}
            </div>
          </div>

          {/* Additional Information */}
          {product?.description ? (
            <div className="mt-4  blog"
            dangerouslySetInnerHTML={{ __html: product.description }}
            >
               
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
