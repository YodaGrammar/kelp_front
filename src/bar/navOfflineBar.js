import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavOfflineBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <NavLink className="navbar-brand" to="/">Kelp</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item ">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    )
  }
}

export default NavOfflineBar;
