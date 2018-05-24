import userState from './userreducer'
import registerState from './registerreducer'
import  profileState  from './profilereducer'
import { getUserCoords, getNearbyUsers, currentLocation } from './locationreducer'

import { combineReducers } from "redux";

export default combineReducers({
  userState,
  registerState,
  profileState,
  getUserCoords,
  getNearbyUsers,
  currentLocation
});
