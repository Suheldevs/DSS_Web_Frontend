import React from 'react';
import { useParams } from 'react-router-dom';
import { 
  Star,
  CheckCircle,
  Phone,
  Mail,
} from 'lucide-react';
import serviceData from '../data/ServiceData';
import Breadcrumb from '../components/Breadcrumb';

const ServiceDetailPage = () => {
  const { slug } = useParams(); 
  console.log(slug)
const service = serviceData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-700">
          Service not found
        </h2>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Service Overview</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {service.overview}
              </p>
            </div>
            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-6">Our Services</h3>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {service.services.map((svc, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{svc.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{svc.description}</p>
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Process</h3>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {service.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-teal-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us</h3>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm">
                <div className="bg-teal-100 p-2 rounded-lg flex-shrink-0">
                  <Star className="w-6 h-6 text-teal-600" />
                </div>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-500 via-teal-600 to-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Get Started?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your signage needs and create something amazing together. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-teal-600 transition-colors duration-300 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Get Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
