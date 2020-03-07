import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/Home';
import OptionPage from '../pages/Option';

export default function AppNavigator() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/option" component={OptionPage} />

      <Route component={HomePage} />
    </Switch>
  );
}
