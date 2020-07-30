import { combineReducers } from "redux";
import {
  LOAD_FEED,
  RESET_FEED,
  SET_PAGE,
  RESET_PAGE,
  SET_QUERY,
  RESET_QUERY,
  LOGIN,
  LOGOUT,
  TOGGLE_MODAL,
  TOGGLE_MODAL_WITH_DATA,
  CREATE_DOCUMENT,
  UPDATE_DOCUMENT,
  DELETE_DOCUMENT,
  RESTORE_USER,
} from "../actions/actionTypes";

const feedReducer = (feed = [], action) => {
  if (action.type === LOAD_FEED) {
    return action.payload;
  } else if (action.type === RESET_FEED) {
    return null;
  }
  return feed;
};

const modalReducer = (showModal = false, action) => {
  if (action.type === TOGGLE_MODAL_WITH_DATA) {
    return action.payload;
  } else if (action.type === TOGGLE_MODAL) {
    if (showModal == false) {
      return true;
    } else {
      return false;
    }
  }

  return showModal;
};

const documentReducer = (document = null, action) => {
  switch (action.type) {
    case CREATE_DOCUMENT:
      return action.payload;
      break;
    case UPDATE_DOCUMENT:
      return action.payload;
      break;
    case DELETE_DOCUMENT:
      return action.payload;
      break;
  }
  return document;
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
  } else if (action.type === RESTORE_USER) {
    return action.payload;
  } else if (action.type === LOGOUT) {
    return null;
  }
  return user;
};

export default combineReducers({
  feed: feedReducer,
  modal: modalReducer,
  page: pageReducer,
  query: queryReducer,
  user: authReducer,
});
