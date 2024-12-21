import React, { useState } from 'react';

const AllFoods = () => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    console.log(search);
    setSearch('');
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='text-3xl font-semibold text-center mb-6'>
        All Foods (DineMaster)
      </h2>

      <div className='flex justify-center mb-8'>
        <div className='relative w-full max-w-md flex'>
          <input
            type='text'
            placeholder='Search for food...'
            value={search}
            onChange={e => setSearch(e.target.value)}
            className='w-full py-3 pl-4 pr-10 text-lg border border-gray-300 rounded-l-lg focus:outline-none dark:bg-black dark:text-white focus:ring-0 focus:border-gray-400'
          />
          <button
            onClick={handleSearch}
            className='px-6 py-3 bg-blue-600 text-white font-semibold rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllFoods;
