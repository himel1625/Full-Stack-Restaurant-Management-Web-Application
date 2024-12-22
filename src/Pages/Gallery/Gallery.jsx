import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Gallery = () => {
  const axiosSecure = useAxiosSecure();
  const [foodData, setFoodData] = useState([]);

  const handleData = async () => {
    try {
      const { data } = await axiosSecure.get('/food');
      setFoodData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <>
      <Helmet>
        <title>DineMaster | Gallery</title>
      </Helmet>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-4xl font-semibold text-center mb-8 dark:text-blue-300'>
          Food Gallery
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {foodData.map(food => (
            <div
              key={food._id}
              className='relative overflow-hidden rounded-lg shadow-lg group'
            >
              <img
                src={food.foodImageUrl}
                alt={food.name}
                className='w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:opacity-70'
              />
              <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <p className='text-white text-lg font-semibold transform group-hover:translate-y-[-10px] transition-transform duration-300'>
                  {food.foodName} $
                </p>
                <p className='text-white text-lg font-semibold transform group-hover:translate-y-[-10px] transition-transform duration-300'>
                  ( {food.price})
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
