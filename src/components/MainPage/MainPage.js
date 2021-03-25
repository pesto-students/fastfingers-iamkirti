import React, { useState, useEffect } from "react";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import CountDown from "../CountDown/CountDown";
import { middleword, easyword, hardword, formatTime } from "../utils";
import TargetWord from "../TargetWord/TargetWord";
import ReloadImage from "../../assets/reload.png";
import "./MainPage.css";

function MainPage({ level }) {
  const [userinput, setUserinput] = useState("");
  const [randomword, setRandomword] = useState("");

  const [difficultyFactor, setDifficultyFactor] = useState(
    sessionStorage.getItem("levelinnum")
  );
  const [timerValues, setTimerValues] = useState("");
  const [gameResults, setGameResults] = useState([]);
  const [gameScore, setGameScore] = useState(0);
  const [gameNumber, setGameNumber] = useState(1);
  const [gameover, setGameover] = useState(true);

  useEffect(() => {
    getDictionaryWord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let a;

  const getDictionaryWord = () => {
    setDifficultyFactor(sessionStorage.getItem("levelinnum"));
    if (difficultyFactor >= 1.5 && difficultyFactor < 2) {
      a = middleword();
      setRandomword(a);
    }
    if (difficultyFactor < 1.5) {
      a = easyword();
      setRandomword(a);
    }
    if (difficultyFactor >= 2) {
      a = hardword();
      setRandomword(a);
    }

    let timerValue = Math.ceil((a.length / difficultyFactor) * 1000);
    setTimerValues(timerValue >= 2000 ? timerValue : 2000);
  };

  const onUserInputChange = (e) => {
    const { target: { value } = {} } = e;
    setUserinput(value);
    if (value === randomword) {
      setDifficultyFactor(1.01 * difficultyFactor);
      getDictionaryWord();

      setUserinput("");
    }
  };

  const onGameEnd = () => {
    if (gameResults.length > 7) {
      gameResults.shift();
    }

    const timeelapsedinmillisec =
      Date.now() - sessionStorage.getItem("startTime");
    const timeinsec = timeelapsedinmillisec / 1000;

    const formattime = formatTime(timeinsec, "mm:ss");

    setGameScore(formattime);
    setGameNumber(gameNumber + 1);
    setGameResults([...gameResults, { gameNumber, formattime }]);
    setGameover(false);
  };
  const onPlayAgain = () => {
    setGameover(true);
  };
  return gameover ? (
    <div className="main-wrapper">
      <ScoreBoard handleGameEnd={onGameEnd} gameResultsare={gameResults} />
      <div className="content-wrapper">
        <div className="dictation-wrapper">
          <CountDown
            timeLimit={timerValues}
            handleGameEnd={onGameEnd}
            targetWord={randomword}
          />

          <TargetWord targetWord={randomword} userInput={userinput} />

          <input
            type="text"
            name="name"
            value={userinput}
            onChange={onUserInputChange}
          />
        </div>
      </div>
    </div>
  ) : (
    <div>
      <p className="game-score">SCORE:GAME {gameNumber}</p>
      <p className="time-elapsed">{gameScore}</p>
      <div className="play-again" onClick={onPlayAgain}>
        <img src={ReloadImage} alt="keyboard logo" />
        <p> PLAY AGAIN</p>
      </div>
    </div>
  );
}

export default MainPage;
