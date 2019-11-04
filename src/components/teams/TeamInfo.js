import React, { Component } from "react";

export default class TeamInfo extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <i class="fas fa-user-circle" style={{ fontSize: "150px" }}></i>
        </div>
        <div className="col">
          <h3>Team Name</h3>
          <h4>Captain Name</h4>
          <p>Game:</p>
          <p>Organization:</p>
          <p>Looking for new Members:</p>
          <div className="row">
            <div className="col-6">
              <button className="btn btn-primary">message</button>
            </div>
            <div className="col-6">
              <button className="btn btn-primary">scrim</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
