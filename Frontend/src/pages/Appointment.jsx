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



  return (
    docInfo && (
      <div className="p-4 sm:p-8">
        {/* Doctor details */}
       

     

        {/* Listing Related Doctors */}
        <RealatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
