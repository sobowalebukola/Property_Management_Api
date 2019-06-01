import React, { Component } from "react";
import { Events } from "../api/events";
import { withRouter } from "react-router-dom";
import "./UX_test/login.css";

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      title: "",
      description: "",
      date: "",
      location: ""
    };
  
  }
  componentDidMount(){
    const field = event.target.name;
    return this.setState({ [field]: (this.props)})
  }
 
  handleChange = event => {
    const field = event.target.name;

    // we use square braces around the key `field` coz its a variable (we are setting state with a dynamic key name)
    this.setState({
      [field]: event.target.value
    });
  };
 

  handleSubmit = event => {
    event.preventDefault();
    const { title, description, date, location } = this.state;

    Events.insert({
      user: Meteor.user().username,
      title,
      description,
      date,
      location
    });
    Events.update(event._id, {
      $set: {
        title,
        description,
        date,
        location
      }
    });


    // clears input fields onSubmit
    this.setState({
      user: "",
      title: "",
      description: "",
      date: "",
      location:""
    });
    // TODO: Create backend Meteor methods to save created events

    alert("Will be Saved in a little bit :)");
    this.props.history.push("/properties");
  };
  


  render() {
    const { title, description, date, location } = this.state;
    const isInvalid = title === "" || description === "" || date === ""|| location ==="";
    return (
      <div id = "test">
        <div className="text-center">
          <img
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "35px",
              marginBottom: "15px",
              marginTop: "15px"
            }}
            src="home.png"
          />
        </div>
        <div className="jumbotron" style={{ margin: "0 15%" }}>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Property name"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Description:</label>
              <textarea
                rows="4"
                columns="50"
                type="text"
                className="form-control"
                placeholder="Enter description of property"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Location:</label>
            <input
                type="text"
                className="form-control"
                placeholder="Enter location"
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
              />
              </div>
            <div className="form-group">
              <label>Record Date:</label>
              <input
                type="date"
                className="form-control"
                placeholder="Enter date in the format mm.dd.yyyy"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isInvalid}
            >
              Add Property
            </button>
          </form>
        </div>
        </div>
    );
  }
}

export default withRouter(AddEvent);
