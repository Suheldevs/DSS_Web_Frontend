import React, { useState } from "react";
import Slider from "react-slick";
import { ArrowRight, ChevronsRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectSection = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filters = ["ALL", "BANNERS", "COMMERCIAL", "RESIDENTIAL", "PRINTING"];

  const projects = [
    {
      id: 1,
      title: "Bistro Bar",
      category: "BANNERS",
      tags: ["Banners", "Commercial"],
      image: "https://picsum.photos/600/400?random=6",
      description: "Restaurant branding and signage design",
    },
    {
      id: 2,
      title: "Business Card Design",
      category: "PRINTING",
      tags: ["Banners", "Residential"],
      image: "https://picsum.photos/600/400?random=5",
      description: "Professional business card mockup design",
    },
    {
      id: 3,
      title: "Airport Departures",
      category: "COMMERCIAL",
      tags: ["Commercial", "Signage"],
      image: "https://picsum.photos/600/400?random=4",
      description: "Airport departure gate signage system",
    },
    {
      id: 4,
      title: "Retail Store Front",
      category: "COMMERCIAL",
      tags: ["Commercial", "Retail"],
      image: "https://picsum.photos/600/400?random=3",
      description: "Modern retail storefront design",
    },
    {
      id: 5,
      title: "Residential Complex",
      category: "RESIDENTIAL",
      tags: ["Residential", "Signage"],
      image: "https://picsum.photos/600/400?random=2",
      description: "Residential building signage and wayfinding",
    },
    {
      id: 6,
      title: "Corporate Brochure",
      category: "PRINTING",
      tags: ["Printing", "Corporate"],
      image: "https://picsum.photos/600/400?random=1",
      description: "Professional corporate brochure design",
    },
  ];

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const sliderSettings = {
    dots: true,
     arrows: false, 
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    // arrows: true,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mb-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
          Our Latest{" "}
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-4"></div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`lg:px-6 px-3 lg:py-2 py-1 lg:text-sm text-xs font-medium rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Slider Cards */}
      <Slider {...sliderSettings}>
        {filteredProjects.map((project , index) => (
          <div key={project.id} className="px-2" data-aos="fade-up"
              data-aos-delay={index * 100}>
            <div className="group relative overflow-hidden  shadow-lg hover:shadow-2xl transition-all duration-500">
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full lg:h-96 h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />

              {/* Category Tag */}
              <div className="absolute top-12 -left-8 -rotate-90 text-xs bg-white px-2 py-1 font-semibold">
                {project.category}
              </div>

              {/* Slide-in Content */}
              <div
                className="absolute right-0  bottom-0 w-72 scale-0 px-6 py-4 flex flex-col items-start 
                bg-white lg:translate-x-full group-hover:translate-x-0
                lg:opacity-0 opacity-100 group-hover:opacity-100 group-hover:w-72 group-hover:z-10
                 group-hover:scale-100 transition-all duration-700 ease-in-out shadow-xl"
              >
                <h3 className="text-black text-lg font-bold mb-1">
                  {project.title}
                </h3>
                {/* <p className="text-gray-600 text-sm mb-3">{project.description}</p> */}
                <button className="inline-flex items-center cursor-pointer gap-2 text-primary text-sm font-semibold group-hover:text-green-600 transition-colors">
                  View Project <ChevronsRight size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSection;
