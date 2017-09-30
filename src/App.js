import React, { Component } from 'react';
import logo from './helix.gif';
import './App.css';

/* The main class of the page */
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
          More delicious content coming shortly
        </p>
		<div>
		  <Game />
		</div>
      </div>
    );
  }
}

class Square extends React.Component {
  constructor() {
    super()
		this.state = {
			value: null,
		}
	}

  render() {
    return (
      <button className='square' onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    )
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default App;
