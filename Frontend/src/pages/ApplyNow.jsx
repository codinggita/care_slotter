import React from "react";
import { useParams } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaUpload, FaFileAlt, FaCalendar, FaBuilding, FaMoneyBillWave } from "react-icons/fa";
import { motion } from "framer-motion";
import { jobsData } from "../pages/Job"; // Ensure correct path

const ApplyNow = () => {
  const { id } = useParams();
  const job = jobsData.find((job) => job.id === parseInt(id));

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
        <div className="space-y-4 text-gray-600">
          <p className="flex items-center"><FaBuilding className="mr-2 text-rose-600" /> Company: {job?.company}</p>
          <p className="flex items-center"><FaMapMarkerAlt className="mr-2 text-rose-600" /> Location: {job?.location}</p>
          <p className="flex items-center"><FaBriefcase className="mr-2 text-rose-600" /> Job Type: {job?.type}</p>
          <p className="flex items-center"><FaMoneyBillWave className="mr-2 text-rose-600" /> Salary: {job?.salary}</p>
          <p className="flex items-center"><FaCalendar className="mr-2 text-rose-600" /> Posted Date: {job?.postedDate}</p>
          <p className="text-gray-700"><strong>Description:</strong> {job?.description}</p>
        </div>
      </motion.div>

      <motion.div className="bg-white p-8 rounded-lg shadow-lg" variants={itemVariants}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Fill in Your Details</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center bg-gray-100 p-3 rounded-md">
              <FaUser className="text-rose-600 mr-3" />
              <input type="text" placeholder="Full Name" className="w-full bg-transparent focus:outline-none" required />
            </div>
            <div className="flex items-center bg-gray-100 p-3 rounded-md">
              <FaEnvelope className="text-rose-600 mr-3" />
              <input type="email" placeholder="Email Address" className="w-full bg-transparent focus:outline-none" required />
            </div>
            <div className="flex items-center bg-gray-100 p-3 rounded-md">
              <FaPhone className="text-rose-600 mr-3" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-transparent focus:outline-none" required />
            </div>
            <div className="flex items-center bg-gray-100 p-3 rounded-md">
              <FaMapMarkerAlt className="text-rose-600 mr-3" />
              <input type="text" placeholder="Current Location" className="w-full bg-transparent focus:outline-none" required />
            </div>
            <div className="flex items-center bg-gray-100 p-3 rounded-md">
              <FaGraduationCap className="text-rose-600 mr-3" />
              <input type="text" placeholder="Highest Qualification" className="w-full bg-transparent focus:outline-none" required />
            </div>
            <div className="flex items-center bg-gray-100 p-3 rounded-md">
              <FaBriefcase className="text-rose-600 mr-3" />
              <input type="text" placeholder="Years of Experience" className="w-full bg-transparent focus:outline-none" required />
            </div>
          </div>

          <div className="bg-gray-100 p-3 rounded-md flex items-center">
            <FaFileAlt className="text-rose-600 mr-3" />
            <textarea placeholder="Cover Letter" className="w-full bg-transparent focus:outline-none" rows="4" required></textarea>
          </div>

          <div className="bg-gray-100 p-3 rounded-md flex items-center">
            <FaUpload className="text-rose-600 mr-3" />
            <input type="file" className="w-full bg-transparent focus:outline-none" required />
          </div>

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