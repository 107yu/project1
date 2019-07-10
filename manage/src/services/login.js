import request from "../utils/request";

export function logins(params) {
  console.log("params00....", params);
  return request.post("/user/login", params);
}
