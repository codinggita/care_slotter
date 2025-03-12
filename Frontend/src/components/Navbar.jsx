import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Framer Motion for animations
import {
  FaUserCircle,
  FaSignOutAlt,
  FaUserMd,
  FaBars,
  FaTimes,
  FaCalendarCheck,
} from "react-icons/fa"; // Import necessary icons

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownFixed, setDropdownFixed] = useState(false); // New state for pinning dropdown

  // Handler for resetting the fixed dropdown when necessary.
  const handleDropdownClose = () => {
    setDropdownFixed(false);
    setShowDropdown(false);
  };

  return (
    <motion.nav
      className="relative flex items-center justify-between text-black text-sm py-4 px-6 md:px-16 bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 blur-3xl opacity-20"></div>

      {/* Logo */}
      <motion.img
        onClick={() => navigate("/")}
        className="w-40 cursor-pointer z-10"
        src={assets.logo}
        alt="CareSlotter Logo"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-6 font-medium text-lg z-10">
        {[
          { name: "Home", path: "/" },
          { name: "Doctors", path: "/doctors" },
          { name: "Services", path: "/service" },
          { name: "About", path: "/about" },
          { name: "Contact", path: "/contact" },
          { name: "Blogs", path: "https://blog-1-l4wp.onrender.com/" },
        ].map((item, index) => (
          <motion.li
            key={index}
            className="relative cursor-pointer py-1 group transition-all duration-300 hover:text-pink-300"
            whileHover={{ scale: 1.1 }}
          >
            <NavLink
              to={item.path}
              className="group transition-all duration-300"
            >
              {item.name}
              <hr className="border-none h-0.5 bg-white w-3/5 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </NavLink>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="md:hidden text-black text-2xl z-10"
        aria-label="Toggle menu"
      >
        {showMenu ? <FaTimes /> : <FaBars />}
      </button>

      {/* Profile & Authentication */}
      <div className="flex items-center gap-6 z-10 ">
        {token ? (
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => {
              if (!dropdownFixed) setShowDropdown(true);
            }}
            onMouseLeave={() => {
              if (!dropdownFixed) setShowDropdown(false);
            }}
          >
            {/* Profile Icon */}
            <motion.div
              className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-full shadow-md cursor-pointer hover:bg-pink-500 hover:text-white transition-all"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <FaUserCircle className="text-2xl "  />
              <span>Profile</span>
            </motion.div>

            {/* Dropdown Menu */}
            {showDropdown && (
              <motion.div
                className="absolute top-12 right-0 text-base font-medium text-gray-700 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="min-w-48 bg-white shadow-xl rounded-lg flex flex-col gap-4 p-4 border border-gray-200">
                  <p
                    onClick={() => {
                      // Pin the dropdown on click and navigate
                      setDropdownFixed(true);
                      navigate("/my-profile");
                    }}
                    className="hover:text-black cursor-pointer flex items-center gap-2"
                  >
                    <FaUserMd /> My Profile
                  </p>
                  <p
                    onClick={() => {
                      setDropdownFixed(true);
                      navigate("/my-appointments");zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                    }}
                    className="hover:text-black cursor-pointer flex items-center gap-2"
                  >
                    <FaCalendarCheck /> My Appointments
                  </p>
                  <p
                    onClick={() => {
                      // For logout, you might want to clear tokens or perform other actions
                      setDropdownFixed(true);
                      setToken(false);
                      // Optionally, you can keep the dropdown fixed or close it:
                      // handleDropdownClose();
                    }}
                    className="hover:text-red-500 cursor-pointer flex items-center gap-2"
                  >
                    <FaSignOutAlt /> Logout
                  </p>
                  {/* Optional close button to unpin the dropdown */}
                  {dropdownFixed && (
                    <button
                      onClick={handleDropdownClose}
                      className="text-sm text-blue-500 hover:underline self-end"
                    >
                      Close Menu
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        ) : (
          <motion.button
            onClick={() => navigate("/login")}
            className="bg-pink-500 text-white px-8 py-3 rounded-full font-medium shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Sign Up
          </motion.button>
        )}
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col items-center justify-center text-white z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <FaTimes
            className="absolute top-6 right-6 text-3xl cursor-pointer"
            onClick={() => setShowMenu(false)}
          />

          <ul className="flex flex-col items-center gap-6 text-2xl font-semibold">
            {["Home", "Doctors", "Services", "About", "Contact"].map(
              (item, index) => (
                <NavLink
                  key={index}
                  onClick={() => setShowMenu(false)}
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-pink-300 transition-all duration-300"
                >
                  {item}
                </NavLink>
              )
            )}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
