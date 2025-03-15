import React from "react";
import { assets } from "../assets/assets"; // ✅ Ensure correct path
import { useNavigate } from "react-router-dom";
import { FaUserMd, FaCalendarCheck } from "react-icons/fa"; // Icons for doctor & appointment

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between bg-transparent rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 overflow-hidden">
      {/* Animated Background Glow */}
      <div className="absolute blur-3xl opacity-20"></div>

      {/* Left Side */}
      <div className="relative flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-pink-600 leading-tight tracking-wide animate-fade-in">
          Book an Appointment
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-800 flex items-center justify-center md:justify-start gap-2">
          <FaUserMd className="text-pink-500 text-2xl" />
          Consult with 100+ Trusted Doctors
        </p>
        <p className="text-gray-600 text-sm sm:text-base mt-4 sm:mt-6 md:mt-8">
          Schedule an appointment in just a few clicks and consult with doctors from various specialties.
        </p>

        <button
          onClick={() => {
            navigate("/login");
            window.scrollTo(0, 0);
          }}
          className="flex items-center justify-center gap-2 bg-pink-500 text-white px-8 py-3 rounded-full mt-6 hover:scale-110 transition-all duration-500 shadow-md hover:shadow-xl"
        >
          <FaCalendarCheck className="text-lg" />
          Create Account
        </button>
      </div>

      {/* Right Side */}
    
    </div>
  );
};

export default Banner;
