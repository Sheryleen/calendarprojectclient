//need an action creator for each appointment

import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllUsers = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_USERS_PENDING
  });

  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: types.FETCH_ALL_USERS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_USERS_FAILED,
      payload: err
    });
  }
};

export const fetchOneUser = id => async dispatch => {
  dispatch({
    type: types.FETCH_ONE_USER_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: types.FETCH_ONE_USER_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ONE_USER_FAILED,
      payload: err
    });
  }
};

export const addAppointment = newUser => async dispatch => {
  dispatch({
    type: types.ADD_USER_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newUser);
    dispatch({
      type: types.ADD_USER_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.ADD_USER_FAILED,
      payload: err
    });
  }
};

export const removeAppointment = id => async dispatch => {
  dispatch({
    type: types.REMOVE_USER_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: types.REMOVE_USER_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.REMOVE_USER_FAILED,
      payload: err
    });
  }
};
