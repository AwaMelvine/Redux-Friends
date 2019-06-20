import { LOGGING_IN, LOGIN_FAILURE, LOGIN_SUCCESS } from "./types";
import axios from "axios";

const baseUrl = "http://localhost:5000/api";

const loggingIn = status => ({
  type: LOGGING_IN,
  payload: status
});

const loginFailure = message => ({
  type: LOGIN_FAILURE,
  payload: message
});

const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const loginUser = credentials => dispatch => {
  dispatch(loggingIn(true));
  axios
    .post(`${baseUrl}/login`, credentials)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch(loginSuccess());
    })
    .catch(err => dispatch(loginFailure(err.message)))
    .finally(() => dispatch(loggingIn(false)));
};
