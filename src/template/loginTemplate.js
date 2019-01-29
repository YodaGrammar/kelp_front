import React, { Component } from 'react';
import LoginForm from '../form/loginForm';

class LoginTemplate extends Component {

  render() {
    return (
      <div className="login mt-3">
      <h1 className="text-center"> Login </h1>
      <LoginForm />
      </div>
    );
  }
}

export default LoginTemplate;
