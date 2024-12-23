import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Card = ({ food }) => {
  const { user } = useAuth();
  const {
    description,
    foodCategory,
    foodImageUrl,
    foodName,
    foodOrigin,
    price,
    quantity,
    _id,
    sell,
  } = food || {};

  const dialogRef = React.useRef(null);
  const navigate = useNavigate();

  const openModal = () => {
    dialogRef.current?.showModal();
  };
  const closeModal = () => {
    dialogRef.current?.close();
  };
  const handleSubmit = () => {
    console.log('Form submitted');
    closeModal();
    navigate('/MyOrders');
  };

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
          {description.substring(0, 70)}......
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
          <span className='text-sm font-bold text-gray-500 dark:text-gray-400'>
            sell: {sell}
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
            <button
              onClick={openModal}
              className='w-full h-8 mt-4 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out'
            >
              Order now..
            </button>
          </div>
        </div>
      </div>

      {/* Dialog Modal */}
      <dialog
        ref={dialogRef}
        className='bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg lg:w-96 w-80  max-w-lg'
      >
        <form method='dialog'>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-gray-700 dark:text-gray-300'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              defaultValue={foodName}
              readOnly
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-black dark:text-white dark:border-gray-600'
              placeholder='Enter your name'
              required
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-700 dark:text-gray-300'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              defaultValue={user && user?.email}
              readOnly
              name='email'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-black dark:text-white dark:border-gray-600'
              placeholder='Your email'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='quantity'
              className='block text-gray-700 dark:text-gray-300'
            >
              Quantity
            </label>
            <input
              type='number'
              id='quantity'
              name='quantity'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-black dark:text-white dark:border-gray-600'
              placeholder='Enter quantity'
              required
            />
          </div>

          <div className='flex justify-between gap-4'>
            <button
              type='button'
              onClick={handleSubmit}
              className='py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full'
            >
              Order Confirm
            </button>
            <button
              type='button'
              onClick={closeModal}
              className='py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 w-full'
            >
              Close
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Card;
