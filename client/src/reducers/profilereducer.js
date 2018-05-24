export default (state = { loggedInUser: [], profileUser: [], fail: false }, action) => {
  let newState = state
  switch(action.type){
    case "GOT_USER":
      newState.loggedInUser = action.loggedInUser
      return newState

    case "PROFILE_USER":
      newState.profileUser = action.profileUser
      return newState

    case "ERROR_GET_USER":
      newState.fail = true
      return newState

    case "PROFILE_CHANGE":
      newState.user = []
      newState.fail = false
      return newState

    default:
      return state
  }
}
