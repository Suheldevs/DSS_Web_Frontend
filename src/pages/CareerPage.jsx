import React, { useState } from 'react';
import { 
  Briefcase, 
  Users, 
  Trophy, 
  Clock, 
  Upload, 
  ChevronRight, 
  MapPin,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import axios from 'axios'
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
const CareerPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    jobProfile: '',
    resume: null
  });
  const backendUrl = import.meta.env.VITE_BACKEND_URL
   const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });


const jobPositions = [
  { id: 1, title: "Automation Engineer", department: "Engineering", location: "Remote" },
  { id: 2, title: "Home Automation Technician", department: "Development", location: "Bangalore" },
  { id: 3, title: "Smart Home Installer", department: "Design", location: "Hybrid" },
  { id: 4, title: "Production Engineer", department: "Operations", location: "Mumbai" },
  { id: 5, title: "Production Engineer", department: "R&D", location: "Pune" },
  { id: 6, title: "Area Sales Manager", department: "R&D", location: "Pune" },
];

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    });
  };
  
const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.jobProfile || !formData.resume) {
      setFormStatus({ submitted: false, error: true });
      return;
    }

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      setLoading(true);

      await axios.post(`${backendUrl}/job`, formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Application submitted successfully!");
      setFormStatus({ submitted: true, error: false });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        jobProfile: "",
        resume: null,
      });

      document.getElementById("resumeUpload").value = "";
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to submit application");
      setFormStatus({ submitted: false, error: true });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen relative bg-gray-50">
      <div className="absolute top-0 right-0 w-44 h-44 bg-white opacity-5 rounded-full"></div>
          <div className="absolute top-20 left-0 w-96 h-96 bg-white opacity-5 rounded-full "></div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-neutral-950 text-white">
        <div className="container mx-auto px-4 py-20 relative overflow-hidden">
          {/* Decorative elements */}
          
          
          <div className="max-w-3xl mx-auto text-center relative z-10 mt-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team at A-Mad </h1>
            <p className="text-xl md:text-2xl text-sky-100 mb-8">Help us build the future of automation technology and transform industries worldwide.</p>
            {/* <a href="#apply" className="inline-flex items-center px-6 py-3 bg-white text-neutral-950 font-medium rounded-lg shadow-lg hover:bg-neutral-50 transition duration-300">
              View Open Positions
              <ChevronRight size={20} className="ml-2" />
            </a> */} 
         <a
          href="#application-form"
          className="bg-white inline-flex text-neutral-950 font-semibold py-2 px-4 rounded-lg hover:bg-neutral-50 transition duration-300 items-center"
        >
          Apply Now
        </a>
          </div>
        </div>
      </div>
      
      {/* Values Section */}
      <div className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Join a team that's passionate about innovation and committed to creating world-class automation solutions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200">
              <div className="w-12 h-12 bg-neutral-950 rounded-lg flex items-center justify-center mb-6">
                <Trophy size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Challenging Projects</h3>
              <p className="text-gray-600">Work on cutting-edge automation technologies that solve real-world problems for diverse industries.</p>
            </div>
            
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200">
              <div className="w-12 h-12 bg-neutral-950 rounded-lg flex items-center justify-center mb-6">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaborative Culture</h3>
              <p className="text-gray-600">Join a supportive team where your ideas matter and everyone contributes to our shared success.</p>
            </div>
            
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200">
              <div className="w-12 h-12 bg-neutral-950 rounded-lg flex items-center justify-center mb-6">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Work-Life Balance</h3>
              <p className="text-gray-600">Flexible schedules, remote options, and a culture that respects your time outside of work.</p>
            </div>
          </div>
        </div>
      </div>
      
  
      
      {/* Application Form */}
      <div className="py-12 container scroll-m-10 mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 bg-white" id="application-form">
        <div className='hidden lg:block'>
            <img src='https://static.vecteezy.com/system/resources/previews/024/593/351/large_2x/we-re-hiring-logo-free-free-vector.jpg' className='rounded-3xl h-[800px]'/>
            </div>
        <div className="container mx-auto px-4" id='contact-form'>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply For Latest Jobs Together</h2>
              <p className="text-gray-600">Send us your resume using this form methods.</p>
            </div>
            
            {formStatus.submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Application Submitted!</h3>
                <p className="text-gray-600 mb-4">Thank you for your interest in joining A-Mad . We'll review your application and get back to you soon.</p>
                <button 
                  onClick={() => setFormStatus({ submitted: false, error: false })}
                  className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
                {formStatus.error && (
                  <div className="bg-red-50 z-10 border border-red-200 rounded-lg p-4 mb-6 flex items-start">
                    <AlertCircle size={20} className="text-red-500 mr-3 mt-0.5" />
                    <p className="text-red-700">Please fill out all required fields before submitting.</p>
                  </div>
                )}
                
                <div className="mb-6">
                  <label htmlFor="fullName" className="block mb-2 font-medium text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 outline-none transition"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 outline-none transition"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      pattern="^[6-9]\d{9}$"
                      title="Please enter a valid 10-digit phone number starting with 6 to 9."
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 outline-none transition"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="jobProfile" className="block mb-2 font-medium text-gray-700">Select Job Profile *</label>
                  <select
                    id="jobProfile"
                    name="jobProfile"
                    value={formData.jobProfile}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 outline-none transition"
                    required
                  >
                    <option value="" disabled>Select a position</option>
                    {jobPositions.map(job => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-8">
                  <label htmlFor="resumeUpload" className="block mb-2 font-medium text-gray-700">Resume Upload *</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      id="resumeUpload"
                      name="resume"
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      required
                    />
                    <label htmlFor="resumeUpload" className="cursor-pointer">
                      <div className="mx-auto w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center mb-3">
                        <Upload size={20} className="text-neutral-950" />
                      </div>
                      <p className="text-gray-600 mb-1">
                        {formData.resume ? formData.resume.name : "Drag and drop your resume or click to browse"}
                      </p>
                      <p className="text-sm text-gray-500">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                    </label>
                  </div>
                </div>
                
                <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className={`px-8 py-3 font-medium rounded-lg shadow transition duration-300 focus:ring-4 focus:ring-neutral-200 ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-neutral-950 text-white hover:bg-neutral-700"
            }`}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </div>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer CTA */}
      <div className="bg-black text-white py-16 mb-1">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Don't See a Position That Fits?</h2>
          <p className="text-gray-100 mb-8 max-w-xl mx-auto">We're always looking for talented individuals. Send us your resume and we'll keep it on file for future opportunities.</p>
          <a href="mailto:info@digitalsignagesolutions.in" className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-lg shadow-lg hover:bg-neutral-50 transition duration-300">
            Contact Our Recruiting Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;