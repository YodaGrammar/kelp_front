import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom"
import DashboardComponent from "./dashboardComponent.js"

class Navbar extends Component {
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                <Route path="/dashboard" component={DashboardComponent} />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>

            </ul>
          </div>
        </nav>

    );
  }
}

export default Navbar;
