import React from "react";
import Square from "./Square";
import Strike from "./Strike";

const Board = ({ fillSquare, handleClick, playerTurn, strike }) => {
  return (
    <div className="board">
      <Square
        onClick={() => handleClick(0)}
        value={fillSquare[0]}
        playerTurn={playerTurn}
        className="right-border bottom-border"
      />
      <Square
        onClick={() => handleClick(1)}
        value={fillSquare[1]}
        playerTurn={playerTurn}
        className="right-border bottom-border"
      />
      <Square
        onClick={() => handleClick(2)}
        value={fillSquare[2]}
        playerTurn={playerTurn}
        className=" bottom-border"
      />
      <Square
        onClick={() => handleClick(3)}
        value={fillSquare[3]}
        playerTurn={playerTurn}
        className="right-border bottom-border"
      />
      <Square
        onClick={() => handleClick(4)}
        value={fillSquare[4]}
        playerTurn={playerTurn}
        className="right-border bottom-border"
      />
      <Square
        onClick={() => handleClick(5)}
        value={fillSquare[5]}
        playerTurn={playerTurn}
        className=" bottom-border"
      />
      <Square
        onClick={() => handleClick(6)}
        value={fillSquare[6]}
        playerTurn={playerTurn}
        className="right-border "
      />
      <Square
        onClick={() => handleClick(7)}
        value={fillSquare[7]}
        playerTurn={playerTurn}
        className="right-border "
      />
      <Square
        onClick={() => handleClick(8)}
        value={fillSquare[8]}
        playerTurn={playerTurn}
      />
      <Strike strikeClass={strike} />
    </div>
  );
};

export default Board;
