import React from 'react';
import Store from './Components/Store/Store';
import ContextProvider  from './Components/ContextProvider';
function App() {
  return (
    <ContextProvider>
      <Store />
    </ContextProvider>
  );
}

export default App;


