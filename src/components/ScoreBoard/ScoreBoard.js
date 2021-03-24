import React from "react";
import StopImage from "../../assets/stop.png";
import "./ScoreBoard.css";
function ScoreBoard({ name, level }) {
  return (
    <div className="score-n-stop">
      {" "}
      <p className="score-board">SCORE BOARD</p>
      <div className="stop-game">
        <img src={StopImage} alt="keyboard logo" />
        <p>STOP GAME</p>
      </div>
    </div>
  );
}

export default ScoreBoard;
