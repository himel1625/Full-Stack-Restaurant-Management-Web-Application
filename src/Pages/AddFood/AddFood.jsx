import React, { useState } from 'react';

const AddFood = () => {
  const [foodData, setFoodData] = useState({});

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData.entries());
    console.log('Form Data Object:', formDataObject);
    e.target.reset();
  };

  return (
    <div className='container mx-auto p-6 text-white'>
      <h1 className='text-3xl font-semibold text-center mb-6'>
        Add New Food Item
      </h1>
      <form
        onSubmit={handleSubmit}
        className='space-y-4 max-w-3xl mx-auto dark:bg-gray-900 p-8 rounded-lg shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-6'
      >
        <div>
          <label
            htmlFor='foodName'
            className='block text-lg font-medium text-blue-600 dark:text-blue-500'
          >
            Food Name
          </label>
          <input
            type='text'
            id='foodName'
            name='foodName'
            className='w-full p-3 mt-2 dark:bg-gray-800 text-blue-400 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400'
            placeholder='Enter food name'
            required
          />
        </div>

        <div>
          <label
            htmlFor='foodImage'
            className='block text-lg font-medium text-blue-600 dark:text-blue-500'
          >
            Food Image URL
          </label>
          <input
            type='url'
            id='foodImage'
            name='foodImage'
            className='w-full p-3 mt-2 dark:bg-gray-800 text-blue-400 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400'
            placeholder='Enter food image URL'
            required
          />
        </div>

        <div>
          <label
            htmlFor='foodCategory'
            className='block text-lg font-medium text-blue-600 dark:text-blue-500'
          >
            Food Category
          </label>
          <input
            type='text'
            id='foodCategory'
            name='foodCategory'
            className='w-full p-3 mt-2 dark:bg-gray-800 text-blue-400 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400'
            placeholder='Enter food category'
            required
          />
        </div>

        <div>
          <label
            htmlFor='quantity'
            className='block text-lg font-medium text-blue-600 dark:text-blue-500'
          >
            Quantity
          </label>
          <input
            type='number'
            id='quantity'
            name='quantity'
            className='w-full p-3 mt-2 dark:bg-gray-800 text-blue-400 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400'
            placeholder='Enter quantity'
            required
          />
        </div>

        <div>
          <label
            htmlFor='price'
            className='block text-lg font-medium text-blue-600 dark:text-blue-500'
          >
            Price
          </label>
          <input
            type='number'
            id='price'
            name='price'
            className='w-full p-3 mt-2 dark:bg-gray-800 text-blue-400 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400'
            placeholder='Enter price'
            required
          />
        </div>

        <div>
          <label
            htmlFor='addByName'
            className='block text-lg font-medium text-blue-600 dark:text-blue-500'
          >
            Added By (Name)
          </label>
          <input
            type='text'
            id='addByName'
            name='addByName'
            className='w-full p-3 mt-2 dark:bg-gray-800 text-blue-400 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400'
            placeholder='Enter your name'
            required
          />
        </div>

        <div>
          <label
            htmlFor='addByEmail'
            className='block text-lg font-medium text-blue-600 dark:text-blue-500'
          >
            Added By (Email)
          </label>
          <input
            type='email'
            id='addByEmail'
            name='addByEmail'
            className='w-full p-3 mt-2 dark:bg-gray-800 text-blue-400 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400'
            placeholder='Enter your email'
            required
          />
        </div>

        <div>
          <label
            htmlFor='foodOrigin'
            className='block text-lg font-medium text-blue-600 dark:text-blue-500'
          >
            Food Origin (Country)
          </label>
          <input
            type='text'
            id='foodOrigin'
            name='foodOrigin'
            className='w-full p-3 mt-2 dark:bg-gray-800 text-blue-400 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400'
            placeholder='Enter food origin country'
            required
          />
        </div>

        <div className='col-span-2'>
          <label
            htmlFor='description'
            className='block text-lg font-medium text-blue-600 dark:text-blue-500'
          >
            Description
          </label>
          <textarea
            id='description'
            name='description'
            className='w-full p-3 mt-2 dark:bg-gray-800 text-blue-400 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400'
            rows='4'
            placeholder='Enter food description'
            required
          ></textarea>
        </div>

        <div className='col-span-2'>
          <button
            type='submit'
            className='w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300'
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
