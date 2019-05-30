import React, { Component } from "react";
import AddEvent from "./AddEvents";
import ListEvents from "./ListEvents";
import AccountsUIWrapper from "./AccountsUIWrapper";
import Landing from "./Landing";
import Login from "./Login";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

// Create a new React Component `EventApp`

const events = (props)=>{
  return <ListEvents {...this.props} />
}
class EventApp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path = "/" component = {Landing} />
          <Route exact path = "/user" component = {AccountsUIWrapper} />
          <Route path = "/registerProperty" component = {AddEvent} />
          <Route path = "/properties" component = { events} />
          <Route exact path = "/login" component = {Login} />
        </div>
      </Router>
    );
  }
}

export default EventApp;
