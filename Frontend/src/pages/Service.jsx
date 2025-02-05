import React, { useState } from 'react';
import { BeakerIcon, HeartIcon, ShieldExclamationIcon, PhoneIcon, VideoCameraIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'; // Corrected import path

// ServiceCard Component
const ServiceCard = ({ Icon, title, description }) => {
  return (
    <div className="p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
      <div className="flex items-center justify-center mb-4">
        <Icon className="w-16 h-16 text-blue-500" />
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

// ServiceList Component
const ServiceList = () => {
  const services = [
    { Icon: BeakerIcon, title: "General Check-Up", description: "Regular health check-ups for monitoring and maintaining your health." },
    { Icon: HeartIcon, title: "Specialist Consultations", description: "Access to the best specialists in various fields of medicine." },
    { Icon: ShieldExclamationIcon, title: "Diagnostics", description: "Advanced diagnostic tools for accurate detection of health issues." },
    { Icon: PhoneIcon, title: "Emergency Services", description: "Immediate medical attention for critical health emergencies." },
    { Icon: VideoCameraIcon, title: "Telemedicine", description: "Consult with our doctors online from the comfort of your home." },
    { Icon: ShoppingCartIcon, title: "Pharmacy", description: "On-site and online pharmacy services for your convenience." }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-10 lg:px-20">
      {services.map((service, index) => (
        <ServiceCard key={index} Icon={service.Icon} title={service.title} description={service.description} />
      ))}
    </div>
  );
};

// ContactForm Component
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message Sent:', { name, email, message });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg mt-2"
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg mt-4">
          Send Message
        </button>
      </form>
    </div>
  );
};

// Testimonials Component
const Testimonials = () => {
  const testimonials = [
    { name: "John Doe", feedback: "Great service! The doctors were very attentive and helpful." },
    { name: "Jane Smith", feedback: "I had a great experience with the telemedicine consultation." },
    { name: "Sam Brown", feedback: "Fast and efficient emergency services. Highly recommend!" }
  ];

  return (
    <div className="bg-gray-100 p-10 mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Patients Say</h2>
      <div className="flex flex-col sm:flex-row sm:gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
            <p className="text-lg text-gray-600">{testimonial.feedback}</p>
            <p className="mt-4 text-right font-semibold text-blue-500">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Service Component (Server.jsx)
const Service = () => {
  return (
    <div className="bg-white text-black py-10">
      {/* Header Section */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-600">We provide a variety of medical services to ensure your health and well-being.</p>
      </div>

      {/* Services Section */}
      <ServiceList />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default Service;
