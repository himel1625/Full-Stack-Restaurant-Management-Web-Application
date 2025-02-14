import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
const Hero = () => {
  const axiosSecure = useAxiosSecure();
  const [foodData, setFoodData] = useState([]);
  const navigate = useNavigate();
  const handelData = async () => {
    try {
      const { data } = await axiosSecure.get('/limit-food');
      const sortedData = data.sort((a, b) => b.sell - a.sell);
      setFoodData(sortedData);
    } catch (error) {
      console.error('Error fetching food data:', error);
    }
  };
  const handleViewAllClick = () => {
    navigate('/AllFoods');
  };

  useEffect(() => {
    handelData();
  }, []);

  return (
    <div className='container mx-auto lg:mx-auto'>
      <div>
        <p className='pt-20 pb-10 text-center font-bold dark:text-white text-text  text-4xl mb-6 '>
          Our Most Selling Foods
        </p>
      </div>
      <div className=' rounded justify-items-center bg-slate-100 my-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 p-2'>
        {foodData.map(food => (
          <Card food={food} key={food._id} />
        ))}
      </div>
      <div className='mt-16 text-center'>
        <button
          onClick={handleViewAllClick}
          className='py-2 px-4 rounded-sm text-white text-bold text-xl bg-text'
        >
          view All Food
        </button>
      </div>
    </div>
  );
};

export default Hero;
