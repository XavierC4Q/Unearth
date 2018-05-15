import axios from 'axios'
import { loadUser } from './users'

export function usernameInput(string){
  return {
    type: "USERNAME_INPUT",
    usernameInput: string
  }
}

export function passwordInput(string){
  return {
    type: "PASSWORD_INPUT",
    passwordInput: string
  }
}

export function loginSuccess(){
  return {
    type: "SUCCESS"
  }
}

export function loginFail(){
  return {
    type: "ERROR"
  }
}

export function logout(){
  return {
    type: "LOGOUT"
  }
}

export function logoutUser(){
  return (dispatch) => {
    return axios.get('/get/logout')
    .then(() => {
      dispatch(logout())
    })
  }
}

export function login(username, password){
  return (dispatch) => {
    try{
      axios.post('/post/login', {username: username, password: password})
      .then(() => {
        dispatch(loginSuccess())
      })
    }
    catch(error){
      dispatch(loginFail())
    }
  }
}
