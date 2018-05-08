import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'

import { gotUser, gotUserFail, profileChange, userProfile, userProfileChange } from './../actions/profile'
import { loadUser, loadAllUsers } from './../actions/users'

import UserProfile from '../components/Profile/UserProfile'

class Profile extends React.Component{

  componentDidMount(){
    this.props.dispatch.loadUser('/get/loggedInUser')
    this.props.dispatch.loadAllUsers('/get/allusers')
  }

  renderUserProfile = props => {
    const userID = props.match.params
    return (
      <UserProfile
        userID={userID}
        loadProfile={this.props.dispatch.userProfile}
        changeProfile={this.props.dispatch.userProfileChange}
        state={this.props.profile}
        loggedIn={this.props.userState.isLoggedIn}
        loggedInUser={this.props.userState.loggedInUser}
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
    userState: { loggedInUser: state.loadedUser.user, isLoggedIn: state.loadedUser.success },
    profile: state.getProfileUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: {
      loadUser: (url) => dispatch(loadUser(url)),
      loadAllUsers: (url) => dispatch(loadAllUsers(url)),
      userProfile: (url) => dispatch(userProfile(url)),
      userProfileChange: () => dispatch(userProfileChange())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
