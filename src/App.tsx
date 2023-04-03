import React, { useState } from 'react';

// components
import Header from './components/Header';

function App() {
  const [showLinks, setShowLinks] = useState<boolean>(false);

  return (
    <>
      <Header showLinks={showLinks} setShowLinks={setShowLinks} />
    </>
  );
}

export default App;
