import axios from 'axios'
import { loginSuccess, loginFail } from './login'

export function registerUsername(username){
  return {
    type: "REGISTER_USERNAME",
    username: username
  }
}

export function registerPassword(password){
  return {
    type: "REGISTER_PASSWORD",
    password: password
  }
}

export function confirmPassword(confirmPassword){
  return {
    type: "CONFIRM_PASSWORD",
    confirmPassword: confirmPassword
  }
}

export function registerEmail(email){
  return {
    type: "REGISTER_EMAIL",
    email: email
  }
}

export function registerFirstName(first_name){
  return {
    type: "REGISTER_FIRST_NAME",
    first_name: first_name
  }
}

export function registerLastName(last_name){
  return {
    type: "REGISTER_LAST_NAME",
    last_name: last_name
  }
}

export function registerError(){
  return {
    type: "REGISTER_ERROR"
  }
}

export function registerSuccess(){
  return {
    type: "REGISTER_SUCCESS"
  }
}

export function register(username, password, first_name, last_name, email){
  return (dispatch) => {
    try{
      axios.post('/post/register', {
        username: username,
        password: password,
        first_name: first_name,
        last_name: last_name,
        email: email
      })
      .then(
        axios.post('/post/login', {
          username: username,
          password: password
        })
        .catch(error => {
          dispatch(loginFail())
        })
      )
      dispatch(loginSuccess())
      dispatch(registerSuccess())
    }
    catch(error){
      dispatch(registerError())
    }
  }
}
