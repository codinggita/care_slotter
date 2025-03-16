import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { FaUserMd, FaCalendarCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [relDoc, setRelDocs] = useState([]);

  useEffect(() => {
    if (doctors?.length > 0 && speciality) {
      const filteredDoctors = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      if (JSON.stringify(filteredDoctors) !== JSON.stringify(relDoc)) {
        setRelDocs(filteredDoctors);
      }
    }
  }, [doctors, speciality, docId, relDoc]);

  return (
    <div className="relative flex flex-col items-center gap-6 my-16 text-gray-900 md:mx-10">
      {/* Animated Background Glow */}
      <div className="absolute inset-0  blur-3xl animate-pulse"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center gap-6 w-full">
        {/* Header */}
        <motion.h1
          className="text-4xl font-bold text-pink-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Top Doctors to Book
        </motion.h1>
        <p className="sm:w-1/3 text-center text-base text-gray-700">
          Browse through our list of trusted specialists and find the best care.
        </p>

        {/* Doctor List */}
        <motion.div 
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {relDoc.slice(0, 5).map((item) => (
            <motion.div
              key={item._id}
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="relative border border-pink-300 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 opacity-0 hover:opacity-40 transition-all duration-500 rounded-xl"></div>

              {/* Doctor Image */}
              <img className="w-full bg-pink-50 rounded-t-xl" src={item.image} alt={item.name} />

              {/* Doctor Info */}
             
            </motion.div>
          ))}
        </motion.div>

        {/* More Button */}
      
      </div>
    </div>
  );
};

export default RelatedDoctors;
