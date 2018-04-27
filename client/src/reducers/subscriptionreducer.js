const defaultState = {
  test: []
}

export default (state = defaultState, action) => {
  let newState = state
  switch (action.type) {
    case "TEST":
      return({
        test: newState.test
      })
    default:
      return newState
  }
}
