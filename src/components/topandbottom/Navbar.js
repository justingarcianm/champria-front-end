import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    signedIn: true
  };
  render() {
    let { signedIn } = this.state;

    let signedInFalse = (
      <Link to="/login">
        <li className="nav-link">Sign in/Register</li>
      </Link>
    );

    let Account = (
      <Fragment>
        <Link to="/player_account">
          <li className="nav-link">
            <i className="fas fa-user-circle"></i>
          </li>
        </Link>
        <Link to="/player_account">
          <li className="nav-link"></li>
        </Link>
        <Link to="/player_settings">
          <li className="nav-link">
            <i class="fas fa-cog"></i>
          </li>
        </Link>
      </Fragment>
    );

    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{ backgroundColor: "#53a09c" }}
      >
        <Link to="/">
          <h3 className="navbar-brand">
            <i className="fas fa-shield-alt"></i> CHAMPRIA
          </h3>
        </Link>
        <ul className="navbar-nav mr-auto"></ul>
        <ul className="navbar-nav">
          <Link to="/search_team">
            <li className="nav-link">Browse Teams</li>
          </Link>
          <Link to="/search_player">
            <li className="nav-link">Browse Players</li>
          </Link>
          {signedIn ? Account : signedInFalse}
        </ul>
      </nav>
    );
  }
}
