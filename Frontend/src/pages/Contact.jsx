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

            {/* Social Media Links */}
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-rose-600 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-rose-600">Follow Us</p>
                <div className="flex gap-4 mt-2">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-rose-600 text-2xl hover:text-rose-700 transition-all duration-300" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-rose-600 text-2xl hover:text-rose-700 transition-all duration-300" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-rose-600 text-2xl hover:text-rose-700 transition-all duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Image */}
        <div className="w-full md:w-1/2 transform transition duration-500 hover:scale-105">
          <img
            className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
            src="https://img.freepik.com/premium-photo/man-lab-coat-glasses-stands-front-display-information-including-dna-molecule_874813-271.jpg"
            alt="Contact us"
          />
        </div>
      </div>

      {/* Additional Contact Details Section */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">We're Here to Help</h2>
        <p className="text-gray-600 mb-8">
          Whether you have questions about our services, need technical support, or want to provide feedback, our team is ready to assist you. Reach out to us anytime!
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
            <FaPhoneAlt className="text-rose-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600">
              Speak directly with our support team for immediate assistance.
            </p>
            <a href="tel:+918347394206" className="mt-4 inline-block px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-all duration-300">
              Call Now
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
            <FaEnvelope className="text-rose-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
            <p className="text-gray-600">
              Send us an email, and we'll get back to you within 24 hours.
            </p>
            <a href="mailto:CareSlotter@gmail.com" className="mt-4 inline-block px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-all duration-300">
              Email Now
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
            <FaMapMarkerAlt className="text-rose-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Us</h3>
            <p className="text-gray-600">
              Stop by our office for a face-to-face conversation with our team.
            </p>
            <button
              onClick={() => navigate("/location")}
              className="mt-4 px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-all duration-300"
            >
              Get Directions 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;