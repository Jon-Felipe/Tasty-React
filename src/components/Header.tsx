import React from 'react';

// components
import NavLinks from './NavLinks';

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <h1 className='text-xl font-semibold whitespace-nowrap'>
            Tasty Recipes
          </h1>
          <div className='flex items-center lg:order-2'>
            <a
              href='/'
              className='text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2'
            >
              Log in
            </a>
            <a
              href='/'
              className='text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2'
            >
              Get started
            </a>
          </div>
          <NavLinks />
        </div>
      </nav>
    </header>
  );
};

export default Header;
