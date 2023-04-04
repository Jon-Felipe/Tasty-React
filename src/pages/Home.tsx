import React from 'react';

type Props = {};

const Home = (props: Props) => {
  return (
    <section className='px-4 lg:px-6 pt-8'>
      <div className='max-w-screen-xl mx-auto'>
        <h1 className='text-4xl text-red-500 font-bold uppercase'>Recipes</h1>
        <p className='mt-4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          aliquid distinctio tempora, culpa commodi ipsa consequatur voluptas
          repellat officia eligendi maxime porro aspernatur sapiente in unde ad,
          dolorum doloremque temporibus ea quam! Repellendus mollitia placeat
          laboriosam qui, provident assumenda. Vero.
        </p>
      </div>
    </section>
  );
};

export default Home;
