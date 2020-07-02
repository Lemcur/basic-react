import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js'
import Index from './components/cruds/Index.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/cruds">cruds</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cruds">
            <Index />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
