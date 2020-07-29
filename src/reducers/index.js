import { combineReducers } from "redux";
import {
  LOAD_FEED,
  RESET_FEED,
  SET_PAGE,
  RESET_PAGE,
  SET_SELECTED_OBJECT,
  RESET_SELECTED_OBJECT,
  SET_QUERY,
  RESET_QUERY,
  LOGIN,
  LOGOUT,
  TOGGLE_MODAL,
} from "../actions/actionTypes";

const feedReducer = (feed = [], action) => {
  if (action.type === LOAD_FEED) {
    return action.payload;
  } else if (action.type === RESET_FEED) {
    return null;
  }
  return feed;
};

const modalReducer = (modalContent = null, action) => {
  if (action.type === TOGGLE_MODAL) {
    if (action.payload) {
      return action.payload;
    } else {
      return null;
    }
  }
  return modalContent;
};

const selectedObjectReducer = (selectedObject = null, action) => {
  if (action.type === SET_SELECTED_OBJECT) {
    return action.payload;
  } else if (action.type === RESET_SELECTED_OBJECT) {
    return null;
  }
  return selectedObject;
};

const pageReducer = (page = null, action) => {
  if (action.type === SET_PAGE) {
    return action.payload;
  } else if (action.type === RESET_PAGE) {
    return null;
  }
  return page;
};

const queryReducer = (query = null, action) => {
  if (action.type === SET_QUERY) {
    return action.payload;
  } else if (action.type === RESET_QUERY) {
    return null;
  }
  return query;
};

const authReducer = (user = null, action) => {
  if (action.type === LOGIN) {
    return action.payload;
  } else if (action.type === LOGOUT) {
    return null;
  }
  return user;
};

export default combineReducers({
  feed: feedReducer,
  modal: modalReducer,
  selectedObject: selectedObjectReducer,
  page: pageReducer,
  query: queryReducer,
  user: authReducer,
});
