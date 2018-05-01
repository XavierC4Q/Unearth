import axios from 'axios'

export function gotUser(user){
  return {
    type: "GOT_USER",
    user
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

export function userProfile(url){
  return (dispatch) => {

    return axios.get(url).then(res => {
      dispatch(gotUser(res.data))
    })
    .catch(error => {
      dispatch(gotUserFail())
    })
  }
}

export function userProfileChange(){
  return (dispatch) => {
    dispatch(profileChange())
  }
}
