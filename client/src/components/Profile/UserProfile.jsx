import React from 'react'
import axios from 'axios'
import { Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import { gotUser, gotUserFail, profileUser, profileChange, loadUserProfile, loadUser, userProfile, userProfileChange } from '../../actions/profile'

class UserProfile extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      loaded: false
    }
  }

  singleUser = () => {
    let theId = this.props.userID.userID
    let url = `/get/singleuser/${theId}`
    this.props.dispatch.loadUserProfile(url)
  }


  componentDidUpdate(prevProps){
    if(!prevProps.loaded){
      this.singleUser()
      this.setState({ loaded: true })
    }
  }

  render(){

    if(this.props.loaded){
      if(this.state.loaded){
        if(this.props.profile.loggedInUser[0]){
          if(this.props.profile.profileUser[0]){
            return(
              <div>
                <h1>{this.props.profile.profileUser[0].username}</h1>
              </div>
            )
          }
        }
      }
    }
    return (<div>the profile else</div>)
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

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
