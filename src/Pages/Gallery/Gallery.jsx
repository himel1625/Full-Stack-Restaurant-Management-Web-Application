import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Lightbox } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Gallery = () => {
  const axiosSecure = useAxiosSecure();
  const [foodData, setFoodData] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleData = async () => {
    try {
      const { data } = await axiosSecure.get('/food');
      setFoodData(data || []);
    } catch (error) {
      console.error('Error fetching food data:', error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  const slides = foodData.slice(0, 12).map(food => ({
    src: food.foodImageUrl,
    alt: food.foodName,
  }));

  return (
    <>
      <Helmet>
        <title>DineMaster | Gallery</title>
      </Helmet>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-4xl font-semibold text-center mb-8 dark:text-blue-300'>
          Food Gallery
        </h1>
        {foodData.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {foodData.slice(0, 12).map((food, index) => (
              <div
                key={food._id}
                className='relative overflow-hidden rounded-lg shadow-lg group cursor-pointer'
                onClick={() => {
                  setCurrentIndex(index);
                  setOpen(true);
                }}
              >
                <img
                  src={food.foodImageUrl}
                  alt={food.foodName}
                  className='w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:opacity-70'
                />
              </div>
            ))}
          </div>
        ) : (
          <p className='text-center text-gray-500'>No food items available.</p>
        )}
      </div>

      {slides.length > 0 && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={currentIndex}
        />
      )}
    </>
  );
};

export default Gallery;
