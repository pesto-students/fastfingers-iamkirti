import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import "./ScoreBoard.css";
function ScoreBoard({ name, level }) {
  return (
    <div className="score-board">
      {" "}
      <p>SCORE BOARD</p>
    </div>
  );
}

export default ScoreBoard;
