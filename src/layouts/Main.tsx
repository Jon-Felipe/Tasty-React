import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

// components
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

type Props = {};

const Main = (props: Props) => {
  const [showLinks, setShowLinks] = useState<boolean>(false);

  return (
    <>
      <Header showLinks={showLinks} setShowLinks={setShowLinks} />
      <main className='px-4 lg:px-6 py-4 lg:py-6'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Main;
