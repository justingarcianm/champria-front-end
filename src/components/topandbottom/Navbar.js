import React, { Component } from "react";
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
      <Link to="/player_account">
        <li className="nav-link">My Account</li>
      </Link>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/">
          <h3 className="navbar-brand">Champria</h3>
        </Link>

        <ul className="navbar-nav mr-auto">
          <Link to="/search_player">
            <li className="nav-link">Teams</li>
          </Link>
          <Link to="/search_player">
            <li className="nav-link">Players</li>
          </Link>
          {signedIn ? Account : signedInFalse}
        </ul>
      </nav>
    );
  }
}
