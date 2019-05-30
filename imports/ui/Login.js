import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
import login from './UX_test/login';


export default class Login extends Component {
    componentDidMount() {
      // Use Meteor Blaze to render login buttons
      this.view =  Blaze.render(Template.login,
        ReactDOM.findDOMNode(this.refs.container));
    }
    componentWillUnmount() {
      // Clean up Blaze view
      Blaze.remove(this.view);
    }
    render() {
      // Just render a placeholder container that will be filled in
      return (<div> <div id = "user"><span ref="container" /> </div></div>)
      }
      }