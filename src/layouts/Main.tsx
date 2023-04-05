import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';

type Props = {};

const Main = (props: Props) => {
  const [showLinks, setShowLinks] = useState<boolean>(false);

  return (
    <>
      <Header showLinks={showLinks} setShowLinks={setShowLinks} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Main;
