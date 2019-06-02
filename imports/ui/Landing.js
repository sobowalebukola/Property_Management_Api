import React, { Component } from "react";
import "./landing.css";
import { Link, withRouter } from "react-router-dom";

export class Landing extends Component {
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
              marginLeft: "9px",
              margin: "0 auto"
            }}
          >
            Welcome to <strong>PROPERTY WATCH</strong>. Click Welcome to get
            started!
          </h2>

          <h6 id="btn" onClick = {()=>this.props.history.push('./user')} style = {{textDecoration: "none", color: "limegreen"}}>
              WELCOME
          </h6>
        </div>
      </div>
    );
  }
}

export default withRouter(Landing);