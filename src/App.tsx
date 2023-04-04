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
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
