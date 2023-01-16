import React, { Component } from "react";
import ReactDOM from "react-dom";
import SideBar from "../componenets/sidebar";
import "./style/home.css";
import Feed from "../componenets/feedback";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class Homepg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inHomepage: true,
    };
  }
  render() {
    return (
      <div className="hmdiv">
        <div className="frsc">
          <span className="frsctx1">Your</span>
          <span className="frsctx2">fitness</span>
          <span className="frsctx3">journry</span>
          <span className="frsctx4">made</span>
          <span className="frsctx5">easier</span>
        </div>
        <div className="glpgbtn">
          <img className="glimg" src="https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&w=600"/>
          <h4 className="gltx">Help us Improve your fitness by telling us what goals you want</h4>
          <h4 className="gltx">to reach</h4>
          <button type="button" className="glbtn">Set your goals</button>
        </div>
        
        <div>
          
          <SideBar inHomepage={this.state.inHomepage} />
        </div>
      </div>
    );
  }
}

export default Homepg;
