import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/outline';
import { navLinks } from '../utils/constants';
import { NavlinksType } from '../utils/types';

// components
import NavLink from './NavLink';

type Props = {
  showLinks: boolean;
  setShowLinks: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ showLinks, setShowLinks }: Props) => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <header>
      <nav className='bg-white px-4 lg:px-6 py-2 lg:py-4 shadow'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <h1 className='text-xl lg:text-3xl font-semibold whitespace-nowrap'>
            Tasty Recipes
          </h1>
          <div className='flex items-center lg:order-2'>
            {user?.name ? (
              <div className='flex items-center gap-x-2'>
                <p className='text-sm font-semibold'>Welcome {user?.name}</p>
                <UserCircleIcon className='w-6 h-6' />
              </div>
            ) : (
              <>
                <Link
                  to='/register'
                  className='text-white bg-orange-500 font-medium rounded-full text-sm px-4 lg:px-8 py-2 mr-2'
                >
                  Sign up
                </Link>
                <Link
                  to='/login'
                  className='text-orange-500 border-2 border-orange-500 font-medium rounded-full text-sm px-4 lg:px-8 py-2 mr-2'
                >
                  Log in
                </Link>
              </>
            )}
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
