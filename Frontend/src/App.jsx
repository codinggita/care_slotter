import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import MyAppointment from "./pages/MyAppointment";
import MyProfile from "./pages/MyProfile";
import Appointment from "./pages/Appointment";
import Service from "./pages/Service";

import "./index.css"; // ✅ Import Tailwind CSS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* Page Wrapper with Padding */}
      <div className="mx-4 sm:mx-[10%] flex flex-col min-h-screen">
        
        {/* Sticky Navbar */}
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:speciality" element={<Doctors />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/my-appointments" element={<MyAppointment />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/appointment/:docId" element={<Appointment />} /> {/* ✅ Fixed Route */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
