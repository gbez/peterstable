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
import { toast } from "react-toastify";
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
      localStorage.setItem("token", response.data.token);
      dispatch({ type: LOGIN, payload: response.data });
      toast.success("Log In Success");
    })
    .catch((e) => {
      toast.error(e.response.data.message);
    });
};

export const logloginout = () => {
  return {
    type: LOGOUT,
  };
};
