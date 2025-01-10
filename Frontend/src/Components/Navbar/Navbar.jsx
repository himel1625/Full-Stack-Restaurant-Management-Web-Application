import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    toast.success('Logout Successful');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='sticky top-0 z-10   '>
      <div className='navbar dark:bg-DGray bg-yellow-600 shadow-sm px-8 mx-auto'>
        <div className='flex-1'>
          <NavLink to='/' className='flex gap-2 items-center'>
            <span className='font-extrabold text-2xl text-white dark:text-text '>
              DineMaster
            </span>
          </NavLink>
        </div>

        <div className='hidden md:flex gap-6 items-center'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `font-extrabold  ${
                isActive ? 'text-[#FFFFFF]' : ' text-black dark:text-yellow-600'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/gallery'
            className={({ isActive }) =>
              `font-extrabold  ${
                isActive ? 'text-[#FFFFFF]' : ' text-black dark:text-yellow-600'
              }`
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to='/location'
            className={({ isActive }) =>
              `font-extrabold  ${
                isActive
                  ? 'text-[#FFFFFF]'
                  : ' text-black dark:text-yellow-600 '
              }`
            }
          >
            Our-Location
          </NavLink>
          <NavLink
            to='/reservation'
            className={({ isActive }) =>
              `font-extrabold  ${
                isActive ? 'text-[#FFFFFF]' : ' text-black dark:text-yellow-600'
              }`
            }
          >
            Reservation
          </NavLink>
          <NavLink
            to='/allFoods'
            className={({ isActive }) =>
              `font-extrabold  ${
                isActive ? 'text-[#FFFFFF]' : ' text-black dark:text-yellow-600'
              }`
            }
          >
            All-Foods
          </NavLink>
          {user && (
            <>
              <NavLink
                to='/myOrders'
                className={({ isActive }) =>
                  `font-extrabold  ${
                    isActive
                      ? 'text-[#FFFFFF]'
                      : ' text-black dark:text-yellow-600'
                  }`
                }
              >
                MyOrders
              </NavLink>
              <NavLink
                to='/myFood'
                className={({ isActive }) =>
                  `font-extrabold  ${
                    isActive
                      ? 'text-[#FFFFFF]'
                      : ' text-black dark:text-yellow-600'
                  }`
                }
              >
                MyFood
              </NavLink>
              <NavLink
                to='/addFood'
                className={({ isActive }) =>
                  `font-extrabold  ${
                    isActive
                      ? 'text-[#FFFFFF]'
                      : ' text-black dark:text-yellow-600'
                  }`
                }
              >
                Add-Food
              </NavLink>
            </>
          )}
          {user ? (
            <button
              className='font-extrabold  dark:text-white '
              onClick={handleLogout}
            >
              LogOut
            </button>
          ) : (
            <NavLink
              to='/login'
              className={({ isActive }) =>
                `font-extrabold  ${isActive ? 'text-[#FFFFFF]' : ' text-black'}`
              }
            >
              Login
            </NavLink>
          )}

          <button
            onClick={toggleTheme}
            className='p-2 rounded-md focus:outline-none'
            aria-label='Toggle Dark Mode'
          >
            {theme === 'dark' ? (
              <FaSun className='w-6 h-6 text-gray-800 dark:text-white' />
            ) : (
              <FaMoon className='w-6 h-6 text-gray-800 dark:text-white' />
            )}
          </button>
        </div>

        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='p-2 rounded-md focus:outline-none'
            aria-label='Toggle Menu'
          >
            <FaBars className='w-6 h-6 text-gray-800 dark:text-white' />
          </button>
        </div>

        {/* Sliding Menu for Mobile */}
        <div
          className={`fixed top-0 right-0 h-full w-60 bg-yellow-600 dark:bg-DGray shadow-lg z-20 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <button
            onClick={toggleMenu}
            className='absolute top-4 right-4 p-2'
            aria-label='Close Menu'
          >
            <FaTimes className='w-6 h-6 text-gray-800 dark:text-white' />
          </button>

          <ul className='flex flex-col items-center justify-center gap-6 pt-12 mx-auto mb-20'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  `font-extrabold  ${
                    isActive
                      ? 'text-[#FFFFFF]'
                      : ' text-black dark:text-yellow-600'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/gallery'
                className={({ isActive }) =>
                  `font-extrabold  ${
                    isActive
                      ? 'text-[#FFFFFF]'
                      : ' text-black dark:text-yellow-600'
                  }`
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/location'
                className={({ isActive }) =>
                  `font-extrabold  ${
                    isActive
                      ? 'text-[#FFFFFF]'
                      : ' text-black dark:text-yellow-600'
                  }`
                }
              >
                Our-Location
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/reservation'
                className={({ isActive }) =>
                  `font-extrabold  ${
                    isActive
                      ? 'text-[#FFFFFF]'
                      : ' text-black dark:text-yellow-600'
                  }`
                }
              >
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/allFoods'
                className={({ isActive }) =>
                  `font-extrabold  ${
                    isActive
                      ? 'text-[#FFFFFF]'
                      : ' text-black dark:text-yellow-600'
                  }`
                }
              >
                All-Foods
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    to='/myOrders'
                    className={({ isActive }) =>
                      `font-extrabold  ${
                        isActive
                          ? 'text-[#FFFFFF]'
                          : ' text-black dark:text-yellow-600 '
                      }`
                    }
                  >
                    MyOrders
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/myFood'
                    className={({ isActive }) =>
                      `font-extrabold  ${
                        isActive
                          ? 'text-[#FFFFFF]'
                          : ' text-black dark:text-yellow-600'
                      }`
                    }
                  >
                    MyFood
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/addFood'
                    className={({ isActive }) =>
                      `font-extrabold  ${
                        isActive
                          ? 'text-[#FFFFFF]'
                          : ' text-black dark:text-yellow-600'
                      }`
                    }
                  >
                    Add-Food
                  </NavLink>
                </li>
              </>
            )}
            {user ? (
              <button
                className='font-extrabold  dark:text-white'
                onClick={handleLogout}
              >
                LogOut
              </button>
            ) : (
              <NavLink
                to='/login'
                className={({ isActive }) =>
                  `font-extrabold  ${
                    isActive ? 'text-[#FFFFFF]' : ' text-black'
                  }`
                }
              >
                Login
              </NavLink>
            )}

            <button
              onClick={toggleTheme}
              className='p-2 rounded-md focus:outline-none'
              aria-label='Toggle Dark Mode'
            >
              {theme === 'dark' ? (
                <FaSun className='w-6 h-6 text-gray-800 dark:text-white' />
              ) : (
                <FaMoon className='w-6 h-6 text-gray-800 dark:text-white' />
              )}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
