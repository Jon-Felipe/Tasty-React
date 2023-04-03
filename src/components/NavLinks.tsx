import React from 'react';

type Props = {};

const NavLinks = (props: Props) => {
  return (
    <div className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'>
      <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
        <li>
          <a
            href='/'
            className='block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0'
          >
            Home
          </a>
        </li>
        <li>
          <a
            href='/'
            className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0'
          >
            About
          </a>
        </li>
        <li>
          <a
            href='/'
            className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0'
          >
            Recipes
          </a>
        </li>
        <li>
          <a
            href='/'
            className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0'
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
