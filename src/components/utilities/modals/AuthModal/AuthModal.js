import React, { Component } from "react";
import axios from "axios";

class AuthModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    //Log In
    e.preventDefault();
    const url = "/users/login";
    const userObj = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post(url, userObj)
      .then((res) => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${res.token}`;
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ email: "", password: "" });
  }

  render() {
    return (
      <div className="auth-modal">
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="email"
              placeholder="Username"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit Form</button>
        </form>
      </div>
    );
  }
}

export default AuthModal;
