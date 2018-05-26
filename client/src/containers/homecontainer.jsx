import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
import axios from 'axios'

import { login, loginSuccess, loginUser, logoutUser, loadAllUsers } from '../actions/users'
import { registerUser, register, errorRegister } from '../actions/register'
import { loadNearbyUsers } from '../actions/location'

import LandingPage from '../components/LandingPage/LandingPage'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'


class HomeContainer extends React.Component{
  constructor(){
    super()

    this.state = {
      loggedIn: false
    }
  }

  checkLogin = () => {
    axios.get('/get/loggedInUser')
    .then(res => {
      if(res.data){
        this.props.dispatch.login(res.data)
        this.props.dispatch.loginSuccess()
        this.setState({
          loggedIn: true
        })
      } else {
        this.setState({
          loggedIn: false
        })
      }
    })
  }

  componentDidMount(){
    this.checkLogin()
    this.props.dispatch.loadAllUsers()
  }


  renderLogin = () => {
    if(this.props.users.loggedIn){
      return (<Redirect to='/' />)
    }
    return(
      <Login
        login={this.props.dispatch.loginUser}
        />
    )
  }

  renderRegister = () => {
    if(this.props.users.loggedIn){
      return (<Redirect to='/' />)
    }
    return(
      <Register
        registerUser={this.props.dispatch.registerUser}
        login={this.props.dispatch.login}
        loginSuccess={this.props.dispatch.loginSuccess}
        loggedIn={this.props.users.loggedIn}
        />
    )
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <Switch>
          <Route exact path='/login' render={this.renderLogin}/>
          <Route exact path='/register' render={this.renderRegister} />
          <Route exact path='/' render={(() => { return <LandingPage users={this.props.users} loggedIn={this.props.users.loggedIn} logout={this.props.dispatch.logoutUser}/> })} />
        </Switch>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
    return {
      users: state.userState,
      register: state.registerState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
      dispatch: {
        loginUser: (username, password) => dispatch(loginUser(username, password)),
        logoutUser: () => dispatch(logoutUser()),
        login: (user) => dispatch(login(user)),
        loginSuccess: () => dispatch(loginSuccess()),
        register: () => dispatch(register()),
        registerUser: (username, password, first_name, last_name, email, user_image, search_distance, latitude, longitude) => dispatch(registerUser(username, password, first_name, last_name, email, user_image, search_distance, latitude, longitude)),
        register: () => dispatch(register()),
        loadAllUsers: () => dispatch(loadAllUsers())
      }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
