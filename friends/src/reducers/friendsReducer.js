import { FETCHING_FRIENDS, SUCCESS, FAILURE } from "../actions/types";

const initialState = {
  fetchingFriends: false,
  friends: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return {
        ...state,
        fetchingFriends: action.payload
      };
    case SUCCESS:
      return {
        ...state,
        friends: action.payload
      };
    case FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
