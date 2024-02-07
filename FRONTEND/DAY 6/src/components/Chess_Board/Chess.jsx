// Game.jsx
import React, { Component } from "react";
import Setup from "./setup";
import "./Chess.css";

class Captures extends Component {
  render() {
    const captures = this.props.captures.map((element) => element.symbol);

    return (
      <div className="captures-section">
        <h4>Captured by {this.props.player}</h4>
        <p>{captures}</p>
      </div>
    );
  }
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = Setup;
  }

  handleClick(i) {
    let board = this.state.board;
    let highlights = this.state.highlights;
    let capturedByBlack = this.state.capturedByBlack;
    let capturedByWhite = this.state.capturedByWhite;
    let selected = this.state.selected;
    let isWhiteTurn = this.state.isWhiteTurn;
    let currentPlayer = isWhiteTurn ? "white" : "black";

    if (!board[i] && !selected) {
      console.log("Ignore empty circles");
      return;
    }

    if (!highlights[i] && board[i].player === currentPlayer) {
      console.log("Selected piece");
      let newState = { ...this.state };
      newState.selected = i;
      newState.highlights = this.addHighlights(board[i], newState.selected);
      this.setState(newState);
      console.log("Updated");
      return;
    }

    if (selected && highlights[i]) {
      console.log("Move to " + i);
      let newState = { ...this.state };

      if (board[i]) {
        if (currentPlayer === "white") {
          capturedByWhite.push(board[i]);
        } else {
          capturedByBlack.push(board[i]);
        }
      }

      newState.board[i] = board[selected];
      newState.board[selected] = null;

      if (newState.board[i].moved === false) {
        newState.board[i].moved = true;
      }

      newState.capturedByBlack = capturedByBlack;
      newState.capturedByWhite = capturedByWhite;
      newState.highlights = Array(64).fill(null);
      newState.selected = null;
      newState.isWhiteTurn = !newState.isWhiteTurn;
      this.setState(newState);
    }
  }

  addHighlights(selected, i) {
    const array = Array(64).fill(null);

    switch (selected.piece) {
      case "pawn":
        return this.pawnOptions(array, selected, i);
      case "rook":
        return this.rookOptions(array, selected, i);
      case "bishop":
        return this.rookOptions(array, selected, i);
      default:
        console.error("Unknown piece selected");
        break;
    }

    return array;
  }

  pawnOptions(array, selected, i) {
    if (selected.player === "white") {
      try {
        if (!selected.moved) {
          array[i - 8] = this.state.board[i - 8] ? null : true;
          array[i - 16] =
            this.state.board[i - 16] || this.state.board[i - 8] ? null : true;
        } else {
          array[i - 8] = this.state.board[i - 8] ? null : true;
        }

        try {
          array[i - 7] =
            this.state.board[i - 7].player === "black" && i % 8 !== 7
              ? true
              : null;
        } catch (e) {}

        try {
          array[i - 9] =
            this.state.board[i - 9].player === "black" && i % 8 !== 0
              ? true
              : null;
        } catch (e) {}
      } finally {
      }
    } else {
      try {
        if (!selected.moved) {
          array[i + 8] = this.state.board[i + 8] ? null : true;
          array[i + 16] =
            this.state.board[i + 16] || this.state.board[i + 8] ? null : true;
        } else {
          array[i + 8] = this.state.board[i + 8] ? null : true;
        }
      } finally {
      }

      try {
        array[i + 7] =
          this.state.board[i + 7].player === "white" && i % 8 !== 0
            ? true
            : null;
      } catch (e) {}

      try {
        array[i + 9] =
          this.state.board[i + 9].player === "white" && i % 8 !== 7
            ? true
            : null;
      } catch (e) {}
    }

    return array;
  }

  isEnemy(i, player) {
    try {
      if (this.state.board[i].player !== player) {
        return true;
      }
    } catch (e) {
      return false;
    }

    return false;
  }

  upOptions(array, selected, i) {
    try {
      let counter = 1;

      while (
        (this.state.board[i - counter * 8] == null ||
          this.isEnemy(i - counter * 8, selected.player)) &&
        i - counter * 8 >= 0
      ) {
        array[i - counter * 8] = true;

        if (this.isEnemy(i - counter * 8, selected.player)) {
          break;
        }

        counter++;
      }
    } catch (e) {
      console.log(e);
    }

    return array;
  }

  downOptions(array, selected, i) {
    try {
      let counter = 1;

      while (
        (this.state.board[i + counter * 8] == null ||
          this.isEnemy(i + counter * 8, selected.player)) &&
        i + counter * 8 <= 63
      ) {
        array[i + counter * 8] = true;

        if (this.isEnemy(i + counter * 8, selected.player)) {
          break;
        }

        counter++;
      }
    } catch (e) {
      console.log(e);
    }

    return array;
  }

  leftOptions(array, selected, i) {
    try {
      let counter = 1;

      while (
        (i - counter) % 8 !== 7 &&
        (this.state.board[i - counter] == null ||
          this.isEnemy(i - counter, selected.player)) &&
        i - counter >= 0
      ) {
        array[i - counter] = true;

        if (this.isEnemy(i - counter, selected.player)) {
          break;
        }

        counter++;
      }
    } catch (e) {
      console.log(e);
    }

    return array;
  }

  rightOptions(array, selected, i) {
    try {
      let counter = 1;

      while (
        (i + counter) % 8 !== 0 &&
        (this.state.board[i + counter] == null ||
          this.isEnemy(i + counter, selected.player)) &&
        i + counter <= 63
      ) {
        array[i + counter] = true;

        if (this.isEnemy(i + counter, selected.player)) {
          break;
        }

        counter++;
      }
    } catch (e) {
      console.log(e);
    }

    return array;
  }

  upRightOptions(array, selected, i) {
    //
  }

  rookOptions(array, selected, i) {
    array = this.upOptions(array, selected, i);
    array = this.downOptions(array, selected, i);
    array = this.leftOptions(array, selected, i);
    array = this.rightOptions(array, selected, i);

    return array;
  }

  bishopOptions(array, selected, i) {
    array = this.upRightOptions(array, selected, i);

    return array;
  }

  render() {
    return (
      <div>
        <div className="page-wrapper">
          <div className="game-container">
            <Board
              pieces={this.state.board}
              highlights={this.state.highlights}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <Captures captures={this.state.capturedByWhite} player="white" />
          <Captures captures={this.state.capturedByBlack} player="black" />
        </div>
      </div>
    );
  }
}

class Board extends Component {
  renderBoard() {
    const rows = [];

    let dark = false;

    for (let i = 0; i < 8; i++) {
      let row = [];

      for (let j = 0; j < 8; j++) {
        row.push(this.renderCircle(8 * i + j, dark));
        dark = !dark;
      }

      dark = !dark;
      rows.push(<div className="board-row">{row}</div>);
    }

    return <div>{rows}</div>;
  }

  renderCircle(i, dark) {
    return (
      <Circle
        piece={this.props.pieces[i]}
        dark={dark}
        active={this.props.highlights[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return <div>{this.renderBoard()}</div>;
  }
}

function Circle(props) {
  let cssClasses = "circle";

  if (props.dark) {
    cssClasses += " dark";
  }

  if (props.active) {
    cssClasses += " valid";
  }

  return (
    <button className={cssClasses} onClick={props.onClick}>
      {props.piece ? props.piece.symbol : ""}
    </button>
  );
}

export default Game;
