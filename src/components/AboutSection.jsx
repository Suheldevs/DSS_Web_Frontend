import React, { useState, useEffect } from 'react';
import { 
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const AboutSection = () => {
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

    const duration = 5000;
    const steps = 50;
    const interval = duration / steps;

    targets.projects && setTimeout(() => {
      let current = 0;
      const timer = setInterval(() => {
        current += targets.projects / steps;
        if (current >= targets.projects) {
          current = targets.projects;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          projects: Math.floor(current),
          clients: Math.floor((current / targets.projects) * targets.clients),
          experience: Math.floor((current / targets.projects) * targets.experience),
          branches: Math.floor((current / targets.projects) * targets.branches)
        }));
      }, interval);
    }, 500);
  }, []);

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
    // {
    //   src: "https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   title: "Corporate Digital Signage",
    //   category: "Corporate"
    // },
    // {
    //   src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   title: "Restaurant Menu Display",
    //   category: "Hospitality"
    // }
  ];

 

  const tabContent = {
    story: {
      title: "Our Story",
      content: "Founded in 2006 in Lucknow, Digital Signage Solutions UP has been pioneering the digital signage industry for over 18 years. What started as a small venture has grown into the region's most trusted name in digital display solutions, serving over 200 clients across multiple industries."
    },
    mission: {
      title: "Our Mission",
      content: "To transform how businesses communicate with their audiences through innovative digital signage solutions. We believe in creating impactful visual experiences that drive engagement, enhance brand presence, and deliver measurable results for our clients."
    },
    vision: {
      title: "Our Vision",
      content: "To be the leading digital signage solutions provider in India, setting new standards for innovation, quality, and customer satisfaction. We envision a future where every business leverages the power of digital displays to create meaningful connections."
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Digital Signage Solutions UP</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leading the digital revolution in Uttar Pradesh with innovative signage solutions that transform businesses and captivate audiences.
          </p>
        </div>

      

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-x-12 items-center ">
          
          {/* Left Content */}
          <div>
            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
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
            <div className="my-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {tabContent[activeTab].content}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4 mb-6">
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                <span>More About Us</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              {/* <button className="group flex items-center justify-center px-8 py-4 bg-transparent border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300">
                <Play className="mr-2 h-5 w-5" />
                <span>Watch Our Story</span>
              </button> */}
            </div>
          </div>

          {/* Right Content - Portfolio Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 ">
              {portfolioImages.slice(0, 1).map((image, index) => (
                <div key={index} className={`relative group overflow-hidden rounded-xl ${
                  index === 0 ? 'col-span-2 h-60' : 'h-32'
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
            {/* Stats Section */}
        <div className="grid grid-cols-2  gap-6 mt-8">
          {[
            { number: counters.projects, label: "Projects Completed", suffix: "+" },
            { number: counters.clients, label: "Happy Clients", suffix: "+" },
            { number: counters.experience, label: "Years Experience", suffix: "" },
            { number: counters.branches, label: "Branches", suffix: "" }
          ].map((stat, index) => (
            <div key={index} className="text-center group  ">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-`translate-y-2">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
          </div>
        </div>

         

       
      </div>
    </section>
  );
};

export default AboutSection;