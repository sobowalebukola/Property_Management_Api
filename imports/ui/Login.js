import React, { Component } from 'react';
import Login from './UX_test/login';


export default class Loggin extends Component {
    componentDidMount() {
      // Use Meteor Blaze to render login buttons
    }
   
    render() {
      // Just render a placeholder container that will be filled in
      return (<div> <div id = "user"><Login /> </div></div>)
      }
      }