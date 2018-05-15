export function getUserCoords(state = { lat: 0, lng: 0, location_name: '' , distance: 7}, action){
  let newState = state

  switch(action.type){
    case "GET_USER_COORDS":
      newState.lat = action.latitude
      newState.lng = action.longitude
      newState.location_name = action.location_name
      newState.distance = action.distance
      return newState
    case "FAIL_GET_USER_COORDS":
      return state
    default:
      return state
  }
}

export function getNearbyUsers(state = { users: [], success: false }, action){
  let newState = state
  switch(action.type){
    case "GET_NEARBY_USERS":
      newState.users = action.allusers
      newState.success = true
      return newState
    case "FAIL_GET_NEARBY_USERS":
      return state
    default:
      return state
  }
}

export function currentLocation(state = { lat: 0, lng: 0, loading: false, success: false }, action){
  let newState = state

  switch(action.type){
    case "GOT_COORDS":
      newState.lat = action.latitude
      newState.lng = action.longitude
      newState.loading = false
      newState.success = true
      return newState
    case "LOADING_COORDS":
      newState.loading = true
      return newState
    case "FAIL_COORDS":
      newState.loading = false
      return newState
    default:
      return state
  }
}
