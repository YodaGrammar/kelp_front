import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//Navigation
import Dashboard from "./component/dashboardComponent";
import Navbar from "./component/navbarComponent";
import Storage from "./component/storageComponent";
import TypeStorageTemplate from "./template/typeStorageTemplate";
import PackagingTemplate from "./template/packagingTemplate";

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faPlay, faTrashAlt, faPencilAlt} from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/storage" component={Storage} />
          <Route path="/type_storage" component={TypeStorageTemplate} />
          <Route path="/packaging" component={PackagingTemplate} />
        </Switch>
        </div>
      </div>
    );
  }
};

library.add(faUserCircle, faPlay, faTrashAlt, faPencilAlt)

export default App;
