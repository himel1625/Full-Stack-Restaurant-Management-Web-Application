import React from 'react';
import { Carousel as CustomCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import food1 from '../../assets/food-img/food1.jpg';
import food2 from '../../assets/food-img/food2.avif';
import food3 from '../../assets/food-img/food3.jpg';
import food4 from '../../assets/food-img/food4.jpg';
import food6 from '../../assets/food-img/food6.jpeg';
import food7 from '../../assets/food-img/food7.webp';

function Slide({ image }) {
  return (
    <div className='text-center'>
      <img
        src={image}
        alt='Food'
        className='w-full h-[70vh] object-cover rounded-lg'
      />
    </div>
  );
}

const Carousel = () => {
  return (
    <div className='relative w-full h-full'>
      <CustomCarousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        dynamicHeight={false}
        className='w-full h-full'
      >
        <div>
          <img
            src={food1}
            alt='Slide 1'
            className='w-full h-[600px] object-cover'
          />
        </div>
        <div>
          <img
            src={food2}
            alt='Slide 2'
            className='w-full h-[600px] object-cover'
          />
        </div>
        <div>
          <img
            src={food3}
            alt='Slide 3'
            className='w-full h-[600px] object-cover'
          />
        </div>
        <div>
          <img
            src={food4}
            alt='Slide 4'
            className='w-full h-[600px] object-cover'
          />
        </div>
        <div>
          <img
            src={food6}
            alt='Slide 5'
            className='w-full h-[600px] object-cover'
          />
        </div>
        <div>
          <img
            src={food7}
            alt='Slide 6'
            className='w-full h-[600px] object-cover'
          />
        </div>
      </CustomCarousel>
    </div>
  );
};
export default Carousel;
