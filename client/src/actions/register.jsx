import axios from 'axios'
import { loginSuccess, loginFail, login } from './login'
import { getCurrentCoords } from './location'

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

export function registerSearchDistance(distance){
  return {
    type: "REGISTER_SEARCH_DISTANCE",
    distance
  }
}

export function registerCoords(latitude, longitude){
  return {
    type: "REGISTER_COORDS",
    latitude,
    longitude
  }
}

export function register(username, password, first_name, last_name, email, distance){
  return (dispatch) => {
    try{
      axios.post('/post/register', {
        username: username,
        password: password,
        first_name: first_name,
        last_name: last_name,
        email: email,
        search_distance: distance ? distance : 10
      })
      .then(
        axios.post('/post/login', {
          username: username,
          password: password
        })
        .then(() => {
          dispatch(registerSuccess())
          dispatch(login(username, password))
        })
        .catch(error => {
          dispatch(loginFail())
        })
      )
    }
    catch(error){
      dispatch(registerError())
    }
  }
}

export function postNewUserCoords(id, latitude, longitude){
  return (dispatch) => {
    try{
      axios.get(`/get/userlocation/${id}`)
      .then(res => {
        if(!res.data[0]){
          axios.post('/post/newUserCoords', {
            user_id: id,
            latitude: Number(latitude),
            longitude: Number(longitude)
          })
          .then(() => {
            dispatch(registerCoords(Number(latitude), Number(longitude)))
          })
        }
      })
    }
    catch(error){
      console.log('no coordinates')
    }
  }
}
