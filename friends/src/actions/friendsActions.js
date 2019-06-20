import axiosImproved from "../axios";
import { FETCHING_FRIENDS, SUCCESS, FAILURE } from "./types";
const baseUrl = "http://localhost:5000/api";

const fetchingFriends = status => ({
  type: FETCHING_FRIENDS,
  payload: status
});

const fetchSuccess = friends => ({
  type: SUCCESS,
  payload: friends
});

const fetchFailure = message => ({
  type: FAILURE,
  payload: message
});

export const fetchFriends = () => dispatch => {
  dispatch(fetchingFriends(true));
  axiosImproved()
    .get(`${baseUrl}/friends`)
    .then(res => {
      dispatch(fetchSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchFailure(err.message));
    })
    .finally(() => dispatch(fetchingFriends(false)));
};
