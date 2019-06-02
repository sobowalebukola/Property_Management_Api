import React, { Component } from "react";
import "./session.css";
import { Link } from "react-router-dom";

export default class userDisplay extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout(e){
    e.preventDefault();
    Meteor.logout( (err) => {
        if (err) {
            console.log( err.reason );
        } else {
            this.props.history.push('/login');
        }
    });
  }
  render(){
  return (
    <div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-body">
            <p style={{ marginBottom: "100px", marginTop: "20px", justifyContent: "center", color: "#c0c0c0" }}>
              WELCOME BACK <strong style = {{fontSize: "25px", fontFamily: "verdana"}}>{Meteor.user().username}</strong> <span style = {{fontSize: "20px"}}>😀</span>
            </p>
            <button type = "button" className = "btn btn-danger" onClick = {this.logout} style = {{float: "center"}}>LogOut</button>
            <div style = {{ position: "absolute", bottom: "20px", }}>
            <button type="button" className="btn btn-info" style = {{ marginRight: "10px"}}>
              {" "}
              <Link
                to="/properties"
                style={{ textDecoration: "none" }}
              >
                Properties
              </Link>
            </button>

            <button type="button" className="btn btn-info">
              {" "}
              <Link
                to="/registerProperty"
                style={{ textDecoration: "none" }}
              >
                Add property
              </Link>
            </button>
            </div>
          </div>
          <div className="modal-footer" />
        </div>
      </div>
    </div>
  );
  }
};

