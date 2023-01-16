import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from "./style/sidebar.module.css";
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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Homepg from "../pages/home";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      inHomepage: this.props.inHomepage,
      inRecipepage: this.props.inRecipepage,
      inExercisepage: this.props.inExercisepage,
      inSettingpage: this.props.inSettingpage,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <div
        className={styles.container}
        style={{ width: this.state.isOpen ? "240px" : "45px" }}
      >
        <div
          className={styles.opbtn}
          style={{ width: this.state.isOpen ? "240px" : "45px" }}
          onClick={this.toggle}
        >
          <FontAwesomeIcon icon={faBars} className={styles.oplg} />
          <span
            className={styles.optx}
            style={{ display: this.state.isOpen ? "block" : "none" }}
          >
            SideBar
          </span>
        </div>

        <div
          className={styles.hmbtn}
          style={{
            width: this.state.isOpen ? "240px" : "45px",
            opacity: this.state.isOpen ? "0.5" : "1",
            boxShadow: this.state.inHomepage
              ? " inset -1px 0px 1px 2px red"
              : "0px 0px 0px 0px red",
          }}
        >
          <FontAwesomeIcon icon={faHouse} className={styles.hmlg} />
          <span
            className={styles.hmtx}
            style={{
              display: this.state.isOpen ? "block" : "none",
              opacity: this.state.isOpen ? "0.5" : "0",
            }}
          >
            Home
          </span>
        </div>

        <div
          className={styles.srch}
          style={{ width: this.state.isOpen ? "240px" : "45px" }}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles.srchlg}
            style={{ opacity: this.state.isOpen ? "0.5" : "1" }}
          />
          <input
            className={styles.srchinpt}
            placeholder="Search"
            style={{ display: this.state.isOpen ? "block" : "none" }}
          />
        </div>

        <div
          className={styles.exerbtn}
          style={{
            width: this.state.isOpen ? "240px" : "45px",
            opacity: this.state.isOpen ? "0.5" : "1",
            boxShadow: this.state.inExercisepage
              ? "inset -1px 0px 1px 2px red"
              : "0px 0px 0px 0px red",
          }}
        >
          <FontAwesomeIcon icon={faDumbbell} className={styles.exerlg} />
          <span
            className={styles.exertx}
            style={{ display: this.state.isOpen ? "block" : "none" }}
          >
            Exercises
          </span>
        </div>

        <div
          className={styles.rpsbtn}
          style={{
            width: this.state.isOpen ? "240px" : "45px",
            opacity: this.state.isOpen ? "0.5" : "1",
            boxShadow: this.state.inRecipepage
              ? "inset -1px 0px 1px 2px red"
              : "0px 0px 0px 0px red",
          }}
        >
          <FontAwesomeIcon icon={faBowlFood} className={styles.rpslg} />
          <span
            className={styles.rpstx}
            style={{ display: this.state.isOpen ? "block" : "none" }}
          >
            Recipes
          </span>
        </div>

        <div
          className={styles.stgbtn}
          style={{
            width: this.state.isOpen ? "240px" : "45px",
            opacity: this.state.isOpen ? "0.5" : "1",
            boxShadow: this.state.inSettingpage
              ? "inset -1px 0px 1px 2px red"
              : "0px 0px 0px 0px red",
          }}
        >
          <FontAwesomeIcon icon={faGear} className={styles.stglg} />
          <span
            className={styles.stgtx}
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
