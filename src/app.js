import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//Template
import AboutTemplate from "./template/aboutTemplate";
import ContactTemplate from "./template/contactTemplate";
import DashboardTemplate from "./template/dashboardTemplate";
import HomeTemplate from "./template/homeTemplate";
import LoginTemplate from "./template/loginTemplate";
import NavBar from "./bar/navBar";
import NavOfflineBar from "./bar/navOfflineBar";
import PackagingTemplate from "./template/packagingTemplate";
import RegisterTemplate from "./template/registerTemplate";
import Storage from "./component/storageComponent";
import TypeStorageTemplate from "./template/typeStorageTemplate";
import UserTemplate from "./template/userTemplate";

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faPlay, faTrashAlt, faPencilAlt} from '@fortawesome/free-solid-svg-icons';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
          error: null,
          isConnected: false,
          user: []
        };
  }

  render() {

    const { error, isConnected, user } = this.state;
    let nav  =   <NavOfflineBar />;
    if(error) {
      return (<div>{user}</div>);
    }

    if(isConnected) {
      nav  =   <NavBar />;
    }

    return (<div>
      {nav}
      <div className="container">
      <Switch>
        <Route path="/about"        component={AboutTemplate} />
        <Route path="/contact"      component={ContactTemplate} />
        <Route path="/dashboard"    component={DashboardTemplate} />
        <Route path="/login"        component={LoginTemplate} />
        <Route path="/packaging"    component={PackagingTemplate} />
        <Route path="/storage"      component={Storage} />
        <Route path="/type_storage" component={TypeStorageTemplate} />
        <Route path="/user"         component={UserTemplate} />
        <Route exact path="/"         component={HomeTemplate} />
        <Route path="/register"     component={RegisterTemplate} />
      </Switch>
      </div>
    </div>);
  }
};

library.add(faUserCircle, faPlay, faTrashAlt, faPencilAlt)

export default App;
