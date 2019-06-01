import React, { Component } from "react";
import AddEvent from "./AddEvents";
import ListEvents from "./ListEvents";
import AccountsUIWrapper from "./AccountsUIWrapper";
import Landing from "./Landing";
import Login from "./Login";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Events } from "../api/events";

// Create a new React Component `EventApp`

const  events = (props)=>{
  handleEdit = (eventId) => {
    // find the event that requires editing
    const event = Events.findOne({_id: eventId});
  }

    // set it into state also sets a flag `isUpdating` that will allow us to have a dynamic form on AddEvent component
  return (<div><ListEvents {...this.props} /></div>) 
}
class EventApp extends Component {
  render() {
    return (
      <div>
      <Router>
          <Route exact path = "/" component = {Landing} />
          <Route exact path = "/user" component = {AccountsUIWrapper} />
          <Route path = "/registerProperty" component = {AddEvent} />
          <Route path = "/properties" component = { events} />
          <Route exact path = "/login" component = {Login} />
      </Router>
   </div>  
    );
  }
}

export default EventApp;
