import React from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { geolocated } from 'react-geolocated'

import { postNewUserCoords } from '../../actions/register'

class LandingPage extends React.Component {

  componentDidMount(){

  }


  render(){
    return(
      <div>
        <nav>
          {this.props.loggedIn ? '' : <Link to='/login'>Login</Link>}
          {" "}
          {this.props.loggedIn ? '' : <Link to='/register'>Register</Link>}
        </nav>
        <h1>Welcome to Unearth</h1>
        {this.props.loggedIn ? <button onClick={() => { this.props.logout() }}>Logout</button> : ''}
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
