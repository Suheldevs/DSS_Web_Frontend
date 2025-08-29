import React from "react";
import { useParams } from "react-router-dom";
import { Star, CheckCircle, Phone, Mail } from "lucide-react";
import serviceData from "../data/ServiceData";
import Breadcrumb from "../components/Breadcrumb";
import WhyChooseUs from "../components/WhyChooseUs";
import HowWeWork from "../components/HowWeWork";
import { Link } from "react-router-dom";
import pattern from "../assets/pattern/pattern12.jpg";
const ServiceDetailPage = () => {
  const { slug } = useParams();
  console.log(slug);
  const service = serviceData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-700">Service not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <Breadcrumb
        title={service.title}
        items={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/services" },
          { label: service.title, link: `/services/${slug}` },
        ]}
      />

      {/* Overview Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
            {/* Text */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Service Overview
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {service.overview}
              </p>
            </div>

            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-lg h-full">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-neutral-950">
        <div className="container text-center mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white ">
            Our {service.title}{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4"></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {service.services.map((svc, index) => (
              <div
                key={index}
                className="bg-white z-10 relative rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden"
                  style={{
                    backgroundImage: `url(${pattern})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.6,
                    zIndex: -1,
                  }}
                ></div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {svc.title}
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {svc.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {svc.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <HowWeWork />
      {/* CTA Section */}
      <section className="py-10 bg-white text-black">
        <div className="container mx-auto bg-black/5 border border-gray-200 rounded-full py-10 backdrop-blur-2xl px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Get Started?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your signage needs and create something amazing
            together. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6386901011"
              target="_blank"
              className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <Link
              to="/contact"
              className="border-2 border-green-500 bg-green-500 text-white px-6 py-3 rounded-full font-semibold  transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
