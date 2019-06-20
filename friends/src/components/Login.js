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
    username: "",
    password: ""
  };

  change = e => this.setState({ [e.target.name]: e.target.value });

  submit = e => {
    e.preventDefault();
    this.props.loginUser(this.state);
    this.setState({ username: "", password: "" });
  };

  render() {
    const { username, password } = this.props;
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

const mapStateToProps = state => ({
  loggingIn: state.auth.loggingIn
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
