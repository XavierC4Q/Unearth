import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import Home from '../containers/homecontainer'
import Profile from '../containers/profilecontainer'

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/login' component={Home} />
          <Route exact path='/register' component={Home} />
          <Route exact path='/' component={Home} />
          <Route exact path='/unearth/profile/:userID' component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default App;
