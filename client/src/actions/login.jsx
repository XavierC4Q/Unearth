import axios from 'axios'

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

export function login(username, password){
  return (dispatch) => {
    try{
      axios.post('/post/login', {username: username, password: password})
        dispatch(loginSuccess())
    }
    catch(error){
      dispatch(loginFail())
    }
  }
}
