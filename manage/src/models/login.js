import {login} from "../services/index"
export default {

    namespace: 'login',
  
    state: {
        isLogin:false
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *login({ payload,type }, { call, put }) {  // eslint-disable-line
           console.log("payload....",payload,type)
           let data=yield call(login,payload)
           //相当于dispatch
           yield put({
               type:"updataLogin",
               payload:data.code===1
           })
      },
    },
  
    reducers: {
      updataLogin(state, action) {
            console.log("action``````",action)
            return {...state,isLogin:action.payload}
      },
    },
  
  };