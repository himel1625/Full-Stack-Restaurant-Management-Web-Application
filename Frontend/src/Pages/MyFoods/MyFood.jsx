import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const MyFood = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [myAddFood, setAddFood] = useState([]);

  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axiosSecure.get(
          `/my-food/${user?.email}?buyer=true`,
        );
        setAddFood(data);
      } catch (err) {
        console.error(err);
      }
    };
    handleData();
  }, [user?.email]);

  const handleDelete = async id => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      });
      if (result.isConfirmed) {
        await axiosSecure.delete(`/my-food/${id}`);
        setAddFood(prevFoods => prevFoods.filter(food => food._id !== id));
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    } catch (err) {
      console.error('Failed to delete food', err);
    }
  };
  return (
    <>
      <Helmet>
        <title>DineMaster | MyFood</title>
      </Helmet>
      <div className='min-h-screen   text-gray-800 dark:text-gray-200'>
        <div className='container mx-auto p-4'>
          <h1 className='text-2xl font-semibold mb-4'>My Food</h1>
          {myAddFood.length > 0 ? (
            <div className='overflow-x-auto'>
              <table className='table-auto w-full border-collapse border border-gray-300 dark:border-gray-700'>
                <thead>
                  <tr className='bg-gray-200 dark:bg-gray-800'>
                    <th className='px-4 py-2 border border-gray-300 dark:border-gray-700'>
                      Food Name
                    </th>
                    <th className='px-4 py-2 border border-gray-300 dark:border-gray-700'>
                      Image
                    </th>
                    <th className='px-4 py-2 border border-gray-300 dark:border-gray-700'>
                      Category
                    </th>
                    <th className='px-4 py-2 border border-gray-300 dark:border-gray-700'>
                      Price
                    </th>
                    <th className='px-4 py-2 border border-gray-300 dark:border-gray-700'>
                      Added By
                    </th>
                    <th className='px-4 py-2 border border-gray-300 dark:border-gray-700'>
                      Description
                    </th>
                    <th className='px-4 py-2 border border-gray-300 dark:border-gray-700'>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className='text-center'>
                  {myAddFood.map((food, index) => (
                    <tr key={index}>
                      <td className='px-4  border border-gray-300 dark:border-gray-700'>
                        {food.foodName}
                      </td>
                      <td className='px-4  border border-gray-300 dark:border-gray-700 '>
                        <img
                          src={food.foodImageUrl}
                          alt={food.foodName}
                          className='h-14 w-14 object-cover rounded-full'
                        />
                      </td>
                      <td className='px-4  border border-gray-300 dark:border-gray-700'>
                        {food.foodCategory}
                      </td>
                      <td className='px-4  border border-gray-300 dark:border-gray-700'>
                        ${food.price}
                      </td>
                      <td className='px-4  border border-gray-300 dark:border-gray-700'>
                        {food.seller}
                      </td>
                      <td className='px-4 border border-gray-300 dark:border-gray-700'>
                        {food.description.substring(0, 40)}
                      </td>
                      <td className='px-4  border border-gray-300 dark:border-gray-700 text-center'>
                        <button
                          onClick={() => handleDelete(food._id)}
                          className='text-red-600 dark:text-red-400 hover:underline'
                          title='Delete'
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className='text-gray-500 dark:text-gray-400 text-center'>
              No food items added yet.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default MyFood;
