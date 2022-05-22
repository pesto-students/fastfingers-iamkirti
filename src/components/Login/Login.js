import React, { Component } from "react";

import "./Login.css";

import KeyboardImage from "../../assets/keyboard123.png";
import PlayButton from "../../assets/play.png";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      difficultyfactor: "1",
      namemsgerror: "",
    };
  }

  onNavigationHome = () => {
    if (this.state.name === "") {
      console.log("emptyyyyy");
      this.setState({ namemsgerror: "Player name cannot be empty" });
    } else {
      console.log("time when game has started", Date.now());
      // window.sessionStorage.setItem("startTime", Date.now());
      this.props.history.push("/home", {
        name: this.state.name,
        difficultyfactor: this.state.difficultyfactor,
      });
    }
  };
  handleNameChange = (e) => {
    const { target: { value } = {} } = e;
    this.setState({ name: value });
  };
  handleLevelChange = (e) => {
    const { target: { value } = {} } = e;
    this.setState({ difficultyfactor: value });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
  };
  componentDidUpdate() {}
  render() {
    const { name } = this.state;

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
            value={name}
            onChange={this.handleNameChange}
            required
          />
          <p style={{ textAlign: "left" }}>{this.state.namemsgerror}</p>
          <select
            value={this.state.difficultyfactor}
            onChange={this.handleLevelChange}
          >
            <option value="1">EASY</option>
            <option value="1.5">MEDIUM</option>
            <option value="2">HARD</option>
          </select>
          <div
            className="start"
            onClick={this.onNavigationHome}
            cursor="pointer"
          >
            <img src={PlayButton} alt="play" />
            <p>START GAME</p>{" "}
          </div>
        </form>
      </div>
    );
  }
}
