import axios from 'axios'

export function gotUser(loggedInUser){
  return {
    type: "GOT_USER",
    loggedInUser
  }
}

export function gotUserFail(){
  return {
    type: "ERROR_GET_USER"
  }
}

export function profileChange(){
  return {
    type: "PROFILE_CHANGE"
  }
}

export function profileUser(profileUser){
  return {
    type: "PROFILE_USER",
    profileUser
  }
}

export function loadUser(user){
  return (dispatch) => {
    dispatch(gotUser(user))
  }
}

export function loadUserProfile(url){
  return (dispatch) => {
    try{
      axios.get(url).then(res => {
        dispatch(profileUser(res.data))
      })
    }
    catch(error){
      console.log('world')
    }
  }
}

export function userProfileChange(){
  return (dispatch) => {
    dispatch(profileChange())
  }
}
