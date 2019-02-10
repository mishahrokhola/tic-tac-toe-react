import React, { Component } from 'react';
import './App.css';

import Board from './Board/Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Simple Tic Tac Toe Game with React</p>
        <Board />
      </div>
    );
  }
}

export default App;
