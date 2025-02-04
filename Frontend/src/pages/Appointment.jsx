import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  useEffect(() => {
    const fetchDocInfo = () => {
      const docData = doctors.find((doc) => doc._id === docId);
      setDocInfo(docData);
    };

    fetchDocInfo();
  }, [doctors, docId]);

  return (
    docInfo && (
      <div className="p-4 sm:p-8">
        {/* ---- Doctor details ---- */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Doctor Image with Animation */}
          <motion.div
            initial={{ scale: 0.9, rotateY: 15 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg shadow-xl"
              src={docInfo.image}
              alt={docInfo.name}
            />
            {/* 3D Hover Effect */}
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              }}
              className="absolute inset-0 rounded-lg"
            />
          </motion.div>

          {/* Doctor Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 border border-gray-300 rounded-lg p-6 sm:p-8 bg-white mx-2 sm:mx-0 shadow-md"
          >
            {/* Doctor Name */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-700">
              {docInfo.name} <img src={assets.verified_icon} alt="Verified" />
            </p>

            {/* Specialty & Experience */}
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <span className="py-1 px-3 border text-xs rounded-full bg-gray-100 text-gray-700">
                {docInfo.experience} years
              </span>
            </div>

            {/* About the Doctor */}
            <div className="mt-4">
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900">
                About <img src={assets.info_icon} alt="Info" />
              </p>
              <p className="text-sm text-gray-500 mt-1">{docInfo.about}</p>
            </div>

            {/* Appointment Fee */}
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee:{" "}
              <span className="text-gray-700">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    )
  );
};

export default Appointment;
