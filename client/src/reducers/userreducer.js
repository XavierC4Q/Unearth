import get from './../request/get'

const defaultState = {
  allUsers: [],
  loggedIn: false,
  loggedInUser: []
}

export default (state = defaultState, action) => {
  let newState = state
  switch (action.type) {
    case "ALL":
      return({
        allUsers: newState.allUsers
      })
    default:
      return newState
  }
}
