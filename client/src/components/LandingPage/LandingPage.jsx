import React from 'react'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import {geolocated} from 'react-geolocated'
import "../../styles/LandingPage.css"
import {postNewUserCoords} from '../../actions/register'

const LoggedInLanding = ({ user, logout }) => {
  let profileUrl = `/unearth/profile/${user[0].user_id}`
  return(
    <div className="container">
      <div className="box header">
        <div className='navbox'>
          <nav className=''>
            <Link to={profileUrl}>Profile</Link>
            {" "}
            <Link to='/unearth/feed'>Feed</Link>
          </nav>
        </div>
        <h1>Unearth</h1>
        <button onClick={() => {
            logout()
          }}>Logout</button>
      </div>
      <div className="box content">
        <p>Discover nearby digital creators and support local art.</p>
      </div>
      <div className="box footer">
          <div></div>
      </div>
    </div>
  )
}

const DefaultLandingPage = () => {
  return (
    <div className="container">
      <div className='box header'>
        <nav>
          <Link to='/login'>Login</Link>
          {" "}
          <Link to='/register'>Register</Link>
        </nav>
        <h1>Unearth</h1>
      </div>
      <div className='box content'>
        <p>Discover nearby digital creators and support local art.</p>
      </div>
    </div>
  )
}

class LandingPage extends React.Component {

  render() {
    if (this.props.users.user[0]) {
      return (
        <LoggedInLanding user={this.props.users.user} logout={this.props.logout} />
      )
    } else {
      return (
        <DefaultLandingPage />
      )
    }
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: null
})(LandingPage)
