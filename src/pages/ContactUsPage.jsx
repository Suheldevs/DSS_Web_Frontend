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
  Building
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import pattern from "../assets/pattern/pattern12.jpg";
const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    requirement: '',
    sitePhoto: null,
    message: '',
    agreed: false
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
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
    
    // Real-time validation
    const error = validateField(name, newValue);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      let error = '';
      
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        error = 'File size must be less than 5MB';
      }
      
      // Check file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        error = 'Only JPG, JPEG, and PNG files are allowed';
      }
      
      if (error) {
        setErrors(prev => ({
          ...prev,
          sitePhoto: error
        }));
        // Clear the file input
        e.target.value = '';
        return;
      }
      
      setFormData(prev => ({
        ...prev,
        sitePhoto: file
      }));
      
      setErrors(prev => ({
        ...prev,
        sitePhoto: null
      }));
    }
  };

  const removeFile = () => {
    setFormData(prev => ({
      ...prev,
      sitePhoto: null
    }));
  };

  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          error = 'Full name is required';
        } else if (value.trim().length < 2) {
          error = 'Full name must be at least 2 characters';
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = 'Full name should contain only letters and spaces';
        }
        break;
        
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
        
      case 'phone':
        if (!value.trim()) {
          error = 'Phone number is required';
        } else if (!/^[6-9]\d{9}$/.test(value.replace(/\s/g, ''))) {
          error = 'Phone number must start with 6-9 and be exactly 10 digits';
        }
        break;
        
      case 'companyName':
        if (!value.trim()) {
          error = 'Company name is required';
        } else if (value.trim().length < 2) {
          error = 'Company name must be at least 2 characters';
        }
        break;
        
      case 'requirement':
        if (!value) {
          error = 'Please select a requirement';
        }
        break;
        
      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters';
        }
        break;
        
      case 'agreed':
        if (!value) {
          error = 'You must agree to the terms and conditions';
        }
        break;
        
      default:
        break;
    }
    
    return error;
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate all fields
    Object.keys(formData).forEach(key => {
      if (key !== 'sitePhoto') {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Create FormData for file upload
      const submitData = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null && formData[key] !== '' && formData[key] !== false) {
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
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        requirement: '',
        sitePhoto: null,
        message: '',
        agreed: false
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
    <div className=" bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
       

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="border-t-2 border-green-500 relative z-20 bg-white rounded-md p-3 shadow-md hover:shadow-lg transition-all duration-300">
                    <div
                                      className="absolute inset-0 overflow-hidden"
                                      style={{
                                        backgroundImage: `url(${pattern})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        opacity: 0.6,
                                        zIndex: -1,
                                      }}
                                    ></div>
                    <div className={`w-10 h-10 ${info.color} bg-opacity-10 rounded-md flex items-center justify-center mb-2`}>
                      <IconComponent className={`${info.color}`} size={20} />
                    </div>
                    <h3 className="text-base font-semibold text-gray-800 mb-2">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-md p-4 shadow-md mt-2">
              <h3 className="text-base font-semibold text-gray-800 mb-3">Find Us</h3>
              <div className="relative h-48 bg-gray-200 rounded-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.7457!2d80.9462!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzQ4LjEiTiA4MMKwNTYnNDYuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-md"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-md p-6 shadow-md">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="text-emerald-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
              </div>

              <div className="space-y-3">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User size={16} className="inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                  )}
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
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
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Building size={16} className="inline mr-2" />
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                      errors.companyName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your company name"
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>
                  )}
                </div>

                {/* Requirement */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Requirement *
                  </label>
                  <select
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
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

                {/* Site Photo Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Upload size={16} className="inline mr-2" />
                    Site Photo
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center hover:border-emerald-500 transition-colors">
                    {formData.sitePhoto ? (
                      <div className="flex items-center justify-between bg-emerald-50 p-3 rounded-md">
                        <div className="flex items-center space-x-3">
                          <Upload className="text-emerald-600" size={20} />
                          <span className="text-sm text-emerald-800">{formData.sitePhoto.name}</span>
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
                        <Upload className="mx-auto text-gray-400 mb-2" size={28} />
                        <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-500">PNG, JPG, JPEG up to 5MB</p>
                        <input
                          type="file"
                          accept="image/jpeg,image/jpg,image/png"
                          onChange={handleFileChange}
                          className="hidden"
                          id="file-upload"
                        />
                        <label
                          htmlFor="file-upload"
                          className="inline-block mt-2 px-4 py-2 bg-emerald-600 text-white rounded-md cursor-pointer hover:bg-emerald-700 transition-colors"
                        >
                          Choose File
                        </label>
                      </div>
                    )}
                  </div>
                  {errors.sitePhoto && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.sitePhoto}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare size={16} className="inline mr-2" />
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none ${
                      errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Write your message here... (minimum 10 characters)"
                    minLength={10}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Confirmation Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleInputChange}
                    className={`mt-1 w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500 ${
                      errors.agreed ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  <label className="text-sm text-gray-700">
                    I agree to the terms and conditions and privacy policy. I consent to being contacted by Digital Signage Solutions regarding my inquiry. *
                  </label>
                </div>
                {errors.agreed && (
                  <p className="text-sm text-red-600 flex items-center">
                    <AlertCircle size={14} className="mr-1" />
                    {errors.agreed}
                  </p>
                )}

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-2 px-6 rounded-md font-medium hover:from-emerald-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  <div className="flex items-center space-x-2 text-emerald-600 bg-emerald-50 p-3 rounded-md">
                    <CheckCircle size={20} />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-md">
                    <AlertCircle size={20} />
                    <span>Failed to send message. Please try again.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactUsPage;