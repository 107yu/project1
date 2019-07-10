import {login} from "../services/index"
export default {
    namespace:'login',
    state: {
        isLogin:false
    },
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *login({ payload,type }, { call, put }) {  // eslint-disable-line
        let data=yield call(login,payload)
        console.log(data)
        yield put({ type: 'updateLogin',payload:data.code==1});
      },
    },
  
    reducers: {
     updateLogin(state, action) {
        return { ...state, isLogin:action.payload };
      },
    },
  
  };
  