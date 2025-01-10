import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const AddFood = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData.entries());
    try {
      await axiosSecure.post('/add-food', formDataObject);
      e.target.reset();
      toast.success('Food Added Successfully');
      navigate('/MyFood');
    } catch (error) {
      console.error('Error adding food:', error);
      toast.error('Failed to add food');
    }
  };

  return (
    <>
      <Helmet>
        <title>DineMaster | AddFood</title>
      </Helmet>
      <div className='container mx-auto p-6 text-text dark:text-white'>
        <h1 className='text-3xl font-semibold text-center mb-3'>
          Add New Food Item
        </h1>
        <form
          onSubmit={handleSubmit}
          className='space-y-4 max-w-3xl mx-auto dark:bg-gray-900 p-8 rounded-lg shadow-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'
        >
          {/* Food Name */}
          <div className='col-span-1'>
            <label
              htmlFor='foodName'
              className='block text-lg font-medium text-text '
            >
              Food Name
            </label>
            <input
              type='text'
              id='foodName'
              name='foodName'
              className='w-full p-3 mt-2 dark:bg-gray-800 text-text border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-text dark:focus:ring-text'
              placeholder='Enter food name'
              required
            />
          </div>

          {/* Food Image URL */}
          <div className='col-span-1'>
            <label
              htmlFor='foodImage'
              className='block text-lg font-medium text-text'
            >
              Food Image URL
            </label>
            <input
              type='url'
              id='foodImageUrl'
              name='foodImageUrl'
              className='w-full p-3 mt-2 dark:bg-gray-800 text-text  border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-text dark:focus:ring-text'
              placeholder='Enter food image URL'
              required
            />
          </div>

          {/* Food Category */}
          <div className='col-span-1'>
            <label
              htmlFor='foodCategory'
              className='block text-lg font-medium text-text'
            >
              Food Category
            </label>
            <input
              type='text'
              id='foodCategory'
              name='foodCategory'
              className='w-full p-3 mt-2 dark:bg-gray-800 text-text border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-text dark:focus:ring-text'
              placeholder='Enter food category'
              required
            />
          </div>

          {/* Quantity */}
          <div className='col-span-1'>
            <label
              htmlFor='quantity'
              className='block text-lg font-medium text-text'
            >
              Available Quantity
            </label>
            <input
              type='number'
              id='quantity'
              name='quantity'
              className='w-full p-3 mt-2 dark:bg-gray-800 text-text
               border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-text dark:focus:ring-text'
              placeholder='Enter quantity'
              required
            />
          </div>

          {/* Price */}
          <div className='col-span-1'>
            <label
              htmlFor='price'
              className='block text-lg font-medium text-text '
            >
              Price
            </label>
            <input
              type='number'
              id='price'
              name='price'
              className='w-full p-3 mt-2 dark:bg-gray-800 text-text border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-text dark:focus:ring-text'
              placeholder='Enter price'
              required
            />
          </div>

          {/* Food Origin (Country) */}
          <div className='col-span-1'>
            <label
              htmlFor='foodOrigin'
              className='block text-lg font-medium text-text'
            >
              Food Origin (Country)
            </label>
            <input
              type='text'
              id='foodOrigin'
              name='foodOrigin'
              className='w-full p-3 mt-2 dark:bg-gray-800 text-text border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-text dark:focus:ring-text'
              placeholder='Enter food origin country'
              required
            />
          </div>

          {/* Description */}
          <div className='col-span-1 sm:col-span-2'>
            <label
              htmlFor='description'
              className='block text-lg font-medium text-text'
            >
              Description
            </label>
            <textarea
              id='description'
              name='description'
              className='w-full p-3 mt-2 dark:bg-gray-800 text-text border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-text dark:focus:ring-text'
              rows='4'
              placeholder='Enter food description'
              required
            ></textarea>
          </div>

          {/* Hidden Email */}
          <div className='col-span-1 hidden'>
            <input
              type='email'
              id='email'
              defaultValue={user && user?.email}
              readOnly
              name='seller'
              className='w-full p-3 mt-2 dark:bg-gray-800 text-text border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-text dark:focus:ring-text'
              required
            />
          </div>
          <div className='col-span-1 hidden'>
            <input
              type='number'
              id='number'
              defaultValue={1}
              readOnly
              name='sell'
              className='w-full p-3 mt-2 dark:bg-gray-800 text-text border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-text dark:focus:ring-text'
              required
            />
          </div>
          {/* Submit Button */}
          <div className='col-span-1 sm:col-span-2'>
            <button
              type='submit'
              className='w-full py-3 mt-4 bg-text text-white font-semibold rounded-md hover:bg-text transition duration-300'
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddFood;
