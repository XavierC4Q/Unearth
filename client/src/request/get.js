import axios from 'axios'
import React from 'react'

const allUsers = () => {
  return axios.get('/get/allusers')
}


const loggedInUser = () => {
   return axios.get('/get/loggedInUser')
}

export default {
  allUsers,
  loggedInUser
}
