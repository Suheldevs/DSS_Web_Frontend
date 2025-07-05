import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, User, ArrowRight, MessageCircle } from 'lucide-react';

const BlogFAQSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const faqs = [
    {
      question: "Why should I choose your company?",
      answer: "The best sign for any business is one that will attract the most customers and give your a business the correct identity. Please visit our branch finder page and contact nearest sign maker to discuss your requirements."
    },
    {
      question: "What material can I use for my sign?",
      answer: "We offer a wide range of materials including vinyl, aluminum, acrylic, wood, and digital displays. Each material has its own benefits and we'll help you choose the best option based on your specific needs, budget, and installation requirements."
    },
    {
      question: "What other services do you provide?",
      answer: "Beyond signage, we offer comprehensive branding solutions including logo design, vehicle wraps, window graphics, banner printing, trade show displays, and digital signage solutions. We're your one-stop shop for all visual communication needs."
    },
    {
      question: "How quick is your service turnaround?",
      answer: "Our standard turnaround time is 5-7 business days for most projects. However, we offer rush services for urgent needs with 24-48 hour turnaround available. Complex projects may require additional time, which we'll discuss during consultation."
    },
    {
      question: "Do you provide installation services?",
      answer: "Yes, we provide professional installation services with certified technicians. We handle everything from permits to final installation, ensuring your signage is properly mounted and compliant with local regulations."
    }
  ];

  const articles = [
    {
      id: 1,
      title: "Color Contrast Know-How for Signage",
      excerpt: "There are full service engage company is to provide solution for employees needs training...",
      image: "/api/placeholder/300/200",
      date: "Dec 15, 2024",
      author: "Sarah Johnson",
      category: "Design Tips",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Customer Experience & Signage Trends",
      excerpt: "At placerat vestibulum lectus mauris ultrices eros in. Suspendisse sed nisl lacus viver...",
      image: "/api/placeholder/300/200",
      date: "Dec 12, 2024",
      author: "Mike Chen",
      category: "Industry Trends",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "High-Impact Seasonal Signage to Set Go",
      excerpt: "Cursus turpis massa tincidunt dui. Nec feugiat in fermentum posuere. Ut porttitor leoma...",
      image: "/api/placeholder/300/200",
      date: "Dec 10, 2024",
      author: "Emma Wilson",
      category: "Marketing",
      readTime: "4 min read"
    }
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? -1 : index);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* FAQ Section */}
          <div className="space-y-8">
            <div>
              <p className="text-orange-500 text-sm font-semibold tracking-wider uppercase mb-2">
                Have Any Questions?
              </p>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our FAQ's
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We've compiled the list of frequently asked questions to help you along the way to obtain higher performance
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className={`w-full px-6 py-4 text-left flex items-center justify-between transition-all duration-300 ${
                      activeQuestion === index 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-white text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-semibold text-lg">{faq.question}</span>
                    {activeQuestion === index ? (
                      <ChevronUp className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 flex-shrink-0" />
                    )}
                  </button>
                  
                  <div className={`transition-all duration-300 ${
                    activeQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="px-6 py-4 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      {index === 0 && (
                        <div className="flex items-center mt-4">
                          <img 
                            src="/api/placeholder/60/60" 
                            alt="Team" 
                            className="w-12 h-12 rounded-full mr-3"
                          />
                          <div>
                            <p className="text-sm text-gray-600">Need more help?</p>
                            <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
                              Contact our team →
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Blog Section */}
          <div className="space-y-8">
            <div>
              <p className="text-orange-500 text-sm font-semibold tracking-wider uppercase mb-2">
                Our Blog and News
              </p>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Latest Articles
              </h2>
            </div>

            <div className="space-y-6">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/3 relative overflow-hidden">
                      <div className="h-48 sm:h-full bg-gradient-to-br from-orange-400 to-red-500 relative">
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                        <div className="absolute top-4 left-4">
                          <span className="bg-white text-orange-500 px-3 py-1 rounded-full text-xs font-semibold">
                            {article.category}
                          </span>
                        </div>
                        {/* Sample content for different articles */}
                        <div className="absolute inset-0 flex items-center justify-center text-white">
                          {article.id === 1 && (
                            <div className="text-center">
                              <div className="text-4xl mb-2">📊</div>
                              <p className="text-sm font-medium">Color Theory</p>
                            </div>
                          )}
                          {article.id === 2 && (
                            <div className="text-center">
                              <div className="text-4xl mb-2">👥</div>
                              <p className="text-sm font-medium">Customer Focus</p>
                            </div>
                          )}
                          {article.id === 3 && (
                            <div className="text-center">
                              <div className="text-4xl mb-2">🎯</div>
                              <p className="text-sm font-medium">Seasonal Design</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="sm:w-2/3 p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="mr-4">{article.date}</span>
                        <User className="w-4 h-4 mr-2" />
                        <span className="mr-4">{article.author}</span>
                        <MessageCircle className="w-4 h-4 mr-2" />
                        <span>{article.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-500 transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      <button className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-6">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl">
                View All Articles
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogFAQSection;