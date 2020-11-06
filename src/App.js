import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Country from './components/Country';
import Dailycases from './components/Dailycases';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <nav>
            <ul>
              <li>
                <Link className="td" to="/">Home</Link>
              </li>
              <li>
                <Link className="td" to="/country">Search By Country</Link>
              </li>
              <li>
                <Link className="td" to="/dailycases">Daily Cases</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="main-body">
          <Switch >
            <Route path="/country">
              <Country />
            </Route>
            <Route path="/dailycases">
              <Dailycases />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
