import React, { useState } from 'react';

// components
import Header from './components/Header';

// pages
import Home from './pages/Home';

function App() {
  const [showLinks, setShowLinks] = useState<boolean>(false);

  return (
    <>
      <Header showLinks={showLinks} setShowLinks={setShowLinks} />
      <main className='px-4 lg:px-6 py-2.5'>
        <Home />
      </main>
    </>
  );
}

export default App;
