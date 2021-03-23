import React, { useState, useEffect } from "react";
import Input from "../Input/Input";
import data from "../data/dictionary.json";
import "./Spellings.css";

function Spellings({ lev }) {
  const [color, setColor] = useState("white");
  var randomNumber = Math.floor(Math.random() * data.length);
  const easyWords = [];
  const mediumWords = [];
  const hardWords = [];

  for (let word of data) {
    if (word.length <= 4) {
      easyWords.push(word);
    } else if (word.length <= 8) {
      mediumWords.push(word);
    } else {
      hardWords.push(word);
    }
  }
  let randomNumbereasy = Math.floor(Math.random() * easyWords.length);
  let randomNumbermedium = Math.floor(Math.random() * mediumWords.length);
  let randomNumberdifficult = Math.floor(Math.random() * hardWords.length);
  let randomwordeasy = easyWords[randomNumbereasy];
  let randomwordmedium = easyWords[randomNumbermedium];
  let randomwordhard = easyWords[randomNumberdifficult];
  console.log("dictation", dictation);

  /* useEffect(() => {
    fetch("./dictionary.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log("kirtiiiiiii", myJson);
        setData(myJson);
      });
  }, []);
 */
  return (
    <div className="dictation-wrapper">
      <Input dictationword={dictation} />
    </div>
  );
}

export default Spellings;
