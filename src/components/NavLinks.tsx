import React from 'react';
import { navLinks } from '../utils/constants';
import { navLinksType } from '../utils/types';

type Props = {};

const NavLinks = (props: Props) => {
  return (
    <div className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'>
      <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
        {navLinks.map((link: navLinksType) => {
          const { id, text, path } = link;
          return (
            <li key={id}>
              <a
                href={path}
                className='block py-2 pr-4 pl-3 text-gray-700 capitalize border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0'
              >
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
