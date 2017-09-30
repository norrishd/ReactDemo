import React, { Component } from 'react';
import logo from './helix.gif';
import './App.css';

/* The main class of the page */
class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2> Trading Atoms </h2>
					<h4> A David Norrish production </h4>
        </div>
        <p className='App-intro'>
		    Welcome to the Silky Smooth Realm of a React app.
		    <br />
        Please enjoy a game of tic-tac-toe.
        </p>
				<div>
					<Game />
				</div>
      </div>
    )
  }
}

/* Component to handle each clickable square of the board 
 * Note that it's a "functional component" because the class is very simple
 * Difference: uses "props" not "this.props", and
 * "props.onClick" not "() => props.onClick()" as just passes function down
 */
function Square(props) {
	return (
		// Call handleClick() in parent Board
		<button className='square' onClick={props.onClick}>
			{props.value}
		< /button>
	)
}

/* Class for the board, containing 9 squares
 * Takes props from Game class for array of square values and next player
 */
class Board extends React.Component {	
  renderSquare(i) {
    return (
		  <Square
			  value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    )
  }

  render() {
		return (
      <div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

/* The main game class with contains the board, status and some list */
class Game extends React.Component {
	constructor() {
		super()
		this.state = {
			history: [{
				squares: Array(9).fill(null)
			}],
			stepNumber: 0,		// move in the game
			xIsNext: true			// next player
		}
	}
	
	// Update the value in a square, either to an X or O
	handleClick(i) {
		// copy array up to the current step number (user might revert)
		const history = this.state.history.slice(0, this.state.stepNumber + 1)
		const current = history[history.length - 1]
		const newSquares = current.squares.slice()
		// don't let square be clicked if game over or square already used
		if (calculateWinner(newSquares) || newSquares[i]) {
			return
		}
		newSquares[i] = this.state.xIsNext ? 'X' : 'O'
		this.setState({
			history: history.concat([{
				squares: newSquares
			}]),
			stepNumber: history.length,
			xIsNext: !this.state.xIsNext
		})
	}

	// method to revert to an earlier move
	jumpTo(step) {
		this.setState({
			stepNumber: step,
			xIsNext: (step % 2) === 0
		})
	}

  render() {
		const history = this.state.history
		const current = history[this.state.stepNumber]		// states tracks move #
		const winner = calculateWinner(current.squares)
		
		// Function to check if anything has been played yet.
		// returns array of moves as list elements with hyperlinks that go nowhere
		const moves = history.map((step, move) => {			// 'move' is the index #
			const desc = move ?
			  'Move #' + move :
				'Game start'
			return (
				<li key={move}>
				  <a href='#' onClick={() => this.jumpTo(move)}>{desc}</a>
				</li>
			)
		})
		
		// check whether either player has won; if not print next to play						
		let status
		if (winner) {
			status = 'We have a winner!: ' + winner
		} else {
			status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
		}
		
    return (
      <div className='game'>
        <div className='game-board'>
          <Board
					  squares={current.squares}
						onClick={(i) => this.handleClick(i)}
					/>
        </div>
        <div className='game-info'>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

/* Helper function to determine if either player has won 
 * Takes in an array of square states, either 'X', 'O' or null)
 */
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
		// Check if there is a value in first square, and if it makes a line
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export default App;
