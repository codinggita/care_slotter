import React from "react";
import { useParams } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaUpload, FaFileAlt, FaCalendar, FaBuilding, FaMoneyBillWave } from "react-icons/fa";
import { motion } from "framer-motion";
import { jobsData } from "../pages/Job"; // Ensure correct path

const ApplyNow = () => {
  const { id } = useParams();


  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 py-12 px-6 md:px-12 lg:px-24"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-4xl font-bold text-gray-800 text-center mb-8"
        variants={itemVariants}
      >
        Apply for <span className="text-rose-600">{job?.title}</span>
      </motion.h1>

      <motion.div className="bg-white p-8 rounded-lg shadow-lg mb-12" variants={itemVariants}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Job Details</h2>
    
      </motion.div>

      <motion.div className="bg-white p-8 rounded-lg shadow-lg" variants={itemVariants}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Fill in Your Details</h2>
        <form className="space-y-6">
    

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-rose-600 text-white py-3 rounded-lg hover:bg-rose-700 transition-all"
          >
            Submit Application
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ApplyNow;