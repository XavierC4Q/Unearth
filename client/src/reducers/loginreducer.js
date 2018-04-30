const defaultState = {
  username: '',
  password: '',
  loginSuccess: false
}

export default (state = defaultState, action) => {
  let newState = state

  switch (action.type){
    case "USERNAME_INPUT":
      newState.username = action.usernameInput
      return newState

    case "PASSWORD_INPUT":
      newState.password = action.passwordInput
      return newState

    case "SUCCESS":
      newState.username = ''
      newState.password = ''
      newState.loginSuccess = true
      return newState

    case "ERROR":
      newState.username = ''
      newState.password = ''
      newState.loginSuccess = false
      return newState

    default:
      return state
  }
}
