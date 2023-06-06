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
      <main className='min-h-[65vh] py-8 px-4 xl:px-0'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Main;
