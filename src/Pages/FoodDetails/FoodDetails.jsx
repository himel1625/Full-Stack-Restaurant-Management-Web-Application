import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const FoodDetails = () => {
  const [foodData, setFoodData] = useState({});
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  const handleData = async () => {
    try {
      const { data } = await axiosSecure.get(`/FoodDetails/${id}`);
      setFoodData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className='min-h-screen  p-6 flex justify-center items-center'>
      <div className='max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 flex flex-col md:flex-row justify-center items-center md:items-start space-x-6 dark:border dark:border-gray-600 backdrop-blur-md '>
        {/* Image Section */}
        {foodData.foodImageUrl && (
          <img
            src={foodData.foodImageUrl}
            alt={foodData.foodName}
            className='w-full md:w-96 h-64 object-cover rounded-lg mb-6 md:mb-0 shadow-lg'
          />
        )}

        {/* Text Section */}
        <div className='text-center md:text-left md:flex-1'>
          <h2 className='text-4xl font-extrabold text-blue-600 mb-6'>
            {foodData.foodName || 'Food Name'}
          </h2>
          <div className='space-y-4'>
            <p className='text-lg text-gray-700 dark:text-gray-300'>
              <strong className='font-semibold'>Description:</strong>{' '}
              {foodData.description || 'N/A'}
            </p>
            <p className='text-lg text-gray-700 dark:text-gray-300'>
              <strong className='font-semibold'>Category:</strong>{' '}
              {foodData.foodCategory || 'N/A'}
            </p>
            <p className='text-lg text-gray-700 dark:text-gray-300'>
              <strong className='font-semibold'>Origin:</strong>{' '}
              {foodData.foodOrigin || 'N/A'}
            </p>
            <p className='text-lg text-gray-700 dark:text-gray-300'>
              <strong className='font-semibold'>Price:</strong> $
              {foodData.price || 'N/A'}
            </p>
            <p className='text-lg text-gray-700 dark:text-gray-300'>
              <strong className='font-semibold'>Quantity:</strong>{' '}
              {foodData.quantity || 'N/A'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
