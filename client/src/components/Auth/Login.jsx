import React from 'react'
import { Redirect } from 'react-router'

class Login extends React.Component {
  constructor(){
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  handleInput = (event) => {
    this.setState({ [event.target.name] : event.target.value })
  }

  handleLogin = (event) => {
    event.preventDefault()
    
    const { username, password } = this.state
    this.props.login(username, password)
  }

  render(){
    const { username, password } = this.state
    return(
      <div>
        <form onSubmit={() => { this.props.login(username, password) }}>
          <h3>Please Login Here</h3>
          <div>
            <label>
              Username{" "}
              <input
                type='text'
                name='username'
                value={username}
                onInput={this.handleInput}
                />
            </label>
          </div>
          <div>
            <label>
              Password{" "}
              <input
                type='text'
                name='password'
                value={password}
                onInput={this.handleInput}
                />
            </label>
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
    )
  }
}

export default Login
