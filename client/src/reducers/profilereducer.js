export default (state = { loggedInUser: {}, profileUser: {}, info: {}, fail: false }, action) => {
  let newState = state
  switch(action.type){
    case "GOT_USER":
      return Object.assign({}, newState, {loggedInUser: action.loggedInUser})

    case "PROFILE_USER":
      return Object.assign({}, newState, {profileUser: action.profileUser})

    case "PROFILE_INFO":
      return Object.assign({}, newState, {info: action.info})

    case "ERROR_GET_USER":
      return Object.assign({}, newState, {fail: true})

    default:
      return state
  }
}
