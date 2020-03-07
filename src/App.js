import React from 'react';
import store from './store';
import history from './services/history';
import { StoreProvider } from 'easy-peasy';
import { Router } from 'react-router-dom';
import AppNavigator from './navigations/AppNavigator';

function App() {
  return (
    <StoreProvider store={store}>
      <Router history={history}>
        <AppNavigator />
      </Router>
    </StoreProvider>
  );
}

export default App;
