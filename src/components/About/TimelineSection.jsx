import { useState } from "react";

const TimelineSection = () => {
  const [activeYear, setActiveYear] = useState('2005');

  const timelineData = {
    '2005': {
      year: '2005',
      title: 'An establishment of Signage and Graphic',
      description: 'We established the world\'s largest sign franchise specializing in all different types of signs. Grounding the number of projects we have grown to 10 locations around the world, our customers count on us for a variety of materials.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    '2010': {
      year: '2010',
      title: 'Digital Revolution & LED Technology',
      description: 'Embraced the digital transformation by introducing LED technology and digital displays. We expanded our services to include interactive digital signage solutions, becoming pioneers in the digital signage industry in North India.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    '2015': {
      year: '2015',
      title: 'Innovation & Smart Solutions',
      description: 'Launched smart signage solutions with IoT integration and cloud-based management systems. Introduced interactive touch displays and developed custom software solutions for content management and scheduling.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    '2020': {
      year: '2020',
      title: 'Sustainability & Green Technology',
      description: 'Focused on eco-friendly signage solutions with solar-powered displays and energy-efficient LED systems. Developed sustainable manufacturing processes and introduced recycling programs for old signage materials.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    '2022': {
      year: '2022',
      title: 'AI Integration & Future Vision',
      description: 'Integrated artificial intelligence and machine learning into our signage solutions. Developed AI-powered content optimization, facial recognition systems, and predictive maintenance for digital displays.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  };

  const years = Object.keys(timelineData);
  const currentData = timelineData[activeYear];

  return (
    <div className="py-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl  font-bold text-gray-900 mb-6">
          We building everything
          <span className="block">that needed you</span>
        </h2>
      </div>

      {/* Timeline Navigation */}
      <div className="relative mb-16">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
        <div className="flex justify-between items-center relative">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`relative z-10 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                activeYear === year
                  ? 'bg-green-600 border-green-600 scale-150'
                  : 'bg-white border-gray-400 hover:border-green-600'
              }`}
            >
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className={`text-sm font-medium ${
                  activeYear === year ? 'text-green-600' : 'text-gray-600'
                }`}>
                  {year}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Content */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="text-8xl mb-10 md:text-9xl font-bold text-gray-200 leading-none">
              {currentData.year}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 -mt-12 relative z-10">
              {currentData.title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {currentData.description}
            </p>
          </div>

         
        </div>

        {/* Right Content - Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl z-20 shadow-2xl">
            <img
              src={currentData.image}
              alt={currentData.title}
              className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <div className="text-sm font-medium text-gray-900">{currentData.year}</div>
                <div className="text-xs text-gray-600">Milestone Achievement</div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute  -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-purple-400 to-pink-500 rounded-full opacity-20"></div>
        </div>
      </div>
    </div>
  );
};
export default TimelineSection
