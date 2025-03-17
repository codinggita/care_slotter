import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { FaPhoneAlt, FaEnvelope, FaBuilding, FaMapMarkerAlt, FaClock, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { assets } from "../assets/assets";

const Contact = () => {
  const navigate = useNavigate(); // ✅ Define navigate inside the component

  return (
    <div className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="text-center text-4xl font-bold text-gray-800 mb-12">
        CONTACT <span className="text-rose-600">US</span>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Contact Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-6 bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
            
            {/* Office Details */}
            <div className="flex items-start gap-4">
              <FaBuilding className="text-rose-600 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-rose-600">Our OFFICE</p>
                <p className="mt-1 text-gray-600">
                  382405 Isanpure BRTS  <br /> Suite 350, Ahmedabad, India
                </p>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-rose-600 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-rose-600">Get in Touch</p>
                <p className="mt-1">
                  <a href="tel:+918347394206" className="text-blue-600 hover:underline">
                    +91 8347394206
                  </a>
                </p>
                <p>
                  <a href="mailto:CareSlotter@gmail.com" className="text-blue-600 hover:underline">
                    CareSlotter@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Careers */}
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-rose-600 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-rose-600">Careers at CareSlotter</p>
                <p className="mt-1 text-gray-600">Explore job openings and join our team.</p>
                <button
                  onClick={() => navigate("/jobs")} // ✅ Now this works
                  aria-label="Explore Jobs"
                  className="mt-3 px-6 py-3 bg-rose-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-rose-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  Explore Jobs
                </button>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-start gap-4">
              <FaClock className="text-rose-600 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-rose-600">Office Hours</p>
                <p className="mt-1 text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM <br />
                  Saturday: 10:00 AM - 4:00 PM <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

         
          </div>
        </div>

       
      </div>

      {/* Additional Contact Details Section */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">We're Here to Help</h2>
        <p className="text-gray-600 mb-8">
          Whether you have questions about our services, need technical support, or want to provide feedback, our team is ready to assist you. Reach out to us anytime!
        </p>

      
      </div>
    </div>
  );
};

export default Contact;