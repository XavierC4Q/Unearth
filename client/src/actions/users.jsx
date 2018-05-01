import axios from 'axios'

/*------------------------------------------Single User Actions------------------------------------------*/
export function failGetUser(boolean){
  return {
    type: "FAIL_GET_USER",
    failure: boolean
  }
}

export function loadingUser(boolean){
  return {
    type: "LOADING_USER",
    loadingUser: boolean
  }
}

export function userLoaded(user){
  return {
    type: "LOADED_USER",
    user
  }
}


/*------------------------------------------All User Actions------------------------------------------*/
export function failAllUsers(boolean){
  return {
    type: "FAIL_ALL_USERS",
    failureAllUsers: boolean
  }
}

export function loadingAllUsers(boolean){
  return {
    type: "LOADING_ALL_USERS",
    loadingAllUsers: boolean
  }
}

export function allUsersLoaded(allusers){
  return {
    type: "LOADED_ALL_USERS",
    allusers
  }
}

/*--------------------------------------------------AXIOS Request-----------------------------------------------------*/
export function loadUser(url){
  return (dispatch) => {
    dispatch(loadingUser(true))

    return axios.get(url).then(res => {
      dispatch(userLoaded(res.data))
      dispatch(loadingUser(false))
      dispatch(failGetUser(false))
    })
    .catch(error => {
      dispatch(failGetUser(true))
    })
  }
}

export function loadAllUsers(url){
  return (dispatch) => {
    dispatch(loadingAllUsers(true))

    return axios.get(url).then(res => {
      dispatch(allUsersLoaded(res.data))
      dispatch(loadingAllUsers(false))
      dispatch(failAllUsers(false))
    })
    .catch(error => {
      dispatch(failAllUsers(true))
    })
  }
}
