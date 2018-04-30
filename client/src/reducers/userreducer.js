export function failGetUser(state = false, action){
  switch (action.type){
    case "FAIL_GET_USER":
      return action.failure
    default:
      return state
  }
}

export function loadingUser(state = false, action){
  switch (action.type){
    case "LOADING_USER":
      return action.loadingUser
    default:
      return state
  }
}

export function loadedUser(state = [], action){
  switch (action.type){
    case "LOADED_USER":
      return action.user
    default:
      return state
  }
}

export function failAllUsers(state = false, action){
  switch (action.type){
    case "FAIL_ALL_USERS":
      return action.failureAllUsers
    default:
      return state
  }
}

export function loadingAllUsers(state = false, action){
  switch (action.type){
    case "LOADING_ALL_USERS":
      return action.loadingAllUsers
    default:
      return state
  }
}

export function loadedAllUsers(state = [], action){
  switch (action.type){
    case "LOADED_ALL_USERS":
      return action.allusers
    default:
      return state
  }
}
