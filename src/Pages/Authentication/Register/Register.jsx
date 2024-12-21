import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import GoogleLogo from '../../../assets/Google.png';
import useAuth from '../../../Hooks/useAuth';
const Register = () => {
  const { createUser } = useAuth();

  const handelRegisterSubmit = e => {
    e.preventDefault();
    const from = new FormData(e.target);
    const email = from.get('email');
    const password = from.get('password');
    createUser
  };

  return (
    <>
      <Helmet>
        <title>DineMaster | Register</title>
      </Helmet>
      <div className='flex items-center justify-center min-h-screen  px-4 dark:text-white'>
        <div className='border border-gray-200 shadow-lg rounded-xl w-full sm:w-11/12 md:w-2/3 lg:w-1/3 dark:bg-black '>
          <div className='mt-6 mb-2'>
            <p className='text-center font-bold text-2xl dark:text-white'>
              welcome to DineMaster
            </p>
          </div>
          <form onSubmit={handelRegisterSubmit} className='px-6 space-y-4'>
            <div>
              <label
                className='block text-sm font-medium text-gray-600'
                htmlFor='username'
              >
                Full Name *
              </label>
              <input
                type='text'
                id='FullName'
                placeholder='Enter your Full Name *'
                className='input input-bordered w-full focus:outline-none focus:ring focus:ring-blue-300 dark:bg-black '
              />
            </div>
            <div>
              <label
                className='block text-sm font-medium text-gray-600'
                htmlFor='username'
              >
                Username
              </label>
              <input
                type='text'
                id='username'
                placeholder='Enter your username'
                className='input input-bordered w-full focus:outline-none focus:ring focus:ring-blue-300 dark:bg-black '
              />
            </div>

            <div>
              <label
                className='block text-sm font-medium text-gray-600'
                htmlFor='email'
              >
                Email Address
              </label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Enter your email'
                className='input input-bordered w-full focus:outline-none focus:ring focus:ring-blue-300 dark:bg-black '
              />
            </div>

            <div>
              <label
                className='block text-sm font-medium text-gray-600'
                htmlFor='password'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Enter your password'
                className='input input-bordered w-full focus:outline-none focus:ring focus:ring-blue-300 dark:bg-black '
              />
            </div>

            <div>
              <label
                className='block text-sm font-medium text-gray-600'
                htmlFor='confirm-password'
              >
                Confirm Password
              </label>
              <input
                type='password'
                id='confirm-password'
                placeholder='Re-enter your password'
                className='input input-bordered w-full focus:outline-none focus:ring focus:ring-blue-300 dark:bg-black '
              />
            </div>

            <div className='flex justify-between items-center'>
              <label className='flex items-center text-sm text-gray-600'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='checkbox checkbox-info mr-2'
                />
                Remember me
              </label>
              <p className='text-sm text-red-500 underline cursor-pointer'>
                Forgot Password?
              </p>
            </div>

            <div>
              <button className='btn btn-primary w-full bg-blue-500 hover:bg-blue-700 text-white'>
                Register
              </button>
            </div>
          </form>
          <div className='hover:scale-105 transition-transform cursor-pointer px-6 mt-10 '>
            <div className='divider font-bold pt-2 px-4 '>Or continue with</div>
            <hr />
            <div className='flex items-center justify-center py-4 '>
              <img className='w-6 h-6' src={GoogleLogo} alt='Google Logo' />
              <p className='ml-2 text-sm sm:text-base font-medium text-gray-700'>
                Sign in with Google
              </p>
            </div>
            <hr />
          </div>

          <div className='text-center py-6'>
            <p className='text-sm text-gray-600'>
              Already have an account?
              <Link
                to='/Login'
                className='text-blue-500 font-semibold underline'
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
