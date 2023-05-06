import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import TestCenters from './pages/TestCenters';
import Appointments from './pages/Appointments';
import Navigation from './components/AppHeader/Navigation';
import Login from './pages/Login';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/test-centers" component={TestCenters} />
      <Route path="/appointments" component={Appointments} />
      <Route path="/login" component={Login} />
      {/* Add more routes as needed */}
    </Switch>
  </Router>
);

export default Routes;
