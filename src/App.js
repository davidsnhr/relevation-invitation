import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Home from './Home';
import Ticket from './Ticket';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ticket" component={Ticket} />
      </Switch>
    </Router>
  );
}

export default App;
