import {
  LOAD_FEED,
  RESET_FEED,
  SET_PAGE,
  RESET_PAGE,
  SET_SELECTED_OBJECT,
  RESET_SELECTED_OBJECT,
} from "./actionTypes";

import DimSumCart from "../apis/DimSumCartAPI";

export const resetFeed = () => {
  return {
    type: RESET_FEED,
  };
};

export const loadFeed = (endpoint, query) => async (dispatch) => {
  //let url = `/${endpoint}?${query}`;
  const response = await DimSumCart.get("/blogposts/");
  dispatch({ type: LOAD_FEED, payload: response });
};

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

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: page,
  };
};
