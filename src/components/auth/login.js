import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    let loginObject = new Object();
    loginObject.email = this.state.username;
    loginObject.password = this.state.password;
    this.props.login(loginObject);
  }

  render() {
    var location = this.props.location.state
      ? this.props.location.state.from
      : "/";
    if (localStorage.getItem("token") != null) {
      return <Redirect to={{ pathname: location }} />;
    }
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Submit Form</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, { login })(Login);
