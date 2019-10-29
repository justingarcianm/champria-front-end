import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MainSplash extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-3 text-left">Bring us your Champions!</h1>
          <br />
          <hr class="my-4" />
          <div className="row">
            <div className="col-8 text-left">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-4 my-auto">
              <Link to="/register">
                <button className="btn btn-primary">Join now</button>
              </Link>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-6">
              <Link to="/search_player">
                <button className="btn  btn-primary">Browse Teams</button>
              </Link>
            </div>
            <div className="col-6">
              <Link to="search_player">
                <button className="btn  btn-primary">Browse Players</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
