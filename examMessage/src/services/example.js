import request from '../utils/request';

export function login() {
  return request('/user/login');
}
