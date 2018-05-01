import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'

import { loadUser, loadAllUsers } from './../actions/users'
import { login, usernameInput, passwordInput } from './../actions/login'
import { register, registerUsername, registerPassword, confirmPassword, registerEmail, registerFirstName, registerLastName } from './../actions/register'

import LandingPage from '../components/LandingPage/LandingPage'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'


class Home extends React.Component{
  componentDidMount(){
    this.props.dispatch.loadUser('/get/loggedInUser')
    this.props.dispatch.loadAllUsers('/get/allusers')
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
        />
    )
  }

  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/login' render={this.renderLogin}/>
          <Route exact path='/register' render={this.renderRegister} />
          <Route exact path='/' render={(() => { return <LandingPage state={this.props.userState} /> })} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('home home',state.loadedUser)
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
      registerState: state.registerState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
      dispatch: {
        loadUser: (url) => dispatch(loadUser(url)),
        loadAllUsers: (url) => dispatch(loadAllUsers(url)),
        login: (username, password) => dispatch(login(username, password)),
        usernameInput: (event) => { dispatch(usernameInput(event.target.value)) },
        passwordInput: (event) => { dispatch(passwordInput(event.target.value)) },
        registerUsername: (event) => { dispatch(registerUsername(event.target.value)) },
        registerPassword: (event) => { dispatch(registerPassword(event.target.value)) },
        registerEmail: (event) => { dispatch(registerEmail(event.target.value)) },
        registerFirstName: (event) => { dispatch(registerFirstName(event.target.value)) },
        registerLastName: (event) => { dispatch(registerLastName(event.target.value)) },
        confirmPassword: (event) => { dispatch(confirmPassword(event.target.value)) },
        register: (username, password, confirmPassword, first_name, last_name, email) => dispatch(register(username, password, confirmPassword, first_name, last_name, email))
      }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
