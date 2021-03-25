import React, { Component } from "react";

import "./Login.css";

import KeyboardImage from "../../assets/keyboard123.png";
import PlayButton from "../../assets/play.png";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      level: "EASY",
    };
  }

  onNavigationHome = () => {
    window.sessionStorage.setItem("startTime", Date.now());

    this.props.history.push("/home", {
      name: this.state.name,
      level: this.state.level,
    });
  };
  handleNameChange = (e) => {
    const { target: { value } = {} } = e;
    this.setState({ name: value });
  };
  handleLevelChange = (e) => {
    const { target: { value } = {} } = e;
    this.setState({ level: value });
  };
  handleFormSubmit = async (e) => {
    e.preventDefault();
    window.sessionStorage.setItem("startTime", Date.now());
  };
  componentDidUpdate() {}
  render() {
    const { name, level } = this.state;

    return (
      <div className="container">
        <img src={KeyboardImage} alt="keyboard logo" />
        <p className="heading">fast fingers</p>
        <p className="game-desc">
          ------------ the ultimate typing game -----------{" "}
        </p>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="name"
            id="name-input"
            placeholder="TYPE YOUR NAME"
            required
            value={name}
            onChange={this.handleNameChange}
          />
          <select value={level} onChange={this.handleLevelChange}>
            <option value="EASY">EASY</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HARD">HARD</option>
          </select>
          <div className="start" onClick={this.onNavigationHome}>
            <img src={PlayButton} alt="play" />
            <p>START GAME</p>{" "}
          </div>
        </form>
      </div>
    );
  }
}
