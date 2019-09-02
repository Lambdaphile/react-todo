import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
  renderSquare(i) {
    return <Square 
             value={this.props.squares[i]}
             onClick={() => this.props.onClick(i)}
           />;
  }

  buildRow(i) {
    const row = [];
    for (let j = i; j < (i + 3); j++) {
      row.push(this.renderSquare(j));
    }
    return row;
  }

  renderBoard() {
    const board = [];
    for (let i = 0; i < 9; i += 3) {
      board.push(<div className="board-row">{this.buildRow(i)}</div>);
    }
    return board;
  }

  render() {
    return (
      <div>
        {this.renderBoard()}
      </div>
    );
  }
}
