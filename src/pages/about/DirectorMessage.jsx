import React, { useState, useEffect } from "react";
import { Quote, ArrowRight, CheckCircle, Star, Users, Award, Target, Heart, Lightbulb, Trophy } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import ServiceSection from '../../components/ServiceSection'
import pattern from "../../assets/pattern/pattern12.jpg";
const DirectorMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const achievements = [
    { icon: Trophy, text: "18+ Years of Industry Leadership", color: "text-green-500" },
    { icon: Users, text: "2000+ Satisfied Clients", color: "text-blue-500" },
    { icon: Award, text: "500+ Successful Projects", color: "text-green-500" },
    { icon: Target, text: "15+ Cities Served", color: "text-purple-500" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make is centered around delivering exceptional value to our clients.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously embrace new technologies to stay ahead of industry trends.",
    },
    {
      icon: CheckCircle,
      title: "Quality Excellence",
      description: "Our commitment to quality ensures every project exceeds expectations.",
    },
    {
      icon: Star,
      title: "Trust & Integrity",
      description: "Building long-term relationships through transparency and reliability.",
    },
  ];

  return (
    <>
    <Breadcrumb 
  title="Director's Message"
  items={[
    { label: 'Home', link: '/' },
    { label: 'Message', link: '/about/director-message' }
  ]}
/>

    <div className="min-h-screen">
      

  {/* Main Message Section - Light Background */}
  <section className="py-8 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="relative">
        {/* Quote Icons */}
        <div className="absolute -top-4 -left-4 text-6xl text-green-400 font-serif">"</div>
        <div className="absolute -bottom-4 -right-4 text-6xl text-green-400 font-serif transform rotate-180">"</div>

        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200 relative z-10">
          <div className="grid grid-cols-12 gap-4 items-center">
            {/* Profile Image - Left Side */}
            <div className="col-span-12 lg:col-span-4 flex justify-center">
              <div className="relative w-80 h-80">
                <div className="w-full h-full rounded-full border-4 border-green-400 overflow-hidden">
                  <img 
                    src="/api/placeholder/300/300" 
                    alt="Director" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Message Content - Right Side */}
            <div className="col-span-12 lg:col-span-8">
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  At <strong className="text-gray-800">3S Digital Signage Solutions</strong>, we believe that every display we create and every system we implement tells a story — a story of innovation, clarity, and impact. Our journey has been shaped by a commitment to quality, trust, and timely delivery. From concept to deployment, we focus on creating signage solutions that are not only functional but also visually captivating.
                </p>
                
                <p className="text-lg">
                  Whether it's an outdoor LED board, indoor digital kiosk, or custom high-rise signage, our team ensures that every detail reflects excellence. We value our clients' vision and strive to bring it to life with integrity, technology, and craftsmanship.
                </p>
                
                <p className="text-lg">
                  With every project, our goal is to exceed expectations and build relationships that last. Thank you for trusting us with your brand visibility. We look forward to illuminating the future — together.
                </p>

                {/* Signature Section */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-800 mb-1">
                        Director name
                      </div>
                      <p className="text-gray-600">Director | 3S Digital Signage Solutions</p>
                    </div>
                    <div className="w-px h-16 bg-green-400"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Right */}
          </div>
        </div>
      </div>
    </div>
  </section>
<div className="">
  <ServiceSection/>
</div>
      {/* Our Values Section - White Background */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 mb-2">
              Our Core{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-2"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className={`z-20 relative p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                 <div
                     className="absolute inset-0 "
                     style={{
                       backgroundImage: `url(${pattern})`,
                       backgroundSize: "cover",
                       backgroundPosition: "center",
                       opacity:0.6,
                       zIndex: -1
                     }}
                   ></div>
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-950 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Forward Section - Black Background */}
      {/* <section className="py-16 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Looking{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Forward
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Our Commitment to the Future</h3>
              <div className="space-y-4">
                {[
                  "Continuous innovation in digital display technology",
                  "Expanding our reach across North India",
                  "Building stronger partnerships with global technology providers",
                  "Investing in team development and training",
                  "Contributing to the digital transformation of local businesses",
                ].map((commitment, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{commitment}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
                <Star className="h-16 w-16 mx-auto mb-4 text-green-300" />
                <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
                <p className="text-lg leading-relaxed">
                  To continue delivering exceptional digital signage solutions that not only meet but exceed 
                  your expectations, while building lasting partnerships that drive mutual success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action Section - White Background */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 mb-4">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to transform your brand's visual communication? Our team is here to bring your vision to life 
              with cutting-edge digital signage solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                <span>Start Your Project</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-all duration-300">
                <span>Schedule a Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
        </>
  );
};

export default DirectorMessage;