import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import HomeContainer from '../containers/homecontainer'
import ProfileContainer from '../containers/profilecontainer'
import FeedContainer from '../containers/feedcontainer'

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/login' component={HomeContainer} />
          <Route exact path='/register' component={HomeContainer} />
          <Route exact path='/' component={HomeContainer} />
          <Route exact path='/unearth/profile/:userID' component={ProfileContainer} />
          <Route exact path='/unearth/feed' component={FeedContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
