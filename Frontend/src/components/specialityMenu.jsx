import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800 relative overflow-hidden" id="speciality">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient blur-3xl opacity-20"></div>

      {/* Title */}
      <h1 className="text-3xl font-semibold text-gray-900">Find by Speciality</h1>
      <p className="sm:w-1/3 text-center text-sm text-gray-700">
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </p>

      {/* Speciality List */}
      <div className="flex sm:justify-center gap-6 pt-5 overflow-x-auto scrollbar-hide w-full px-5">
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            onClick={() => scrollTo(0, 0)}
            className="relative flex flex-col items-center text-xl cursor-pointer flex-shrink-0 transform transition-transform duration-500 hover:scale-110 hover:shadow-lg"
          >
            {/* 3D Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 hover:opacity-30 rounded-full transition-all duration-500"></div>

            {/* Icon & Text */}
            <img className="w-16 sm:w-24 mb-2 drop-shadow-lg" src={item.image} alt={item.speciality} />
            <p className="font-medium text-gray-900">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
