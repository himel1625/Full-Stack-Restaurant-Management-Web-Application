import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ food }) => {
  console.log(food);
  const {
    description,
    foodCategory,
    foodImageUrl,
    foodName,
    foodOrigin,
    price,
    quantity,
    _id,
  } = food || {};

  return (
    <div className='max-w-xs rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transform transition-all hover:scale-102 hover:shadow-lg duration-200'>
      <img
        className='w-full h-44 object-cover rounded-t-lg'
        src={foodImageUrl}
        alt={foodName}
      />
      <div className='p-4'>
        <h2 className='text-xl font-bold text-gray-800 dark:text-white mb-2'>
          {foodName}
        </h2>
        <p className='text-sm text-gray-600 dark:text-gray-300 mb-3'>
          {description.substring(0, 70)}.......
        </p>
        <div className='flex justify-between items-center text-gray-700 dark:text-gray-300 mb-3'>
          <span className='text-sm font-bold text-gray-500 dark:text-gray-400'>
            Category: {foodCategory}
          </span>
          <span className='text-sm font-bold text-gray-500 dark:text-gray-400'>
            Origin: {foodOrigin}
          </span>
        </div>
        <div className='flex justify-between items-center'>
          <span className='text-lg font-bold text-green-600 dark:text-green-400'>
            ${price}
          </span>
          <span className='text-sm font-bold text-gray-500 dark:text-gray-400'>
            Qty: {quantity}
          </span>
        </div>
        <div className='flex gap-2 justify-between'>
          <div className='w-full'>
            <NavLink to={`/FoodDetails/${_id}`}>
              <button className='w-full h-8 mt-4 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out'>
                View More..
              </button>
            </NavLink>
          </div>
          <div className='w-full'>
            {' '}
            <button className='w-full h-8 mt-4 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out'>
              Order now..
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
