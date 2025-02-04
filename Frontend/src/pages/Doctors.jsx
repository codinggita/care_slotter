import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);

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
    'General physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist',
  ];

  return (
    <div className="p-6">
      <p className="text-gray-600">Browse through doctor specialties</p>
      
      {/* Specialties List */}
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          {specialties.map((spec) => (
            <p
              key={spec}
              onClick={() => navigate(speciality === spec ? '/doctors' : `/doctors/${spec}`)}
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-lg cursor-pointer transition-all 
                ${speciality === spec ? 'bg-indigo-100 text-black font-medium shadow-md' : 'hover:bg-gray-100'}`}
            >
              {spec}
            </p>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filterDoc.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              initial={{ scale: 0.9, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotateY: 5, boxShadow: '0px 5px 15px rgba(0,0,0,0.2)' }}
              transition={{ duration: 0.3 }}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer bg-white shadow-sm hover:shadow-lg"
            >
              <img className="bg-blue-50 w-full" src={item.image} alt={item.name} />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-semibold">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
