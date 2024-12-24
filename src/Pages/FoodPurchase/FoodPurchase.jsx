import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const FoodPurchase = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { id } = useParams();
  const Navigate = useNavigate();
  const [Disabled, setDisabled] = useState(false);
  const [purchaseFood, setPurchaseFood] = useState({});
  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-US');

  useEffect(() => {
    const handelData = async () => {
      try {
        const { data } = await axiosSecure.get(`/purchase/${id}`);
        setPurchaseFood(data);
      } catch (err) {
        console.log(err);
      }
    };
    handelData();
  }, [id, axiosSecure]);

  useEffect(() => {
    if (purchaseFood.seller === user.email) {
      setDisabled(true);
    }
  }, [purchaseFood.seller, user.email]);

  const handlePurchaseFood = async e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const foodName = formData.get('foodName');
    const price = formData.get('price');
    const quantity = formData.get('Quantity');
    const buyerName = formData.get('buyerName');
    const buyer = formData.get('buyer');
    const purchase = {
      foodName,
      price,
      quantity,
      buyerName,
      buyer,
      deadline: formattedDate,
      foodImageUrl: purchaseFood?.foodImageUrl,
    };
    try {
      await axiosSecure.post(`/purchaseFood`, purchase);
      toast.success('Food purchase successful');
      Navigate('/MyOrders');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Helmet>
        <title>DineMaster | FoodPurchase</title>
      </Helmet>
      <div>
        <div className='min-h-screen flex items-center justify-center '>
          <div className='bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md'>
            <h1 className='text-2xl font-bold text-gray-800 mb-6 text-center'>
              Food Purchase
            </h1>
            <form className='space-y-4' onSubmit={handlePurchaseFood}>
              <div>
                <label className='block text-gray-600 mb-2 font-medium'>
                  Food Name
                </label>
                <input
                  type='text'
                  name='foodName'
                  defaultValue={purchaseFood.foodName || ''}
                  className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-black'
                  placeholder='Enter food name'
                />
              </div>

              <div>
                <label className='block text-gray-600 mb-2 font-medium'>
                  Price
                </label>
                <input
                  type='number'
                  name='price'
                  defaultValue={purchaseFood.price || ''}
                  className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-black'
                  placeholder='Enter price'
                />
              </div>

              <div>
                <label className='block text-gray-600 mb-2 font-medium'>
                  Quantity
                </label>
                <input
                  type='number'
                  name='Quantity'
                  required
                  className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-black'
                  placeholder='Enter quantity'
                />
              </div>

              <div>
                <label className='block text-gray-600 mb-2 font-medium'>
                  Buyer Name
                </label>
                <input
                  type='text'
                  name='buyerName'
                  value={user?.displayName || ''}
                  readOnly
                  className='w-full px-4 py-2 bg-gray-100 border rounded-md focus:outline-none cursor-not-allowed dark:bg-black'
                />
              </div>

              <div>
                <label className='block text-gray-600 mb-2 font-medium'>
                  Buyer Email
                </label>
                <input
                  type='email'
                  name='buyer'
                  value={user?.email || ''}
                  readOnly
                  className='w-full px-4 py-2 bg-gray-100 border rounded-md focus:outline-none cursor-not-allowed dark:bg-black'
                />
              </div>

              <button
                type='submit'
                disabled={Disabled === true}
                className='w-full disabled:cursor-not-allowed bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-all'
              >
                Purchase
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodPurchase;
