import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import Home from '../containers/homecontainer'

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/login' component={Home} />
          <Route exact path='/register' component={Home} />
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
