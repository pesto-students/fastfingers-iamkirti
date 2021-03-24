import data from "../data/dictionary.json";

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

export const words = { easy: easyWords, medium: mediumWords, hard: hardWords };

export const easyword = () => {
  let randomNumbereasy = Math.floor(Math.random() * easyWords.length);
  let randomeasyword = easyWords[randomNumbereasy];
  return randomeasyword;
};
export const middleword = () => {
  let randomNumbermedium = Math.floor(Math.random() * mediumWords.length);
  let randommiddleword = mediumWords[randomNumbermedium];
  return randommiddleword;
};
export const hardword = () => {
  let randomNumberdifficult = Math.floor(Math.random() * hardWords.length);
  let randomhardword = hardWords[randomNumberdifficult];
  return randomhardword;
};
export function formatTime(time, format = "ss:ms") {
  let minutes = Math.floor(time / 1000 / 60);
  let seconds = Math.floor(time / 1000);
  let miliseconds = (time % 1000) / 10;

  if (seconds % 60 === 0) {
    seconds = 0;
  }
  if (seconds > 60) {
    seconds = Math.floor(seconds % 60);
  }

  if (format === "mm:ss") {
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  } else {
    return `${seconds < 10 ? `0${seconds}` : seconds}:${
      miliseconds < 10 ? `0${miliseconds}` : miliseconds
    }`;
  }
}
