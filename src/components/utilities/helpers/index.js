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
