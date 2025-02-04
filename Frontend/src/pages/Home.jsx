import React from 'react';
import Header from '../components/Header';
import TopDoctors from '../components/TopDoctors';
import SpecialityMenu from '../components/specialityMenu'; // Fixed import case
import Banner from '../components/Banner';


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Fixed Header */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Header />
      </div>

      {/* Main Content */}
      <main className="flex-1">
        <TopDoctors />
        <SpecialityMenu />
        <Banner />
      </main>

      {/* Footer */}
    
    </div>
  );
};

export default Home;
