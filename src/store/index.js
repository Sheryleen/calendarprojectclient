import { createStore, combineReducers, applyMiddleware } from "redux";
import appointmentsReducer from "./appointments/reducer";

import thunk from "redux-thunk";
import logger from "redux-logger";

//creat a property of the store state called appointments
const rootReducer = combineReducers({
  appointments: appointmentsReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
