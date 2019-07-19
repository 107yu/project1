import {login,userInfor,getUserInfor} from "../services/index"
import {setToken,getToken} from "../utils/index"
import {routerRedux} from "dva/router"
export default {
  //命名空间：
  namespace: 'login',
  //模块状态：
  state: {
      isLogin:-1,
      userInfo: {},
  },
  //订阅：
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line  在这里监听url状况----利用redux做路由跳转
      return history.listen(({ pathname }) => {
        // 1.判断去的页面是否是登陆页面-----如果不是登录页面
        if (pathname.indexOf('/login') === -1) {
          //  判断是否有登陆态----------如果没有登陆的状态，则跳转到登录页面
          if (!getToken()){                     
            dispatch(routerRedux.replace({
              pathname: `/login`,
              search: `?redirect=${encodeURIComponent(pathname)}` //把输入的页面url进行编码，登录之后再通过这个编码，找到你要去的页面
            }))
          }
        }else{ //如果去的页面是登录页面，判断有没有登陆过，如果登陆过，则直接跳到首页
          if (getToken()){
             dispatch(routerRedux.replace({
              pathname: `/main`,
            }))
          }
        }
        if(getToken()){
           // -------获取用户信息------
           dispatch({
            type: 'getUserInfo'
          })
        }
      });
    },
  },
  //异步方法：
  effects: {
    *login({ payload }, { call, put }) {     //登录
          let data=yield call(login,payload)   //返回值data就是登录状态，成功或者失败
          if(data.code===1){
            setToken(data.token)
            let user=yield call(userInfor)    //获取用户信息---进行本地存储
            localStorage.setItem("userInfor",JSON.stringify(user))  //获取用户信息---进行本地存储
          }
          //相当于dispatch修改action
          yield put({
              type:"updataLogin",
              payload:data.code
          })
    },
    *getUserInfo(action, {call, put, select}){   //获取用户信息-----
      let userInfo = yield select(state=>state.login.userInfo);  //判断是否已经获取过了，如果获取过了就不在获取了---
      if (Object.keys(userInfo).length){
        return;
      }
      let data = yield getUserInfor();       //如果没有获取过，再进行获取用户信息
      yield put({
        type: 'userInfo',
        payload: data
      })
    }
  },
  //同步方法：只能在这里修改state
  reducers: {
    updataLogin(state, action) {  //登录
          return {...state,isLogin:action.payload}
    },
    userInfo(state, action){  //获取到用户的信息
      return { ...state, userInfo: action.payload };
    },
    reset(state){  //重置用户信息
      return { ...state, userInfo:{} };
    }
  },
};