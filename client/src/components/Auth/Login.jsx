import React from 'react'
import { Redirect } from 'react-router'

const Login = ({ state, usernameInput, passwordInput, login }) => {

  if(state.loginSuccess){
    return ( <Redirect to='/' /> )
  }
  return(
    <div>
      <form onSubmit={() => login(state.username, state.password)}>
        <h2>Please Log In</h2>
        <div>
          <label>
            Username{" "}
            <input
              type='text'
              onChange={usernameInput}
              />
          </label>
        </div>
        <div>
          <label>
            Password{" "}
            <input
              type='text'
              onChange={passwordInput}
              />
          </label>
        </div>
        <button type='submit'>Log In</button>
      </form>
    </div>
  )
}

export default Login
