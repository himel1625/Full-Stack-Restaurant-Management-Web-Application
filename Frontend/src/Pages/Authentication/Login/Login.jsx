import React from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImge from '../../../assets/authImge/Login-amico.png';
import GoogleLogo from '../../../assets/Google.png';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromHome = location?.state || '/';
  const { signInWithGoogle, Login } = useAuth();

  const handelGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success('Signin Successful');
      navigate(fromHome, { replace: true });
    } catch (err) {
      console.error(err);
      toast.error(err?.message);
    }
  };

  const handelSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (!password) {
      toast.success('please wait');
      return;
    }
    if (password.length < 6) {
      toast.error('❌ Password must contain at least 6 characters');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error('❌ Password must include at least one uppercase letter');
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error('❌ Password must include at least one lowercase letter');
      return;
    }

    try {
      await Login(email, password);
      toast.success('Login Successful');
      navigate(fromHome, { replace: true });
      e.target.reset();
    } catch (err) {
      console.error(err);
      toast.error(err?.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>DineMaster | Login</title>
      </Helmet>
      <div className='flex items-center justify-center mt-10 flex-col-reverse lg:flex-row'>
        <div className='lg:w-1/2'>
          <img src={loginImge} alt='' className='max-w-full h-auto' />
        </div>
        <div className='border border-gray-200 shadow-md dark:bg-black rounded-xl mx-3 w-full sm:w-11/12 md:w-2/3 lg:w-1/3'>
          <div className='mt-6 mb-2'>
            <p className='text-center font-bold text-xl dark:text-white'>
              Welcome to DineMaster(Login)
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
                placeholder='user....email'
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
                className='input input-bordered w-full dark:bg-black'
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
              <button className='btn bg-text w-full hover:bg-text text-white'>
                Login
              </button>
            </div>
            <div className='hover:scale-105 transition-transform cursor-pointer px-4 mt-6'>
              <div className='divider font-bold pt-2 px-4'>
                Or continue with
              </div>
              <hr />
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
              <hr />
            </div>

            <div className='flex items-center justify-center pt-4 pb-6'>
              <p className='text-sm'>Don't have an Account?</p>
              <Link
                to='/register'
                className='text-text font-semibold underline'
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
