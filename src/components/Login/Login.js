import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./Login.css";
import Home from "../Home/Home";
import KeyboardImage from "../../assets/keyboard123.png";
import PlayButton from "../../assets/play.png";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      level: "",
    };
  }

  onNavigationHome = () => {
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
  };
  componentDidUpdate() {
    /* window.sessionStorage.setItem(
      "userloggedin",
      JSON.stringify(this.state.name)
    );
    console.log(this.state.name);
    console.log(sessionStorage.getItem("userloggedin")); */
  }
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
            <option>DIFFICULTY LEVEL</option>
            <option value="easy">EASY</option>
            <option value="medium">MEDIUM</option>
            <option value="hard">HARD</option>
          </select>
          <div className="start">
            <img src={PlayButton} alt="play" onClick={this.onNavigationHome} />
            <p>START GAME</p>{" "}
          </div>
        </form>
      </div>
    );
  }
}
