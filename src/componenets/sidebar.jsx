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

const SideBar = () => {
  const [isOpen, setIsopen] = useState(false);
  const toggle = () => setIsopen(!isOpen);
  return (
    <div className="container" style={{width: isOpen ? "240px" : "45px"}}>
      <div className="opbtn" onClick={toggle} style={{width: isOpen ? "240px" : "45px"}}>
        <FontAwesomeIcon icon={faBars} className="oplg" />
        <span className="optx" style={{display: isOpen ? "block" : "none"}}>SideBar</span>
      </div>

      <div className="hmbtn" style={{width: isOpen ? "240px" : "45px" , opacity: isOpen ? "0.5" : "1"}}>
        <FontAwesomeIcon icon={faHouse} className="hmlg" />
        <span className="hmtx" style={{display: isOpen ? "block" : "none"}}>Home</span>
      </div>

      <div className="srch" style={{width: isOpen ? "240px" : "45px"}}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="srchlg" style={{opacity: isOpen ? "0.5" : "1"}}/>
        <input className="srchinpt" placeholder="Search" style={{display: isOpen ? "block" : "none"}} />
      </div>

      <div className="exerbtn" style={{width: isOpen ? "240px" : "45px", opacity: isOpen ? "0.5" : "1"}}>
        <FontAwesomeIcon icon={faDumbbell} className="exerlg" />
        <span className="exertx" style={{display: isOpen ? "block" : "none"}}>Exercises</span>
      </div>

      <div className="rpsbtn" style={{width: isOpen ? "240px" : "45px", opacity: isOpen ? "0.5" : "1"}}>
        <FontAwesomeIcon icon={faBowlFood} className="rpslg" />
        <span className="rpstx" style={{display: isOpen ? "block" : "none"}}>Recipes</span>
      </div>

      <div className="stgbtn" style={{width: isOpen ? "240px" : "45px", opacity: isOpen ? "0.5" : "1"}}>
        <FontAwesomeIcon icon={faGear} className="stglg" />
        <span className="stgtx" style={{display: isOpen ? "block" : "none"}}>Settings</span>
      </div>
    </div>
  );
};

export default SideBar;
