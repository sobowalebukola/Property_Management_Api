import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
import "./need.css";
import login from "./UX_test/login";
import Register from "./UX_test/register";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class AccountsUIWrapper extends Component {
  componentDidMount() {
    // Use Meteor Blaze to render login buttons
   /* this.view =  Blaze.render(Template.register,
      ReactDOM.findDOMNode(this.refs.container));*/
  }
  render() {
    // Just render a placeholder container that will be filled in
    return (<div id = "user">
       {/*   <div style = {{display: "flex", justifyContent: "center", alignItems:"center"}}>
     <Card style={{ width: '50vw' }}>
    <Card.Img variant="top" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>
  </div>*/}
    <Register />

  </div>)
  }
}