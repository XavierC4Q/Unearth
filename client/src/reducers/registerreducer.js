const defaultState = {
  success: false,
  error: false
}

export default (state = defaultState, action) => {
  let newState = state

  switch(action.type){
    case "REGISTER_ERROR":
      return Object.assign({}, newState, {succes: false,error: true})

    case "REGISTER_SUCCESS":
      return Object.assign({}, newState, {succes: true,error: false})
    default:
      return state
  }
}
