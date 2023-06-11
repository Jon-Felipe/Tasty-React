import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  url: string;
  text: string;
};

const LinkCard = ({ url, text }: Props) => {
  return (
    <Link
      to={url}
      className='border-2 p-4 rounded capitalize text-sm font-semibold text-center transition duration-300 ease-in-out hover:scale-105'
    >
      {text}
    </Link>
  );
};

export default LinkCard;
