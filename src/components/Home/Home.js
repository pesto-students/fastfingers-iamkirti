import React, { useEffect } from "react";

import "./Home.css";

import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
function Home(props) {
  console.log("props", props);

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

  return (
    <div className="header-container">
      <Header
        name={props.location.state.name}
        level={props.location.state.level}
      />
      <MainPage level={props.location.state.level} />
    </div>
  );
}

export default Home;
