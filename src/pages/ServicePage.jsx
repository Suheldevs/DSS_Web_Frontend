import React from "react";
import {
  Store,
  Home,
  Building2,
  Navigation,
  Radio,
  Zap,
  ArrowRight,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import services from "../data/ServiceData.jsx";
import pattern from "../assets/pattern/pattern12.jpg";
const ServicePage = () => {
  return (
    <>
      <Breadcrumb
        title="Our Signage Services"
        items={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/services" },
        ]}
      />
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group relative z-10 bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{
                      backgroundImage: `url(${pattern})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      opacity: 0.4,
                      zIndex: -1,
                    }}
                  ></div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 text-white h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-500 mb-4 transition-colors duration-300 text-center">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 group-hover:text-grren-500/95 mb-6 text-center leading-relaxed transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Read More Button */}
                    <div className="flex items-center justify-center">
                      <Link
                        to={`/services/${service?.slug}`}
                        className="flex items-center space-x-2 text-emerald-600 group-hover:text-green-500 font-medium transition-colors duration-300 group-hover:transform group-hover:translate-x-1"
                      >
                        <span>READ MORE</span>
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
