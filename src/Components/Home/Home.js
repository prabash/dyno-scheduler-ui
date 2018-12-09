import React, { Component } from "react";
import "./Home.css";

/* Components */
import MenuAppBar from "../MenuAppBar/MenuAppBar";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
      <MenuAppBar titleText= "Home"/>
        <main id="page-wrap">
          <h2>Hi, Prabash!</h2>
          <h1>Welcome to Dyno Scheduler </h1>
        </main>
      </div>
    );
  }
}
