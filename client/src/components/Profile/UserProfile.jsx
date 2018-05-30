import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
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
    let user = `/get/singleuser/${theId}`
    let info = `/get/profileInfo/${theId}`
    this.props.dispatch.loadUserProfile(user, info)
  }


  componentDidUpdate(prevProps){
    if(!prevProps.loaded){
      this.singleUser()
      this.setState({ loaded: true })
    }
  }

  render(){

      if(this.props.profile.loggedInUser[0]){
        if(this.props.profile.profileUser[0]){

          let isProfile = this.props.profile.loggedInUser[0].user_id === this.props.profile.profileUser[0].user_id
          let infoFetched = this.props.profile.info[0]
          let editUrl = `/unearth/edit`

          return(
            <div>
              <h1>{this.props.profile.profileUser[0].username}</h1>
              <div>
                {isProfile ? <Link to={editUrl}>Edit</Link> : ''}
              </div>
              <div>
                <h4>Bio</h4>
                {infoFetched ? infoFetched.bio : 'bio loading'}
                <p></p>
              </div>
              <div>
                <h4>Social Media</h4>
              </div>
            </div>
            )
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
      loadUserProfile: (user, info) => dispatch(loadUserProfile(user, info)),
      gotUserFail: () => dispatch(gotUserFail())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
