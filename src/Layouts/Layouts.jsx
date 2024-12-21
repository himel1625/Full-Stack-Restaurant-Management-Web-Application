import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

const Layouts = () => {
  return (
    <div className='font-Lato '>
      <Navbar />
      <div className='container mx-auto md:mx-auto scroll-smooth    '>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layouts;
