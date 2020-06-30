import decoded from "jwt-decode";

export function isExpired(token) {
  var decodedToken = decoded(token, { complete: true });
  var now = new Date();
  console.log(decodedToken.exp);
  console.log(now.getTime());
  if (decodedToken.exp * 1000 < now.getTime()) {
    return true;
  }
}
