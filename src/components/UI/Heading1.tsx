import React from 'react';

type Props = {
  text: string | undefined;
};

const Heading1 = ({ text }: Props) => {
  return <h1 className='text-2xl md:text-3xl font-bold'>{text}</h1>;
};

export default Heading1;
