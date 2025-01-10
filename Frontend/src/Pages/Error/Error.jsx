import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className='min-h-screen flex items-center justify-center p-6'>
      <div className='bg-white rounded-xl shadow-xl p-8 max-w-sm w-full transform transition duration-500 hover:scale-105 hover:shadow-2xl'>
        <h1 className='text-5xl font-extrabold text-blue-700 mb-6 animate__animated animate__fadeIn'>
          Oops!
        </h1>
        <p className='text-xl text-gray-800 mb-6 animate__animated animate__fadeIn animate__delay-1s'>
          Something went wrong. We couldn't find the page you were looking for.
        </p>
        <button
          onClick={handleGoBack}
          className='mt-6 px-8 py-3 bg-blue-700 text-white rounded-full text-lg font-semibold transition-all transform hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50'
          aria-label='Go back to home'
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Error;
