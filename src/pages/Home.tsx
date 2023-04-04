import React from 'react';
import heroImg from '../assets/hero-img.jpg';

type Props = {};

const Home = (props: Props) => {
  return (
    <main className='px-4 lg:px-6 pt-8'>
      <section className='max-w-screen-xl mx-auto'>
        {/* hero section */}
        <article className='relative'>
          <div className='h-52 lg:h-96 rounded-xl overflow-hidden'>
            <img
              src={heroImg}
              alt='hero image'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='absolute top-2 lg:top-4 left-6 lg:left-6 w-2/4 lg:w-2/5'>
            <h3 className='text-lg lg:text-5xl text-white font-semibold capitalize'>
              Cook up a storm and take all the credit
            </h3>
            <p className='text-sm lg:text-2xl text-white lg:pt-2.5'>
              Over 500 recipes to enjoy
            </p>
          </div>
        </article>

        {/* intro text section */}
        <article>
          <h1 className='text-4xl text-red-500 font-bold uppercase'>Recipes</h1>
          <p className='mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            aliquid distinctio tempora, culpa commodi ipsa consequatur voluptas
            repellat officia eligendi maxime porro aspernatur sapiente in unde
            ad, dolorum doloremque temporibus ea quam! Repellendus mollitia
            placeat laboriosam qui, provident assumenda. Vero.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Home;
