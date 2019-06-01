import React, { Component } from "react";
import "./landing.css";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  myFunction() {
    console.log("pressed");
    var x = document.getElementsByClassName("container");
    if (x.className === "pullUpDown") {
      x += "responsive";
    } else {
      x = "container";
    }
  }
  render() {
    
    return (
     
      <div>
              <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h2
            style={{
              color: "#c0c0c0",
              position: "absolute",
              fontSize: "30px",
              marginLeft: "9px"
            }}
          >
            Welcome to <strong>PROPERTY WATCH</strong>. Click Welcome to get
            started!
          </h2>

          <h6 id="btn">
            <Link
              to="/user"
              style={{ textDecoration: "none", color: "limegreen" }}
            >
              WELCOME
            </Link>
          </h6>
        </div>
      </div>
    );
  }
}
