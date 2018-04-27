import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import UserContainer from '../containers/usercontainer'
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={UserContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
