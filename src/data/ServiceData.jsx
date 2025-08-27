// services.js
import { Monitor, Zap, Fan, Calendar, Building } from 'lucide-react';
import commercial from '../assets/services/1.jpg';
import dimensional from '../assets/services/2.jpg';
import led from '../assets/services/3.jpg';
import outdoor from '../assets/services/4.jpg';
import seasonal from '../assets/services/5.jpg';
import indor from '../assets/services/6.jpg';

const services = [
  {
    id: 0,
    slug: "commercial-signage",
    title: "Commercial Signage",
    description: "From initial concept to final execution, we specialize in constructing durable, innovative, and cost-effective business signage tailored to you.",
    icon: <Building className="w-8 h-8" />,
    image: commercial,
    color: "from-blue-500 to-purple-600",

    shortDescription: "From initial concept to final execution, we specialize in constructing durable, innovative, and cost-effective business signage tailored to you.",
    overview: "Transform your business presence with our comprehensive commercial signage solutions. We understand that your signage is often the first impression customers have of your business, which is why we focus on creating impactful, professional signs that reflect your brand identity and attract customers.",
    services: [
      { title: "Storefront Signs", description: "Eye-catching storefront displays that make your business stand out", features: ["Custom design","Weather-resistant materials","LED integration options","Brand consistency"] },
      { title: "Office Building Signage", description: "Professional corporate signage for office complexes and business centers", features: ["Directory systems","Wayfinding solutions","ADA compliant designs","Modern aesthetics"] },
      { title: "Restaurant & Retail Signs", description: "Specialized signage for hospitality and retail businesses", features: ["Menu displays","Promotional signage","Window graphics","Point-of-sale displays"] },
      { title: "Industrial Signage", description: "Heavy-duty signage solutions for industrial and manufacturing facilities", features: ["Safety compliance","Durable materials","Large format options","Hazard identification"] }
    ],
    process: [
      { step: 1, title: "Consultation & Design", description: "We meet with you to understand your vision and create custom designs" },
      { step: 2, title: "Material Selection", description: "Choose from premium materials that suit your budget and requirements" },
      { step: 3, title: "Manufacturing", description: "Our skilled craftsmen bring your design to life with precision" },
      { step: 4, title: "Installation & Support", description: "Professional installation and ongoing maintenance support" }
    ],
    benefits: [
      "Increased brand visibility and recognition",
      "Professional appearance that builds trust",
      "Cost-effective marketing investment",
      "24/7 advertising for your business",
      "Weather-resistant and durable construction",
      "Custom solutions tailored to your needs"
    ]
  },
  {
    id: 1,
    slug: "dimensional-sign",
    title: "Dimensional Sign",
    description: "We design and install sleek, modern dimensional signs that combine aesthetics with efficiency and top-notch display solutions.",
    icon: <Monitor className="w-8 h-8" />,
    image: dimensional,
    color: "from-green-500 to-teal-600",

    shortDescription: "We design and install sleek, modern dimensional signs that combine aesthetics with efficiency and top-notch display solutions.",
    overview: "Create depth and visual impact with our premium dimensional signage solutions. These three-dimensional signs add sophistication and professionalism to any space, making your brand memorable and impressive.",
    services: [
      { title: "Raised Letter Signs", description: "Individual letters and logos that create stunning depth and shadow effects", features: ["Metal fabrication","Acrylic construction","Backlit options","Precision mounting"] },
      { title: "Channel Letters", description: "Illuminated dimensional letters perfect for storefronts and building facades", features: ["LED illumination","Custom fonts","Color matching","Energy efficient"] },
      { title: "Logo Sculptures", description: "Three-dimensional brand representations that make powerful statements", features: ["Custom materials","Artistic design","Various scales","Indoor/outdoor options"] },
      { title: "Architectural Elements", description: "Dimensional design elements that enhance building aesthetics", features: ["Integrated design","Structural engineering","Premium materials","Artistic vision"] }
    ],
    process: [
      { step: 1, title: "Design Conceptualization", description: "Create 3D renderings and mockups of your dimensional signage" },
      { step: 2, title: "Material Engineering", description: "Select optimal materials for durability and visual appeal" },
      { step: 3, title: "Precision Fabrication", description: "CNC cutting and forming with meticulous attention to detail" },
      { step: 4, title: "Expert Installation", description: "Structural mounting and electrical connections by certified professionals" }
    ],
    benefits: [
      "Premium aesthetic appeal and sophistication",
      "Enhanced brand perception and credibility",
      "Superior visibility from multiple angles",
      "Long-lasting materials and construction",
      "Customizable lighting and color options",
      "Architectural integration capabilities"
    ]
  },
  {
    id: 2,
    slug: "led-digital-signage",
    title: "LED Digital Signage",
    description: "Elevate your business with our expert LED digital signage services that blend style with functionality and lasting appeal.",
    icon: <Zap className="w-8 h-8" />,
    image: led,
    color: "from-yellow-500 to-green-600",

    shortDescription: "Elevate your business with our expert LED digital signage services that blend style with functionality and lasting appeal.",
    overview: "Step into the future of advertising with our cutting-edge LED digital signage solutions. Dynamic, vibrant, and highly customizable, our digital displays capture attention and deliver your message with impact.",
    services: [
      { title: "Indoor LED Displays", description: "High-resolution indoor displays for retail, corporate, and entertainment venues", features: ["4K/8K resolution","Content management system","Remote updates","Energy efficient"] },
      { title: "Outdoor LED Billboards", description: "Weather-resistant outdoor displays for maximum visibility and impact", features: ["Weather protection","High brightness","Real-time content","Scheduling capabilities"] },
      { title: "Interactive Displays", description: "Touch-enabled digital signage for enhanced customer engagement", features: ["Multi-touch capability","Custom applications","Data analytics","User-friendly interface"] },
      { title: "Video Wall Systems", description: "Large-scale video walls for impressive visual presentations", features: ["Seamless displays","Modular design","Content synchronization","Professional installation"] }
    ],
    process: [
      { step: 1, title: "Needs Assessment", description: "Evaluate your space and requirements for optimal display solutions" },
      { step: 2, title: "System Design", description: "Create custom display configurations and content strategies" },
      { step: 3, title: "Installation & Setup", description: "Professional mounting and system configuration" },
      { step: 4, title: "Content Management", description: "Training and ongoing support for content management systems" }
    ],
    benefits: [
      "Dynamic content updates in real-time",
      "Higher engagement and customer attention",
      "Cost-effective long-term advertising",
      "Measurable analytics and performance tracking",
      "Environmentally friendly and energy efficient",
      "Unlimited creative possibilities"
    ]
  },
  {
    id: 3,
    slug: "outdoor-signage",
    title: "Outdoor Signage",
    description: "Our outdoor signage solutions are customized to your business needs, space, and style — blending convenience with elegance.",
    icon: <Fan className="w-8 h-8" />,
    image: outdoor,
    color: "from-pink-500 to-red-600",

    shortDescription: "Our outdoor signage solutions are customized to your business needs, space, and style — blending convenience with elegance.",
    overview: "Make a lasting impression with our robust outdoor signage solutions. Built to withstand the elements while maintaining visual appeal, our outdoor signs ensure your message reaches customers 24/7, regardless of weather conditions.",
    services: [
      { title: "Monument Signs", description: "Impressive ground-mounted signs that create strong brand presence", features: ["Stone and metal construction","Landscape integration","LED illumination","Weather resistant"] },
      { title: "Pylon Signs", description: "Tall freestanding signs for maximum visibility from roadways", features: ["High visibility","Multi-tenant options","Structural engineering","Wind load calculations"] },
      { title: "Building Mounted Signs", description: "Facade-mounted signage that enhances building architecture", features: ["Architectural integration","Various mounting systems","Lighting options","Code compliance"] },
      { title: "Parking & Wayfinding", description: "Comprehensive signage systems for navigation and information", features: ["ADA compliance","Reflective materials","Directional systems","Safety considerations"] }
    ],
    process: [
      { step: 1, title: "Site Survey", description: "Comprehensive analysis of location, visibility, and environmental factors" },
      { step: 2, title: "Permit Assistance", description: "Navigate local regulations and obtain necessary permits" },
      { step: 3, title: "Weather-Resistant Fabrication", description: "Build signs using materials designed for outdoor durability" },
      { step: 4, title: "Professional Installation", description: "Secure mounting with proper foundations and structural support" }
    ],
    benefits: [
      "Weather-resistant construction for longevity",
      "Maximum visibility from roads and sidewalks",
      "Low maintenance requirements",
      "Compliance with local zoning regulations",
      "Professional appearance in all conditions",
      "Investment in long-term brand visibility"
    ]
  },
  {
    id: 4,
    slug: "seasonal-signage",
    title: "Seasonal Signage",
    description: "We craft beautiful and functional seasonal signage that add style, innovation, and lighting elegance to your business.",
    icon: <Calendar className="w-8 h-8" />,
    image: seasonal,
    color: "from-indigo-500 to-purple-600",

    shortDescription: "We craft beautiful and functional seasonal signage that add style, innovation, and lighting elegance to your business.",
    overview: "Keep your business fresh and relevant throughout the year with our dynamic seasonal signage solutions. From holiday promotions to seasonal sales, our flexible signage systems help you connect with customers at the right time.",
    services: [
      { title: "Holiday Displays", description: "Festive signage for major holidays and celebrations", features: ["Themed designs","Quick installation","Storage solutions","Reusable materials"] },
      { title: "Promotional Banners", description: "Eye-catching banners for seasonal sales and events", features: ["Weather resistant","Custom graphics","Easy installation","Cost-effective"] },
      { title: "Window Graphics", description: "Seasonal window displays that attract foot traffic", features: ["Removable adhesives","Vibrant colors","Custom designs","Easy updates"] },
      { title: "Event Signage", description: "Temporary signage for special events and seasonal activities", features: ["Portable systems","Quick setup","Professional appearance","Multiple formats"] }
    ],
    process: [
      { step: 1, title: "Seasonal Planning", description: "Develop year-round signage calendar aligned with your business goals" },
      { step: 2, title: "Design Library", description: "Create versatile designs that can be adapted for different seasons" },
      { step: 3, title: "Efficient Production", description: "Streamlined manufacturing for quick turnaround times" },
      { step: 4, title: "Installation & Storage", description: "Professional installation and storage services for off-season items" }
    ],
    benefits: [
      "Keep your business looking fresh and current",
      "Capitalize on seasonal shopping trends",
      "Cost-effective way to update your image",
      "Flexible solutions for changing needs",
      "Professional seasonal marketing support",
      "Storage and maintenance services included"
    ]
  },
  {
    id: 5,
    slug: "indoor-displays",
    title: "Indoor Displays",
    description: "Transform your interior spaces with our premium indoor display solutions designed for maximum impact and engagement.",
    icon: <Monitor className="w-8 h-8" />,
    image: indor,
    color: "from-purple-500 to-pink-600",

    shortDescription: "Transform your interior spaces with our premium indoor display solutions designed for maximum impact and engagement.",
    overview: "Enhance your interior environment with our sophisticated indoor display solutions. From corporate lobbies to retail spaces, our indoor signage creates professional atmospheres that inform, guide, and impress your visitors.",
    services: [
      { title: "Lobby Displays", description: "Elegant signage solutions for reception areas and corporate lobbies", features: ["Premium materials","Brand integration","Professional aesthetics","Modular systems"] },
      { title: "Wayfinding Systems", description: "Comprehensive navigation solutions for complex buildings", features: ["Clear directional signs","ADA compliance","Consistent design","Digital integration"] },
      { title: "Retail Graphics", description: "Point-of-purchase displays and retail environment enhancements", features: ["Product promotion","Brand storytelling","Customer engagement","Sales support"] },
      { title: "Corporate Branding", description: "Internal branding solutions that reinforce company culture", features: ["Mission statements","Brand values","Company history","Achievement displays"] }
    ],
    process: [
      { step: 1, title: "Space Analysis", description: "Evaluate your interior environment and traffic flow patterns" },
      { step: 2, title: "Design Integration", description: "Create signage that complements your interior design" },
      { step: 3, title: "Material Selection", description: "Choose appropriate materials for indoor environments" },
      { step: 4, title: "Installation & Finishing", description: "Precise installation with attention to interior aesthetics" }
    ],
    benefits: [
      "Enhanced professional image and atmosphere",
      "Improved visitor navigation and experience",
      "Reinforced brand identity throughout your space",
      "Low maintenance indoor solutions",
      "Flexible and updateable display systems",
      "Integration with existing interior design"
    ]
  }
];

export default services;
