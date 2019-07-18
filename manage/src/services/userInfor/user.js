import request from '../utils/request';
//获取当前用户的信息----原理：登录时输入密码和用户名，返回登录态，所以在获取用户信息的时候即使不传参也可以根据登录态获取到信息，
export function getUserInfor() {
    return request.get('/user/userInfo');
}