import React, { Component } from 'react';
import logo from './helix.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> Trading Atoms </h2>
		  <h4> A David Norrish production </h4>
        </div>
        <p className="App-intro">
		  Welcome to the Silky Smooth Realm of a React app.
		  <br />
          More wonderful content coming shortly
        </p>
      </div>
    );
  }
}

export default App;
