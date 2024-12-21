import React from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import GoogleLogo from '../../../assets/Google.png';
import useAuth from '../../../Hooks/useAuth';
const Login = () => {
  const { setUser, signInWithGoogle } = useAuth();

  const handelGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success('Signin Successful');
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  const handelSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    e.target.reset();
  };
  return (
    <>
      <Helmet>
        <title>DineMaster | Login</title>
      </Helmet>
      <div className='flex items-center justify-center mt-10'>
        <div className='border border-gray-200 shadow-md dark:bg-black rounded-xl mx-3 w-full sm:w-11/12 md:w-2/3 lg:w-1/3'>
          <div className='mt-6 mb-2'>
            <p className='text-center font-bold text-xl dark:text-white'>
              welcome to DineMaster
            </p>
          </div>
          <form onSubmit={handelSubmit} className='dark:text-white'>
            <div className='pt-3 px-4'>
              <label
                className='font-light text-sm pb-2 block'
                htmlFor='username'
              >
                Username or Email address *
              </label>
              <input
                type='email'
                name='email'
                id='username'
                placeholder='Steven job'
                className='input input-bordered w-full dark:bg-black'
              />
            </div>

            <div className='pt-3 px-4'>
              <label
                className='font-light text-sm pb-2 block'
                htmlFor='password'
              >
                Password *
              </label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='***********'
                className='input input-bordered w-full  dark:bg-black'
              />
            </div>

            <div className='flex justify-between items-center mx-4 pt-6 text-sm'>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='checkbox checkbox-info mr-2'
                />
                <span className='font-bold'>Remember me</span>
              </div>
              <p className='underline text-red-500 cursor-pointer'>
                Forgot Password
              </p>
            </div>

            <div className='pt-6 px-4'>
              <button className='btn bg-blue-700 w-full hover:bg-blue-900 text-white'>
                Login
              </button>
            </div>
            <div className='hover:scale-105 transition-transform cursor-pointer px-4 mt-6'>
              <div className='divider font-bold  pt-2 px-4 '>
                Or continue with
              </div>
              <hr />
              <div className='flex items-center justify-center py-4'>
                <button
                  onClick={handelGoogleLogin}
                  className='font-bold ml-2 text-sm sm:text-base flex '
                >
                  <img
                    className='w-6 h-6 mx-3'
                    src={GoogleLogo}
                    alt='Google Logo'
                  />
                  Sign in with Google
                </button>
              </div>
              <hr />
            </div>

            <div className='flex items-center justify-center pt-4 pb-6'>
              <p className='text-sm'>Don't have an Account?</p>
              <Link
                to='/Register'
                className='text-blue-500 font-semibold underline'
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
