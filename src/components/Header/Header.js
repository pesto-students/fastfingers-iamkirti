import React from "react";

import gamepadImage from "../../assets/gamepad.png";
import UserImage from "../../assets/user.png";
import "./Header.css";
function Header({ name, difficultyfactor }) {
  return (
    <div className="wrapper">
      <div className="name">
        <div className="userrinfo">
          <img src={UserImage} alt="user logo" />
          <p>{name}</p>
        </div>
        <div className="right">
          <p>fast fingers</p>
        </div>
      </div>
      <div className="name">
        <div className="userrinfol">
          <img src={gamepadImage} alt="gamepadImage logo" />
          <p>LEVEL: {difficultyfactor}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
