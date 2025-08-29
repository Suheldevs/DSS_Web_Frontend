
// services.js
import { Monitor, Zap, Fan, Calendar, Building, Navigation } from 'lucide-react';
import commercial from '../assets/services/1.jpg';
import dimensional from '../assets/services/2.jpg';
import led from '../assets/services/3.jpg';
import outdoor from '../assets/services/4.jpg';
import seasonal from '../assets/services/5.jpg';
import indor from '../assets/services/6.jpg';

const services = [
  {
    id: 0,
    slug: "outdoor-signage",
    title: "Outdoor Signage",
    description: "Weather-resistant outdoor signage solutions that maintain vibrant visibility and professional appeal in all environmental conditions.",
    icon: <Fan className="w-8 h-8" />,
    image: outdoor,
    color: "from-blue-500 to-purple-600",

    shortDescription: "Weather-resistant outdoor signage solutions that maintain vibrant visibility and professional appeal in all environmental conditions.",
    overview: "Dominate the outdoor landscape with our premium outdoor signage solutions engineered to withstand the harshest weather conditions while delivering maximum visual impact. We understand that outdoor signage faces unique challenges from UV rays, rain, wind, and temperature fluctuations, which is why our team specializes in creating robust, fade-resistant displays that maintain their brilliance year after year. From highway billboards to storefront displays, our outdoor solutions are designed to capture attention from great distances while building lasting brand recognition in high-traffic areas and competitive outdoor environments.",
    services: [
      { title: "Billboard Advertising", description: "Large-format displays for maximum roadway visibility and brand impact", features: ["Digital integration","High-resolution graphics","Strategic positioning","Traffic analytics"] },
      { title: "Pole Mounted Signs", description: "Elevated signage solutions for enhanced visibility and brand presence", features: ["Wind-resistant design","Foundation engineering","Height optimization","Multi-directional viewing"] },
      { title: "Storefront Displays", description: "Eye-catching outdoor displays that draw customers to your business", features: ["Weather protection","Brand consistency","Illumination options","Pedestrian appeal"] },
      { title: "Highway Signage", description: "High-speed visibility solutions for automotive traffic and travelers", features: ["Reflective materials","Large text sizing","Distance optimization","Safety compliance"] }
    ],
    process: [
      { step: 1, title: "Location Assessment", description: "We analyze traffic patterns and environmental factors for optimal placement" },
      { step: 2, title: "Weather Engineering", description: "Design signs with materials that resist UV, moisture, and wind damage" },
      { step: 3, title: "Structural Fabrication", description: "Build robust mounting systems and weather-sealed components" },
      { step: 4, title: "Installation & Monitoring", description: "Professional installation with ongoing weather performance monitoring" }
    ],
    benefits: [
      "Maximum weather resistance and longevity",
      "High-impact visibility from great distances",
      "24/7 brand exposure in high-traffic areas",
      "Cost-effective outdoor advertising solution",
      "Professional engineering for safety compliance",
      "Custom solutions for unique outdoor challenges"
    ]
  },
  {
    id: 1,
    slug: "indoor-signage",
    title: "Indoor Signage",
    description: "Sophisticated indoor signage solutions that enhance interior aesthetics while providing clear communication and brand reinforcement.",
    icon: <Building className="w-8 h-8" />,
    image: indor,
    color: "from-green-500 to-teal-600",

    shortDescription: "Sophisticated indoor signage solutions that enhance interior aesthetics while providing clear communication and brand reinforcement.",
    overview: "Transform your interior spaces into powerful brand experiences with our elegant indoor signage solutions that seamlessly blend form and function. Understanding that indoor environments require a delicate balance of aesthetics and practicality, our designs complement your interior architecture while delivering clear, impactful messaging. From corporate lobbies and retail spaces to healthcare facilities and educational institutions, our indoor signage enhances the visitor experience by providing intuitive navigation, reinforcing brand identity, and creating memorable touchpoints that reflect your organization's professionalism and attention to detail.",
    services: [
      { title: "Reception Area Displays", description: "Premium lobby signage that creates impressive first impressions for visitors", features: ["Luxury materials","Brand integration","Professional lighting","Modular updates"] },
      { title: "Directory Systems", description: "Comprehensive building directories for easy navigation and information access", features: ["Digital integration","Updateable content","ADA compliance","Multi-language support"] },
      { title: "Conference Room Signs", description: "Professional meeting room identification and scheduling displays", features: ["Room scheduling","Digital integration","Professional aesthetics","Easy updates"] },
      { title: "Retail Point-of-Sale", description: "Strategic indoor displays that enhance shopping experience and drive sales", features: ["Product highlighting","Promotional flexibility","Brand consistency","Customer guidance"] }
    ],
    process: [
      { step: 1, title: "Interior Analysis", description: "Assess lighting, traffic flow, and architectural elements for optimal integration" },
      { step: 2, title: "Design Harmonization", description: "Create designs that complement existing interior aesthetics and branding" },
      { step: 3, title: "Precision Manufacturing", description: "Craft signage with attention to interior quality standards and finishes" },
      { step: 4, title: "Seamless Installation", description: "Install with minimal disruption and perfect alignment to interior spaces" }
    ],
    benefits: [
      "Enhanced interior aesthetics and atmosphere",
      "Improved visitor navigation and experience",
      "Consistent brand messaging throughout facilities",
      "Low-maintenance indoor-optimized materials",
      "Flexible systems for changing requirements",
      "Professional appearance that builds confidence"
    ]
  },
  {
    id: 2,
    slug: "high-rise-signage",
    title: "High Rise Signage",
    description: "Specialized high-altitude signage solutions engineered for skyscrapers and tall buildings with maximum visibility impact.",
    icon: <Monitor className="w-8 h-8" />,
    image: commercial,
    color: "from-yellow-500 to-green-600",

    shortDescription: "Specialized high-altitude signage solutions engineered for skyscrapers and tall buildings with maximum visibility impact.",
    overview: "Reach new heights with our specialized high-rise signage solutions designed specifically for tall buildings and urban skylines. Understanding the unique engineering challenges of high-altitude installations, our team combines advanced structural engineering with cutting-edge design to create signage that's visible from miles away while withstanding extreme wind loads and weather conditions. These commanding displays not only establish your presence in the city skyline but also serve as iconic landmarks that reinforce brand recognition across vast metropolitan areas, making your business a memorable part of the urban landscape.",
    services: [
      { title: "Rooftop Installations", description: "Commanding rooftop displays that dominate city skylines and aerial views", features: ["Wind load engineering","Aircraft compliance","Structural mounting","LED illumination"] },
      { title: "Building Crown Signs", description: "Architectural signage that caps buildings with distinctive brand presence", features: ["Architectural integration","Custom fabrication","Lighting design","Engineering approval"] },
      { title: "Facade Letters", description: "Large-scale lettering systems for building sides and corporate headquarters", features: ["Dimensional construction","High-altitude installation","Weather sealing","Maintenance access"] },
      { title: "Tower Wraps", description: "Complete building wraps and tower graphics for maximum brand coverage", features: ["Vinyl application","Structural analysis","Building protection","Long-term durability"] }
    ],
    process: [
      { step: 1, title: "Engineering Assessment", description: "Structural analysis and wind load calculations for high-altitude installations" },
      { step: 2, title: "Aviation Compliance", description: "Ensure compliance with aviation regulations and building codes" },
      { step: 3, title: "High-Altitude Fabrication", description: "Manufacture components designed for extreme weather and wind conditions" },
      { step: 4, title: "Specialized Installation", description: "Expert high-rise installation using certified rigging and safety equipment" }
    ],
    benefits: [
      "Dominant visibility across entire metropolitan areas",
      "Landmark status for iconic brand recognition",
      "Engineering excellence for safety and durability",
      "Compliance with aviation and building regulations",
      "Professional high-altitude installation expertise",
      "Long-term investment in skyline presence"
    ]
  },
  {
    id: 3,
    slug: "navigation-signage",
    title: "Navigation Signage",
    description: "Comprehensive wayfinding and navigation systems that guide visitors efficiently while reinforcing your brand identity.",
    icon: <Navigation className="w-8 h-8" />,
    image: dimensional,
    color: "from-pink-500 to-red-600",

    shortDescription: "Comprehensive wayfinding and navigation systems that guide visitors efficiently while reinforcing your brand identity.",
    overview: "Guide visitors seamlessly through your facilities with our intuitive navigation signage systems that eliminate confusion and enhance user experience. Recognizing that effective wayfinding is crucial for customer satisfaction and operational efficiency, our solutions combine clear directional guidance with strategic brand reinforcement at every touchpoint. From hospitals and universities to shopping centers and corporate campuses, our navigation systems reduce stress for visitors while creating positive interactions with your brand. Each sign is strategically positioned and designed to provide logical, step-by-step guidance that makes navigation effortless and memorable.",
    services: [
      { title: "Wayfinding Systems", description: "Complete directional signage networks for complex building navigation", features: ["Logical hierarchy","Universal symbols","ADA compliance","Consistent design"] },
      { title: "Digital Directories", description: "Interactive touch-screen systems for dynamic building information", features: ["Real-time updates","Multi-language support","Search functionality","Usage analytics"] },
      { title: "Parking Guidance", description: "Comprehensive parking lot and garage navigation solutions", features: ["Availability indicators","Level identification","Payment integration","Safety features"] },
      { title: "Emergency Evacuation", description: "Life-safety signage systems for emergency situations and building codes", features: ["Photoluminescent materials","Code compliance","Clear visibility","Multilingual options"] }
    ],
    process: [
      { step: 1, title: "Traffic Flow Analysis", description: "Study visitor patterns and identify optimal sign placement locations" },
      { step: 2, title: "Information Architecture", description: "Design logical navigation hierarchy and information organization" },
      { step: 3, title: "System Integration", description: "Coordinate signage with existing building systems and technology" },
      { step: 4, title: "User Testing", description: "Validate navigation effectiveness through real-world user testing" }
    ],
    benefits: [
      "Reduced visitor confusion and improved satisfaction",
      "Enhanced accessibility for all users and abilities",
      "Efficient traffic flow and reduced congestion",
      "Professional image and operational efficiency",
      "Compliance with ADA and safety regulations",
      "Integrated brand reinforcement throughout journey"
    ]
  },
  {
    id: 4,
    slug: "retro-signage",
    title: "Retro Signage",
    description: "Nostalgic vintage-inspired signage that captures classic aesthetics while delivering modern functionality and timeless appeal.",
    icon: <Calendar className="w-8 h-8" />,
    image: seasonal,
    color: "from-indigo-500 to-purple-600",

    shortDescription: "Nostalgic vintage-inspired signage that captures classic aesthetics while delivering modern functionality and timeless appeal.",
    overview: "Step back in time while moving forward with business goals through our authentic retro signage solutions that capture the charm and character of bygone eras. Perfect for businesses wanting to stand out with distinctive vintage appeal, our retro designs combine nostalgic aesthetics with modern durability and functionality. Whether you're creating a 1950s diner atmosphere, art deco elegance, or mid-century modern sophistication, our signage helps establish a unique brand personality that resonates with customers seeking authentic experiences. Each piece is carefully crafted to evoke specific time periods while meeting contemporary performance standards and business requirements.",
    services: [
      { title: "Vintage Neon Recreation", description: "Authentic reproduction of classic neon signage with modern LED technology", features: ["Period-accurate designs","LED neon alternatives","Energy efficiency","Maintenance ease"] },
      { title: "Art Deco Displays", description: "Elegant 1920s-1930s inspired signage with geometric patterns and luxury appeal", features: ["Geometric designs","Metallic finishes","Ornate details","Premium materials"] },
      { title: "Mid-Century Modern", description: "Clean-lined 1950s-1960s aesthetic signage for contemporary businesses", features: ["Atomic age styling","Bold typography","Streamlined forms","Color authenticity"] },
      { title: "Industrial Heritage", description: "Vintage industrial-style signage with weathered and authentic appearances", features: ["Distressed finishes","Metal construction","Riveted details","Authentic patina"] }
    ],
    process: [
      { step: 1, title: "Era Research", description: "Research authentic design elements and historical accuracy for your chosen period" },
      { step: 2, title: "Aesthetic Recreation", description: "Recreate vintage looks using modern materials and techniques" },
      { step: 3, title: "Period-Accurate Manufacturing", description: "Craft signage using traditional methods combined with contemporary durability" },
      { step: 4, title: "Authentic Installation", description: "Install with period-appropriate mounting and finishing techniques" }
    ],
    benefits: [
      "Distinctive brand personality that stands out",
      "Nostalgic appeal that creates emotional connections",
      "Modern durability with vintage aesthetics",
      "Conversation-starting unique design elements",
      "Authentic atmosphere for themed businesses",
      "Timeless appeal that never goes out of style"
    ]
  },
  {
    id: 5,
    slug: "neon-signage",
    title: "Neon Signage",
    description: "Vibrant neon and LED neon signage that creates stunning visual impact with energy-efficient technology and maintenance-free operation.",
    icon: <Zap className="w-8 h-8" />,
    image: led,
    color: "from-purple-500 to-pink-600",

    shortDescription: "Vibrant neon and LED neon signage that creates stunning visual impact with energy-efficient technology and maintenance-free operation.",
    overview: "Illuminate your brand with the mesmerizing glow of our advanced neon signage solutions that combine the classic appeal of traditional neon with the reliability of modern LED technology. Perfect for businesses seeking to create atmosphere, attract attention, and establish a memorable presence, our neon displays offer unlimited creative possibilities with vibrant colors and dynamic effects. From classic tube neon to flexible LED alternatives, our solutions provide the iconic neon aesthetic while delivering superior energy efficiency, longer lifespan, and reduced maintenance requirements that make them ideal for both indoor ambiance and outdoor visibility.",
    services: [
      { title: "Traditional Glass Neon", description: "Authentic hand-bent glass tube neon for classic appeal and artistic expression", features: ["Hand-crafted artistry","Custom color mixing","Authentic glow","Artistic flexibility"] },
      { title: "LED Neon Flex", description: "Modern LED neon alternatives with programmable colors and effects", features: ["Energy efficiency","Programmable colors","Weather resistance","Easy installation"] },
      { title: "Neon Channel Letters", description: "Illuminated dimensional letters with vibrant neon borders and effects", features: ["Dimensional impact","Custom fonts","Bright illumination","Professional mounting"] },
      { title: "Artistic Neon Sculptures", description: "Custom neon art installations for unique brand expressions and ambiance", features: ["Artistic design","Custom shapes","Interactive elements","Gallery quality"] }
    ],
    process: [
      { step: 1, title: "Creative Design", description: "Develop artistic concepts that maximize neon's visual impact and brand appeal" },
      { step: 2, title: "Technology Selection", description: "Choose between traditional glass neon and modern LED alternatives" },
      { step: 3, title: "Artisan Fabrication", description: "Hand-craft neon elements with precision bending and electrical integration" },
      { step: 4, title: "Professional Installation", description: "Install with proper electrical connections and safety considerations" }
    ],
    benefits: [
      "Iconic visual appeal that captures attention instantly",
      "Energy-efficient operation with LED alternatives",
      "Vibrant colors and dynamic lighting effects",
      "Distinctive brand personality and atmosphere creation",
      "Low maintenance with modern technology options",
      "Unlimited creative design possibilities"
    ]
  }
];

export default services;








































// // services.js
// import { Monitor, Zap, Fan, Calendar, Building } from 'lucide-react';
// import commercial from '../assets/services/1.jpg';
// import dimensional from '../assets/services/2.jpg';
// import led from '../assets/services/3.jpg';
// import outdoor from '../assets/services/4.jpg';
// import seasonal from '../assets/services/5.jpg';
// import indor from '../assets/services/6.jpg';

// const services = [
//   {
//     id: 0,
//     slug: "commercial-signage",
//     title: "Commercial Signage",
//     description: "From initial concept to final execution, we specialize in constructing durable, innovative, and cost-effective business signage tailored to you.",
//     icon: <Building className="w-8 h-8" />,
//     image: commercial,
//     color: "from-blue-500 to-purple-600",

//     shortDescription: "From initial concept to final execution, we specialize in constructing durable, innovative, and cost-effective business signage tailored to you.",
//     overview: "Transform your business presence with our comprehensive commercial signage solutions. We understand that signage is not just a display but a powerful communication tool that often creates the very first impression of your business in the minds of potential customers. That’s why our team focuses on designing impactful, professional, and visually striking signs that clearly reflect your brand identity while leaving a lasting impression. From boosting brand visibility to attracting foot traffic and building trust, our solutions are crafted to enhance your presence and help your business stand out in competitive markets.",
//     services: [
//       { title: "Storefront Signs", description: "Eye-catching storefront displays that make your business stand out", features: ["Custom design","Weather-resistant materials","LED integration options","Brand consistency"] },
//       { title: "Office Building Signage", description: "Professional corporate signage for office complexes and business centers", features: ["Directory systems","Wayfinding solutions","ADA compliant designs","Modern aesthetics"] },
//       { title: "Restaurant & Retail Signs", description: "Specialized signage for hospitality and retail businesses", features: ["Menu displays","Promotional signage","Window graphics","Point-of-sale displays"] },
//       { title: "Industrial Signage", description: "Heavy-duty signage solutions for industrial and manufacturing facilities", features: ["Safety compliance","Durable materials","Large format options","Hazard identification"] }
//     ],
//     process: [
//       { step: 1, title: "Consultation & Design", description: "We meet with you to understand your vision and create custom designs" },
//       { step: 2, title: "Material Selection", description: "Choose from premium materials that suit your budget and requirements" },
//       { step: 3, title: "Manufacturing", description: "Our skilled craftsmen bring your design to life with precision" },
//       { step: 4, title: "Installation & Support", description: "Professional installation and ongoing maintenance support" }
//     ],
//     benefits: [
//       "Increased brand visibility and recognition",
//       "Professional appearance that builds trust",
//       "Cost-effective marketing investment",
//       "24/7 advertising for your business",
//       "Weather-resistant and durable construction",
//       "Custom solutions tailored to your needs"
//     ]
//   },
//   {
//     id: 1,
//     slug: "dimensional-sign",
//     title: "Dimensional Sign",
//     description: "We design and install sleek, modern dimensional signs that combine aesthetics with efficiency and top-notch display solutions.",
//     icon: <Monitor className="w-8 h-8" />,
//     image: dimensional,
//     color: "from-green-500 to-teal-600",

//     shortDescription: "We design and install sleek, modern dimensional signs that combine aesthetics with efficiency and top-notch display solutions.",
//     overview: "Create depth and visual impact with our premium dimensional signage solutions. These three-dimensional signs add sophistication and professionalism to any space, making your brand memorable and impressive.",
//     services: [
//       { title: "Raised Letter Signs", description: "Individual letters and logos that create stunning depth and shadow effects", features: ["Metal fabrication","Acrylic construction","Backlit options","Precision mounting"] },
//       { title: "Channel Letters", description: "Illuminated dimensional letters perfect for storefronts and building facades", features: ["LED illumination","Custom fonts","Color matching","Energy efficient"] },
//       { title: "Logo Sculptures", description: "Three-dimensional brand representations that make powerful statements", features: ["Custom materials","Artistic design","Various scales","Indoor/outdoor options"] },
//       { title: "Architectural Elements", description: "Dimensional design elements that enhance building aesthetics", features: ["Integrated design","Structural engineering","Premium materials","Artistic vision"] }
//     ],
//     process: [
//       { step: 1, title: "Design Conceptualization", description: "Create 3D renderings and mockups of your dimensional signage" },
//       { step: 2, title: "Material Engineering", description: "Select optimal materials for durability and visual appeal" },
//       { step: 3, title: "Precision Fabrication", description: "CNC cutting and forming with meticulous attention to detail" },
//       { step: 4, title: "Expert Installation", description: "Structural mounting and electrical connections by certified professionals" }
//     ],
//     benefits: [
//       "Premium aesthetic appeal and sophistication",
//       "Enhanced brand perception and credibility",
//       "Superior visibility from multiple angles",
//       "Long-lasting materials and construction",
//       "Customizable lighting and color options",
//       "Architectural integration capabilities"
//     ]
//   },
//   {
//     id: 2,
//     slug: "led-digital-signage",
//     title: "LED Digital Signage",
//     description: "Elevate your business with our expert LED digital signage services that blend style with functionality and lasting appeal.",
//     icon: <Zap className="w-8 h-8" />,
//     image: led,
//     color: "from-yellow-500 to-green-600",

//     shortDescription: "Elevate your business with our expert LED digital signage services that blend style with functionality and lasting appeal.",
//     overview: "Step into the future of advertising with our cutting-edge LED digital signage solutions that redefine how brands communicate with their audiences. Unlike traditional static displays, our LED signage offers dynamic, vibrant, and highly customizable visuals designed to instantly capture attention and deliver your message with unmatched impact. Whether you are promoting products, showcasing offers, or elevating brand awareness, our solutions provide flexibility to update content in real time, ensuring your message is always relevant and engaging. Built with advanced technology and superior clarity, our digital signage helps businesses stand out, connect with customers, and create memorable brand experiences.",
//     services: [
//       { title: "Indoor LED Displays", description: "High-resolution indoor displays for retail, corporate, and entertainment venues", features: ["4K/8K resolution","Content management system","Remote updates","Energy efficient"] },
//       { title: "Outdoor LED Billboards", description: "Weather-resistant outdoor displays for maximum visibility and impact", features: ["Weather protection","High brightness","Real-time content","Scheduling capabilities"] },
//       { title: "Interactive Displays", description: "Touch-enabled digital signage for enhanced customer engagement", features: ["Multi-touch capability","Custom applications","Data analytics","User-friendly interface"] },
//       { title: "Video Wall Systems", description: "Large-scale video walls for impressive visual presentations", features: ["Seamless displays","Modular design","Content synchronization","Professional installation"] }
//     ],
//     process: [
//       { step: 1, title: "Needs Assessment", description: "Evaluate your space and requirements for optimal display solutions" },
//       { step: 2, title: "System Design", description: "Create custom display configurations and content strategies" },
//       { step: 3, title: "Installation & Setup", description: "Professional mounting and system configuration" },
//       { step: 4, title: "Content Management", description: "Training and ongoing support for content management systems" }
//     ],
//     benefits: [
//       "Dynamic content updates in real-time",
//       "Higher engagement and customer attention",
//       "Cost-effective long-term advertising",
//       "Measurable analytics and performance tracking",
//       "Environmentally friendly and energy efficient",
//       "Unlimited creative possibilities"
//     ]
//   },
//   {
//     id: 3,
//     slug: "outdoor-signage",
//     title: "Outdoor Signage",
//     description: "Our outdoor signage solutions are customized to your business needs, space, and style — blending convenience with elegance.",
//     icon: <Fan className="w-8 h-8" />,
//     image: outdoor,
//     color: "from-pink-500 to-red-600",

//     shortDescription: "Our outdoor signage solutions are customized to your business needs, space, and style — blending convenience with elegance.",
//     overview: "Make a lasting impression with our robust and versatile outdoor signage solutions, specifically designed to capture attention in any environment. Engineered with durable, weather-resistant materials, our signs are built to withstand harsh sun, heavy rain, and strong winds while maintaining their vibrant colors and visual appeal. Perfect for storefronts, billboards, and promotional displays, these signs ensure your message is visible and impactful 24/7, regardless of weather conditions. With a balance of strength, design, and functionality, our outdoor signage helps businesses attract foot traffic, strengthen brand presence, and create an enduring impression in highly competitive spaces.",
//     services: [
//       { title: "Monument Signs", description: "Impressive ground-mounted signs that create strong brand presence", features: ["Stone and metal construction","Landscape integration","LED illumination","Weather resistant"] },
//       { title: "Pylon Signs", description: "Tall freestanding signs for maximum visibility from roadways", features: ["High visibility","Multi-tenant options","Structural engineering","Wind load calculations"] },
//       { title: "Building Mounted Signs", description: "Facade-mounted signage that enhances building architecture", features: ["Architectural integration","Various mounting systems","Lighting options","Code compliance"] },
//       { title: "Parking & Wayfinding", description: "Comprehensive signage systems for navigation and information", features: ["ADA compliance","Reflective materials","Directional systems","Safety considerations"] }
//     ],
//     process: [
//       { step: 1, title: "Site Survey", description: "Comprehensive analysis of location, visibility, and environmental factors" },
//       { step: 2, title: "Permit Assistance", description: "Navigate local regulations and obtain necessary permits" },
//       { step: 3, title: "Weather-Resistant Fabrication", description: "Build signs using materials designed for outdoor durability" },
//       { step: 4, title: "Professional Installation", description: "Secure mounting with proper foundations and structural support" }
//     ],
//     benefits: [
//       "Weather-resistant construction for longevity",
//       "Maximum visibility from roads and sidewalks",
//       "Low maintenance requirements",
//       "Compliance with local zoning regulations",
//       "Professional appearance in all conditions",
//       "Investment in long-term brand visibility"
//     ]
//   },
//   {
//     id: 4,
//     slug: "seasonal-signage",
//     title: "Seasonal Signage",
//     description: "We craft beautiful and functional seasonal signage that add style, innovation, and lighting elegance to your business.",
//     icon: <Calendar className="w-8 h-8" />,
//     image: seasonal,
//     color: "from-indigo-500 to-purple-600",

//     shortDescription: "We craft beautiful and functional seasonal signage that add style, innovation, and lighting elegance to your business.",
//     overview: "Keep your business fresh, engaging, and relevant all year round with our dynamic seasonal signage solutions. Designed to adapt to every occasion, these signs let you highlight holiday promotions, festive events, and seasonal sales with ease. Whether it’s Diwali, Christmas, New Year, or mid-year clearance offers, our flexible signage systems ensure your message resonates with customers at the right moment. Built for quick updates and lasting impact, seasonal signage helps you stay ahead of competitors, attract more foot traffic, and maintain a vibrant brand presence that evolves seamlessly with the calendar.",
//     services: [
//       { title: "Holiday Displays", description: "Festive signage for major holidays and celebrations", features: ["Themed designs","Quick installation","Storage solutions","Reusable materials"] },
//       { title: "Promotional Banners", description: "Eye-catching banners for seasonal sales and events", features: ["Weather resistant","Custom graphics","Easy installation","Cost-effective"] },
//       { title: "Window Graphics", description: "Seasonal window displays that attract foot traffic", features: ["Removable adhesives","Vibrant colors","Custom designs","Easy updates"] },
//       { title: "Event Signage", description: "Temporary signage for special events and seasonal activities", features: ["Portable systems","Quick setup","Professional appearance","Multiple formats"] }
//     ],
//     process: [
//       { step: 1, title: "Seasonal Planning", description: "Develop year-round signage calendar aligned with your business goals" },
//       { step: 2, title: "Design Library", description: "Create versatile designs that can be adapted for different seasons" },
//       { step: 3, title: "Efficient Production", description: "Streamlined manufacturing for quick turnaround times" },
//       { step: 4, title: "Installation & Storage", description: "Professional installation and storage services for off-season items" }
//     ],
//     benefits: [
//       "Keep your business looking fresh and current",
//       "Capitalize on seasonal shopping trends",
//       "Cost-effective way to update your image",
//       "Flexible solutions for changing needs",
//       "Professional seasonal marketing support",
//       "Storage and maintenance services included"
//     ]
//   },
//   {
//     id: 5,
//     slug: "indoor-displays",
//     title: "Indoor Displays",
//     description: "Transform your interior spaces with our premium indoor display solutions designed for maximum impact and engagement.",
//     icon: <Monitor className="w-8 h-8" />,
//     image: indor,
//     color: "from-purple-500 to-pink-600",

//     shortDescription: "Transform your interior spaces with our premium indoor display solutions designed for maximum impact and engagement.",
//     overview: "Enhance your interior spaces with our sophisticated indoor display solutions designed to leave a lasting impression. From corporate offices and hotel lobbies to retail outlets and showrooms, our signage elevates the atmosphere by blending aesthetics with functionality. These displays not only create a professional and welcoming environment but also serve to inform, guide, and engage visitors effectively. Whether you need digital directories, promotional displays, or branded visuals, our customizable indoor signage ensures clarity, style, and impact—helping you communicate your message seamlessly while reinforcing your brand identity.",
//     services: [
//       { title: "Lobby Displays", description: "Elegant signage solutions for reception areas and corporate lobbies", features: ["Premium materials","Brand integration","Professional aesthetics","Modular systems"] },
//       { title: "Wayfinding Systems", description: "Comprehensive navigation solutions for complex buildings", features: ["Clear directional signs","ADA compliance","Consistent design","Digital integration"] },
//       { title: "Retail Graphics", description: "Point-of-purchase displays and retail environment enhancements", features: ["Product promotion","Brand storytelling","Customer engagement","Sales support"] },
//       { title: "Corporate Branding", description: "Internal branding solutions that reinforce company culture", features: ["Mission statements","Brand values","Company history","Achievement displays"] }
//     ],
//     process: [
//       { step: 1, title: "Space Analysis", description: "Evaluate your interior environment and traffic flow patterns" },
//       { step: 2, title: "Design Integration", description: "Create signage that complements your interior design" },
//       { step: 3, title: "Material Selection", description: "Choose appropriate materials for indoor environments" },
//       { step: 4, title: "Installation & Finishing", description: "Precise installation with attention to interior aesthetics" }
//     ],
//     benefits: [
//       "Enhanced professional image and atmosphere",
//       "Improved visitor navigation and experience",
//       "Reinforced brand identity throughout your space",
//       "Low maintenance indoor solutions",
//       "Flexible and updateable display systems",
//       "Integration with existing interior design"
//     ]
//   }
// ];

// export default services;
