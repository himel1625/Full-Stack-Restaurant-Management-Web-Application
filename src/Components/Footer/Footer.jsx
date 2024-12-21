import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gray-100 dark:bg-[#000000] text-gray-700 dark:text-gray-300 mt-20'>
      <hr className='border-gray-700' />
      <div className='text-white py-16'>
        <div className='container mx-auto px-6'>
          {/* Footer Content */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
            {/* DineMaster Section */}
            <div className='footer-section text-black dark:text-white'>
              <h4 className='text-4xl font-extrabold text-blue-500 mb-6'>
                <strong>DineMaster</strong>
              </h4>
              <p className='text-sm mb-4'>
                <strong>
                  Experience the finest cuisine and exceptional service at
                  DineMaster. Join us for an unforgettable dining experience!
                </strong>
              </p>
              <div className='flex space-x-6 mt-6 text-black dark:text-white'>
                <a
                  href='#'
                  className='text-gray-400 hover:text-blue-500 transition duration-300'
                >
                  <i className='fab fa-facebook'></i> <strong>Facebook</strong>
                </a>
                <a
                  href='#'
                  className='text-gray-400 hover:text-blue-500 transition duration-300'
                >
                  <i className='fab fa-twitter'></i> <strong>Twitter</strong>
                </a>
                <a
                  href='#'
                  className='text-gray-400 hover:text-blue-500 transition duration-300'
                >
                  <i className='fab fa-instagram'></i>{' '}
                  <strong>Instagram</strong>
                </a>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className='footer-section text-black dark:text-white'>
              <h4 className='text-xl font-semibold mb-6'>
                <strong>Quick Links</strong>
              </h4>
              <ul className='space-y-3 text-black dark:text-white'>
                <li>Home</li>
                <li>Menu</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Reservations</li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className='footer-section text-black dark:text-white'>
              <h4 className='text-xl font-semibold mb-6'>
                <strong>Contact Us</strong>
              </h4>
              <p className='text-sm mb-2'>
                <strong>Email:</strong>{' '}
                <a
                  href='mailto:support@dinemaster.com'
                  className='text-gray-400 hover:text-blue-500 transition duration-300'
                >
                  <strong>support@dinemaster.com</strong>
                </a>
              </p>
              <p className='text-sm mb-2'>
                <strong>Phone:</strong>{' '}
                <a
                  href='tel:+1234567890'
                  className='text-gray-400 hover:text-blue-500 transition duration-300'
                >
                  <strong>+1 234 567 890</strong>
                </a>
              </p>
              <p className='text-sm mb-2'>
                <strong>Address:</strong> 123 Main Street, City, Country
              </p>
              <p className='text-sm'>
                <strong>Opening Hours:</strong> Mon - Sun, 10 AM - 10 PM
              </p>
            </div>

            {/* Newsletter Subscription Section */}
            <div className='footer-section text-black dark:text-white'>
              <h4 className='text-xl font-semibold mb-6'>
                <strong>Subscribe to Our Newsletter</strong>
              </h4>
              <p className='text-sm mb-6'>
                <strong>
                  Get updates on special offers, new menu items, and more
                  directly to your inbox!
                </strong>
              </p>
              <div className='flex items-center space-x-4'>
                <input
                  type='email'
                  placeholder='Your Email'
                  className='p-3 w-full rounded-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
                />
                <button className='bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300'>
                  <strong>Subscribe</strong>
                </button>
              </div>
            </div>
          </div>
          {/* Bottom Section - Copyright */}
          <div className='mt-12 text-center text-sm text-gray-400'>
            <hr className='mb-10' />
            <p>
              &copy; 2024 <strong>DineMaster</strong>. All rights reserved.
            </p>
            <p className='mt-2'>
              <strong>Designed by JH Group. | Powered by JH Group.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
