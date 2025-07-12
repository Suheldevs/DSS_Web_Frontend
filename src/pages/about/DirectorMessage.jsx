import React, { useState, useEffect } from "react";
import { Quote, ArrowRight, CheckCircle, Star, Users, Award, Target, Heart, Lightbulb, Trophy } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";

const DirectorMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const achievements = [
    { icon: Trophy, text: "18+ Years of Industry Leadership", color: "text-yellow-500" },
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
      

      {/* Main Message Section - Black Background */}
      <section className="py-16 border-t-4 border-white bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Director Profile */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-8 text-center border border-gray-700">
                <div className="w-32 h-32 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="text-4xl font-bold text-white">DS</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Director</h3>
                <p className="text-green-400 font-semibold mb-4">Founder & CEO</p>
                <div className="text-gray-300 text-sm">
                  <p className="mb-2">3S Digital Signage Solutions UP</p>
                  <p>Established 2006 • Lucknow, UP</p>
                </div>
                
                {/* Quick Stats */}
                <div className="mt-8 space-y-3">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div key={index} className="flex items-center text-left">
                        <IconComponent className={`h-5 w-5 ${achievement.color} mr-3 flex-shrink-0`} />
                        <span className="text-gray-300 text-sm">{achievement.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 h-16 w-16 text-green-600 opacity-20" />
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-8 border border-gray-700">
                  <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p className="text-lg font-medium text-white">
                      Dear Valued Clients, Partners, and Team Members,
                    </p>
                    
                    <p className="text-lg">
                      When I founded <strong className="text-green-400">3S Digital Signage Solutions UP</strong> in 2006 
                      in the heart of Lucknow, I had a simple yet ambitious vision: to transform how businesses 
                      communicate with their audiences through the power of digital signage.
                    </p>
                    
                    <p className="text-lg">
                      Over the past <strong className="text-blue-400">18 years</strong>, we've grown from a small 
                      startup to one of Uttar Pradesh's most trusted digital signage providers. This journey wouldn't 
                      have been possible without the trust of our <strong className="text-green-400">2000+ clients</strong> 
                      who believed in our capabilities and the dedication of our exceptional team.
                    </p>
                    
                    <p className="text-lg">
                      What drives me every day is seeing how our solutions help businesses tell their stories more 
                      effectively. Whether it's a small retail store in Lucknow or a large corporate campaign across 
                      multiple cities, each project represents an opportunity to create meaningful connections between 
                      brands and their audiences.
                    </p>
                    
                    <p className="text-lg">
                      Our commitment extends beyond just delivering projects—we're building lasting partnerships. 
                      From the initial consultation to post-installation support, we ensure every client receives 
                      personalized attention and solutions tailored to their unique needs.
                    </p>
                    
                    <p className="text-lg">
                      As we look toward the future, I'm excited about the innovations in digital display technology 
                      and how they'll enable us to create even more impactful experiences. Our investment in 
                      cutting-edge technology and continuous team development ensures we'll continue leading the 
                      digital signage revolution in North India.
                    </p>
                    
                    <div className="border-l-4 border-green-500 pl-6 my-8">
                      <p className="text-xl font-semibold text-white italic">
                        "Success isn't just about completing projects—it's about creating solutions that drive 
                        real results for our clients and contribute to their growth story."
                      </p>
                    </div>
                    
                    <p className="text-lg">
                      Thank you for being part of our journey. Together, we'll continue to push the boundaries of 
                      what's possible in digital signage and create experiences that truly matter.
                    </p>
                    
                    <div className="pt-6 border-t border-gray-700">
                      <p className="text-white font-semibold text-lg">With gratitude and excitement for the future,</p>
                      <div className="mt-4">
                        <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                          Director's Signature
                        </div>
                        <p className="text-gray-400 mt-1">Founder & CEO, 3S Digital Signage Solutions UP</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 mb-4">
              Our Core{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
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
                  className={`bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
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
      <section className="py-16 bg-neutral-950">
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
                <Star className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
                <p className="text-lg leading-relaxed">
                  To continue delivering exceptional digital signage solutions that not only meet but exceed 
                  your expectations, while building lasting partnerships that drive mutual success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - White Background */}
      <section className="py-16 bg-white">
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
      </section>
    </div>
        </>
  );
};

export default DirectorMessage;