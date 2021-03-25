import React, { useState, useEffect } from "react";
import ProtoTypes from "prop-types";
import "./CountDown.scss";
const FULL_DASH_ARRAY = 283;
let timePassed = 0;
let timeout = "";

export default function CountDown({ timeLimit, handleGameEnd, targetWord }) {
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [stroke, setStroke] = useState("283 283");
  const [timerClasses, setTimerClasses] = useState(
    "base-timer__path-remaining info"
  );

  const changeTimerColour = () => {
    if ((timeLeft / timeLimit) * 100 > 50) {
      setTimerClasses("base-timer__path-remaining info");
    } else if ((timeLeft / timeLimit) * 100 > 30) {
      setTimerClasses("base-timer__path-remaining warning");
    } else {
      setTimerClasses("base-timer__path-remaining alert");
    }
  };

  useEffect(() => {
    timePassed = 0;
    setTimeLeft(timeLimit);
  }, [timeLimit]);

  useEffect(() => {
    timeout = setInterval(() => {
      if (timeLeft > 0) {
        //update timer
        timePassed += 100;
        setTimeLeft(timeLimit - timePassed);

        //update stroke
        const strokeValue =
          calculateTimeFraction(timeLeft, timeLimit) * FULL_DASH_ARRAY;
        setStroke(`${strokeValue} 283`);
      } else if (timeLeft <= 0) {
        handleGameEnd();
        clearInterval(timeout);
      }
      changeTimerColour();
    }, 100);

    return () => {
      clearInterval(timeout);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  return (
    <div className="base-timer">
      <svg
        className="base-timer__svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="base-timer__circle">
          <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
          <path
            id="base-timer-path-remaining"
            strokeDasharray={stroke}
            className={timerClasses}
            d="
                            M 50, 50
                            m -45, 0
                            a 45,45 0 1,0 90,0
                            a 45,45 0 1,0 -90,0
                            "
          ></path>
        </g>
      </svg>
      {timeLeft !== -1 ? (
        <span className="base-timer__label">{formatTime(timeLeft)}</span>
      ) : (
        ""
      )}
    </div>
  );
}

CountDown.protoTypes = {
  timeLimit: ProtoTypes.number.isRequired,
  handleGameEnd: ProtoTypes.func.isRequired,
};

function calculateTimeFraction(timeLeft, timeLimit) {
  const rawTimeFraction = timeLeft / timeLimit;
  return rawTimeFraction - (1 / timeLimit) * (1 - rawTimeFraction);
}

export function formatTime(time) {
  let seconds = Math.floor(time / 1000);
  let miliseconds = (time % 1000) / 10;
  return `${seconds < 10 ? `0${seconds}` : seconds}:${
    miliseconds < 10 ? `0${miliseconds}` : miliseconds
  }`;
}
