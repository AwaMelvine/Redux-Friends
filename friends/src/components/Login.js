import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { loginUser } from "../actions/authActions";

const LoginForm = styled.form`
  width: 30%;
  margin: 3rem auto;
  border: 1px solid #a6b2bc;
  padding: 1rem 3rem 3rem;
  border-radius: 0.25rem;

  h2 {
    text-align: center;
  }

  input,
  button {
    display: block;
    width: 100%;
  }

  input {
    font-size: 1.3rem;
    margin: 10px auto 10px;
    padding: 0.75em 1em;
    border-radius: 0.25rem;
    border: 1px solid #e0e0e0;
    outline: none;
  }
  button {
    font-size: 1.3rem;
    margin: 5px auto 5px;
    padding: 0.75em 1em;
    border-radius: 0.25rem;
    border: 1px solid transparent;
    background: #4c5c68;
    color: white;
    outline: none;
    cursor: pointer;

    &:hover {
      background: #3d4a54;
    }
  }
`;

class Login extends Component {
  state = {
    username: "",
    password: ""
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
        <h2>Login</h2>
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
