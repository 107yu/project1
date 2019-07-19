import request from "../../utils/request";
//获取用户信息
export function getUserInfor(){
  return request.get("/user/userInfo")
}

//更新用户信息
export function upDateUserInfo(params){
  return request.put("/user/user",params)
}
export function getAvatar(params){
  return request.post("http://123.206.55.50:11000/upload",params)
}