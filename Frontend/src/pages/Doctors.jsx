import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import {
  FaStethoscope,
  FaHeartbeat,
  FaBaby,
  FaBrain,
  FaTooth,
  FaUserMd,
  FaStar,
  FaClock,
  FaMoneyBillAlt,
} from "react-icons/fa";

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const applyFilter = () => {
      if (speciality) {
        setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
      } else {
        setFilterDoc(doctors);
      }
    };
    applyFilter();
  }, [doctors, speciality]);

  const specialties = [
    { name: "General Physician", icon: <FaUserMd className="inline-block mr-2" /> },
    { name: "Gynecologist", icon: <FaHeartbeat className="inline-block mr-2" /> },
    { name: "Dermatologist", icon: <FaStethoscope className="inline-block mr-2" /> },
    { name: "Pediatricians", icon: <FaBaby className="inline-block mr-2" /> },
    { name: "Neurologist", icon: <FaBrain className="inline-block mr-2" /> },
    { name: "Gastroenterologist", icon: <FaTooth className="inline-block mr-2" /> },
  ];

  return (
    <div className="py-12 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center text-3xl font-bold text-gray-800">
        Find a <span className="text-red-600">Specialist</span>
      </div>
      <p className="text-center text-gray-600 mt-2">
        Browse and book an appointment with top-rated doctors.
      </p>

      {/* Filter & Doctors Section */}
      <div className="mt-10 flex flex-col md:flex-row gap-6">
        {/* Filter Section */}
        <div className="w-full md:w-1/4">
          <button
            className={`w-full py-2 border rounded-lg text-sm font-medium sm:hidden ${showFilter ? "bg-pink-700 text-white" : "bg-gray-100"}`}
            onClick={() => setShowFilter((prev) => !prev)}
          >
            {showFilter ? "Hide Filters" : "Show Filters"}
          </button>

          <div className={`mt-4 flex-col gap-4 text-sm ${showFilter ? "flex" : "hidden sm:flex"}`}>
            {specialties.map((spec) => (
              <button
                key={spec.name}
                onClick={() => navigate(speciality === spec.name ? "/doctors" : `/doctors/${spec.name}`)}
                aria-label={`View ${spec.name} doctors`}
                className={`w-full py-2 px-4 border border-gray-300 rounded-lg text-left transition-all
                  ${speciality === spec.name ? "bg-blue-100 text-pink-600 font-semibold shadow-md" : "hover:bg-gray-100"}`}
              >
                {spec.icon} {spec.name}
              </button>
            ))}
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default Doctors;