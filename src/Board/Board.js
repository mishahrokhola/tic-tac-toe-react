import React, { Component } from 'react'
import './Board.css';

import Cell from './Cell/Cell'

class Board extends Component {
  state = {
    cellsValue: [
      null, null, null,
      null, null, null,
      null, null, null
    ],
    isPlayerXMove: true,
    gameFinished: false
  }

  playerMove = (cellId) => {
    const newCellsValue = [...this.state.cellsValue];
    const value = this.state.isPlayerXMove ? "X" : "O";

    if (this.checkWinner(newCellsValue) || newCellsValue[cellId]) {
      return;
    }

    //Set X or O if cell is not empty
    if (newCellsValue[cellId] === null)
      newCellsValue[cellId] = value;


    this.setState({
      cellsValue: newCellsValue,
      isPlayerXMove: !this.state.isPlayerXMove,
    })
  }

  restartGame = () => {
    this.setState({
      cellsValue: Array(9).fill(null),
      isPlayerXMove: true,
      gameFinished: false
    })
  }

  checkWinner(cellsValue) {
    const lines = [
      //horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      //vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      //diagonal
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (cellsValue[a] && cellsValue[a] === cellsValue[b] && cellsValue[a] === cellsValue[c]) {
        return cellsValue[a];
      }
    }

    return null;
  }

  render() {

    const winner = this.checkWinner(this.state.cellsValue);

    let status;

    if (winner) {
      status = `Winner: ${winner}`;
    }
    else if (!this.state.cellsValue.includes(null)) {
      status = 'Draw';
    }
    else {
      status = `Player ${this.state.isPlayerXMove ? 'X' : 'O'} move`;
    }

    return (
      <div>

        <div className="board-row">
          <Cell
            value={this.state.cellsValue[0]}
            cellClick={() => this.playerMove(0)}
          />
          <Cell
            value={this.state.cellsValue[1]}
            cellClick={() => this.playerMove(1)}
          />
          <Cell
            value={this.state.cellsValue[2]}
            cellClick={() => this.playerMove(2)}
          />
        </div>
        <div className="board-row">
          <Cell
            value={this.state.cellsValue[3]}
            cellClick={() => this.playerMove(3)}
          />
          <Cell
            value={this.state.cellsValue[4]}
            cellClick={() => this.playerMove(4)}
          />
          <Cell
            value={this.state.cellsValue[5]}
            cellClick={() => this.playerMove(5)}
          />
        </div>
        <div className="board-row">
          <Cell
            value={this.state.cellsValue[6]}
            cellClick={() => this.playerMove(6)}
          />
          <Cell
            value={this.state.cellsValue[7]}
            cellClick={() => this.playerMove(7)}
          />
          <Cell
            value={this.state.cellsValue[8]}
            cellClick={() => this.playerMove(8)}
          />
        </div>

        <p>{status}</p>

        <button onClick={this.restartGame}>Restart</button>

      </div>
    );
  }
}

export default Board;
