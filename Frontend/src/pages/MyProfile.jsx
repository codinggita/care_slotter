import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaEdit, FaSave } from 'react-icons/fa'; // Adding icons for better UI

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: 'codingGita.cg@gmail.com',
    phone: '+91 8347394206',
    address: {
      line1: "Dhodka,Saroda ",
      line2: "RaiUniversity codingGita on 4th floor"
    },
    gender: 'Male',
    dob: '2006-12-28'
  })

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

      {/* Contact Information */}
      <div>
        <p className='text-neutral-500 underline mt-3 text-lg'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <div className='flex items-center'>
            <FaEnvelope className='text-pink-500 mr-2' />
            <p className='font-medium'>Email:</p>
          </div>
          <p className='text-blue-500'>{userData.email}</p>

          <div className='flex items-center'>
            <FaPhone className='text-pink-500 mr-2' />
            <p className='font-medium'>Phone:</p>
          </div>

          {
            isEdit
              ? <input className='bg-gray-100 max-w-52 p-2 rounded-md border-2 border-pink-400' type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p className='text-blue-400 '>{userData.phone}</p>
          }

          <div className='flex items-center'>
            <FaMapMarkerAlt className='text-pink-500 mr-2' />
            <p className='font-medium'>Address:</p>
          </div>

          {
            isEdit
              ? <p>
                <input className='bg-gray-50 p-2 mt-1 mb-1 rounded-md border-2 border-pink-400' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
                <br />
                <input className='bg-gray-50 p-2 mt-1 rounded-md border-2 border-pink-400' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
              </p>
              : <p className='text-gray-500'>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
          }
        </div>
      </div>

      {/* Basic Information */}
      <div>
        <p className='text-neutral-500 underline mt-3 text-lg'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <div className='flex items-center'>
            <p className='font-medium'>Gender:</p>
          </div>
          {
            isEdit
              ? <select className='max-w-[120px] bg-gray-100 p-2 rounded-md border-2 border-pink-400' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              : <p className='text-gray-400'>{userData.gender}</p>
          }

          <div className='flex items-center'>
            <p className='font-medium'>Birthday:</p>
          </div>
          {
            isEdit
              ? <input className='max-w-[120px] bg-gray-100 p-2 rounded-md border-2 border-pink-400' type="date" onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
              : <p className='text-gray-400'>{userData.dob}</p>
          }
        </div>
      </div>

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
