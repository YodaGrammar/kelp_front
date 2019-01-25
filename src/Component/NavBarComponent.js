import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/storage">Storage</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item dropdown active">
                    <Link className="nav-link dropdown-toggle" href="#" id="dropdownUser" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FontAwesomeIcon icon="user-circle" /> User</Link>
                    <div className="dropdown-menu kelp-dropdown-menu-sm" aria-labelledby="dropdownUser">
                        <a className="dropdown-item" href="/logout">Déconnexion</a>
                    </div>
                </li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Navbar;
