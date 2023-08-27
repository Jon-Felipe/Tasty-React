import { useState } from 'react';
import { Outlet } from 'react-router-dom';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';

const RootLayout = () => {
  const [showLinks, setShowLinks] = useState<boolean>(false);

  return (
    <>
      <Header showLinks={showLinks} setShowLinks={setShowLinks} />
      <main className='max-w-screen-xl mx-auto min-h-[65vh] py-8 px-4'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
