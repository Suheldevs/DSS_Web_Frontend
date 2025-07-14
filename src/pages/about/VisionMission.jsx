import React, { useState, useEffect } from "react";
import {
  Target,
  Eye,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Trophy,
  Zap,
  Heart,
  Shield,
  Compass,
  Globe,
  Rocket,
} from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import pattern from "../../assets/pattern/pattern12.jpg";
const VisionMission = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const missionPoints = [
    {
      icon: Target,
      title: "Customer-Centric Solutions",
      description:
        "Deliver customized digital signage solutions that perfectly align with each client's unique brand identity and business objectives.",
    },
    {
      icon: Trophy,
      title: "Excellence in Quality",
      description:
        "Maintain the highest standards in materials, technology, and craftsmanship to ensure durable and impactful visual communications.",
    },
    {
      icon: Heart,
      title: "End-to-End Service",
      description:
        "Provide comprehensive support from initial concept and design to installation, maintenance, and ongoing technical assistance.",
    },
    {
      icon: Shield,
      title: "Compliance & Safety",
      description:
        "Ensure all signage solutions meet regulatory requirements and safety standards while maximizing brand visibility and impact.",
    },
  ];

  const visionElements = [
    {
      icon: Globe,
      title: "Regional Leadership",
      description:
        "Become the most trusted digital signage provider across North India, setting industry benchmarks for innovation and service excellence.",
    },
    {
      icon: Rocket,
      title: "Technology Pioneer",
      description:
        "Lead the adoption of cutting-edge display technologies and smart signage solutions that transform business communications.",
    },
    {
      icon: Users,
      title: "Community Impact",
      description:
        "Empower local businesses and organizations with world-class digital signage that drives growth and community engagement.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description:
        "Establish ourselves as the innovation center for digital signage solutions, continuously pushing the boundaries of what's possible.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Every decision we make is centered around delivering exceptional value to our clients.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously embrace new technologies to stay ahead of industry trends.",
    },
    {
      icon: CheckCircle,
      title: "Quality Excellence",
      description:
        "Our commitment to quality ensures every project exceeds expectations.",
    },
    {
      icon: Star,
      title: "Trust & Integrity",
      description:
        "Building long-term relationships through transparency and reliability.",
    },
  ];

  return (
    <>
      <Breadcrumb
        title="Vision & Mission"
        items={[
          { label: "Home", link: "/" },
          { label: "Vision-Mission", link: "/about/vission&mission" },
        ]}
      />

      <div className="min-h-screen">
        {/* Mission Section - White Background */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-3 rounded-lg mr-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-950">
                Our Mission
              </h2>
            </div>
            <div className="grid lg:grid-cols-2  gap-6 items-center">
              {/* Mission Content */}
              <div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border-2 border-gray-100 shadow-lg">
                  <p className="text-xl text-gray-800 leading-relaxed mb-2 font-medium">
                    "To empower brands with visually compelling, durable, and
                    regulation-compliant signage solutions that not only capture
                    attention but also build strong market presence and drive
                    meaningful connections between businesses and their
                    audiences."
                  </p>
                  <div className="space-y-4">
                    {[
                      "Deliver innovative digital signage solutions tailored to each client's unique needs",
                      "Ensure seamless project execution from concept to maintenance",
                      "Build lasting partnerships through exceptional service and support",
                      "Transform ordinary spaces into extraordinary brand experiences",
                    ].map((point, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-lg">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mission Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {missionPoints.map((point, index) => {
                  const IconComponent = point.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                    >
                      <div className="bg-gradient-to-r from-green-600 to-blue-600 p-3 rounded-lg w-fit mb-4">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-950 mb-3">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {point.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section - Black Background */}
        <section className="py-8 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Vision Elements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {visionElements.map((element, index) => {
                  const IconComponent = element.icon;
                  return (
                    <div
                      key={index}
                      className=" bg-gradient-to-br from-gray-800 to-neutral-950 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700"
                    >
                      <div className="bg-gradient-to-r from-green-600 to-blue-600 p-3 rounded-lg w-fit mb-4">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">
                        {element.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {element.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Vision Content */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 p-3 rounded-lg mr-4">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Our Vision
                  </h2>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-neutral-950 p-4 rounded-2xl border-2 border-gray-700 shadow-lg">
                  <p className="text-xl text-gray-200 leading-relaxed mb-6 font-medium">
                    "To be the leading digital signage solutions provider in
                    North India, recognized for innovation, quality, and
                    customer satisfaction, while driving the digital
                    transformation of businesses across the region."
                  </p>
                  <div className="space-y-4">
                    {[
                      "Establish market leadership in digital signage across North India",
                      "Pioneer the adoption of next-generation display technologies",
                      "Create a sustainable ecosystem for digital communication excellence",
                      "Build a legacy of innovation that inspires industry growth",
                    ].map((point, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-lg">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                The principles that guide every decision we make and every
                relationship we build.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className={`z-20 relative p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${
                      isVisible ? "animate-fade-in" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className="absolute inset-0 "
                      style={{
                        backgroundImage: `url(${pattern})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.6,
                        zIndex: -1,
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

        {/* Call to Action Section - Black Background */}
        <section className="py-8 border-b-4 border-white bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Join Us in Our{" "}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Journey
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Be part of the digital signage revolution. Let's work together
                to bring your vision to life and create impactful brand
                experiences that drive results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  <span>Start Your Project</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center justify-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-400 hover:text-white transition-all duration-300">
                  <span>Learn More About Us</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VisionMission;
