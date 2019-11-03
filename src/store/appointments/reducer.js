import * as types from "./constants";

const initialState = {
  all: [],
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_APPOINTMENTS_PENDING:
    case types.ADD_APPOINTMENT_PENDING:
    case types.REMOVE_APPOINTMENT_PENDING:
      return state;

    case types.FETCH_ALL_APPOINTMENTS_FAILED:
    case types.ADD_APPOINTMENT_FAILED:
    case types.REMOVE_APPOINTMENT_FAILED:
      return {
        ...state,
        err: action.payload
      };
    case types.FETCH_ALL_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case types.ADD_APPOINTMENT_SUCCESS:
      return {
        ...state,
        all: [...state.all, action.payload]
      };
    case types.REMOVE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        all: state.all.filter(APPOINTMENT => APPOINTMENT.id === action.payload.id)
      };
    default:
      return state;
  }
};
