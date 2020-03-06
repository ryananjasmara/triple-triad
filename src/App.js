import React from 'react';
import store from './store';
import { StoreProvider } from 'easy-peasy';

import Home from './pages/Home';

function App() {
  return (
    <StoreProvider store={store}>
      <Home />
    </StoreProvider>
  );
}

export default App;
