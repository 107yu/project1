import request from "../utils/request";
//所有课程
export function Alllessons(){
  return request.get("/exam/subject")
}
// 所有考试类型
export function Allexamtype() {
  return request.get("/exam/examType")
}
//所有试题
export function CheckAll() {
  console.log("params00....");
  return request.get("/exam/questions/new");
 
}
