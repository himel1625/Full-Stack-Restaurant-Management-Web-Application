import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ food }) => {
  const {
    foodImageUrl,
    foodName,
    foodOrigin,
    price,
    _id,
    sell,
  } = food || {};

  return (
    <NavLink to={`/FoodDetails/${_id}`} className='block'>
      <div className='container mx-auto w-80 h-96 bg-[#FFFFFF] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transform transition-all hover:scale-102 hover:shadow-lg duration-200 rounded-t-lg'>
        <img
          referrerPolicy='no-referrer'
          className='w-full h-64 object-cover rounded-t-lg'
          src={foodImageUrl}
          alt={foodName}
        />
        <div className='p-4'>
          <h2 className='text-xl font-extrabold hover:underline text-gray-800 hover:text-text dark:text-white dark:hover:text-text mb-2  '>
            {foodName}
          </h2>

          <div className='flex justify-between items-center text-gray-700 dark:text-gray-300 mb-3'>
            <span className='text-sm font-bold text-gray-500 dark:text-gray-400'>
              Origin: {foodOrigin}
            </span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-lg font-bold text-[#A0522D] '>${price}</span>
            <span className='text-sm font-bold text-gray-500 dark:text-gray-400'>
              Sell: {sell}
            </span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
