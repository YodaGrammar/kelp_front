import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navigation extends Component {
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
              <a className="navbar-brand" href="/dashboard">Kelp</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                          <a className="nav-link" href="/dashboard">
                              Dashboard<span className="sr-only">(current)</span>

                          </a>
                      </li>
                      <li className="nav-item ">
                          <a className="nav-link" href="/storage/list">Storage</a>
                      </li>
                  </ul>
                  <ul className="navbar-nav">
                                      <li className="nav-item dropdown active">
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
    )
  }
}

export default Navigation;
