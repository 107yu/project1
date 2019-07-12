import {watchquestions} from "../services/index"
export default {
  //命名空间：
  namespace: 'watch',
  //模块状态：
  state: {
      questions:[]
  },
  //订阅：
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line  
      
    },
  },
  //异步方法：
  effects: {
    *allquestions({}, { call, put }) {  // eslint-disable-line 考试类型
          let data=yield call(watchquestions)  
          if(data.code===1){
            yield put({
              type:"questionData",
              payload:data.data
            })  
          }
          
    }
  },
  //同步方法：只能在这里修改state
  reducers: {
    questionData(state, action) {
          return {...state,questions:action.payload}
    },
    
  },
};