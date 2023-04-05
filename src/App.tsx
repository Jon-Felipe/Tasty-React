import React, { useState } from 'react';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';

function App() {
  const [showLinks, setShowLinks] = useState<boolean>(false);

  return (
    <>
      <Header showLinks={showLinks} setShowLinks={setShowLinks} />
      <>
        <Home />
      </>
      <Footer />
    </>
  );
}

export default App;
