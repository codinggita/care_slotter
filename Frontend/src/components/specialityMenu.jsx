import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar, FaHeartbeat, FaUserMd, FaBone } from 'react-icons/fa'; // Import relevant icons

export const specialityData = [
  { speciality: "Cardiology", icon: <FaHeartbeat className="text-4xl text-pink-600" />, isBest: true },
  { speciality: "Dermatology", icon: <FaUserMd className="text-4xl text-pink-600" />, isBest: false },
  { speciality: "Orthopedics", icon: <FaBone className="text-4xl text-pink-600" />, isBest: true },
  // Add other items...
];

const SpecialityMenu = () => {
  return (
    <div className="relative flex flex-col items-center gap-6 py-16 text-gray-900 bg-transparent" id="speciality">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-white to-pink-300 opacity-20 blur-3xl"></div>

      {/* Content Wrapper */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-4 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-pink-600">Find by Speciality</h1>
        <p className="sm:w-1/3 text-center text-gray-700">
          Browse our list of trusted doctors and book your appointment hassle-free.
        </p>

        {/* Speciality List */}

      </motion.div>
    </div>
  );
};

export default SpecialityMenu;
