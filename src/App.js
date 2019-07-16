import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './page/LoginPage';
import SignUpPage from './page/SignUpPage';
import MainPage from './page/MainPage';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/sign-up" component={SignUpPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
