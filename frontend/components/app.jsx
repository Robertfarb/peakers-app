import React from 'react';
import Map from './map/map';
import NavBar from './nav/nav';
import { Route, Switch } from 'react-router-dom';
import DistanceForm from './geocode_form/distance_form';

const App = () => (
  <div>
    <h1>Welcome to Peakers Coding Challenge</h1>
    <NavBar />
    <Switch>
      <Route path="/map" component={Map} />
      <Route exact path="/" component={Map} />
      <Route exact path="/geocode" component={Map} />
      <Route exact path="/reverse-geocode" component={Map} />
      <Route exact path="/distance" component={DistanceForm} />
    </Switch>
  </div>
);

export default App;