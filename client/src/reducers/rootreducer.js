import { failGetUser, failAllUsers, loadingAllUsers, loadingUser, loadedUser, loadedAllUsers } from './userreducer'
import loginState from './loginreducer'
import registerState from './registerreducer'
import  getProfileUser  from './profilereducer'
import { getUserCoords, getNearbyUsers, currentLocation } from './locationreducer'
import { combineReducers } from "redux";

export default combineReducers({
  failGetUser,
  failAllUsers,
  loadedUser,
  loadedAllUsers,
  loadingUser,
  loadingAllUsers,
  loginState,
  registerState,
  getProfileUser,
  getUserCoords,
  getNearbyUsers,
  currentLocation
});
