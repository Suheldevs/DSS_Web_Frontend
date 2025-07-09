import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Upload,
  X,
  MessageSquare,
  User,
  Building,
  Ruler,
  FileText
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    industry: '',
    requirement: '',
    measurementSize: '',
    signageContent: '',
    description: '',
    measurementPhoto: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const requirements = [
    'Outdoor Signage',
    'Indoor Signage',
    'High Rise Signage',
    'Navigation Signage',
    'Retro Signage',
    'Neon Signage',
    'LED Digital Walls',
    'Interactive Panels',
    'Other'
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['Digital Signage Solutions-Near Yamaha Showroom', 'Chinhat Tiraha, Faizabad Road', 'Lucknow-226028'],
      color: 'text-emerald-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91-6386901011'],
      color: 'text-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@dssup.co.in', 'sales@dssup.co.in', 'service@dssup.co.in'],
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 5:00 PM'],
      color: 'text-orange-600'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setErrors(prev => ({
          ...prev,
          measurementPhoto: 'File size must be less than 5MB'
        }));
        return;
      }
      
      setFormData(prev => ({
        ...prev,
        measurementPhoto: file
      }));
      
      setErrors(prev => ({
        ...prev,
        measurementPhoto: null
      }));
    }
  };

  const removeFile = () => {
    setFormData(prev => ({
      ...prev,
      measurementPhoto: null
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.requirement) newErrors.requirement = 'Please select a requirement';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    // Phone validation
    const phoneRegex = /^[+]?[\d\s\-()]{10,}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Create FormData for file upload
      const submitData = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null && formData[key] !== '') {
          submitData.append(key, formData[key]);
        }
      });
      
      // Simulated API call - replace with your actual endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: submitData
      });
      
      // For demo purposes, we'll simulate success after 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        organization: '',
        industry: '',
        requirement: '',
        measurementSize: '',
        signageContent: '',
        description: '',
        measurementPhoto: null
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
   <Breadcrumb 
  title="Get In Touch"
  items={[
    { label: 'Home', link: '/' },
    { label: 'Contact Us', link: '/contact' }
  ]}
/>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
       

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className={`w-12 h-12 ${info.color} bg-opacity-10 rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className={`${info.color}`} size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm leading-relaxed">{detail}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-xl p-6 shadow-lg mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Find Us</h3>
              <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.7457!2d80.9462!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzQ4LjEiTiA4MMKwNTYnNDYuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="text-emerald-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User size={16} className="inline mr-2" />
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User size={16} className="inline mr-2" />
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail size={16} className="inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone size={16} className="inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Organization */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Building size={16} className="inline mr-2" />
                    Organization Name
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Enter your organization name"
                  />
                </div>

                {/* Industry and Requirement */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Industry
                    </label>
                    <input
                      type="text"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Enter your industry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Requirement *
                    </label>
                    <select
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                        errors.requirement ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">--Choose Requirement--</option>
                      {requirements.map((req, index) => (
                        <option key={index} value={req}>{req}</option>
                      ))}
                    </select>
                    {errors.requirement && (
                      <p className="mt-1 text-sm text-red-600">{errors.requirement}</p>
                    )}
                  </div>
                </div>

                {/* Measurement Size and Signage Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Ruler size={16} className="inline mr-2" />
                      Measurement Size
                    </label>
                    <input
                      type="text"
                      name="measurementSize"
                      value={formData.measurementSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="e.g., 10ft x 5ft"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FileText size={16} className="inline mr-2" />
                      Signage Content Design
                    </label>
                    <input
                      type="text"
                      name="signageContent"
                      value={formData.signageContent}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Brief description of content"
                    />
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Upload size={16} className="inline mr-2" />
                    Measurement Place Photo
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-emerald-500 transition-colors">
                    {formData.measurementPhoto ? (
                      <div className="flex items-center justify-between bg-emerald-50 p-3 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Upload className="text-emerald-600" size={20} />
                          <span className="text-sm text-emerald-800">{formData.measurementPhoto.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <div>
                        <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                        <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-500">PNG, JPG, JPEG up to 5MB</p>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                          id="file-upload"
                        />
                        <label
                          htmlFor="file-upload"
                          className="inline-block mt-3 px-4 py-2 bg-emerald-600 text-white rounded-lg cursor-pointer hover:bg-emerald-700 transition-colors"
                        >
                          Choose File
                        </label>
                      </div>
                    )}
                  </div>
                  {errors.measurementPhoto && (
                    <p className="mt-1 text-sm text-red-600">{errors.measurementPhoto}</p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare size={16} className="inline mr-2" />
                    Project Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none ${
                      errors.description ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Write your project description here..."
                  />
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-emerald-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-emerald-600 bg-emerald-50 p-3 rounded-lg">
                    <CheckCircle size={20} />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle size={20} />
                    <span>Failed to send message. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
     </>
  );
};

export default ContactUsPage;