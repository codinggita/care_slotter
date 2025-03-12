import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { FaUserMd, FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillAlt, FaTimes } from 'react-icons/fa'; // Adding icons for UI

const MyAppointment = () => {
  const { doctors } = useContext(AppContext)

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <p className='pb-3 mt-12 font-medium text-pink-600 border-b-2'>My Appointments</p>
      <div>
        {doctors.slice(0, 2).map((item, index) => (
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b hover:shadow-lg transition-all duration-300' key={index}>
            
            {/* Doctor Image and Info */}
            <div className='flex justify-center items-center'>
              <img className='w-20 h-20 rounded-full border-4 border-pink-200' src={item.image} alt={item.name} />
            </div>

            {/* Doctor Details */}
            <div className='flex-1 text-sm text-zinc-700'>
              <p className='text-pink-600 font-semibold text-lg'>{item.name}</p>
              <p className='flex items-center text-sm text-zinc-600'>
                <FaUserMd className='text-pink-500 mr-2' />
                {item.speciality}
              </p>

              <p className='text-zinc-700 font-medium mt-2'>Address:</p>
              <p className='text-xs'>
                <FaMapMarkerAlt className='inline text-pink-500 mr-1' />
                {item.address.line1}
              </p>
              <p className='text-xs'>
                <FaMapMarkerAlt className='inline text-pink-500 mr-1' />
                {item.address.line2}
              </p>

              <p className='text-xs mt-1'>
                <span className='text-sm text-neutral-700 font-medium'>
                  <FaCalendarAlt className='inline text-pink-500 mr-1' />
                  Date & Time:
                </span>
                25, July, 2024 | 8:30 PM
              </p>
            </div>

            {/* Buttons */}
            <div className='flex flex-col gap-2 justify-center items-center'>
              <button className='text-sm text-white bg-pink-500 py-2 px-4 rounded-full hover:bg-pink-600 transition-all duration-300'>
                <FaMoneyBillAlt className='inline mr-2' /> Pay Online
              </button>
              <button className='text-sm text-white bg-red-600 py-2 px-4 rounded-full hover:bg-red-700 transition-all duration-300'>
                <FaTimes className='inline mr-2' /> Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointment
