import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="">Navbar</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/storage">Storage</NavLink>
              </li>
            </ul>
            <ul className="navbar-nav">
            <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="" id="dropdownAdmin" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon="user-circle" /> User</NavLink>
                <div className="dropdown-menu kelp-dropdown-menu-sm" aria-labelledby="dropdownAdmin">
                    <NavLink className="dropdown-item" to="/type_storage">Type Storage</NavLink>
                </div>
            </li>
                <li className="nav-item dropdown active">
                    <NavLink className="nav-link dropdown-toggle" id="dropdownUser" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to="">
                    <FontAwesomeIcon icon="user-circle" /> User</NavLink>
                    <div className="dropdown-menu kelp-dropdown-menu-sm" aria-labelledby="dropdownUser">
                        // <a className="dropdown-item" href="/logout">Déconnexion</a>
                    </div>
                </li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Navbar;
