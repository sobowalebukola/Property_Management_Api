import React from "react";
import "./session.css";
import { Link } from "react-router-dom";

const userDisplay = props => {
  return (
    <div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-body">
            <p style={{ marginBottom: "100px", marginTop: "20px", justifyContent: "center", color: "#c0c0c0" }}>
              WELCOME BACK <strong style = {{fontSize: "25px", fontFamily: "verdana"}}>{Meteor.user().username}</strong> <span style = {{fontSize: "20px"}}>😀</span>
            </p>
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
};

export default userDisplay;
