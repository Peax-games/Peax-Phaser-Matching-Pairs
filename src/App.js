import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MatchingPairs from './Game/MatchingPairs';

class App extends Component {
  render() {
    MatchingPairs();
    return (
      <div id="myCanvas">

      </div>
    );
  }
}

export default App;
