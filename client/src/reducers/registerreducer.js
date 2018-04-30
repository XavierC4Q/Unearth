const defaultState = {
  username: '',
  password: '',
  confirmPassword: '',
  email: '',
  first_name: '',
  last_name: ''
}

export default (state = defaultState, action) => {
  let newState = state

  switch(action.type){
    case "REGISTER_USERNAME":
      newState.username = action.username
      return newState

    case "REGISTER_PASSWORD":
      newState.password = action.password
      return newState

    case "CONFIRM_PASSWORD":
      newState.confirmPassword = action.confirmPassword
      return newState

    case "REGISTER_EMAIL":
      newState.email = action.email
      return newState

    case "REGISTER_FIRST_NAME":
      newState.first_name = action.first_name
      return newState

    case "REGISTER_LAST_NAME":
      newState.last_name = action.last_name
      return newState

    case "REGISTER_ERROR":
      console.log('fail to register user')
      return newState

    case "REGISTER_SUCCESS":
      console.log('registered user my guy')
      return newState

    default:
      return state
  }
}
