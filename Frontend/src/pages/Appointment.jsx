import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import RealatedDoctors from '../components/RealatedDoctors';
import { format } from 'date-fns'; // Add date-fns for consistent date formatting
import { CalendarIcon, ClockIcon, UsersIcon } from '@heroicons/react/outline'; // Add icons for appointment, time, and related

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSloteTime] = useState('');

  const getAvailableSlots = async () => {
    setDocSlots([]);

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currenDate = new Date(today);
      currenDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currenDate.getDate()) {
        currenDate.setHours(currenDate.getHours() > 10 ? currenDate.getHours() + 1 : 10);
        currenDate.setMinutes(currenDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currenDate.setHours(10);
        currenDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currenDate < endTime) {
        let formattedTime = format(currenDate, 'HH:mm'); // Use date-fns to format the time

        timeSlots.push({
          datetime: new Date(currenDate),
          time: formattedTime,
        });

        currenDate.setMinutes(currenDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    const fetchDocInfo = () => {
      const docData = doctors.find((doc) => doc._id === docId);
      setDocInfo(docData);
    };

    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  return (
    docInfo && (
      <div className="p-4 sm:p-8">
        {/* Doctor details */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Doctor Image with Animation */}
          <motion.div
            initial={{ scale: 0.9, rotateY: 15 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative"
          >
            <img className="bg-primary w-full sm:max-w-72 rounded-lg shadow-xl" src={docInfo.image} alt={docInfo.name} />
            {/* 3D Hover Effect */}
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: '0px 10px 20px rgba(0,0,0,0.2)',
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
              <p>{docInfo.degree} - {docInfo.speciality}</p>
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
              Appointment fee: <span className="text-gray-700">{currencySymbol}{docInfo.fees}</span>
            </p>
          </motion.div>
        </div>

        {/* Booking Slots */}
        <div className="sm-ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <motion.div
                  whileHover={{ scale: 1.1, rotateY: 5, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`}
                  key={index}
                >
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </motion.div>
              ))}
          </div>

          <div className="flex item-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <motion.p
                  whileHover={{ scale: 1.05, boxShadow: '0px 10px 15px rgba(0,0,0,0.2)' }}
                  onClick={() => setSloteTime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`}
                  key={index}
                >
                  {item.time}
                </motion.p>
              ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6"
            disabled={!slotTime} // Disable if no time selected
          >
            Book an Appointment
          </motion.button>
        </div>

        {/* Listing Related Doctors */}
        <RealatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
