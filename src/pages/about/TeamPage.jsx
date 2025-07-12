import React, { useState } from 'react';
import { Plus, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb';

const TeamPage = () => {
  const [activeCard, setActiveCard] = useState(null);

const teamMembers = [
  {
    id: 1,
    name: "Ravi Sharma",
    role: "Creative Director",
    image: "https://picsum.photos/300/400?random=11",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Graphic Designer",
    image: "https://picsum.photos/300/400?random=12",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Production Manager",
    image: "https://picsum.photos/300/400?random=13",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    role: "Client Relationship Manager",
    image: "https://picsum.photos/300/400?random=14",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    id: 5,
    name: "Arjun Mehta",
    role: "Signage Installation Head",
    image: "https://picsum.photos/300/400?random=15",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    id: 6,
    name: "Kavita Iyer",
    role: "Digital Signage Consultant",
    image: "https://picsum.photos/300/400?random=16",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    id: 7,
    name: "Rahul Singh",
    role: "LED Display Technician",
    image: "https://picsum.photos/300/400?random=17",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    id: 8,
    name: "Neha Deshmukh",
    role: "Marketing & Branding",
    image: "https://picsum.photos/300/400?random=18",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  }
];


  const handlePlusClick = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  return (
    <>
    <Breadcrumb 
  title="Meet Our Amazing Team"
  items={[
    { label: 'Home', link: '/' },
    { label: 'Our Team', link: '/about/team' }
  ]}
/>
    <div className="min-h-screen  py-16 px-4">
      <div className="max-w-7xl mx-auto">
      

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative bg-white  shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-65 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Plus/Close Button */}
                <button
                  onMouseEnter={() => handlePlusClick(member.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-90 z-10"
                >
                  {activeCard === member.id ? (
                    <X size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </button>

                {/* Social Media Icons */}
                <div className={`absolute top-4 left-4 flex flex-col space-y-2 transition-all duration-500 ${
                  activeCard === member.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}>
                  <a
                    href={member.social.facebook}
                    className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-md hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-md hover:bg-blue-600 transition-colors duration-200"
                  >
                    <Twitter size={16} />
                  </a>
                  <a
                    href={member.social.instagram}
                    className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-md hover:from-pink-600 hover:to-purple-600 transition-all duration-200"
                  >
                    <Instagram size={16} />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white shadow-md hover:bg-blue-800 transition-colors duration-200"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>

                {/* Profile Image Placeholder */}
                <div className=''>
                    <img src={member.image} alt='Team Member Image' />
                </div>
              </div>

              {/* Content */}
              <div className='flex justify-center items-center'>
              <div className='bg-gradient-to-r to-green-500 from-blue-500 h-1 w-12 group-hover:w-full transition-all duration-300 ease-in-out'></div>
              </div>
              <div className="p-2 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm font-medium mb-2">{member.role}</p>
              </div>

         
            </div>
          ))}
        </div>

      </div>
    </div>
      </>
  );
};

export default TeamPage;