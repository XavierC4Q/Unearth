import subscription from "./subscriptionreducer";
import user from './userreducer'

import { combineReducers } from "redux";

export default combineReducers({ subscription, user });
