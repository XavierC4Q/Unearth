export default (state = { user: [], loggedIn: false, allUsers: [], error: false }, action) => {

  let newState = state

    switch(action.type){
      case "LOGIN":
        newState.user = action.user
        return newState

      case "LOGIN_SUCCESS":
        newState.loggedIn = true
        return newState
              
      case "LOGOUT":
        newState.user = []
        newState.loggedIn = false
        return newState

      case "ALLUSERS":
        newState.allUsers = action.allUsers
        return newState

      case "USER_ERROR":
        newState.error = true
        return newState

      default:
        return state
    }
}
