import React, { Component } from "react";
import { Accounts } from 'meteor/accounts-base';
import { withRouter } from "react-router-dom";

const INITIAL_STATE = {
  username:"",
  email: "",
  password: "",
  password2: "",
  error: null
};
export  class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit(e){
    e.preventDefault();
    Accounts.createUser({email: this.state.email, password: this.state.password, username: this.state.username }, (err) => {
      if(err){
        this.setState({
          error: err.reason
        });
        console.log(this.state.error);
      } else {
        this.props.history.push("/login");
        console.log("Successfully registered")
      }
    });
  }
  render() {
    const { email, password, password2, username } = this.state;

    const isInvalid = password !== password2 || password === "" || email === ""|| username === "";

    return (
      <div>
        <form
          className="form-signup"
          style={{
            width: "300px",
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            justifyContent: "maxCenter",
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
          <h6 className="form-signup-heading" style={{ color: "#c0c0c0" }}>
            Create An Account
          </h6>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            name="email"
            className="form-control"
            placeholder="Email address"
            required
            style={{ marginBottom: "10px" }}
            onChange={this.onChange}
          />
          <label htmlFor="email" className="sr-only">
            Username
          </label>
          <input
            type="username"
            id="username"
            value={username}
            name="username"
            className="form-control"
            placeholder="Username"
            required
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

          <label htmlFor="password2" className="sr-only">
            Password Confirm
          </label>
          <input
            type="password"
            id="password2"
            name="password2"
            value={password2}
            className="form-control"
            placeholder="Confirm password"
            required
            style={{ marginBottom: "10px" }}
            onChange={this.onChange}
          />


          <button
            type="submit"
            className="btn btn-lg btn-primary btn-block"
            disabled = {isInvalid}
          > Register </button>
          <br />
          <p style={{ color: "#c0c0c0" }}>
            Have An Account?{" "}
            <a href="/login" disabled={isInvalid}>
              Login
            </a>
          </p>
        </form>
      </div>
    );
  }
}

export default withRouter(Register);