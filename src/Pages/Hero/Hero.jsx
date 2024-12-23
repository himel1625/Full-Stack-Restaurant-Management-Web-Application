import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const axiosSecure = useAxiosSecure();
  const [foodData, setFoodData] = useState([]);
  console.log(foodData)
  const navigate = useNavigate();
  const handelData = async () => {
    try {
      const { data } = await axiosSecure.get('/limit-food');
      setFoodData(data);
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
    <div>
      <div>
        <p className='text-center font-bold dark:text-blue-400 text-black text-4xl mb-6 '>
          Choose your good quality food
        </p>
      </div>
      <div className='grid items-center justify-center grid-flow-col-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
        {foodData.map(food => (
          <Card food={food} key={food._id} />
        ))}
      </div>
      <div className='mt-10'>
        <button
          onClick={handleViewAllClick}
          className='py-2 px-4 rounded-xl text-white text-bold text-xl bg-blue-700 '
        >
          view All Food
        </button>
      </div>
      
    </div>
  );
};

export default Hero;
