import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./Home.css";
import CountDown from "../CountDown/CountDown";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
function Home(props) {
  console.log("props", props);
  const [timeLimit, setTimeLimit] = useState(60);
  useEffect(() => {
    // Update the document title using the browser API

    console.log("useeffect");
    window.sessionStorage.setItem(
      "user",
      JSON.stringify(props.location.state.name)
    );
    window.sessionStorage.setItem(
      "level",
      JSON.stringify(props.location.state.level)
    );
    console.log(props.location.state.name);
    console.log(sessionStorage.getItem("user"));
  });
  const handleTimerEnd = () => {};

  const handleStartAgain = () => {
    console.log("test");
    setTimeLimit(60);
  };
  return (
    <div className="header-container">
      <Header
        name={props.location.state.name}
        level={props.location.state.level}
      />
      <MainPage level={props.location.state.level} />
      {/* 
      <CountDown timeLimit={timeLimit} handleTimerEnd={handleTimerEnd} />

      <button onClick={handleStartAgain}>Start Again</button> */}
    </div>
  );
}

export default Home;
