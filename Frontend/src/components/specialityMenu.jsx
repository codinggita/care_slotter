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
        <div className="flex sm:justify-center gap-6 pt-5 overflow-x-auto scrollbar-hide">
          {specialityData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center text-xl cursor-pointer flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg border border-pink-200 hover:shadow-2xl"
            >
              {/* Speciality Icon */}
              <div className="mb-3">{item.icon}</div>

              {/* Best Icon - Add it next to the speciality name */}
              {item.isBest && (
                <FaStar className="text-yellow-400 text-xl ml-2" />
              )}

              <Link
                to={`/doctors/${item.speciality}`}
                onClick={() => window.scrollTo(0, 0)}
                className="text-lg font-semibold text-gray-800 hover:text-pink-600"
              >
                {item.speciality}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SpecialityMenu;
