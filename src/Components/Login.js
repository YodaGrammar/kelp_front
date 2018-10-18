import React, { Component } from 'react';
import '../Style/Login.css';
import yodaGD from "../Image/yodaGD.jpg";

class Login extends Component {

  constructor(props) {
    super(props);

    this.state  = {'userName': '', 'password': ''}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {

    var key = 'username';
    if(event.target.id === 'password') {
        key = 'password';
    }
      this.state[key] = event.target.value;
  }

  handleSubmit(event) {

    console.log(this.state);
    // alert('An essay was submitted: ' + this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container mt-3">
        <form className="form-signin" onSubmit={this.handleSubmit}>
        <img className="mb-4" src={yodaGD} alt="" width="72" height="72"/>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label className="sr-only">Username</label>
        <input type="text" id="username" className="form-control" placeholder="Username" required="" autoFocus="" onChange={this.handleChange}/>

        <label className="sr-only">Password</label>
        <input type="password" id="password" className="form-control" placeholder="Password" required="" onChange={this.handleChange}/>
        {/* <div className="checkbox mb-3">
          <label>
            <input type="checkbox" id="remember_me" name="_remember_me" checked=""/> Remember me
          </label>
        </div> */}
        <input className="btn btn-lg btn-primary btn-block" type="submit" name="login"/>
        <p className="mt-5 mb-3 text-muted">YodaGrammar © 2018 </p>
      </form>
    </div>
  );
}
}

export default Login;
