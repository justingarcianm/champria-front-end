import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

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
        <Link to="/player/:playerId/page">
          <li className="nav-link">
            <i className="fas fa-user-circle"></i> Username
          </li>
        </Link>
        <Link to="/player/:playerId/chat">
          <li className="nav-link">
          <i class="fas fa-comment-alt"></i>
          </li>
        </Link>
        <Link to="/player/:playerId/settings">
          <li className="nav-link">
            <i className="fas fa-cog"></i> 
          </li>
        </Link>
        <Link to="/player/:playerId/settings">
          <li className="nav-link">
          <i class="fas fa-ellipsis-v"></i>
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
          <h3 className="nav-text">
            <i className="fas fa-shield-alt"></i> CHAMPRIA
          </h3>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto"></ul>
          <ul className="navbar-nav ">
            <Link to="/team/search">
              <li className="nav-link">Browse Teams</li>
            </Link>
            <Link to="/player/search">
              <li className="nav-link">Browse Players</li>
            </Link>
            {signedIn ? Account : signedInFalse}
          </ul>
        </div>
      </nav>
    );
  }
}
