import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <NavLink className="navbar-brand" to="">Kelp</NavLink>
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
                    <li className="nav-item dropdown cursor-pointer">
                      <a className="nav-link dropdown-toggle" href="#admin" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Administration
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink className="dropdown-item" to="/type_storage">Type Storage</NavLink>
                        <NavLink className="dropdown-item" to="/packaging">Packaging</NavLink>
                        <NavLink className="dropdown-item" to="/user">User</NavLink>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#user" id="dropdownUser" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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

export default NavBar;
