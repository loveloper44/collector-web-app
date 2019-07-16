import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './page/LoginPage';
import MainPage from './page/MainPage';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
