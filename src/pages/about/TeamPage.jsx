import React, { useState } from "react";
import { Plus, X, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import { useGetAllTeamQuery } from "../../api/team.api";

const TeamPage = () => {
  const [activeCard, setActiveCard] = useState(null);

  // const teamMembers = [
  //   {
  //     id: 1,
  //     name: "Ravi Sharma",
  //     role: "Creative Director",
  //     image: "https://picsum.photos/300/400?random=11",
  //     social: {
  //       facebook: "#",
  //       twitter: "#",
  //       instagram: "#",
  //       linkedin: "#"
  //     }
  //   },
  //   {
  //     id: 2,
  //     name: "Priya Verma",
  //     role: "Graphic Designer",
  //     image: "https://picsum.photos/300/400?random=12",
  //     social: {
  //       facebook: "#",
  //       twitter: "#",
  //       instagram: "#",
  //       linkedin: "#"
  //     }
  //   },
  //   {
  //     id: 3,
  //     name: "Amit Patel",
  //     role: "Production Manager",
  //     image: "https://picsum.photos/300/400?random=13",
  //     social: {
  //       facebook: "#",
  //       twitter: "#",
  //       instagram: "#",
  //       linkedin: "#"
  //     }
  //   },
  //   {
  //     id: 4,
  //     name: "Sneha Kapoor",
  //     role: "Client Relationship Manager",
  //     image: "https://picsum.photos/300/400?random=14",
  //     social: {
  //       facebook: "#",
  //       twitter: "#",
  //       instagram: "#",
  //       linkedin: "#"
  //     }
  //   },
  //   {
  //     id: 5,
  //     name: "Arjun Mehta",
  //     role: "Signage Installation Head",
  //     image: "https://picsum.photos/300/400?random=15",
  //     social: {
  //       facebook: "#",
  //       twitter: "#",
  //       instagram: "#",
  //       linkedin: "#"
  //     }
  //   },
  //   {
  //     id: 6,
  //     name: "Kavita Iyer",
  //     role: "Digital Signage Consultant",
  //     image: "https://picsum.photos/300/400?random=16",
  //     social: {
  //       facebook: "#",
  //       twitter: "#",
  //       instagram: "#",
  //       linkedin: "#"
  //     }
  //   },
  //   {
  //     id: 7,
  //     name: "Rahul Singh",
  //     role: "LED Display Technician",
  //     image: "https://picsum.photos/300/400?random=17",
  //     social: {
  //       facebook: "#",
  //       twitter: "#",
  //       instagram: "#",
  //       linkedin: "#"
  //     }
  //   },
  //   {
  //     id: 8,
  //     name: "Neha Deshmukh",
  //     role: "Marketing & Branding",
  //     image: "https://picsum.photos/300/400?random=18",
  //     social: {
  //       facebook: "#",
  //       twitter: "#",
  //       instagram: "#",
  //       linkedin: "#"
  //     }
  //   }
  // ];

  const { data, isLoading, isError } = useGetAllTeamQuery();
  const teamMembers = data?.data;
  const handlePlusClick = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  return (
    <>
      <Breadcrumb
        title="Meet Our Amazing Team"
        items={[
          { label: "Home", link: "/" },
          { label: "Our Team", link: "/about/team" },
        ]}
      />
      <div className="min-h-screen  py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers?.map((member) => (
              <div
                key={member.id}
                className="group relative bg-white  shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Image Container */}
                <div className="relative h-65 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  {/* Profile Image Placeholder */}
                  <div className=" h-full">
                    <img
                      src={
                        member?.image?.public_url ||
                        `${import.meta.env.VITE_BACKEND}/${member?.image?.url}`
                      }
                      alt="Team Member Image"
                      className=" h-full "
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex justify-center items-center">
                  <div className="bg-gradient-to-r to-green-500 from-blue-500 h-1 w-12 group-hover:w-full transition-all duration-300 ease-in-out"></div>
                </div>
                <div className="p-2 text-center">
                  <h3 className="text-xl font-bold capitalize text-gray-800 mb-1">
                    {member?.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium mb-2">
                    {member?.designation}
                  </p>
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
