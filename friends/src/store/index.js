import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import authReducers from "../reducers/authReducers";
import friendsReducer from "../reducers/friendsReducer";

const reducers = combineReducers({
  friends: friendsReducer,
  auth: authReducers
});

export default createStore(
  reducers,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
