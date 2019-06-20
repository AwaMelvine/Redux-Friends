import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { loginUser } from "../actions/authActions";

const LoginForm = styled.form`
  input,
  button {
    display: block;
  }
`;

class Login extends Component {
  state = {
    username: "Lambda",
    password: "school"
  };

  change = e => this.setState({ [e.target.name]: e.target.value });

  submit = async e => {
    e.preventDefault();
    this.props.loginUser(this.state);
    this.setState({ username: "", password: "" });
    this.props.history.push("/");
  };

  render() {
    const { username, password } = this.state;
    return (
      <LoginForm method="post" onSubmit={this.submit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.change}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.change}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </LoginForm>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggingIn: state.auth.loggingIn,
    loggedIn: state.auth.loggedIn
  };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
