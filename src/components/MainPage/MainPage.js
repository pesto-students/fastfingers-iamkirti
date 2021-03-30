import React, { useState, useEffect } from "react";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import CountDown from "../CountDown/CountDown";
import { middleword, easyword, hardword, formatTime } from "../utils";
import TargetWord from "../TargetWord/TargetWord";
import ReloadImage from "../../assets/reload.png";
import "./MainPage.css";
import { useHistory } from "react-router-dom";
import LiveScore from "../LiveScore/LiveScore";

function MainPage({ level, updatingScore }) {
  const [userinput, setUserinput] = useState("");
  const [randomword, setRandomword] = useState("");
  const [difficultyFactor, setDifficultyFactor] = useState(level);
  const [timerValues, setTimerValues] = useState("");
  const [gameResults, setGameResults] = useState([]);
  const [gameScore, setGameScore] = useState(0);
  const [gameNumber, setGameNumber] = useState(1);
  const [formattime, setformattime] = useState(0);
  const [gameover, setGameover] = useState(true);
  const history = useHistory();

  useEffect(() => {
    getDictionaryWord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let a;

  const getDictionaryWord = () => {
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
  const handleQuitGame = () => {
    history.push("/login");
  };

  const onGameEnd = () => {
    if (gameResults.length > 7) {
      gameResults.shift();
    }

    const timeelapsedinmillisec =
      Date.now() - window.sessionStorage.getItem("startTime");

    const formattime1 = formatTime(timeelapsedinmillisec, "mm:ss");

    setformattime(formattime1);
    setGameScore(formattime1);

    setGameResults([
      ...gameResults,
      { gameNumber, timeelapsedinmillisec, formattime1 },
    ]);
    setGameNumber(gameNumber + 1);
    setGameover(false);
  };

  const onPlayAgain = () => {
    window.sessionStorage.setItem("startTime", Date.now());
    setGameover(true);
  };
  return gameover ? (
    <div className="main-wrapper">
      <div
        className="right"
        style={{ position: "absolute", right: "170px", top: "130px" }}
      >
        <LiveScore isGameOver={gameover} />
      </div>

      <ScoreBoard handleGameEnd={onGameEnd} gameResultsare={gameResults} />
      <div className="content-wrapper">
        <div className="dictation-wrapper">
          <CountDown
            key={randomword}
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
      <p className="game-score">SCORE:GAME {gameNumber - 1}</p>

      <p className="time-elapsed">{gameScore}</p>
      <div className="play-again" onClick={onPlayAgain}>
        <img src={ReloadImage} alt="keyboard logo" />
        <p> PLAY AGAIN</p>
      </div>
      <div className="quit" onClick={handleQuitGame}>
        QUIT
      </div>
    </div>
  );
}

export default MainPage;
