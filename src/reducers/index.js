import { combineReducers } from "redux";
import {
  LOAD_FEED,
  RESET_FEED,
  SET_PAGE,
  RESET_PAGE,
  SET_SELECTED_OBJECT,
  RESET_SELECTED_OBJECT,
} from "../actions/actionTypes";

const feedReducer = (state = [], action) => {
  if (action.type === LOAD_FEED) {
    return action.payload;
  } else if (action.type === RESET_FEED) {
    return null;
  }
  return state;
};

const selectedObjectReducer = (state = null, action) => {
  if (action.type === SET_SELECTED_OBJECT) {
    return action.payload;
  } else if (action.type === RESET_SELECTED_OBJECT) {
    return null;
  }
  return state;
};

const pageReducer = (state = null, action) => {
  if (action.type === SET_PAGE) {
    return action.payload;
  } else if (action.type === RESET_PAGE) {
    return null;
  }
  return state;
};

export default combineReducers({
  feed: feedReducer,
  selectedObject: selectedObjectReducer,
  page: pageReducer,
});
