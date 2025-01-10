import React from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import RImge from '../../../assets/authImge/Sign up-amico.png';
import GoogleLogo from '../../../assets/Google.png';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromHome = location?.state || '/';
  const { setUser, createUser, updateUserProfile, signInWithGoogle } =
    useAuth();

  const handelGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success('Register Successful');
      navigate(fromHome, { replace: true });
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  const handelRegisterSubmit = async e => {
    e.preventDefault();
    const from = new FormData(e.target);
    const name = from.get('FullName');
    const photo = from.get('Url');
    const email = from.get('email');
    const password = from.get('password');

    if (password.length < 6) {
      toast.error('❌ Password must contain at least 6 characters');
    }
    if (!/[A-Z]/.test(password)) {
      toast.error('❌ Password must contain at least one uppercase letter');
    }
    if (!/[a-z]/.test(password)) {
      toast.error('❌ Password must contain at least one lowercase letter');
    }

    try {
      await createUser(email, password);
      await updateUserProfile(name, photo);
      setUser({
        photoURL: photo,
        displayName: name,
      });
      toast.success('Register Successful');
      navigate(fromHome, { replace: true });
      e.target.reset();
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>DineMaster | Register</title>
      </Helmet>
      <div className='flex items-center justify-center min-h-screen dark:text-white px-4'>
        {/* Container for Image and Form */}
        <div className='flex flex-col lg:flex-row items-center justify-between w-full max-w-4xl mx-auto space-y-8 lg:space-y-0'>
          {/* Image Section */}
          <div className='w-full lg:w-1/2'>
            <img
              src={RImge}
              alt='Register'
              className='w-full h-auto rounded-lg shadow-md'
            />
          </div>

          {/* Form Section */}
          <div className='w-full lg:w-1/2 border border-gray-200 shadow-lg rounded-xl bg-white p-8 dark:bg-black dark:text-white'>
            <div className='text-center mb-4'>
              <p className='text-3xl font-semibold text-gray-800 dark:text-white'>
                Welcome to DineMaster
              </p>
              <p className='text-lg text-gray-600'>Register to get started!</p>
            </div>
            <form onSubmit={handelRegisterSubmit} className='space-y-6'>
              <div>
                <label
                  className='block text-sm font-medium text-gray-600'
                  htmlFor='FullName'
                >
                  Full Name *
                </label>
                <input
                  type='text'
                  id='FullName'
                  name='FullName'
                  placeholder='Enter your Full Name *'
                  className='input input-bordered w-full focus:outline-none focus:ring focus:ring-text dark:bg-black dark:text-white'
                />
              </div>

              <div>
                <label
                  className='block text-sm font-medium text-gray-600'
                  htmlFor='Url'
                >
                  Photo URL
                </label>
                <input
                  type='url'
                  id='Url'
                  name='Url'
                  placeholder='Enter your photo URL'
                  className='input input-bordered w-full focus:outline-none focus:ring focus:ring-text dark:bg-black dark:text-white'
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
                  className='input input-bordered w-full focus:outline-none focus:ring focus:ring-text dark:bg-black dark:text-white'
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
                  className='input input-bordered w-full focus:outline-none focus:ring focus:ring-text
                   dark:bg-black dark:text-white'
                />
              </div>

              <div className='flex justify-between items-center'>
                <label className='flex items-center text-sm text-gray-600 dark:text-white'>
                  <input
                    type='checkbox'
                    className='checkbox checkbox-info mr-2'
                  />
                  Remember me
                </label>
                <p className='text-sm text-red-500 underline cursor-pointer'>
                  Forgot Password?
                </p>
              </div>

              <div>
                <button className='btn w-full bg-text  text-white py-3 rounded-lg transition duration-200'>
                  Register
                </button>
              </div>
            </form>

            {/* Google Login Section */}
            <div className='mt-8 text-center'>
              <div className='divider font-bold'>Or continue with</div>
              <div className='flex items-center justify-center py-4'>
                <button
                  onClick={handelGoogleLogin}
                  className='flex items-center bg-white border border-gray-300 rounded-full px-6 py-2 text-gray-600'
                >
                  <img
                    className='w-6 h-6 mr-2'
                    src={GoogleLogo}
                    alt='Google Logo'
                  />
                  Sign in with Google
                </button>
              </div>
            </div>

            {/* Login Redirect Section */}
            <div className='text-center py-6'>
              <p className='text-sm text-gray-600 dark:text-white'>
                Already have an account?{' '}
                <Link to='/login' className='text-text font-semibold underline'>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
