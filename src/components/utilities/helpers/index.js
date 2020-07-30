import decoded from "jwt-decode";
import { toast } from "react-toastify";

export function isExpired(token) {
  var decodedToken = decoded(token, { complete: true });
  var now = new Date();
  if (decodedToken.exp * 1000 < now.getTime()) {
    toast.error("JWT Token is Invalid! Log In Again");
    localStorage.removeItem("token");
    return true;
  } else {
    return false;
  }
}

export function filterFeed(feed, filter, numItems) {
  var newFeed = feed.filter(function (item) {
    return item[filter.key].includes(filter.value);
  });
  return numItems ? newFeed.slice(0, numItems) : newFeed;
}

export function getSafe(fn, defaultVal) {
  try {
    return fn();
  } catch (e) {
    return defaultVal;
  }
}

export function numSlash(num) {
  return window.location.pathname.split("/").length - 1 > num;
}

export function isObject(data) {
  return typeof data !== "boolean" ? true : false;
}

export function firstLetterToUpper(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
