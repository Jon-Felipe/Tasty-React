import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { navLinks } from '../utils/constants';
import { NavlinksType } from '../utils/types';

// components
import NavLink from './NavLink';

type Props = {
  showLinks: boolean;
  setShowLinks: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ showLinks, setShowLinks }: Props) => {
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
            <button
              type='button'
              onClick={() => setShowLinks(!showLinks)}
              className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100'
            >
              <Bars3Icon className='h-6 w-6' />
            </button>
          </div>
          <div
            className={`${
              showLinks ? '' : 'hidden'
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
          >
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
              {navLinks.map((link: NavlinksType) => {
                const { id, text, path } = link;
                return <NavLink key={id} text={text} path={path} />;
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
