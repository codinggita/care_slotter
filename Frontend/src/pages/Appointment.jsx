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
