import React from 'react';
import { assets } from '../assets/assets';
import { FaCheckCircle, FaCalendarCheck, FaHeart, FaUserMd, FaStethoscope, FaClipboardList, FaMobileAlt, FaShieldAlt, FaHandsHelping } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">

      {/* Heading */}
      <div className="text-center text-4xl font-bold text-gray-800 mb-12">
        ABOUT <span className="text-rose-600">US</span>
      </div>

      {/* About Us Section */}
      <section className="my-10 flex flex-col md:flex-row-reverse gap-12 items-center">
        <div className="w-full md:w-1/2 transform transition duration-500 hover:scale-105">
          <img className="w-full rounded-lg shadow-lg" src="https://media.licdn.com/dms/image/v2/D4D12AQEPA_WCQE4H2Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1666106738283?e=2147483647&v=beta&t=wxDKWBeHCX0ioyET0nEEHS7oyxGFlIE4OlyLBe1FjLA" alt="CareSlotter healthcare" />
        </div>

        <div className="w-full md:w-1/2 text-sm text-gray-600 flex flex-col gap-6">
          <p>
            Welcome to CareSlotter, your trusted partner in managing your healthcare needs conveniently and efficiently. We understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p>
            CareSlotter is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, CareSlotter is here to support you every step of the way.
          </p>
          <b className="text-gray-800 text-lg">Our Vision</b>
          <p>
            Our vision at CareSlotter is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
          <b className="text-gray-800 text-lg">Our Mission</b>
          <p>
            Our mission is to empower individuals by providing them with the tools and resources they need to take control of their health. We believe that everyone deserves access to quality healthcare, and we are dedicated to making that a reality.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="text-xl my-6 text-center">
        <p>Why <span className="text-rose-600 font-semibold">Choose Us</span></p>
      </section>

      {/* Why Choose Us Options */}
      <section className="flex flex-col md:flex-row gap-6 justify-center mb-20">
        <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
          <FaCheckCircle className="text-rose-600 text-3xl mb-4" />
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
          <FaCalendarCheck className="text-rose-600 text-3xl mb-4" />
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
          <FaHeart className="text-rose-600 text-3xl mb-4" />
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="text-xl my-6 text-center">
        <p>Our <span className="text-rose-600 font-semibold">Features</span></p>
      </section>

      {/* Additional Features Options */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
          <FaUserMd className="text-rose-600 text-3xl mb-4" />
          <b>Expert Doctors:</b>
          <p>Connect with highly qualified and experienced healthcare professionals.</p>
        </div>
        <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
          <FaStethoscope className="text-rose-600 text-3xl mb-4" />
          <b>Comprehensive Care:</b>
          <p>Access a wide range of medical services tailored to your needs.</p>
        </div>
        <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
          <FaClipboardList className="text-rose-600 text-3xl mb-4" />
          <b>Health Records:</b>
          <p>Securely store and manage your health records in one place.</p>
        </div>
        <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
          <FaMobileAlt className="text-rose-600 text-3xl mb-4" />
          <b>Mobile Access:</b>
          <p>Manage your healthcare on the go with our mobile-friendly platform.</p>
        </div>
        <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
          <FaShieldAlt className="text-rose-600 text-3xl mb-4" />
          <b>Data Security:</b>
          <p>Your data is safe with our state-of-the-art security measures.</p>
        </div>
        <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
          <FaHandsHelping className="text-rose-600 text-3xl mb-4" />
          <b>Support:</b>
          <p>Our dedicated support team is here to assist you 24/7.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="text-xl my-6 text-center">
        <p>What Our <span className="text-rose-600 font-semibold">Users Say</span></p>
      </section>

      {/* Testimonials */}
      <section className="flex flex-col md:flex-row gap-6 justify-center mb-20">
        <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
          <p>"CareSlotter has made managing my health so much easier. I can book appointments and access my records anytime, anywhere!"</p>
          <b>- Sarah L.</b>
        </div>
        <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
          <p>"The personalized reminders have been a game-changer for me. I never miss an appointment anymore!"</p>
          <b>- John D.</b>
        </div>
        <div className="border border-rose-600 px-10 py-16 flex flex-col gap-5 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-lg">
          <p>"I love how easy it is to find and connect with top doctors in my area. Highly recommend CareSlotter!"</p>
          <b>- Emily R.</b>
        </div>
      </section>
    </div>
  );
};

export default About;