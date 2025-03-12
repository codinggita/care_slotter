import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../components/Header';

import './Home.css'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gradient-to-b from-pink-100 via-white to-pink-50">
      {/* Header with SEO Meta */}
      <div className="sticky top-0 z-50 bg-white shadow-lg animate-slide-in">
        <Helmet>
          <title>CareSlotter - Find Top Doctors and Specialties</title>
          <meta name="description" content="Find top doctors, explore specialties, and book appointments easily with CareSlotter." />
        </Helmet>
        <Header />
      </div>

    </div>
  );
};

export default Home;
