import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Hero = () => {
  const axiosSecure = useAxiosSecure();
  const [foodData, setFoodData] = useState([]);

  const handelData = async () => {
    try {
      const { data } = await axiosSecure.get('/limit-food');
      setFoodData(data);
    } catch (error) {
      console.error('Error fetching food data:', error);
    }
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
    </div>
  );
};

export default Hero;
