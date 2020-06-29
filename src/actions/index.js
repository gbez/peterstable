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
} from "./actionTypes";

import DimSumCart from "../apis/DimSumCartAPI";
// Feed
export const resetFeed = () => {
  return {
    type: RESET_FEED,
  };
};

export const loadFeed = () => async (dispatch, getState) => {
  console.log(getState().query);
  const response = await DimSumCart.get(getState().query);
  dispatch({ type: LOAD_FEED, payload: response });
};

// Selected Object
export const setSelectedObject = (object) => {
  return {
    type: SET_SELECTED_OBJECT,
    payload: object,
  };
};

export const resetSelectedObject = () => {
  return {
    type: RESET_SELECTED_OBJECT,
  };
};

// Page
export const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: page,
  };
};

// Query
export const setQuery = (query) => {
  return {
    type: SET_QUERY,
    payload: query,
  };
};

// Auth
export const login = (loginObject) => async (dispatch) => {
  const response = await DimSumCart.post("/users/login", loginObject)
    .then((response) => {
      dispatch({ type: LOGIN, payload: response.data });
      localStorage.setItem("token", response.data.token);
    })
    .catch((e) => {
      alert(e.response.data.message);
    });
};

export const logloginout = () => {
  return {
    type: LOGOUT,
  };
};
