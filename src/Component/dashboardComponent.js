import React, { Component } from 'react';
import Navbar from "./NavBarComponent.js"

class Dashboard extends Component {
  render() {
    return (
            <div className="container">
              <Navbar />
              <div className="Dashboard">

                this is the dashboard
              </div>
            </div>
    );
  }
}

export default Dashboard;
