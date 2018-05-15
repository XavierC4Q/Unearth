import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'

import { loadUser, loadAllUsers } from './../actions/users'
import { login, usernameInput, passwordInput, logoutUser } from './../actions/login'
import { register, registerUsername, registerPassword, confirmPassword, registerEmail, registerFirstName, registerLastName, registerCoords, registerSearchDistance, postNewUserCoords } from './../actions/register'
import { loadCoords, getCurrentCoords, two, three } from './../actions/location'

import LandingPage from '../components/LandingPage/LandingPage'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'


class Home extends React.Component{

  componentDidMount(){
    if("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition(this.props.dispatch.getCurrentCoords)
    }
    this.props.dispatch.loadUser('/get/loggedInUser')
    this.props.dispatch.loadAllUsers('/get/allusers')
  }

  componentWillUpdate(nextProps){
    if(nextProps.userState.loggedInUser[0]){
      if(!nextProps.nearbyUsers.success){
        nextProps.dispatch.loadCoords(nextProps.userState.loggedInUser[0].user_id, nextProps.userState.allusers)
      }
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.currentLocation.success !== true){
      nextProps.dispatch.getCurrentCoords()
    }

  }

  renderLogin = () => {
    let isLoggedIn = this.props.userState.loggedIn
    if(isLoggedIn){
      return ( <Redirect to='/' />)
    }
    return(
      <Login
        state={this.props.loginState}
        login={this.props.dispatch.login}
        usernameInput={this.props.dispatch.usernameInput}
        passwordInput={this.props.dispatch.passwordInput}
        />
    )
  }

  renderRegister = () => {
    let isLoggedIn = this.props.userState.loggedIn

    if(isLoggedIn){
      return ( <Redirect to='/' />)
    }
    return(
      <Register
        state={this.props.registerState}
        register={this.props.dispatch.register}
        registerUsername={this.props.dispatch.registerUsername}
        registerPassword={this.props.dispatch.registerPassword}
        confirmPassword={this.props.dispatch.confirmPassword}
        registerEmail={this.props.dispatch.registerEmail}
        registerFirstName={this.props.dispatch.registerFirstName}
        registerLastName={this.props.dispatch.registerLastName}
        registerCoords={this.props.dispatch.registerCoords}
        registerSearchDistance={this.props.dispatch.registerSearchDistance}
        location={this.props.currentLocation}
        />
    )
  }

  render(){
    console.log('login ',this.props.loginState)
    console.log('users ', this.props.userState)
    return(
      <div>
        <Switch>
          <Route exact path='/login' render={this.renderLogin}/>
          <Route exact path='/register' render={this.renderRegister} />
          <Route exact path='/' render={(() => {
              return <LandingPage
                state={this.props.userState}
                latitude={this.props.currentLocation.lat}
                longitude={this.props.currentLocation.lng}
                coordsTest={postNewUserCoords}
                logout={this.props.dispatch.logoutUser}
                isLoggedOut={this.props.loginState.loggedIn}
                /> })} />
        </Switch>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
    return {
      loginState: state.loginState,
      userState: {
        allusers: state.loadedAllUsers,
        loggedInUser: state.loadedUser.user,
        loggedIn: state.loadedUser.success,
        failAllUsers: state.failAllUsers,
        loadingUser: state.loadingUser,
        loadingAllUsers: state.loadingAllUsers
      },
      registerState: state.registerState,
      userCoords: state.getUserCoords,
      nearbyUsers: state.getNearbyUsers,
      currentLocation: state.currentLocation
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
      dispatch: {
        loadUser: (url) => dispatch(loadUser(url)),
        loadAllUsers: (url) => dispatch(loadAllUsers(url)),
        login: (username, password) => dispatch(login(username, password)),
        logoutUser: (event) => dispatch(logoutUser()),
        usernameInput: (event) => { dispatch(usernameInput(event.target.value)) },
        passwordInput: (event) => { dispatch(passwordInput(event.target.value)) },
        registerUsername: (event) => { dispatch(registerUsername(event.target.value)) },
        registerPassword: (event) => { dispatch(registerPassword(event.target.value)) },
        registerEmail: (event) => { dispatch(registerEmail(event.target.value)) },
        registerFirstName: (event) => { dispatch(registerFirstName(event.target.value)) },
        registerLastName: (event) => { dispatch(registerLastName(event.target.value)) },
        registerCoords: (latitude, longitude) => { dispatch(registerCoords(latitude, longitude))},
        registerSearchDistance: (event) => { dispatch(registerSearchDistance(event.target.value))},
        confirmPassword: (event) => { dispatch(confirmPassword(event.target.value)) },
        register: (username, password, confirmPassword, first_name, last_name, email, distance) => dispatch(register(username, password, confirmPassword, first_name, last_name, email, distance)).then(() => dispatch(login(username, password))),
        loadCoords: (userID, allusers) => dispatch(loadCoords(userID, allusers)),
        getCurrentCoords: () => dispatch(getCurrentCoords()),
        postNewUserCoords: (id, latitude, longitude) => dispatch(postNewUserCoords(id, latitude, longitude))
      }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
