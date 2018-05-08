import React from 'react'
import axios from 'axios'
import { Route, Link, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'

class UserProfile extends React.Component{

  componentDidMount(){
    this.props.loadProfile(`/get/singleuser/${this.props.userID.userID}`)
  }

  render(){
    let isOwnProfile = false

    if(this.props.state[0]){
      if(this.props.loggedInUser[0]){
        isOwnProfile = this.props.loggedInUser[0].user_id === Number(this.props.userID.userID)
      }
      return (
        <div>
          <h1>The Profile Of {this.props.state[0].username}</h1>
          {isOwnProfile ? '' : <button>Subscribe</button>}
        </div>
      )
    }
    return (<div>loading profile</div>)
  }
}

export default UserProfile
