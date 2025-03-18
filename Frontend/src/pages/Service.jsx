import React, { useState } from "react";
import {
  BeakerIcon,
  HeartIcon,
  ShieldExclamationIcon,
  PhoneIcon,
  VideoCameraIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

// Features Section Component
const features = [
  {
    id: 1,
    title: "Easy Appointment Booking",
    description:
      "Quickly schedule appointments with our user-friendly interface and secure slots hassle-free.",
    image: "https://img.freepik.com/free-photo/medical-banner-with-doctor-patient_23-2149611238.jpg", // Replace with actual image URL
  },
  {
    id: 2,
    title: "Automated Reminders",
    description:
      "Stay on track with automated SMS and email reminders for upcoming appointments.",
    image: "https://img.lovepik.com/photo/50076/7983.jpg_wh860.jpg", // Replace with actual image URL
  },
  {
    id: 3,
    title: "Doctor Profiles",
    description:
      "View qualifications, specialties, and patient reviews to choose the right doctor.",
    image: "https://thumbs.dreamstime.com/b/health-care-management-business-concept-combines-expertise-doctors-medical-services-insurance-to-provide-334770296.jpg", // Replace with actual image URL
  },
  {
    id: 4,
    title: "Teleconsultation Services",
    description:
      "Connect with doctors online and receive consultations from the comfort of your home.",
    image: "https://st4.depositphotos.com/1907633/20440/i/1600/depositphotos_204407628-stock-photo-health-care-medical-services-concept.jpg", // Replace with actual image URL
  },
];

const FeatureCard = ({ feature, index }) => {
  return (
    <div
      className="flex items-center gap-6 bg-white shadow-lg rounded-lg p-6 transition transform hover:-translate-y-2 hover:bg-pink-100"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <img
        src={feature.image}
        alt={feature.title}
        className="rounded-full w-20 h-20 object-cover"
      />
      <div>
        <h2 className="text-lg font-semibold text-pink-500">Feature 0{feature.id}</h2>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Why Choose Us?
      </h1>
      <div className="grid gap-10 md:grid-cols-2">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} feature={feature} index={index} />
        ))}
      </div>
    </div>
  );
};

// ServiceCard Component
const ServiceCard = ({ Icon, title, description }) => (
  <div className="p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:bg-rose-100">
    <div className="flex items-center justify-center mb-4">
      <Icon className="w-16 h-16 text-pink-500 transition transform hover:text-pink-600" />
    </div>
    <h3 className="text-2xl font-semibold mb-2 text-center">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const ServiceList = () => {
  const services = [
    {
      Icon: BeakerIcon,
      title: "General Check-Up",
      description: "Regular health check-ups for monitoring your health.",
    },
    {
      Icon: HeartIcon,
      title: "Specialist Consultations",
      description: "Access specialists across various fields.",
    },
    {
      Icon: ShieldExclamationIcon,
      title: "Diagnostics",
      description: "Advanced diagnostic tools for accurate detection.",
    },
    {
      Icon: PhoneIcon,
      title: "Emergency Services",
      description: "Immediate attention for critical emergencies.",
    },
    {
      Icon: VideoCameraIcon,
      title: "Telemedicine",
      description: "Consult with doctors online from home.",
    },
    {
      Icon: ShoppingCartIcon,
      title: "Pharmacy",
      description: "On-site and online pharmacy services.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-10 lg:px-20">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          Icon={service.Icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

// ContactForm Component
const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError("Please fill out all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    console.log("Message Sent:", formData);
    setError("");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg mt-2 focus:ring-pink-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg mt-2 focus:ring-pink-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg mt-2 focus:ring-pink-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

// Main Service Component
const Service = () => (
  <div className="bg-white text-black">
    {/* Header */}
    <div className="text-center py-8">
      <h1 className="text-4xl font-bold mb-4 text-pink-600">Our Services</h1>
      <p className="text-lg text-gray-600">
        We offer a range of services to ensure your health and well-being.
      </p>
    </div>
    {/* Features */}
    <FeaturesSection />
    {/* Services */}
    <ServiceList />
    {/* Contact Form */}
    <ContactForm />
  </div>
);

export default Service;
