import { Monitor, Zap, Fan, Calendar, Building, ArrowRight } from 'lucide-react';
import commercial from '../assets/services/1.jpg'
import dimensional from '../assets/services/2.jpg'
import led from '../assets/services/3.jpg'
import outdoor from '../assets/services/4.jpg'
import seasonal from '../assets/services/5.jpg'
import indor from '../assets/services/6.jpg'
const services = [
    {
      id: 0,
      title: "Commercial Signage",
      description: "From initial concept to final execution, we specialize in constructing durable, innovative, and cost-effective business signage tailored to you.",
      icon: <Building className="w-8 h-8" />,
      image: commercial,
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 1,
      title: "Dimensional Sign",
      description: "We design and install sleek, modern dimensional signs that combine aesthetics with efficiency and top-notch display solutions.",
      icon: <Monitor className="w-8 h-8" />,
      image: dimensional,
      color: "from-green-500 to-teal-600"
    },
    {
      id: 2,
      title: "LED Digital Signage",
      description: "Elevate your business with our expert LED digital signage services that blend style with functionality and lasting appeal.",
      icon: <Zap className="w-8 h-8" />,
      image: led,
      color: "from-yellow-500 to-green-600"
    },
    {
      id: 3,
      title: "Outdoor Signage",
      description: "Our outdoor signage solutions are customized to your business needs, space, and style — blending convenience with elegance.",
      icon: <Fan className="w-8 h-8" />,
      image: outdoor,
      color: "from-pink-500 to-red-600"
    },
    {
      id: 4,
      title: "Seasonal Signage",
      description: "We craft beautiful and functional seasonal signage that add style, innovation, and lighting elegance to your business.",
      icon: <Calendar className="w-8 h-8" />,
      image: seasonal ,
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 5,
      title: "Indoor Displays",
      description: "Transform your interior spaces with our premium indoor display solutions designed for maximum impact and engagement.",
      icon: <Monitor className="w-8 h-8" />,
      image: indor,
      color: "from-purple-500 to-pink-600"
    }
  ];

export default services