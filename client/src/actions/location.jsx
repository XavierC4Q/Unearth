import axios from 'axios'

function findDistance(lat1, lon1, lat2, lon2, unit){

  let radlat1 = Math.PI * lat1/180
  let radlat2 = Math.PI * lat2/180
  let theta = lon1-lon2
  let radtheta = Math.PI * theta/180

  let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

  dist = Math.acos(dist)
  dist = dist * 180/Math.PI
  dist = dist * 60 * 1.1515

  if (unit=="K") { dist = dist * 1.609344 }
  if (unit=="N") { dist = dist * 0.8684 }

  return dist
    //Credits to https://www.geodatasource.com
}

export function getUserCoords(boolean, latitude, longitude, location_name, distance){
  if(boolean){
    return {
      type: "GET_USER_COORDS",
      latitude,
      longitude,
      location_name,
      distance
    }
  }
  return {
    type: "FAIL_GET_USER_COORDS"
  }
}

export function getNearbyUsers(boolean, allusers){
  if(boolean){
    return {
      type: "GET_NEARBY_USERS",
      allusers
    }
  }
  return {
    type: "FAIL_GET_NEARBY_USERS"
  }
}


export function loadNearbyUsers(lat, lng, distance, allusers, id){
  return (dispatch) => {
    let nearbyUsers = []
    allusers.map((user) => {
      let userLat = Number(user.latitude)
      let userLng = Number(user.longitude)
      let howFar = findDistance(lat, lng, userLat, userLng)
      if(howFar <= distance && user.user_id !== id){
        nearbyUsers.push(user)
      }
    })
    dispatch(getNearbyUsers(true, nearbyUsers))
  }
}


export function loadCoords(userID, allusers){
  return (dispatch) => {

    return axios.get(`/get/userlocation/${userID}`)
    .then(res => {
      let data = res.data[0]
      dispatch(getUserCoords(true, Number(data.latitude), Number(data.longitude), data.location_name, data.search_distance))
      dispatch(loadNearbyUsers(Number(data.latitude), Number(data.longitude), data.search_distance, allusers, userID))
    })
    .catch(error => {
      dispatch(getUserCoords(false))
    })
  }
}
