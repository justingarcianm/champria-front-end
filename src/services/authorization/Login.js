import React, { Component } from "react";

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.onSubmit(e)}>
          <div>
            <input
              placeholder="email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={e => this.changeHandler(e)}
              required
            />
          </div>
          <div>
            <input
              placeholder="password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={e => this.changeHandler(e)}
              required
            />
          </div>
          <div>
            <button>Log in</button>
          </div>
        </form>
      </div>
    );
  }
}
