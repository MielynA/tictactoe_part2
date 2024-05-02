import React, { useState, useEffect } from "react";
import Board from "./Board";

const PLAYERX = "X";
const PLAYER0 = "0";
const players = [PLAYER0, PLAYERX];
const randomPlayer = players[Math.floor(Math.random() * players.length)];

const winningCombo = [
  //rows
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },
  //columns
  { combo: [0, 3, 6], strikeClass: "strike-column-1" },
  { combo: [1, 4, 7], strikeClass: "strike-column-2" },
  { combo: [2, 5, 6], strikeClass: "strike-column-3" },
  //diagonal
  { combo: [0, 4, 6], strikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

const checkWinners = (fillSquare, setStrikeClass) => {
  for (const { combo, strikeClass } of winningCombo) {
    const squareValue1 = fillSquare[combo[0]]; // fillSquare[0]
    const squareValue2 = fillSquare[combo[1]]; // fillSquare[1]
    const squareValue3 = fillSquare[combo[2]]; // fillSquare[2] ex: fillSquare ['x', 'x', 'x', null, null, null, 'o','o']
    if (
      squareValue1 !== null &&
      squareValue1 === squareValue2 &&
      squareValue1 === squareValue3
    ) {
      setStrikeClass(strikeClass);
    }
  }
  console.log("winner");
};

const TicTacToe = () => {
  const [fillSquare, setfillSquare] = useState(Array(9).fill(null)); //to determine which index to fix
  const [playerTurn, setPlayerTurn] = useState(randomPlayer); //setting the player x or o
  const [strikeClass, setStrikeClass] = useState();

  const handleClick = (index) => {
    if (fillSquare[index] != null) {
      return;
    }
    const newSquare = [...fillSquare];
    newSquare[index] = playerTurn;
    setfillSquare(newSquare);
    if (playerTurn === PLAYERX) {
      setPlayerTurn(PLAYER0);
    } else {
      setPlayerTurn(PLAYERX);
    }
  };

  useEffect(() => {
    checkWinners(fillSquare, setStrikeClass);
  }, [fillSquare]);

  return (
    <div className="App">
      <h1> Tic Tac Toe </h1>
      <Board
        handleClick={handleClick}
        fillSquare={fillSquare}
        playerTurn={playerTurn}
        strike={strikeClass}
      />
    </div>
  );
};

export default TicTacToe;
