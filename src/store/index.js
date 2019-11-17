import { createStore, combineReducers, applyMiddleware } from "redux";
import appointmentsReducer from "./appointments/reducer";
import usersReducer from "./users/reducer";

import thunk from "redux-thunk";
import logger from "redux-logger";

//creat a property of the store state called combining both reducers
const rootReducer = combineReducers({
  appointments: appointmentsReducer,
  users: usersReducer,
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
