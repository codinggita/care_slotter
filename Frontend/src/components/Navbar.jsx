import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="relative flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient blur-3xl opacity-20"></div>

      {/* Logo */}
      <img onClick={() => navigate("/")} className="w-44 cursor-pointer z-10" src={assets.logo} alt="CareSlotter Logo" />

      {/* Navigation Links */}
      <ul className="hidden md:flex items-start gap-5 font-medium z-10">
        {["Home", "All Doctors", "Service", "About", "Contact"].map((item, index) => (
          <NavLink key={index} to={`/${item.toLowerCase().replace(" ", "")}`} className="group">
            <li className="py-1 cursor-pointer relative transition-all duration-300 hover:text-gray-800">
              {item}
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </li>
          </NavLink>
        ))}
      </ul>

      {/* Profile & Authentication */}
      <div className="flex items-center gap-4 z-10">
        {token ? (
          <div className="relative group cursor-pointer">
            {/* Profile Picture */}
            <div className="flex items-center gap-2">
              <img className="w-8 rounded-full shadow-lg" src={assets.profile_pic} alt="Profile" />
              <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
            </div>

            {/* Dropdown Menu */}
            <div className="absolute top-12 right-0 text-base font-medium text-gray-600 hidden group-hover:block transition-all duration-300">
              <div className="min-w-48 bg-white shadow-xl rounded-lg flex flex-col gap-4 p-4 border border-gray-200">
                <p onClick={() => navigate("/my-profile")} className="hover:text-black cursor-pointer">
                  My Profile
                </p>
                <p onClick={() => navigate("/my-appointments")} className="hover:text-black cursor-pointer">
                  My Appointments
                </p>
                <p onClick={() => setToken(false)} className="hover:text-red-500 cursor-pointer">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
