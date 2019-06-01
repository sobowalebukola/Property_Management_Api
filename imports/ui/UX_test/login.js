import React, { Component } from "react";
import "./login.css";
import { withRouter } from "react-router-dom";

const INITIAL_STATE = {
  email: "",
  password: "",
  password2: "",
  error: ""
};

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();

    Meteor.loginWithPassword(this.state.email, this.state.password, err => {
      if (err) {
        this.setState({
          error: err.reason
        });
      } else {
        this.props.history.push("/session");
        console.log("successfully logged in");
      }
    });
  }

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";

    return (
      <div>
        {error ? (
          <div
            style={{
              width: "80%",
              height: "80%",
              margin: "0 auto",
              marginBottom: "50px",
              borderRadius: "40px",
              display: "flex",
              backgroundColor: "sandyBrown",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {error}
          </div>
        ) : (
          ""
        )}
        <form
          className="form-signin"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            justifyContent: "max-center",
            alignItems: "center"
          }}
          onSubmit={this.handleSubmit}
        >
          <img
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "35px",
              marginBottom: "10px"
            }}
            src="icon.png"
            alt="AuthApp Login Image"
          />

          <h6 className="form-signin-heading" style={{ color: "#c0c0c0" }}>
            Login
          </h6>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
            style={{ marginBottom: "10px" }}
            onChange={this.onChange}
          />
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            className="form-control"
            placeholder="Password"
            required
            style={{ marginBottom: "10px" }}
            onChange={this.onChange}
          />

          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            disabled={isInvalid}
          >
            Sign in
          </button>
          {error && <p>{error.message}</p>}
          <br />
          <p style={{ color: "#c0c0c0" }}>
            No Account? <a href="/user">Create An Account</a>
          </p>
        </form>
      </div>
    );
  }
}
export default withRouter(Login);
