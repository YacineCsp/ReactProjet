import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
require('bootstrap')

class App extends Component {
  render() {
    return (
      <div className="App">
        <header class="container-fluide">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            bienvenue la famille
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
