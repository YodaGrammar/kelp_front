import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//Navigation
import Navbar from "./component/navbarComponent";
import Dashboard from "./component/dashboardComponent";
import Storage from "./component/storageComponent";
import TypeStorage from "./component/typeStorageComponent";

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faPlay } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  render() {
    return (
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/storage" component={Storage} />
            <Route path="/type_storage" component={TypeStorage} />
          </Switch>
        </div>
    );
  }
};

library.add(faUserCircle, faPlay)

export default App;
