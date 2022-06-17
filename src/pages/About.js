import React, { Component } from "react";
import "./About.css";
import Nathan from "../assets/Nathan.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={Nathan}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Your Name</div>
            <div className="brief_description">
              <p>
                I'm a rising junior at the University of Central Florida pursuing a BS in computer science. I took my first programming class
                 in ninth grade and I've loved the subject ever since. My goal is to become a distinguished front end developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
