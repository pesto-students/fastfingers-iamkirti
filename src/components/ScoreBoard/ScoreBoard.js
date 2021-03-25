import React from "react";
import StopImage from "../../assets/stop.png";
import "./ScoreBoard.css";
import { formatTime } from "../utils";

function ScoreBoard({ handleGameEnd, gameResultsare }) {
  const content = gameResultsare.map(({ gameNumber, timePassed }) => {
    return (
      <div key={gameNumber} className="score-board-items">
        <p>
          Game {gameNumber} : {timePassed}
        </p>
      </div>
    );
  });
  return (
    <div className="score-n-stop">
      <div className="score-board">
        <p>SCORE BOARD</p>
        {content}
      </div>

      <div className="stop-game" onClick={handleGameEnd}>
        <img src={StopImage} alt="keyboard logo" />
        <p>STOP GAME</p>
      </div>
    </div>
  );
}

export default ScoreBoard;
