//need an action creator for each appointment

import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllAppointments = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_APPOINTMENTS_PENDING
  });

  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: types.FETCH_ALL_APPOINTMENTS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_APPOINTMENTS_FAILED,
      payload: err
    });
  }
};

export const fetchOneAppointment = id => async dispatch => {
  dispatch({
    type: types.FETCH_ONE_APPOINTMENT_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: types.FETCH_ONE_APPOINTMENT_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ONE_APPOINTMENT_FAILED,
      payload: err
    });
  }
};

export const addAppointment = newAppointment => async dispatch => {
  dispatch({
    type: types.ADD_APPOINTMENT_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newAppointment);
    dispatch({
      type: types.ADD_APPOINTMENT_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.ADD_APPOINTMENT_FAILED,
      payload: err
    });
  }
};

export const removeAppointment = id => async dispatch => {
  dispatch({
    type: types.REMOVE_APPOINTMENT_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: types.REMOVE_APPOINTMENT_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.REMOVE_APPOINTMENT_FAILED,
      payload: err
    });
  }
};
export const updateAppointment = updatedAppointment => async dispatch => {
  dispatch({
    type: types.UPDATE_APPOINTMENT_PENDING
  });
  try {
    let response = await axios.patch(BASE_URL +`/${updatedAppointment.id}`, updatedAppointment);
    dispatch({
      type: types.UPDATE_APPOINTMENT_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.UPDATE_APPOINTMENT_FAILED,
      payload: err
    });
  }
};