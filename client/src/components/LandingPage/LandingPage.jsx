import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = ({ state }) => {

  return(
    <div>
      <nav>
        {state.loggedIn ? <p>logged in already</p> : <Link to='/login'>Login</Link>}
        {" "}
        {state.loggedIn ? <p>why register now</p> : <Link to='/register'>Signup</Link>}
      </nav>
      <h1>Welcome to Unearth</h1>
    </div>
  )
}

export default LandingPage
