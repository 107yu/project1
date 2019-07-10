import request from '../utils/request';
//获取所有的考试类型
export function examType() {
  return request.get('/exam/examType');
}
//获取所有的课程
export function subject() {
    return request.get('/exam/subject');
}
//获取所有的试题
export function questionsType() {
    return request.get('/exam/getQuestionsType');
}

//添加试题:
export function addquestions(params){
  return request.post('/exam/questions',params);
}