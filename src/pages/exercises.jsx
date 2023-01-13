import { faTentArrowLeftRight } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SideBar from "../componenets/sidebar";
import { useState } from "react";


class Exercisepg extends Component {
  constructor(props) {
    super(props)
    this.state = {
    inHomepage: true
    };
  }

  render() {
    return (
      <div>
        <div>
          <SideBar inHomepage = {this.state.inHomepage} />
        </div>
      </div>
    );
  }
}

export default Exercisepg;
