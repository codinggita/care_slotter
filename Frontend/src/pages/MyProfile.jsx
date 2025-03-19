import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaEdit, FaSave } from 'react-icons/fa'; // Adding icons for better UI

const MyProfile = () => {


  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='max-w-lg flex flex-col gap-4 text-sm bg-white p-6 rounded-lg shadow-lg'>
      {/* Profile Image */}
      <div className="flex justify-center">
        <img className='w-36 h-36 rounded-full border-4 border-pink-300' src={userData.image} alt="" />
      </div>

      {/* Name */}
      <div className="flex justify-between items-center mt-4">
        {
          isEdit
            ? <input className='bg-gray-50 text-3xl font-medium max-w-[60%] mt-4 p-2 rounded-md border-2 border-pink-400 focus:outline-none' type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
            : <p className='font-medium text-3xl text-pink-600'>{userData.name}</p>
        }
      </div>

      <hr className='bg-zinc-400 h-[1px] border-none' />

  


      {/* Save/Edit Button */}
      <div className="mt-6">
        {
          isEdit
            ? <button className='border border-pink-500 text-pink-500 px-8 py-2 rounded-full hover:bg-pink-500 hover:text-white transition-all' onClick={() => setIsEdit(false)}>
                <FaSave className='inline mr-2' /> Save Information
              </button>
            : <button className='border border-pink-500 text-pink-500 px-8 py-2 rounded-full hover:bg-pink-500 hover:text-white transition-all' onClick={() => setIsEdit(true)}>
                <FaEdit className='inline mr-2' /> Edit
              </button>
        }
      </div>
    </div>
  )
}

export default MyProfile;
