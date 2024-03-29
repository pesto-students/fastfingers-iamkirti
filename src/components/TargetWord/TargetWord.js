import React from "react";
import "./TargetWord.css";
export default function TargetWord({ targetWord, userInput }) {
  let content = targetWord.split("").map((ch, i) => {
    if (userInput[i] && ch.toLowerCase() === userInput[i].toLowerCase()) {
      return (
        <span style={{ color: "green" }} key={i}>
          {ch}
        </span>
      );
    } else if (userInput[i]) {
      return (
        <span style={{ color: "blue" }} key={i}>
          {ch}
        </span>
      );
    } else {
      return (
        <span style={{ color: "white" }} key={i}>
          {ch}
        </span>
      );
    }
  });
  return <p>{content}</p>;
}
