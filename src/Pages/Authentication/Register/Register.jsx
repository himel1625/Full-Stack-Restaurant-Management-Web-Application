import React from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import GoogleLogo from '../../../assets/Google.png';
import useAuth from '../../../Hooks/useAuth';
const Register = () => {
  const { setUser, createUser, updateUserProfile, signInWithGoogle } =
    useAuth();

  const handelGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success('Register Successful');
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
      toast.error('❌Password must contain at least 6 character ');
    }
    if (!/[A-Z]/.test(password)) {
      toast.error('❌Password must in one uppercase letter ');
    }
    if (!/[a-z]/.test(password)) {
      toast.error('❌Password must in one lowercase letter ');
    }
    try {
      await createUser(email, password);
      await updateUserProfile(name, photo);
      setUser({ photoURL: photo, displayName: name });
      toast.success('Register Successful');
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
      <div className='flex items-center justify-center min-h-screen  px-4 dark:text-white mt-10 md:mt-2'>
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
                name='FullName'
                placeholder='Enter your Full Name *'
                className='input input-bordered w-full focus:outline-none focus:ring focus:ring-blue-300 dark:bg-black '
              />
            </div>
            <div>
              <label
                className='block text-sm font-medium text-gray-600'
                htmlFor='email'
              >
                photo Url
              </label>
              <input
                type='url'
                id='Url'
                name='Url'
                placeholder='Enter your email'
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
              <button
                onClick={handelGoogleLogin}
                c
                className='font-bold ml-2 text-sm sm:text-base flex '
              >
                <img className='w-6 h-6' src={GoogleLogo} alt='Google Logo' />
                Sign in with Google
              </button>
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
