import React, { useState, useEffect } from "react";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import CountDown from "../CountDown/CountDown";
import { middleword, easyword, hardword } from "../utils";
import TargetWord from "../TargetWord/TargetWord";
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
  useEffect(() => {
    getDictionaryWord();
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

  const onGameEnd = () => {
    console.log("hi there in on game eng!!!!!");
  };

  return (
    <div className="main-wrapper">
      <ScoreBoard />
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
  );
}

export default MainPage;
