import React, { useState } from "react";
import { FaMapMarkerAlt, FaClock, FaStar } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const jobsData = [
  { id: 1, title: "General Physician", location: "Remote", type: "Full-Time", salary: "$100K - $150K" },
  { id: 2, title: "Pediatrician", location: "Bangalore, India", type: "Part-Time", salary: "$80K - $120K" },
  { id: 3, title: "Surgeon", location: "Delhi, India", type: "Full-Time", salary: "$200K - $300K" },
  { id: 4, title: "Radiologist", location: "Remote", type: "Full-Time", salary: "$150K - $200K" },
  { id: 5, title: "Dentist", location: "Mumbai, India", type: "Full-Time", salary: "$90K - $120K" },
  { id: 6, title: "Cardiologist", location: "Hyderabad, India", type: "Full-Time", salary: "$250K - $400K" },
  { id: 7, title: "Orthopedic Surgeon", location: "Remote", type: "Part-Time", salary: "$150K - $250K" },
  { id: 8, title: "Dermatologist", location: "Pune, India", type: "Full-Time", salary: "$120K - $180K" },
  { id: 9, title: "Neurosurgeon", location: "Chennai, India", type: "Full-Time", salary: "$280K - $500K" },
  { id: 10, title: "ENT Specialist", location: "Kolkata, India", type: "Part-Time", salary: "$100K - $170K" },
];

const reviewsData = [
  { id: 1, name: "Dr. Alice Johnson", role: "General Physician", review: "CareSlotter ensures excellent patient care and professional growth!", img: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: 2, name: "Dr. Michael Smith", role: "Pediatrician", review: "A supportive environment for doctors and staff.", img: "https://randomuser.me/api/portraits/men/2.jpg" },
  { id: 3, name: "Dr. Sophia Brown", role: "Radiologist", review: "Cutting-edge technology and a great team.", img: "https://randomuser.me/api/portraits/women/3.jpg" },
  { id: 4, name: "Dr. John Doe", role: "Surgeon", review: "Rewarding work and excellent benefits!", img: "https://randomuser.me/api/portraits/men/4.jpg" },
];

const MapComponent = () => {
  const [location, setLocation] = useState("");

  return (
    <motion.div
      className="mt-16 p-6 bg-white rounded-lg shadow-lg text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold text-gray-800">Find a Job Near You</h2>
      <input
        type="text"
        placeholder="Enter location..."
        className="mt-4 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-600"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className="mt-4 rounded-lg overflow-hidden shadow-md">
        <iframe
          title="Map"
          width="100%"
          height="300"
          src={` https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29390.510521193522!2d72.54234558324879!3d22.95708301446935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8f9cb75d61cb%3A0x6a1ad51b32f1d536!2sPiplaj%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1739521162428!5m2!1sen!2sin`}
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  );
};

const Job = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredJobs = jobsData.filter((job) => job.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="text-center text-4xl font-bold text-gray-800 mb-10">
        JOIN <span className="text-rose-600">OUR MEDICAL TEAM</span>
      </div>

      <div className="flex justify-center items-center gap-4 mb-12">
        <input
          type="text"
          placeholder="Search for a job title..."
          className="w-full max-w-lg px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-rose-600"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job) => (
          <motion.div
            key={job.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
            <p className="flex items-center text-gray-600 mt-2">
              <FaMapMarkerAlt className="mr-2 text-rose-600" /> {job.location}
            </p>
            <p className="flex items-center text-gray-600">
              <FaClock className="mr-2 text-rose-600" /> {job.type}
            </p>
            <p className="text-gray-700 font-bold mt-2">{job.salary}</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(`/apply/${job.id}`)} // Fixed URL
              className="mt-4 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700"
            >
              Apply Now
            </motion.button>
          </motion.div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">What Our Doctors Say</h2>
      
      </div>

      <MapComponent />
    </div>
  );
};

export default Job;





