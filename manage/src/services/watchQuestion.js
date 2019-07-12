import request from '../utils/request';
//获取所有的试题：
export function watchquestions(){
    return request.get('/exam/questions/new')
}