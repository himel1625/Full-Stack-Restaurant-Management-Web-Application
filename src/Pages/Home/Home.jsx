import React from 'react';
import { Helmet } from 'react-helmet-async';
import Carousel from '../../Components/Banner/Carousel';
import Hero from '../Hero/Hero';
const Home = () => {
  return (
    <>
      <Helmet>
        <title>DineMaster | Home</title>
      </Helmet>
      <div>
        <Carousel />
        <Hero />
      </div>
    </>
  );
};
export default Home;
