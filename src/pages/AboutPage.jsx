import React, { useState, useEffect } from 'react';
import { 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Users,
  Clock,
  MapPin,
  Phone,
  Mail,
  Settings,
  Eye,
  Wrench,
  Building,
  Lightbulb,
  Shield,
  Target,
  TrendingUp,
  Zap
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import TimelineSection from '../components/About/TimelineSection';
import TextMarquee from '../components/TextMarquee';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    branches: 0
  });

  // Animate counters
  useEffect(() => {
    const targets = {
      projects: 500,
      clients: 200,
      experience: 18,
      branches: 5
    };

    const duration = 3000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev };
        let allComplete = true;

        Object.keys(targets).forEach(key => {
          if (newCounters[key] < targets[key]) {
            newCounters[key] = Math.min(
              newCounters[key] + Math.ceil(targets[key] / steps),
              targets[key]
            );
            allComplete = false;
          }
        });

        if (allComplete) {
          clearInterval(timer);
        }
        
        return newCounters;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const tabContent = {
    story: {
      title: "Our Story",
      content: "Founded in 2006 in Lucknow, Digital Signage Solutions UP has been pioneering the digital signage industry for over 18 years. What started as a small venture has grown into the region's most trusted name in digital display solutions, serving over 200 clients across multiple industries with cutting-edge technology and unmatched expertise."
    },
    mission: {
      title: "Our Mission",
      content: "To transform how businesses communicate with their audiences through innovative digital signage solutions. We believe in creating impactful visual experiences that drive engagement, enhance brand presence, and deliver measurable results for our clients across various industries."
    },
    vision: {
      title: "Our Vision",
      content: "To be the leading digital signage solutions provider in India, setting new standards for innovation, quality, and customer satisfaction. We envision a future where every business leverages the power of digital displays to create meaningful connections with their audience."
    }
  };

  const strengths = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "In-House Production",
      description: "Complete in-house production capabilities with skilled technicians and state-of-the-art equipment, ensuring quality control and faster turnaround times."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Customization",
      description: "Tailored solutions to meet specific customer needs and preferences, enhancing satisfaction and loyalty while increasing product value and differentiation."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "After Sales Service",
      description: "Comprehensive post-installation support with professional maintenance services and technically trained personnel for long-term project efficiency."
    }
  ];

  const services = [
    {
      icon: <Building className="h-6 w-6" />,
      title: "Outdoor Signage",
      description: "Weather-resistant outdoor displays for businesses, billboards, and advertising campaigns with high visibility and durability."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "High Rise Signage",
      description: "Specialized signage solutions for tall buildings and skyscrapers, designed for maximum impact and visibility from distance."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Indoor Signage",
      description: "Professional indoor displays perfect for office settings, retail spaces, and business environments with sleek, attractive designs."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Neon Plate Signage",
      description: "Energy-efficient LED neon alternatives for advertising, entertainment, and artistic purposes with customizable shapes and designs."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Navigation Signage",
      description: "Wayfinding solutions with clear symbols, maps, and directional elements for airports, hospitals, malls, and corporate campuses."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Industrial Signage",
      description: "Specialized signage for industrial settings communicating safety information, warnings, instructions, and operational guidelines."
    }
  ];

  const portfolioImages = [
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "LED Video Wall Installation",
      category: "Commercial"
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Interactive Digital Kiosk",
      category: "Retail"
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Outdoor Digital Billboard",
      category: "Advertising"
    },
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Corporate Digital Signage",
      category: "Corporate"
    }
  ];

  return (
    <>
    <Breadcrumb 
  title="About 3S Digital Signage Solution "
  items={[
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about-us' }
  ]}
/>



    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full opacity-20 -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 translate-x-48 translate-y-48"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Digital Signage Solutions
              <span className="block text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text">
                We're Creators
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Leading signage solution provider with expertise in designing and installing high-quality signage for businesses of all sizes and industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="group flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-full hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span>Get A Quote</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-full border-2 border-green-200 hover:border-green-600 transition-all duration-300 shadow-lg">
                <Phone className="mr-2 h-5 w-5" />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                {/* <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Digital Signage Display"
                  className="w-24 h-24 object-cover rounded-2xl shadow-lg"
                /> */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">About Our Company</h2>
                  <p className="text-green-600 font-semibold">Since 2006</p>
                </div>
              </div>
              
              <div className="prose prose-lg text-gray-600">
                <p>
                  DSS- Digital Signage Solutions is one of the leading signage solution provider company. We have experience in designing and installing high-quality signage for businesses of all sizes and industries.
                </p>
                <p>
                  Whether you need indoor or outdoor signs, banners, decals, or vehicle wraps, we have the expertise and experience to deliver high-quality products that meet your needs and budget. We use the latest technology and materials to ensure your signs are durable, attractive, and compliant with local regulations.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-green-700 font-medium">Latest Technology</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-700 font-medium">Competitive Prices</span>
                </div>
               
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: counters.projects, label: "Projects Completed", suffix: "+", color: "green" },
                { number: counters.clients, label: "Happy Clients", suffix: "+", color: "blue" },
                { number: counters.experience, label: "Years Experience", suffix: "", color: "purple" },
                { number: counters.branches, label: "Branches", suffix: "", color: "orange" }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                    <div className={`text-4xl font-bold mb-2 ${
                      stat.color === 'green' ? 'text-green-600' :
                      stat.color === 'blue' ? 'text-blue-600' :
                      stat.color === 'purple' ? 'text-purple-600' : 'text-orange-600'
                    }`}>
                      {stat.number}{stat.suffix}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <TextMarquee/>
      <div className='relative max-w-7xl mx-auto px-6 lg:px-8'>

<TimelineSection/>
      </div>
      {/* Our Strength Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Strength</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-green-600">
                    {strength.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{strength.title}</h3>
                <p className="text-gray-600 leading-relaxed">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              {/* Tab Navigation */}
              <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8">
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 capitalize ${
                      activeTab === tab
                        ? 'bg-white text-green-600 shadow-md'
                        : 'text-gray-600 hover:text-green-600'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {tabContent[activeTab].content}
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                {[
                  "One-stop customized digital signage solutions",
                  "Expertise in LED walls, indoor & outdoor displays",
                  "Turnkey solutions from concept to installation",
                  "24/7 technical support and maintenance",
                  "Serving businesses across multiple industries"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Portfolio Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {portfolioImages.map((image, index) => (
                  <div key={index} className={`relative group overflow-hidden rounded-xl ${
                    index === 0 ? 'col-span-2 h-60' : 'h-40'
                  }`}>
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-sm font-medium">{image.title}</div>
                        <div className="text-xs text-gray-300">{image.category}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-1" />
                  <span>Since 2006</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Main Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital signage solutions for every business need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-green-600">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            We Build Professional and
            <span className="block">Digital Signage</span>
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Transform your business communication with our innovative digital signage solutions
          </p>
          <button className="bg-white text-green-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            GET A QUOTE
          </button>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-green-400 mb-2" />
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-gray-300">Lucknow, Uttar Pradesh</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-green-400 mb-2" />
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-gray-300">+91 XXXXX XXXXX</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-green-400 mb-2" />
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-gray-300">info@dsssolutions.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default AboutPage;