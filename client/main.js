import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import './main.html';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('app'));
});