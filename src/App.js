import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import LoginPage from './page/LoginPage';
import MainPage from './page/MainPage';
import Header from './component/common/header/Header';



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
