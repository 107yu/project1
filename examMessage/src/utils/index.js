import Cookie from "js-cookie"
let key="authoration"
export function SetToken(val){
    //设置cookie
    let data=new Date() //获取当前时间
    let expries=data.getTime()+10*60*60*1000; 
    data.setTime(expries)
    Cookie.set(key,val,{expires:data})  
}
export function getToken(){
    //什么时候获取token
    return Cookie.get(key)
}
export function RemoveToken(){
    //移出token
    Cookie.remove(key)
}