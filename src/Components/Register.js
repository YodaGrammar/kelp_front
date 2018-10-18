import React, { Component } from 'react';
import '../Style/Login.css';


class Register extends Component {
  constructor(props) {
    super(props);

    this.state  = {
      'fullname': '',
      'username': '',
      'email': '',
      'password': ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleError  = this.handleError.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

    var key = 'fullname';

    if(event.target.id === 'userName') {
        key = 'username';
    }

    if(event.target.id === 'email') {
        key = 'email';
    }

    if(event.target.id === 'plainPassword_first') {
        key = 'password';
    }

    this.state[key] = event.target.value;
  }

  handleError(event){

  }

  handleSubmit(event) {

    console.log(this.state);
    // alert('An essay was submitted: ' + this.state);
    event.preventDefault();
  }
  render() {
  return (
    <div className="container mt-3">
      <form name="user" method="post">
          <div className="form-group">
            <label className="required">Nom Complet</label>
            <input type="text" id="fullname" name="user[fullName]" required="required" className="form-control"/>

          </div>
          <div className="form-group">
            <label className="required">Nom d utilisateur</label>
            <input type="text" id="username" name="user[username]" required="required" className="form-control"/>

            </div>
          <div className="form-group">
            <label className="required">Adresse E-mail </label>
            <input type="email" id="email" name="user[email]" required="required" className="form-control"/>

            </div>
          <div className="form-group">
            <label className="required">Mot de passe</label>
            <input type="password" id="plainPassword_first" name="user[plainPassword][first]" required="required" className="form-control"/>

            </div>
          <div className="form-group">
            <label className="required">Confirmation</label>
            <input type="password" id="plainPassword_second" name="user[plainPassword][second]" required="required" className="form-control"/>

            </div>

          <button className="btn btn-primary btn-lg" type="submit">Créer mon compte</button>
          </form>
    </div>
  );
};
}
export default Register;
