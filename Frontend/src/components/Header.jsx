import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion"; // Framer Motion for animations
import { FaUserMd, FaCalendarCheck, FaArrowRight } from "react-icons/fa"; // Icons for better UI

const Header = () => {
  return (
    <header className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-10 lg:px-20 py-16 bg-transparent">
      {/* Animated Background Glow */}
      <div className="absolute  blur-3xl opacity-20"></div>

      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 relative z-10">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-black leading-tight"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Book Your <span className="text-pink-300">Appointment</span> <br />
          With Trusted Doctors
        </motion.h1>

        <motion.p
          className="text-black text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Browse our extensive list of highly qualified doctors & schedule your <br className="hidden sm:block" />
          appointment with ease.
        </motion.p>

        {/* Feature Highlights */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-black text-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <FaUserMd className="text-pink-400 text-xl" />
            <p>100+ Certified Doctors</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarCheck className="text-pink-400 text-xl" />
            <p>Instant Booking Available</p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="#speciality"
          className="flex items-center gap-2 bg-white px-6 py-3 rounded-full text-black text-sm font-medium hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r from-pink-400 to-pink-600 hover:text-gray-500 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Book Appointment
          <FaArrowRight className="text-pink-500 hover:text-gray-500 transition-all" />
        </motion.a>
      </div>

      {/* Right Section */}
      
    </header>
  );
};

export default Header;
