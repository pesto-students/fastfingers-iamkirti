import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import CountDown from "../CountDown/CountDown";
import { middleword, easyword, hardword } from "../utils";
import TargetWord from "../TargetWord/TargetWord";
import "./MainPage.css";
function MainPage({ level }) {
  /* const [selectedWord, setselectedWord] = useState(0);
  const fetchword = (selectedWord) => {
    console.log("selected", selectedWord);
  }; */
  const [userinput, setUserinput] = useState("");
  const [randomword, setRandomword] = useState("");

  useEffect(() => {
    console.log("function called");
    if (level === "easy") {
      setRandomword(easyword());
    } else if (level === "medium") {
      setRandomword(middleword());
    } else {
      setRandomword(hardword());
    }
  }, []);

  console.log("random word firesyt", randomword);

  const onUserInputChange = (e) => {
    const { target: { value } = {} } = e;

    setUserinput(value);

    if (value === randomword) {
      if (level === "easy") {
        setRandomword(easyword());
      } else if (level === "medium") {
        setRandomword(middleword());
      } else {
        setRandomword(hardword());
      }
      console.log("random word", randomword);
      setUserinput("");
    }
  };

  return (
    <div className="main-wrapper">
      <ScoreBoard />
      <div className="content-wrapper">
        <CountDown />
        <div className="dictation-wrapper">
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
