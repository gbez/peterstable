import {
  LOAD_FEED,
  RESET_FEED,
  SET_PAGE,
  RESET_PAGE,
  SET_QUERY,
  RESET_QUERY,
  LOGIN,
  LOGOUT,
  RESTORE_USER,
  TOGGLE_MODAL,
  TOGGLE_MODAL_WITH_DATA,
  CREATE_DOCUMENT,
  UPDATE_DOCUMENT,
  DELETE_DOCUMENT,
} from "./actionTypes";

import DimSumCart from "../apis/DimSumCartAPI";
import { toast } from "react-toastify";
// Feed
export const resetFeed = () => {
  return {
    type: RESET_FEED,
  };
};

function reloadWindow() {
  setTimeout(() => window.location.reload(), 2500);
}

export const loadFeed = (queryOverride) => async (dispatch, getState) => {
  const response = await DimSumCart.get(
    queryOverride ? queryOverride : getState().query
  )
    .then((response) => {
      dispatch({ type: LOAD_FEED, payload: response });
    })
    .catch((e) => {
      console.log(e);
      toast.error(e.response.data.message);
    });
};

export const toggleModal = (data) => {
  if (data) {
    return {
      type: TOGGLE_MODAL_WITH_DATA,
      payload: data,
    };
  } else {
    return {
      type: TOGGLE_MODAL,
    };
  }
};

export const createDocument = (destination, doc) => async (
  dispatch,
  getState
) => {
  const response = await DimSumCart.post(destination, doc)
    .then((response) => {
      dispatch({ type: CREATE_DOCUMENT, payload: response });
      toast.success("Document Successfully Created");
      reloadWindow();
    })
    .catch((e) => {
      toast.error(e.response.data.message);
    });
};

export const updateDocument = (destination, doc) => async (
  dispatch,
  getState
) => {
  const response = await DimSumCart.patch(destination, doc)
    .then((response) => {
      dispatch({ type: UPDATE_DOCUMENT, payload: response });
      toast.success("Document Successfully Updated");
      reloadWindow();
    })
    .catch((e) => {
      toast.error(e.response.data.message);
    });
};

export const deleteDocument = (destination) => async (dispatch, getState) => {
  const response = await DimSumCart.delete(destination)
    .then((response) => {
      window.location.reload();
      dispatch({ type: DELETE_DOCUMENT, payload: response });
      toast.success("Document Successfully Deleted");
      reloadWindow();
    })
    .catch((e) => {
      toast.error(e.response.data.message);
    });
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
export const restoreUser = () => async (dispatch) => {
  const response = await DimSumCart.get("/users/whoAmI")
    .then((response) => {
      dispatch({ type: RESTORE_USER, payload: response });
    })
    .catch((e) => {
      toast.error(e.response.data.message);
    });
};

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

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
