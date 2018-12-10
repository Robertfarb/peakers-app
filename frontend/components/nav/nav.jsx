import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = () => (
  <nav className="logged-out-nav nav">
    <div className="left">
      <Link to="/">Home</Link>
    </div>
    <div className="right">
      <Link className="distance-link" to="/distance">Get Distance</Link>
      <Link className="map-link" to="/map">Map</Link>
    </div>
  </nav>
);

export default withRouter(Navbar);