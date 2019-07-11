import { CheckAll, Alllessons, Allexamtype} from "@/services/index";
export default {
  //命名空间
  namespace: "checkTheItem",
  //模块状态
  state: {
    list: [],
    allthelessons:[],//所有课程
    allexamtype:[]//所有考试类型
  },
  //订阅
  subscriptions: {
    setup({ dispatch, history }) { }
  },
  /**
   *异步操作
   */
  effects: {
    *All({ payload, type }, { call, put }) {
      console.log(type);
      let data = yield call(CheckAll, payload);
      // console.log("11111", data.data);
      yield put({
        type: "upDataLogin",
        payload: data.data
      });
    },
    *Lessons({payload,type},{call,put}){
      let  lessons=yield call(Alllessons,payload);
      yield put({
        type:"AllTheLessons",
        payload: lessons.data
      })

    },
    *examtype({payload,type},{call,put}){
      let allexamtype=yield call(Allexamtype,payload);
      yield put({
        type: "allexamType",
        payload: allexamtype.data
      });
    }
  },
  //同操作
  reducers: {
    upDataLogin(state, action) {
      //console.log(action);
      return { ...state, list: action.payload };
    },
    //所有课程
    AllTheLessons(state,action){
      console.log(action);
      return { ...state, allthelessons:action.payload}
    },
    //所有考试类型
    allexamType(state, action){
      return { ...state, allexamtype: action.payload }
    }
  }
};
