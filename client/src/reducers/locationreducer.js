export default (state = { users: [] }, action) => {
  let newState = state
  switch(action.type){
    case "GET_NEARBY_USERS":
      return Object.assign({}, newState, {users: action.nearbyUsers})
    case "FAIL_GET_NEARBY_USERS":
      return Object.assign({}, newState, {users: []})
    default:
      return state
  }
}
