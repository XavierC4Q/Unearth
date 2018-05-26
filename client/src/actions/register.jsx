import axios from 'axios'
import { loginUser, login, loginSuccess } from './users'

export function register(){
  return {
    type:"REGISTER_SUCCESS"
  }
}

export function errorRegister(){
  return {
    type:"REGISTER_ERROR"
  }
}

export function registerUser(username, password, email, first_name, last_name, user_image, search_distance, latitude, longitude){
  return (dispatch) => {
    try {
      axios.post('/post/register', {
        username: username,
        password: password,
        email: email,
        first_name: first_name,
        last_name: last_name,
        user_image: 'photo',
        search_distance: search_distance ? Number(search_distance) : 5,
        latitude: latitude ? Number(latitude) : 40.7128,
        longitude: longitude ? Number(longitude) : -74.0060
      })
      .then(res => {
        axios.post('/post/login', { username: username, password: password })
        .then(() => {
          dispatch(register())
          dispatch(loginSuccess())
        })
        .then(() => {
          axios.get('/get/loggedInUser')
          .then(res => {
            dispatch(login(res.data))
          })
        })
      })
    }
    catch(error){
      dispatch(errorRegister())
    }
  }
}
