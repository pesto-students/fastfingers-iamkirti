import React, { useEffect, useState } from "react";

import "./Home.css";

import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
function Home(props) {
  const [diffleveltext, setDiffleveltext] = useState("");
  // useEffect(() => {
  window.sessionStorage.setItem(
    "user",
    JSON.stringify(props.location.state.name)
  );
  window.sessionStorage.setItem(
    "level",
    JSON.stringify(props.location.state.difficultyfactor)
  );
  window.sessionStorage.setItem("startTime", Date.now());
  // });

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
      />
      <MainPage level={props.location.state.difficultyfactor} />
    </div>
  );
}

export default Home;
