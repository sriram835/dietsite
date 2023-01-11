import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../style/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faBowlFood,
  faDumbbell,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";


class SideBar extends Component {
  render() {
    return (
      <div>
        <h1 className="testdiv" id="testDiv" >
          Hi!
        </h1>
        <nav className="sbnav">
          <ul className="sbul">
            <li className="sbli">
              <a href="" className="sbamenu" >
                <FontAwesomeIcon icon={faBars} className="sblogo" />
                <span className="sbtext">Sidebar</span>
              </a>
            </li>
            <li className="sbli">
              <a href="" className="sbsa">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="sblogo"
                ></FontAwesomeIcon>
              </a>
              <input type="text" placeholder="search" className="sbinput" />
            </li>
            <li className="sbli">
              <a href="" className="sba">
                <FontAwesomeIcon
                  icon={faHouse}
                  className="sblogo"
                ></FontAwesomeIcon>
                <span className="sbtext">Home</span>
              </a>
            </li>
            <li className="sbli">
              <a href="" className="sba">
                <FontAwesomeIcon
                  icon={faDumbbell}
                  className="sblogo"
                ></FontAwesomeIcon>
                <span className="sbtext" style={{ paddingLeft: "37px" }}>
                  Exercises
                </span>
              </a>
            </li>
            <li className="sbli">
              <a href="" className="sba">
                <FontAwesomeIcon icon={faBowlFood} className="sblogo" />
                <span className="sbtext" style={{ paddingLeft: "42px" }}>
                  Recipes
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default SideBar;
