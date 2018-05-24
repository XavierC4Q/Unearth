const defaultState = {
  success: false,
  error: false
}

export default (state = defaultState, action) => {
  let newState = state

  switch(action.type){
    case "REGISTER_ERROR":
      newState.error = true
      newState.success = false
      return newState

    case "REGISTER_SUCCESS":
      newState.success = true
      newState.error =  false
      return newState

    default:
      return state
  }
}
