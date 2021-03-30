import React, { useState } from "react";
import StopImage from "../../assets/stop.png";
import "./ScoreBoard.css";

function ScoreBoard({ handleGameEnd, gameResultsare }) {
  const [greatest, setgreatest] = useState(-1);

  for (const i in gameResultsare) {
    if (greatest < gameResultsare[i].timeelapsedinmillisec) {
      setgreatest(gameResultsare[i].timeelapsedinmillisec);
    }
  }

  const content = gameResultsare.map(
    ({ gameNumber, formattime1, timeelapsedinmillisec }) => {
      return (
        <div key={gameNumber} className="score-board-items">
          {timeelapsedinmillisec === greatest ? (
            <p className="best" style={{ color: "#ff5155", fontSize: "11px" }}>
              PERSONAL BEST
            </p>
          ) : (
            ""
          )}
          <p>
            Game {gameNumber} : {formattime1}
          </p>
        </div>
      );
    }
  );
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
