export default (state = { user: [], loggedIn: false, allUsers: [], error: false }, action) => {

  let newState = state

    switch(action.type){
      case "LOGIN":
        return Object.assign({}, newState, {user: action.user})

      case "LOGIN_SUCCESS":
        return Object.assign({}, newState, {loggedIn: true})

      case "LOGOUT":
        return Object.assign({}, newState, {user: [], loggedIn: false})

      case "ALLUSERS":
      return Object.assign({}, newState, {allUsers: action.allUsers})

      case "USER_ERROR":
        return Object.assign({}, newState, {error: true})

      default:
        return state
    }
}
