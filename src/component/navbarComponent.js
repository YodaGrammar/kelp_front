import React, { Component } from 'react';
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="">Kelp</Link>
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
                    <li className="nav-item dropdown cursor-pointer">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Administration
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/type_storage">Type Storage</Link>
                        <Link className="dropdown-item" to="/packaging">Packaging</Link>
                        <Link className="dropdown-item" to="/user">User</Link>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="dropdownUser" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FontAwesomeIcon icon="user-circle" /> User
                      </a>
                      <div className="dropdown-menu kelp-dropdown-menu-sm" aria-labelledby="dropdownUser">
                        <a className="dropdown-item" href="/logout">Déconnexion</a>
                      </div>
                    </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

export default Navbar;
