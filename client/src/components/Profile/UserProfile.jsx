import React from 'react'
import axios from 'axios'
import { Route, Link, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'

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
    this.props.profileUser(url)
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
        if(this.props.loaded && this.state.loaded){
          console.log(this.props.profileState)
          return(
            <div>
              <h1>Profile</h1>

            </div>
          )
        }
      }
    }
    return (<div>the profile else</div>)
  }
}

export default UserProfile
