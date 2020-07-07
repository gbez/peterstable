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
