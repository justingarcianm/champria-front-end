import React, { Component } from "react";

export default class MainSplash extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Bring us your Champions</h1>
        </header>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <h3>Choose you path</h3>
          <div>
            <a href="#">Player</a>
          </div>
          <div>
            <a href="#">Team</a>
          </div>
        </div>
      </div>
    );
  }
}
