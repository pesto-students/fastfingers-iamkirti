import React, { useEffect, useState } from "react";

import "./Home.css";

import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
function Home(props) {
  console.log("props", props);
  const [gameScore, setGameScore] = useState(0);
  const [diffleveltext, setDiffleveltext] = useState("");
  useEffect(() => {
    window.sessionStorage.setItem(
      "user",
      JSON.stringify(props.location.state.name)
    );
    window.sessionStorage.setItem(
      "level",
      JSON.stringify(props.location.state.difficultyfactor)
    );
  });

  const scoreUpdation = (newScore) => {
    setGameScore(newScore);
  };
  useEffect(() => {
    switch (props.location.state.difficultyfactor) {
      case "1":
        window.sessionStorage.setItem("levelintext", "EASY");
        setDiffleveltext("EASY");
        break;
      case "1.5":
        window.sessionStorage.setItem("levelintext", "MEDIUM");
        setDiffleveltext("MEDIUM");
        break;
      default:
        window.sessionStorage.setItem("levelintext", "DIFFICULT");
        setDiffleveltext("DIFFICULT");
        break;
    }
  }, [props.location.state.difficultyfactor]);
  return (
    <div className="header-container">
      <Header
        name={props.location.state.name}
        difficultyfactor={diffleveltext}
        newScore={gameScore}
      />
      <MainPage
        level={props.location.state.difficultyfactor}
        updatingScore={scoreUpdation}
      />
    </div>
  );
}

export default Home;
