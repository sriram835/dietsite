import { faTentArrowLeftRight } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SideBar from "../componenets/sidebar";
import { useState } from "react";


class Exercisepg extends Component {
  constructor(props) {
    super(props)
    this.state = {
    inExercisepage: true
    };
  }

  render() {
    return (
      <div>
        <div>
          <h1 style={{position: "relative", left: "50px"}}>This is Exercise page</h1>
        </div>
        <div>
          <SideBar inExercisepage = {this.state.inExercisepage} />
        </div>
      </div>
    );
  }
}

export default Exercisepg;
