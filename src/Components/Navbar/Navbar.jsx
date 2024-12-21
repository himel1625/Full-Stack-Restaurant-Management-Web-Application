import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const Navbar = () => {
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  const handleLogout = () => {
    logOut();
    toast.success('Logout SuccessFull ');
  };
  return (
    <div className='sticky top-0 z-10'>
      <div className='navbar bg-base-100 dark:bg-DGray shadow-sm px-8 mx-auto'>
        <div className='flex-1'>
          <NavLink to='/' className='flex gap-2 items-center'>
            <span className='font-extrabold text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:from-blue-500 dark:via-teal-500 dark:to-green-500 bg-clip-text text-transparent'>
              DineMaster
            </span>
          </NavLink>
        </div>

        <div className='flex-none'>
          <ul className='gap-6 px-1 font-bold dark:text-white hidden md:flex'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? 'text-blue-300' : 'hover:text-blue-600'
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <>
              <li>
                <NavLink
                  to='/Login'
                  className={({ isActive }) =>
                    `font-bold ${
                      isActive ? 'text-blue-300' : 'hover:text-blue-600'
                    }`
                  }
                >
                  Login
                </NavLink>
              </li>
            </>
          </ul>

          <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              {user ? (
                <div title={user?.displayName} className='w-10 rounded-full'>
                  <img
                    referrerPolicy='no-referrer'
                    alt='User Profile Photo'
                    src={
                      user?.photoURL ||
                      'https://cdn-icons-png.flaticon.com/512/8847/8847419.png'
                    }
                  />
                </div>
              ) : (
                <div className='font-bold text-white pt-3'>
                  <NavLink to='/Login'>
                    <button onClick={handleLogout}></button>
                  </NavLink>
                </div>
              )}
            </div>
            <ul
              tabIndex={0}
              className='dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-gray-800 dark:text-white rounded-box w-52 font-bold'
            >
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    `font-bold ${
                      isActive ? 'text-blue-300' : 'hover:text-blue-600'
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <button
                  onClick={toggleTheme}
                  className='mt-2 dark:text-white ml-4 btn btn-outline btn-sm md:hidden block'
                >
                  {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
                </button>
              </li>
              <li className='mt-2'>
                <button
                  onClick={handleLogout}
                  className='bg-gray-200 block text-center dark:bg-gray-700'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>

          {/* Theme Toggle Button */}
          <div
            onClick={toggleTheme}
            className={`relative w-16 h-8 flex items-center cursor-pointer rounded-full transition-all duration-300 ${
              theme === 'light'
                ? 'bg-gray-300'
                : 'bg-gray-800 border-2 border-gray-500'
            }`}
            aria-label={`Switch to ${
              theme === 'light' ? 'dark' : 'light'
            } theme`}
          >
            <div
              className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                theme === 'light' ? 'translate-x-1' : 'translate-x-9'
              }`}
            />
            <span
              className={`absolute left-2 text-sm font-medium transition-opacity duration-300  ${
                theme === 'light' ? 'opacity-100 text-gray-800' : 'opacity-0'
              }`}
            >
              🌙
            </span>
            <span
              className={`absolute right-2 text-sm font-medium transition-opacity duration-300 ${
                theme === 'light' ? 'opacity-0' : 'opacity-100 text-gray-300'
              }`}
            >
              ☀️
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
