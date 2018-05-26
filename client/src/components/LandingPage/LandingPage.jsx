import React from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { geolocated } from 'react-geolocated'

import { postNewUserCoords } from '../../actions/register'

class LandingPage extends React.Component {

  componentDidMount(){

  }


  render(){
    if(this.props.users.user[0]){
      let profileUrl = `/unearth/profile/${this.props.users.user[0].user_id}`
      return(
        <div>
          <nav>
            <Link to={profileUrl}>Profile</Link>
            {" "}
            <Link to='/unearth/feed'>Feed</Link>
          </nav>
          <h1>Welcome to Unearth</h1>
          <button onClick={() => { this.props.logout() }}>Logout</button>
        </div>
      )
    } else {
      return (
        <div>
          <nav>
            <Link to='/login'>Login</Link>
            {" "}
            <Link to='/register'>Register</Link>
          </nav>
          <h1>Welcome to Unearth</h1>
        </div>
      )
    }
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: null,
})(LandingPage)
