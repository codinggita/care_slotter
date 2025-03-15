import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { FaCheckCircle } from "react-icons/fa"; // Icon for availability

const TopDoctors = () => {
  const navigate = useNavigate();
  const context = useContext(AppContext);

  if (!context) {
    console.error("AppContext is undefined. Ensure AppContextProvider is wrapped.");
    return <p className="text-center text-gray-600">Loading doctors...</p>;
  }

  const { doctors = [] } = context;

  return (
    <div className="flex flex-col items-center gap-6 my-16 text-gray-900 md:mx-10 relative overflow-hidden bg-transparent">
      {/* Background Glow Effect */}
      <div className="absolute  blur-3xl opacity-30"></div>

      {/* Header */}
      <h1 className="text-3xl font-semibold text-pink-600 relative z-10 animate-fade-in">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm text-gray-700 relative z-10">Browse through our extensive list of trusted doctors.</p>

      {/* Doctor List */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0 relative z-10">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              window.scrollTo(0, 0);
            }}
            className="relative border border-pink-200 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:bg-pink-50"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 hover:opacity-40 transition-all duration-500 rounded-xl"></div>

            {/* Doctor Image */}
            <img className="w-full h-78 object-cover bg-pink-100" src={item.image} alt={`Doctor ${item.name}`} />

            {/* Doctor Info */}
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-green-500">
                <FaCheckCircle className="text-green-500" />
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium mt-2">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

    
    </div>
  );
};

export default TopDoctors;
