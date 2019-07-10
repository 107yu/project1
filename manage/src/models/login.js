import { logins } from "../services/index";
export default {
  namespace: "login",

  state: {
    isLogin: false
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  },

  effects: {
    *login({ payload, type }, { call, put }) {
      console.log("payload00000....", payload);
      console.log("login....", logins);
      let data = yield call(logins, payload);
      console.log("data000000000...", data);
      // eslint-disable-line
      yield put({
        type: "upDataLogin",
        payload: data.code == 1
      });
    }
  },

  reducers: {
    upDataLogin(state, action) {
      //console.log(action);
      return { ...state, isLogin: action.payload };
    }
  }
};
