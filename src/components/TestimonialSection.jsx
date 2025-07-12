import React, { useState } from "react";
import { Star, Quote } from "lucide-react";

const TestimonialSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const testimonials = [
    {
      id: 1,
      quote: "It was amazing signage service given by them",
      name: "Victor Wilson",
      position: "Security Head",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
      bgColor: "bg-gray-800",
    },
    {
      id: 2,
      quote: "Installation process such pleasant experience!",
      name: "Alex Martin",
      position: "Main Director",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
      bgColor: "bg-yellow-400",
      textColor: "text-black",
    },
    {
      id: 3,
      quote: "Vemlo has completed high standard the project",
      name: "Alena Cartin",
      position: "Main Director",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b412?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
      bgColor: "bg-gray-800",
    },
    {
      id: 4,
      quote: "Heartily thankful to Vemlo for quality signage",
      name: "Julia Roses",
      position: "Consular",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
      bgColor: "bg-gray-800",
    },
  ];

  return (
    <div className="  py-12 bg-black ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            What our clients{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              say!
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-4"></div>

          {/* <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Hear from the businesses and brands we've helped shine with smart
            and stunning signage solutions.
          </p> */}
        </div>
            <iframe src="https://widget.tagembed.com/2147598" className='w-full h-[21rem]' title="Xpress Tour & Travels Reviews"></iframe>
        {/* Testimonials Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`
      relative overflow-hidden p-8 bg-gray-50 border transition-all duration-500 ease-in-out transform group cursor-pointer
      ${
        hoveredIndex === index
          ? "scale-105 shadow-2xl border-gray-100"
          : "hover:scale-102 border-transparent"
      }
    `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`
      absolute top-0 left-0 h-full transition-all duration-500
     
      ${
        hoveredIndex === index
          ? "w-full  bg-gradient-to-r from-green-500 to-blue-500"
          : "w-1 bg-green-500"
      }
    `}
              ></div>

              <div className="relative z-10">
                <div
                  className={`
        absolute top-10 right-2 opacity-20 transition-all duration-300
        ${hoveredIndex === index ? "opacity-40 scale-110" : ""}
      `}
                >
                  <Quote size={32} />
                </div>

                <div className="mb-8">
                  <p
                    className={`
          text-lg italic leading-relaxed font-medium
          ${hoveredIndex === index ? "text-opacity-100" : ""}
        `}
                  >
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <div
                    className={`
          relative transition-all duration-300
          ${hoveredIndex === index ? "scale-110" : ""}
        `}
                  >
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                    />
                  </div>

                  <div
                    className={`
          transition-all duration-300
          ${hoveredIndex === index ? "transform translate-x-2" : ""}
        `}
                  >
                    <h4 className="font-semibold text-lg">
                      {testimonial.name}
                    </h4>
                    <p
                      className={`
            text-sm opacity-90
          text-gray-400}
          `}
                    >
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Bottom Stats */}
        {/* <div className="mt-20 text-center">
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">500+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">4.9</div>
              <div className="text-gray-400 text-sm">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">99%</div>
              <div className="text-gray-400 text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TestimonialSection;
