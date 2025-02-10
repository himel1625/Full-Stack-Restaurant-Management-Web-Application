import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const MyOrders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [myOrder, setMyOrder] = useState([]);

  useEffect(() => {
    const handleData = async () => {
      const { data } = await axiosSecure.get(`/myOrderFood/${user?.email}`);
      setMyOrder(data);
    };
    handleData();
  }, [axiosSecure, user]);

  const handleDelete = async id => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(async result => {
        if (result.isConfirmed) {
          await axiosSecure.delete(`/myOrderFood/${id}`);
          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
          });
          setMyOrder(prevOrders =>
            prevOrders.filter(order => order._id !== id),
          );
        }
      });
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  return (
    <>
      <Helmet>
        <title>DineMaster | My Orders</title>
      </Helmet>
      <div className='container mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-4 dark:text-white'>My Orders</h1>
        {myOrder.length === 0 ? (
          <div className='text-center text-xl text-red-500'>
            My orders are not available.
          </div>
        ) : (
          <div className='overflow-x-auto'>
            <table className='table-auto w-full border-collapse border border-gray-300'>
              <thead>
                <tr className='bg-gray-200'>
                  <th className='border border-gray-300 px-4 py-2'>Buyer</th>
                  <th className='border border-gray-300 px-4 py-2'>
                    Food Name
                  </th>
                  <th className='border border-gray-300 px-4 py-2'>
                    Food Image
                  </th>
                  <th className='border border-gray-300 px-4 py-2'>Price</th>
                  <th className='border border-gray-300 px-4 py-2'>Quantity</th>
                  <th className='border border-gray-300 px-4 py-2'>Deadline</th>
                  <th className='border border-gray-300 px-4 py-2'>Actions</th>
                </tr>
              </thead>
              <tbody >
                {myOrder.map((order, index) => (
                  <tr key={index} className='text-center'>
                    <td className='border border-gray-300 px-4 dark:text-white '>
                      {order.buyerName}
                    </td>
                    <td className='border border-gray-300 px-4 dark:text-white '>
                      {order.foodName}
                    </td>
                    <td className='border border-gray-300 px-4 dark:text-white '>
                      <img
                        src={order.foodImageUrl}
                        alt={order.foodName}
                        className='h-12 w-12 object-cover mx-auto rounded-full'
                      />
                    </td>
                    <td className='border border-gray-300 px-4 dark:text-white'>
                      ${order.price}
                    </td>
                    <td className='border border-gray-300 px-4 dark:text-white '>
                      {order.quantity || 'N/A'}
                    </td>
                    <td className='border border-gray-300 px-4 dark:text-white '>
                      {order.deadline}
                    </td>
                    <td className='border border-gray-300 px-4 dark:text-white '>
                      <button
                        onClick={() => handleDelete(order._id)}
                        className='bg-red-500 text-white px-4 rounded hover:bg-red-700'
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default MyOrders;
