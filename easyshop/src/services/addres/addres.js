import request from '../../utils/request';

//获取地址列表
export function getaddres() {
    return request.get('/address/list');
}
export function addAddress(params) {
    return request.post('/address/save',params);
}