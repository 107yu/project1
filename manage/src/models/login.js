import { logins } from "@/services/index";
import { setToken, getToken } from "@/utils/index";
import { routerRedux } from "dva/router";
export default {
  //命名空间
  namespace: "login",
  //模块状态
  state: {
    isLogin: -1
  },
  //订阅
  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
      return history.listen(({ pathname }) => {
        //判断它去的页面是否是登录页
        if (pathname.indexOf("/login") === -1) {
          //判断是否有登录状态
          if (!getToken()) {
            //没有等登录状态,利用rendeux
            dispatch(
              routerRedux.replace({
                pathname: "/login",
                search: `?redirect=${encodeURIComponent(pathname)}`
              })
            );
          }
        } else {
          //在登录页面
          //有登录态，就跳转到首页
          if (getToken()) {
            //通过redux跳转
            dispatch(
              routerRedux.replace({
                pathname: "/main"
              })
            );
          }
        }
      });
    }
  },
  /**
   *异步操作
   */
  effects: {
    *login({ payload, type }, { call, put }) {
      console.log("payload00000....", payload);
      console.log("login....", logins);
      let data = yield call(logins, payload);
      console.log("data000000000...", data);
      console.log(data);
      if (data.code === 1) {
        console.log(data);
        setToken(data.token);
      }
      // eslint-disable-line
      yield put({
        type: "upDataLogin",
        payload: data.code
      });
    }
  },
  //同操作
  reducers: {
    upDataLogin(state, action) {
      //console.log(action);
      return { ...state, isLogin: action.payload };
    }
  }
};
