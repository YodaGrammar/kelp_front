import React, { Component } from 'react';
import yodaGD from "../image/yodaGD.jpg";
import '../style/login.css';

class LoginForm extends Component {
  render() {
    return (
      <div className="text-center">
          <form className="form-signin" action="/login" method="post">
              <img className="mb-4" src={yodaGD} alt="" width="72" height="72" />
              <label for="username" className="sr-only">Username</label>
              <input type="text" id="username" name="_username" value="" className="form-control" placeholder="Username" required="" autofocus="" />

              <label for="password" className="sr-only">Password</label>
              <input type="password" id="password" className="form-control" placeholder="Password" name="_password" required=""/>
              <div className="checkbox mb-3">
                  <label>
                      <input type="checkbox" id="remember_me" name="_remember_me" checked="" /> Remember me
                  </label>
              </div>
              <input className="btn btn-lg btn-primary btn-block" type="submit" name="login" />
          </form>
      </div>
    );
  }
}

export default LoginForm;
