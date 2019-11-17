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
        all: [...state.all, action.payload[0]]
      };
    case types.REMOVE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        //take array from payload give all then the deleted one
        all: state.all.filter(
          APPOINTMENT => APPOINTMENT.id !== action.payload[0].id
        )
      };
    case types.UPDATE_APPOINTMENT_SUCCESS://once changed look for one came back and change to the one that came back
      return {
        ...state,
        all: state.all.map(appt => {
          if (appt.id === action.payload[0].id) {
            return action.payload[0];
          } else {
            return appt;
          }
        })
      };

    default:
      return state;
  }
};
