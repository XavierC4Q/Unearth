const defaultState = {
  username: '',
  password: '',
  loggedIn: false
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

    case "LOGOUT":
      newState.username = ''
      newState.password = '',
      newState.loggedIn = false
      return newState

    case "SUCCESS":
      newState.username = ''
      newState.password = '',
      newState.loggedIn = true
      return newState

    case "ERROR":
      newState.username = ''
      newState.password = ''
      return newState

    default:
      return newState
  }
}
