const defaultState = {
  username: '',
  password: ''
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
      return newState

    case "ERROR":
      newState.username = ''
      newState.password = ''
      return newState

    default:
      return state
  }
}
