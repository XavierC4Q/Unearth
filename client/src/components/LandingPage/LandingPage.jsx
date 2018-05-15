import React from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { geolocated } from 'react-geolocated'

import { postNewUserCoords } from '../../actions/register'

class LandingPage extends React.Component {

  componentDidMount(){
    if(this.props.state.loggedInUser[0] && this.props.GeolocationisAvailable){
      if(this.props.isGeolocationEnabled){
        this.props.coordsTest(this.props.state.loggedInUser[0].user_id, this.props.latitude, this.props.longitude)
        }
      }
  }

  render(){
    return(
      <div>
        <nav>
          {this.props.state.loggedIn ? '' : <Link to='/login'>Login</Link>}
          {" "}
          {this.props.state.loggedIn ? '' : <Link to='/register'>Signup</Link>}
        </nav>
        <h1>Welcome to Unearth</h1>
        {this.props.state.loggedIn ? <button onClick={() => { this.props.logout() }}>Logout</button> : ''}
      </div>
    )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: null,
})(LandingPage)
