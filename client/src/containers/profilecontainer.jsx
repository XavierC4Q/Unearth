import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
import axios from 'axios'

import { gotUser, gotUserFail, profileUser, profileChange, loadUserProfile, loadUser, userProfile, userProfileChange } from './../actions/profile'

import UserProfile from '../components/Profile/UserProfile'

class Profile extends React.Component{
  constructor(){
    super()

    this.state = {
      loaded: false
    }
  }

  getLoggedInUser = () => {
    axios.get('/get/loggedInUser')
    .then(res => {
      this.props.dispatch.loadUser(res.data)
    })
    .catch(error => {
      this.props.dispatch.gotUserFail()
    })
  }

  componentDidMount(){
    this.getLoggedInUser()
    this.setState({ loaded: true })
  }



  renderUserProfile = props => {
    const userID = props.match.params
      return (
        <UserProfile
          userID={userID}
          loaded={this.state.loaded}
          profileState={this.props.profile}
          profileUser={this.props.dispatch.loadUserProfile}
          />
      )
  }

  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/unearth/profile/:userID' render={this.renderUserProfile} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userState,
    profile: state.profileState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: {
      loadUser: (user) => dispatch(loadUser(user)),
      profileUser: (profileUser) => dispatch(profileUser(profileUser)),
      loadUserProfile: (url) => dispatch(loadUserProfile(url)),
      gotUserFail: () => dispatch(gotUserFail())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
