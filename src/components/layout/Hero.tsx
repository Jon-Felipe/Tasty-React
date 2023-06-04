import React from 'react';
import heroImg from '../../assets/hero-img.jpg';

type Props = {};

const Hero = (props: Props) => {
  return (
    <article className='relative'>
      <section className='h-52 lg:h-96 rounded-xl overflow-hidden'>
        <img
          src={heroImg}
          alt='hero image'
          className='w-full h-full object-cover'
        />
      </section>
      <section className='absolute top-2 lg:top-4 left-6 lg:left-6 w-2/4 lg:w-2/5'>
        <h3 className='text-lg lg:text-5xl text-white font-semibold capitalize'>
          Cook up a storm and take all the credit
        </h3>
        <p className='text-sm lg:text-2xl text-white lg:pt-2.5'>
          Over 500 recipes to enjoy
        </p>
      </section>
    </article>
  );
};

export default Hero;
