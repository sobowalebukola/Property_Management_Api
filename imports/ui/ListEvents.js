import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Events } from "../api/events";
import "./listEvents.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class ListEvents extends Component {
  handleDelete = (eventId, callback) => {
    // onDelete we just remove the event from the db
    Events.remove({ _id: eventId });
    return callback();
  };

  handleEdit = eventId => {
    // onEdit we want to have the form on AddEvents populate the fields and allow for editing
    // so we pass the eventId to the parent component so that it tells AddEvent component what data is to be displayed
    this.props.handleEdit(eventId);
  };

  render() {
    return (
      <div>
        <h1 style={{ paddingTop: "30px", paddingBottom: "18px" }}>
          PROPERTIES OWNED{" "}
        </h1>
        <table className="container" style={{ margin: "0 auto" }}>
          <thead>
            <tr>
              <th>
                <h1>Property Description</h1>
              </th>
              <th>
                <h1>Date Created</h1>
              </th>
              <th>
                <h1 style={{ marginRight: "9px" }}>Location</h1>
              </th>
              <th>
                <h1 style={{ marginRight: "4px" }}>Owner</h1>
              </th>
            </tr>
          </thead>
          {this.props.events.length ? (
            this.props.events.map(event => (
              <tbody>
                <tr>
                  <td key={event._id}>
                    {event.description}
                    <br />
                    <button
                      className="btn btn-outline-warning col"
                      style={{
                        width: "50px",
                        fontSize: "10px",
                        margin: "0 auto",
                        marginTop: "10px",
                        marginRight: "3px"
                      }}
                      data-toggle="modal"
                      data-target="#myModal"
                      type="button"
                      onClick={() => this.handleDelete(event._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-outline-warning col"
                      data-toggle="modal"
                      data-target="#myModal"
                      type="button"
                      style={{
                        width: "50px",
                        fontSize: "10px",
                        margin: "0 auto",
                        marginTop: "10px"
                      }}
                      onClick={() =>
                        this.handleDelete(
                          event._id,
                          this.props.history.push({
                            pathname: "/registerProperty",
                            state: { ...event }
                          }) /*this.props.history.push("/registerProperty")*/
                        )
                      }
                    >
                      Edit
                    </button>
                  </td>
                  <td key={event._id}>{event.date}</td>
                  <td key={event._id}>{event.location}</td>
                  <td key={event._id}>{event.user}</td>
                </tr>
              </tbody>
            ))
          ) : (
            <tbody>
              <tr>
                <td className="no-events">OOOPS: NO PROPERTY REGISTERED</td>
              </tr>

              <a
                class="btn btn-info btn-lg"
                onClick={() => this.props.history.push("./registerProperty")}
                style={{ position: "absolute",
                  bottom: "10px",
                  right: "10px"}}
              >
                <span
                  class="glyphicon glyphicon-plus"
                  style={{ fontSize: "32px" }}
                  title="Add new Property"
                >
                  +
                </span>
              </a>
              {/*<Link to = "/registerProperty" style = {{textDecoration : "none"}}>Add Property</Link>*/}
            </tbody>
          )}
        </table>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    events: Events.find({}).fetch()
  };
})(withRouter(ListEvents));
