import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Router>
          <ul>
            <li>
              <NavLink to="/frontend">前端</NavLink>
            </li>
            <li>
              <NavLink to="/backend">后端</NavLink>
            </li>
          </ul>
        </Router>
      </header>
    </div>
  );
}

export default App;
