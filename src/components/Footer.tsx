import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-900'>
      <div className='w-full mx-auto max-w-screen-xl'>
        <div className='grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4'>
          <article>
            <h2 className='mb-6 text-sm font-semibold text-white uppercase'>
              Quick Links
            </h2>
            <ul className='text-gray-400 font-medium'>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Home
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Rewards
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Recipes
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Store Finder
                </a>
              </li>
            </ul>
          </article>
          <article>
            <h2 className='mb-6 text-sm font-semibold text-white uppercase'>
              About Tasty
            </h2>
            <ul className='text-gray-400 font-medium'>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Our Business
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Careers
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Sustainablity
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </article>
          <article>
            <h2 className='mb-6 text-sm font-semibold text-white uppercase'>
              Popular Categories
            </h2>
            <ul className='text-gray-400 font-medium'>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Breakfast
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Light Meals
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Dessert
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Baking
                </a>
              </li>
            </ul>
          </article>
          <article>
            <h2 className='mb-6 text-sm font-semibold text-white uppercase'>
              Socials
            </h2>
            <ul className='text-gray-400 font-medium'>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Facebook
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Instagram
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Twitter
                </a>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
