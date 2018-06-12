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

export function profileUser(profileUser){
  return {
    type: "PROFILE_USER",
    profileUser
  }
}

export function profileInfo(info){
  return {
    type: "PROFILE_INFO",
    info
  }
}

export function loadUser(user){
  return (dispatch) => {
    dispatch(gotUser(user))
  }
}

export function loadUserProfile(user, info){
  return (dispatch) => {
    try{
      axios.get(user)
      .then(res => {
        dispatch(profileUser(res.data))
        console.log('user', res.data)
      })
      .then(
        axios.get(info)
        .then(res => {
          dispatch(profileInfo(res.data))
          console.log('info', res.data)
        })
      )
    }
    catch(error){
      console.log('error loading user dispatch')
    }
  }
}

export function editUser(user){
  console.log('the uset edited', user)
  return (dispatch) => {
    axios.patch(`/patch/editUser/${user.id}`, {
      username: user.username,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      user_image: user.user_image,
      search_distance: user.search_distance
    })
    .then(() => {
      console.log('made is to the profile')
      axios.patch(`/patch/editProfile/${user.id}`, {
        bio: user.bio,
        facebook: user.facebook,
        twitter: user.twitter,
        youtube: user.youtube,
        soundcloud: user.soundcloud,
        vimeo: user.vimeo,
        instagram: user.instagram,
        linkedIn: user.linkedIn
      })
    })
    .then(() => {
      let updatedUser = `/get/singleuser/${user.id}`
      let updatedInfo = `/get/profileInfo/${user.id}`
      dispatch(loadUserProfile(updatedUser, updatedInfo))
    })
    .catch(error => {
      console.log('error in edit')
    })
  }
}
