import React, { Component } from "react";
import styled from "styled-components";

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

  submit = e => console.log(this.state);

  render() {
    const { username, password } = this.props;
    return (
      <LoginForm onSubmit={this.submit}>
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
          onChange={this.submit}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </LoginForm>
    );
  }
}
export default Login;
