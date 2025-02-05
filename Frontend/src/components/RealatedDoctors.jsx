import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RealatedDoctors = (speciality,docId) => {

const {doctors} = useContext(AppContext)
const navigate = useNavigate

 const [relDoc,setRelDocs] = useState([])

 useEffect(() => {

    if(doctors.length > 0 && speciality) {
        const doctorListData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
        setRelDocs(doctorListData)
    }
 
 },[doctors,speciality,docId])

  return (
    <div className="flex flex-col items-center gap-6 my-16 text-gray-900 md:mx-10 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse blur-3xl opacity-20"></div>

      {/* Header */}
      <h1 className="text-3xl font-semibold text-gray-900">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm text-gray-700">
        Browse through our extensive list of trusted doctors.
      </p>

      {/* Doctor List */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0">
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            key={index}
            onClick={() =>{ navigate(`/appointment/${item._id}`) ; scrollTo(0,0)}}
            className="relative border border-blue-200 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-lg"
          >
            {/* 3D Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 hover:opacity-40 transition-all duration-500 rounded-xl"></div>

            {/* Doctor Image */}
            <img className="w-full bg-blue-50" src={item.image} alt={item.name} />

            {/* Doctor Info */}
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-green-500">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <button
        onClick={() => {
          navigate("/doctors");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="bg-pink-400 text-white px-12 py-3 rounded-full mt-10 text-lg font-medium hover:scale-110 transition-all duration-500 shadow-md hover:shadow-xl"
      >
        More
      </button>
    </div>
  )
}

export default RealatedDoctors
