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
  const [Quantity, setQuantity] = useState(0);
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
    if (Quantity <= 0) {
      toast.error('Quantity must be greater than 0');
      return;
    }
    if (Quantity > purchaseFood.quantity) {
      toast.error('Quantity exceeds available stock');
      return;
    }

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
  const handlePurchaseSellCunt = async id => {
    try {
      await axiosSecure.post(`/addSell/${id}?Quantity=${Quantity}`);
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
        <div className='min-h-screen flex items-center justify-center mx-4'>
          <div className='bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md'>
            <h1 className='text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center'>
              Food Purchase
            </h1>
            <form className='space-y-4' onSubmit={handlePurchaseFood}>
              <div>
                <label className='block text-gray-600 dark:text-white mb-2 font-medium'>
                  Food Name
                </label>
                <input
                  type='text'
                  name='foodName'
                  defaultValue={purchaseFood.foodName || ''}
                  readOnly
                  className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-text dark:bg-black dark:text-white'
                  placeholder='Enter food name'
                />
              </div>

              <div>
                <label className='block text-gray-600 dark:text-white mb-2 font-medium'>
                  Price
                </label>
                <input
                  type='number'
                  name='price'
                  readOnly
                  defaultValue={purchaseFood.price || ''}
                  className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-text dark:bg-black dark:text-white'
                  placeholder='Enter price'
                />
              </div>
              <div>
                <label className='block text-gray-600 dark:text-white mb-2 font-medium'>
                  Available Quantity
                </label>
                <input
                  type='number'
                  name='Quantity'
                  defaultValue={purchaseFood.quantity || ''}
                  readOnly
                  className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-text dark:bg-black dark:text-white'
                  placeholder='Enter quantity'
                />
              </div>
              <div>
                <label className='block text-gray-600 dark:text-white mb-2 font-medium'>
                  Quantity
                </label>
                <input
                  type='number'
                  name='Quantity'
                  required
                  onBlur={e => setQuantity(e.target.value)}
                  className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-text dark:bg-black dark:text-white'
                  placeholder='Enter quantity'
                />
              </div>

              <div>
                <label className='block text-gray-600 dark:text-white mb-2 font-medium'>
                  Buyer Name
                </label>
                <input
                  type='text'
                  name='buyerName'
                  value={user?.displayName || ''}
                  readOnly
                  className='w-full px-4 py-2 bg-gray-100 dark:bg-black dark:text-white border rounded-md focus:outline-none cursor-not-allowed'
                />
              </div>

              <div>
                <label className='block text-gray-600 dark:text-white mb-2 font-medium'>
                  Buyer Email
                </label>
                <input
                  type='email'
                  name='buyer'
                  value={user?.email || ''}
                  readOnly
                  className='w-full px-4 py-2 bg-gray-100 dark:bg-black dark:text-white border rounded-md focus:outline-none cursor-not-allowed'
                />
              </div>

              <button
                type='submit'
                onClick={() => handlePurchaseSellCunt(purchaseFood._id)}
                disabled={Disabled === true}
                className='w-full disabled:cursor-not-allowed bg-text text-white py-2 rounded-sm'
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
