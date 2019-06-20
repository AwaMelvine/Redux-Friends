import { LOGGING_IN, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/types";

const initialState = {
  loggingIn: false,
  error: null,
  loggedIn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        loggingIn: action.payload
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loggedIn: false
      };

    default:
      return state;
  }
};
