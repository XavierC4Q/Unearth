import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
import axios from 'axios'

import Feed from '../components/Feed/Feed'

class FeedContainer extends React.Component{

  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/unearth/feed' component={Feed} />
        </Switch>
      </div>
    )
  }
}

export default FeedContainer
