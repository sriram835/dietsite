import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faBowlFood,
  faDumbbell,
  faMagnifyingGlass,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      inHomepage: this.props.inHomepage,
      inRecipepage: false,
      inExercisepage: false,
      inSettingpage: false,
    };
    
  }

  updateState = (value) => {
    
  }

  toggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <div
        className="container"
        style={{ width: this.state.isOpen ? "240px" : "45px" }}
      >
        <div
          className="opbtn"
          style={{ width: this.state.isOpen ? "240px" : "45px" }}
          onClick={this.toggle}
        >
          <FontAwesomeIcon icon={faBars} className="oplg" />
          <span
            className="optx"
            style={{ display: this.state.isOpen ? "block" : "none" }}
          >
            SideBar
          </span>
        </div>

        <div
          className="hmbtn"
          style={{
            width: this.state.isOpen ? "240px" : "45px",
            opacity: this.state.isOpen ? "0.5" : "1",
            boxShadow: this.state.inHomepage
              ? " inset -1px 0px 1px 2px red"
              : "0px 0px 0px 0px red",
          }}
        >
          <FontAwesomeIcon icon={faHouse} className="hmlg" />
          <span
            className="hmtx"
            style={{ display: this.state.isOpen ? "block" : "none" }}
          >
            Home
          </span>
        </div>

        <div
          className="srch"
          style={{ width: this.state.isOpen ? "240px" : "45px" }}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="srchlg"
            style={{ opacity: this.state.isOpen ? "0.5" : "1" }}
          />
          <input
            className="srchinpt"
            placeholder="Search"
            style={{ display: this.state.isOpen ? "block" : "none" }}
          />
        </div>

        <div
          className="exerbtn"
          style={{
            width: this.state.isOpen ? "240px" : "45px",
            opacity: this.state.isOpen ? "0.5" : "1",
            boxShadow: this.state.inExercisepage
              ? "inset -1px 0px 1px 2px red"
              : "0px 0px 0px 0px red",
          }}
        >
          <FontAwesomeIcon icon={faDumbbell} className="exerlg" />
          <span
            className="exertx"
            style={{ display: this.state.isOpen ? "block" : "none" }}
          >
            Exercises
          </span>
        </div>

        <div
          className="rpsbtn"
          style={{
            width: this.state.isOpen ? "240px" : "45px",
            opacity: this.state.isOpen ? "0.5" : "1",
            boxShadow: this.state.inRecipepage
              ? "inset -1px 0px 1px 2px red"
              : "0px 0px 0px 0px red",
          }}
        >
          <FontAwesomeIcon icon={faBowlFood} className="rpslg" />
          <span
            className="rpstx"
            style={{ display: this.state.isOpen ? "block" : "none" }}
          >
            Recipes
          </span>
        </div>

        <div
          className="stgbtn"
          style={{
            width: this.state.isOpen ? "240px" : "45px",
            opacity: this.state.isOpen ? "0.5" : "1",
            boxShadow: this.state.inSettingpage
              ? "inset -1px 0px 1px 2px red"
              : "0px 0px 0px 0px red",
          }}
        >
          <FontAwesomeIcon icon={faGear} className="stglg" />
          <span
            className="stgtx"
            style={{ display: this.state.isOpen ? "block" : "none" }}
          >
            Settings
          </span>
        </div>
      </div>
    );
  }
}

export default SideBar;
