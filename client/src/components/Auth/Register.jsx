import React from 'react'
import { Redirect } from 'react-router-dom'
import { geolocated } from 'react-geolocated'
import axios from 'axios'

class Register extends React.Component {
  constructor(){
    super()

    this.state = {
      username: '',
      password: '',
      confirmPass: '',
      first_name: '',
      last_name: '',
      email: '',
      search_distance: 5,
      message: '',
      user_image: '',
      lat: '',
      lng: '',
      loggedIn: false
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.isGeolocationAvailable){
      if(this.props.isGeolocationEnabled){
        if(nextProps.coords){
          this.setState({
            lat: nextProps.coords.latitude,
            lng: nextProps.coords.longitude
          })
        }
      }
    }
  }

  handleInput = (event) => {
    this.setState({ [event.target.name] : event.target.value })
  }

  handleSelect = (event) => {
    this.setState({ search_distance: event.target.value })
  }

  handleRegister = (event) => {
    event.preventDefault()
    const { username, password, confirmPass, first_name, last_name, search_distance, email, user_image, message, lat, lng } = this.state
    if(confirmPass !== password){
      this.setState({
        username: '',
        password: '',
        confirmPass: '',
        first_name: '',
        last_name: '',
        email: '',
        search_distance: 5,
        message: 'Passwords must match',
        user_image: '',
        lat: lat,
        lng: lng,
        loggedIn: false
      })
    } else {
      this.props.registerUser(username, password, email, first_name, last_name, user_image, search_distance, lat, lng)
      this.props.login(username, password)
      return (<Redirect to='/' />)
    }
  }

  render(){
    let searchValues = [5,10,15,20,25,50,100]
    const { username, password, confirmPass, first_name, last_name, search_distance, email, message } = this.state
    if(this.props.loggedIn){
      return (<Redirect to='/' />)
    }
    return (
      <div>
        <form onSubmit={this.handleRegister}>
          <h3>Sign Up for Unearth</h3>
          <div>
            <label>
              Username{" "}
              <input
                type='text'
                value={username}
                name='username'
                onInput={this.handleInput}
                />
            </label>
          </div>
          <div>
            <label>
              Password{" "}
              <input
                type='text'
                value={password}
                name='password'
                onInput={this.handleInput}
                />
            </label>
          </div>
          <div>
            <label>
              Confirm Password{" "}
              <input
                type='text'
                value={confirmPass}
                name='confirmPass'
                onInput={this.handleInput}
                />
            </label>
          </div>
          <div>
            <label>
              First Name{" "}
              <input
                type='text'
                value={first_name}
                name='first_name'
                onInput={this.handleInput}
                />
            </label>
          </div>
          <div>
            <label>
              Last Name{" "}
              <input
                type='text'
                value={last_name}
                name='last_name'
                onInput={this.handleInput}
                />
            </label>
          </div>
          <div>
            <label>
              Email{" "}
              <input
                type='text'
                value={email}
                name='email'
                onInput={this.handleInput}
                />
            </label>
          </div>
          <div>
            <label>
              Search Distance{" "}
              <select onChange={this.handleSelect}>
                {['',...searchValues].map(value => (
                  <option name={value} key={value}>{Number(value)}</option>
                ))}
              </select>
            </label>
          </div>
          <button type='submit'>Register</button>
          {message}
        </form>
      </div>
    )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: null,
})(Register)
