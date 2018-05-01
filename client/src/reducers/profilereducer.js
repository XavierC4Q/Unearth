export default (state = { user: [], fail: false }, action) => {
  switch(action.type){
    case "GOT_USER":
      state.user = action.user
      return action.user

    case "ERROR_GET_USER":
      state.fail = true
      return state

    case "PROFILE_CHANGE":
      state.user = []
      state.fail = false
      return state

    default:
      return state
  }
}
