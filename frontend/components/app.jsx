import React from 'react';
import Map from './map/map';
import NavBar from './nav/nav';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <h1>Welcome to Peakers Coding Challenge</h1>
    <NavBar />
    <Switch>
      <Route path="/map" component={Map} />
      <Route exact path="/" component={Map} />
    </Switch>
  </div>
);

export default App;