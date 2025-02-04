import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="relative md:mx-10 mt-40">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient blur-3xl opacity-20"></div>

      <div className="relative flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
        {/* Left Section */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="CareSlotter Logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            CareSlotter is a registered startup empaneled with 10,000+ Doctors,
            500+ Hospitals, and has impacted over 2 million patients.
          </p>
        </div>

        {/* Center Section */}
        <div>
          <p className="text-xl font-medium mb-5 text-white">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-300">
            <li className="hover:text-white transition">Home</li>
            <li className="hover:text-white transition">About Us</li>
            <li className="hover:text-white transition">Contact Us</li>
            <li className="hover:text-white transition">Services</li>
            <li className="hover:text-white transition">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-xl font-medium mb-5 text-white">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-300">
            <li className="hover:text-white transition">+91 8347394206</li>
            <li className="hover:text-white transition">CareSlotter@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <hr className="border-gray-600" />
      <p className="py-5 text-sm text-center text-gray-400">
        © 2024 CareSlotter. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
