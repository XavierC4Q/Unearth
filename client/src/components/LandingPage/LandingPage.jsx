import React from 'react'
import { Link } from 'react-router-dom'

class LandingPage extends React.Component {

  render(){
    return(
      <div>
        <nav>
          {this.props.state.loggedIn ? <p>logged in already</p> : <Link to='/login'>Login</Link>}
          {" "}
          {this.props.state.loggedIn ? <p>why register now</p> : <Link to='/register'>Signup</Link>}
        </nav>
        <h1>Welcome to Unearth</h1>
      </div>
    )
  }
}

export default LandingPage
