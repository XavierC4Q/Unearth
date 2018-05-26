import userState from './userreducer'
import registerState from './registerreducer'
import  profileState  from './profilereducer'
import locationState from './locationreducer'

import { combineReducers } from "redux";

export default combineReducers({
  userState,
  registerState,
  profileState,
  locationState
});
