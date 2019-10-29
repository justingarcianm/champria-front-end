import React, { Component } from "react";

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      alert("passwords don't match, try again");
    } else {
      console.log(this.state);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.onSubmit(e)}>
          <div>
            <input
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={e => this.changeHandler(e)}
              required
            />
          </div>
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
            <input
              placeholder="confirm password"
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={e => this.changeHandler(e)}
              required
            />
          </div>
          <div>
            <button>create account</button>
          </div>
        </form>
      </div>
    );
  }
}
