import React from 'react';
import { Helmet } from 'react-helmet-async';

const Reservation = () => {
  return (
    <>
      <Helmet>
        <title>DineMaster | Reservation</title>
      </Helmet>
      <div className='max-w-lg mx-auto mt-20 p-6 md:p-8 lg:p-10 dark:bg-gray-900 bg-white text-white rounded-lg shadow-md'>
        <h1 className='text-2xl md:text-3xl font-bold text-center text-blue-500 mb-6'>
          Reserve Your Table
        </h1>
        <form className='space-y-4'>
          <div className='flex flex-col'>
            <label
              htmlFor='name'
              className='text-sm md:text-base font-medium mb-1'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='p-2 rounded border text-black border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your name'
              required
            />
          </div>

          <div className='flex flex-col'>
            <label
              htmlFor='email'
              className='text-sm md:text-base font-medium mb-1'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='p-2 rounded border text-black border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your email'
              required
            />
          </div>

          <div className='flex flex-col'>
            <label
              htmlFor='date'
              className='text-sm md:text-base font-medium mb-1'
            >
              Date
            </label>
            <input
              type='date'
              id='date'
              name='date'
              className='p-2 rounded border text-black border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          <div className='flex flex-col'>
            <label
              htmlFor='time'
              className='text-sm md:text-base font-medium mb-1'
            >
              Time
            </label>
            <input
              type='time'
              id='time'
              name='time'
              className='p-2 rounded border text-black border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          <div className='flex flex-col'>
            <label
              htmlFor='guests'
              className='text-sm md:text-base font-medium mb-1'
            >
              Number of Guests
            </label>
            <input
              type='number'
              id='guests'
              name='guests'
              className='p-2 rounded border border-gray-700 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              min='1'
              max='20'
              placeholder='Enter number of guests'
              required
            />
          </div>

          <button
            type='submit'
            className='w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105'
          >
            Reserve Now
          </button>
        </form>
      </div>
    </>
  );
};

export default Reservation;
