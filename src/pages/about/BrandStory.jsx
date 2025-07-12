import React, { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, Star, Lightbulb, Award, Users, Target, Zap, Heart, Calendar, MapPin, Trophy } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import TimelineSection from "../../components/About/TimelineSection";

const BrandStory = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    branches: 0,
    cities: 0,
    awards: 0,
  });

  // Animate counters
  useEffect(() => {
    const targets = {
      projects: 500,
      clients: 200,
      experience: 18,
      branches: 5,
      cities: 15,
      awards: 25,
    };

    const duration = 5000;
    const steps = 50;
    const interval = duration / steps;

    targets.projects &&
      setTimeout(() => {
        let current = 0;
        const timer = setInterval(() => {
          current += targets.projects / steps;
          if (current >= targets.projects) {
            current = targets.projects;
            clearInterval(timer);
          }
          setCounters((prev) => ({
            ...prev,
            projects: Math.floor(current),
            clients: Math.floor((current / targets.projects) * targets.clients),
            experience: Math.floor(
              (current / targets.projects) * targets.experience
            ),
            branches: Math.floor(
              (current / targets.projects) * targets.branches
            ),
            cities: Math.floor((current / targets.projects) * targets.cities),
            awards: Math.floor((current / targets.projects) * targets.awards),
          }));
        }, interval);
      }, 500);
  }, []);

  return (
    <>
    <Breadcrumb 
  title="Our Brand Story"
  items={[
    { label: 'Home', link: '/' },
    { label: 'Our Story', link: '/about/story' }
  ]}
/>
    
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4">
      <TimelineSection/>
      </div>

      {/* Origin Story Section - Black Background */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Calendar className="h-8 w-8 text-green-400 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Where It All Began
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  In <strong className="text-green-400">2006</strong>, in the historic City of Nawabs – Lucknow, 
                  a vision was born. What started as a small venture with big dreams has transformed into 
                  <strong className="text-blue-400"> 3S Digital Signage Solutions UP</strong>, 
                  one of the region's most trusted names in digital display technology.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Our founders recognized the growing need for impactful visual communication in the digital age. 
                  With determination and a commitment to excellence, we began crafting solutions that would 
                  revolutionize how businesses connect with their audiences.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-all duration-300">
                <Star className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
                <div className="text-4xl font-bold mb-2">Since 2006</div>
                <div className="text-xl opacity-90">18+ Years of Excellence</div>
                <div className="text-sm opacity-75 mt-2">Born in Lucknow, Serving Uttar Pradesh</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Journey Section - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 mb-4">
              Our Growth{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-12">
            {[
              {
                number: counters.projects,
                label: "Projects Completed",
                suffix: "+",
                icon: Trophy,
              },
              {
                number: counters.experience,
                label: "Years Experience",
                suffix: "",
                icon: Calendar,
              },
              { 
                number: counters.clients, 
                label: "Happy Clients", 
                suffix: "+",
                icon: Users,
              },
              { 
                number: counters.branches, 
                label: "Branches", 
                suffix: "",
                icon: MapPin,
              },
              { 
                number: counters.cities, 
                label: "Cities Served", 
                suffix: "+",
                icon: Target,
              },
              { 
                number: counters.awards, 
                label: "Awards Won", 
                suffix: "+",
                icon: Award,
              },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center group relative"
                >
                  <div className="relative border border-gray-200 rounded-2xl lg:p-6 p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-gray-50 to-white">
                    <IconComponent className="h-8 w-8 mx-auto mb-3 text-green-600" />
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text mb-2">
                      {stat.number}
                      {stat.suffix}
                    </div>
                    <div className="text-gray-600 font-medium text-sm">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From serving our first client to completing over <strong>500+ projects</strong>, 
              our journey has been marked by continuous growth, innovation, and an unwavering commitment 
              to delivering exceptional digital signage solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - Black Background */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <Target className="h-8 w-8 text-green-400 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                To empower brands with visually compelling, durable, and regulation-compliant signage 
                that not only captures attention but also builds a strong market presence. We believe 
                in transforming ordinary spaces into extraordinary brand experiences.
              </p>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  From concept to installation—and even maintenance—we offer end-to-end services 
                  that make the signage experience seamless, effective, and result-driven.
                </span>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <Lightbulb className="h-8 w-8 text-blue-400 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Our Vision
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                To be the leading digital signage solutions provider in North India, recognized for 
                innovation, quality, and customer satisfaction. We envision a future where every brand 
                has the power to communicate effectively through cutting-edge digital displays.
              </p>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Driving the digital revolution in Uttar Pradesh and beyond, one signage solution at a time.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 mb-4">
              What Sets Us{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Apart
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence and innovation has made us the preferred choice for businesses across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Cutting-Edge Technology",
                description: "We use the latest LED display technology and advanced materials to ensure superior quality and durability in every project.",
              },
              {
                icon: Users,
                title: "Customer-Centric Approach",
                description: "Over 2000 satisfied clients trust us because we prioritize their needs and deliver customized solutions that exceed expectations.",
              },
              {
                icon: Award,
                title: "Industry Expertise",
                description: "18+ years of experience across elections, corporate events, retail campaigns, and more. We understand diverse industry requirements.",
              },
              {
                icon: Heart,
                title: "End-to-End Service",
                description: "From initial concept and design to installation and ongoing maintenance, we handle every aspect of your signage journey.",
              },
              {
                icon: Target,
                title: "Turnkey Solutions",
                description: "Complete project management including permits, compliance, installation, and training. One partner for all your signage needs.",
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance",
                description: "Rigorous testing, premium materials, and 24/7 technical support ensure your investment delivers lasting results.",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-950 ml-4">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section - Black Background */}
      <section className="py-16 border-b-4 border-white bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Brand Experience?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Join over 2000+ satisfied clients who have trusted us to bring their vision to life. 
              Let's create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                <span>Start Your Project</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-400 hover:text-white transition-all duration-300">
                <span>View Our Portfolio</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default BrandStory;