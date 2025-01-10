import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Card from '../../Components/Card/Card';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const AllFoods = () => {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState('');
  const [foodData, setFoodData] = useState([]);
  const [cuuPage, setCuuPage] = useState(0);
  const itemPerPage = 8;

  const handleSearch = () => {
    handleData(search);
  };

  const handleData = async (query = '') => {
    try {
      const { data } = await axiosSecure.get(
        `/one-food?search=${query}&page=${cuuPage}&size=${itemPerPage}`,
      );
      const sortedData = data.sort((a, b) => b.sell - a.sell);
      setFoodData(sortedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleData();
  }, [cuuPage]);

  const handlePrev = () => {
    if (cuuPage > 0) {
      setCuuPage(cuuPage - 1);
    }
  };

  const handleNext = () => {
    if (foodData.length === 0) {
      return;
    }
    setCuuPage(cuuPage + 1);
  };

  return (
    <>
      <Helmet>
        <title>DineMaster | AllFoods</title>
      </Helmet>
      <div className='container mx-auto px-4 py-8'>
        <h2 className='text-3xl font-semibold text-center mb-6 dark:text-white'>
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

        <div className='grid items-center justify-center grid-flow-col-1 md:grid-cols-2 lg:grid-cols-4 gap-3 min-h-[calc(100vh-232px)] '>
          {foodData.length > 0 ? (
            foodData.map(food => <Card food={food} key={food._id} />)
          ) : (
            <div className='col-span-4 text-center text-xl text-red-500'>
              No foods available for this page
            </div>
          )}
        </div>
        {/* Pagination */}
        <div className='flex justify-center items-center mt-8 space-x-4'>
          <button
            onClick={handlePrev}
            className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={cuuPage === 0}
          >
            Prev
          </button>
          <span className='text-lg font-bold text-blue-500 '>
            Page {cuuPage + 1}
          </span>
          <button
            onClick={handleNext}
            className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={foodData.length === 0}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default AllFoods;
