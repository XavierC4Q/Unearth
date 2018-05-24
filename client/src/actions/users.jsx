import axios from 'axios'

export function login(user){
  return {
    type: "LOGIN",
    user
  }
}

export function loginSuccess(){
  return {
    type: "LOGIN_SUCCESS"
  }
}

export function logout(){
  return {
    type: "LOGOUT"
  }
}

export function allUsers(allUsers){
  return {
    type: "ALLUSERS",
    allUsers
  }
}

export function userError(){
  return {
    type: "USER_ERROR"
  }
}

export function getAllUsers(allUsers){
  return {
    type: "ALLUSERS",
    allUsers
  }
}

export function loginUser(username, password){
  return (dispatch) => {
    try{
      axios.post('/post/login', { username: username, password: password })
    }
    catch(error){
      dispatch(userError())
    }
  }
}

export function logoutUser(){
  return (dispatch) => {
    try{
      axios.get('/get/logout')
      .then(() => { dispatch(logout()) })
    }
    catch(error){
      dispatch(userError())
    }
  }
}

export function loadAllUsers(){
  return (dispatch) => {
    return axios.get('/get/allusers')
    .then(res => {
      dispatch(getAllUsers(res.data))
    })
  }
}
