import React, { Component } from "react";

export class PlayerSettings extends Component {
  render() {
    return (
      <div className="container text-left">
        <h3>Your Account Settings</h3>
        <hr />
        <div className="row">
          <form>
            <div className="form-group">
              <label>Type:</label>
              <input class="form-control" />
            </div>
            <div className="form-group">
              <label>Type:</label>
              <input class="form-control" />
            </div>
            <div className="form-group">
              <label>Type:</label>
              <input class="form-control" />
            </div>
            <div className="form-group">
              <label>Type:</label>
              <input class="form-control" />
            </div>
            <div className="form-group">
              <label>Type:</label>
              <input class="form-control" />
            </div>
            <button className="btn btn-primary">confirm changes</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PlayerSettings;
