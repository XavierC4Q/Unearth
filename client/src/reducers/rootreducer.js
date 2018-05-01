import { failGetUser, failAllUsers, loadingAllUsers, loadingUser, loadedUser, loadedAllUsers } from './userreducer'
import loginState from './loginreducer'
import registerState from './registerreducer'
import  getProfileUser  from './profilereducer'
import { combineReducers } from "redux";

export default combineReducers({
/*All User and Single User Request*/
  failGetUser,
  failAllUsers,
  loadedUser,
  loadedAllUsers,
  loadingUser,
  loadingAllUsers,
/*User Auth Request and Functions*/
  loginState,
  registerState,
/*User Profile Request and Functions*/
  getProfileUser
});
