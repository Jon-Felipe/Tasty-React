import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  text: string;
  path: string;
};

const NavLink = ({ text, path }: Props) => {
  return (
    <li>
      <Link
        to={path}
        className='block py-2 pr-4 pl-3 text-gray-700 capitalize border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0'
      >
        {text}
      </Link>
    </li>
  );
};

export default NavLink;
