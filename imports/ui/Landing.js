import React, { Component } from "react";
import "./landing.css";
import { Link } from "react-router-dom";

export default class Landing extends Component {
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
        <h2 style = {{color: "#c0c0c0",position: "absolute", fontSize: "30px"}} >
          Welcome to <strong>PROPERTY WATCH</strong>. Click Welcome to get started!
        </h2>

        <h6 id="btn">
          <span>
            <Link
              to="/user"
              style={{ textDecoration: "none", color: "limegreen" }}
            >
              WELCOME
            </Link>
          </span>
        </h6>
      </div>
      </div>
    );
  }
}
