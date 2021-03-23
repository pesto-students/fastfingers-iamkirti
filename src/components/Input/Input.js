import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Spellings from "../Spellings/Spellings";
import { words } from "./utils";
import "./Input.css";
function Input({ dictationword }) {
  const [userinput, setUserinput] = useState("");

  const handleDictationChange = (e) => {
    const { target: { value } = {} } = e;
    console.log("value", value);
    console.log("dictationword", dictationword);
    setUserinput(value);
    for (const i of dictationword) {
      console.log("i in distationwoerd", i);
      if (value === i) {
        console.log("matches");
      }
    }
    if (value === dictationword) {
      console.log("hi there");

      setUserinput("");
    }
  };
  return (
    <div className="answer">
      <input
        type="text"
        name="name"
        value={userinput}
        onChange={handleDictationChange}
      />
    </div>
  );
}

export default Input;
