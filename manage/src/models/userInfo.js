import { upDateUserInfo, } from "../services/index"
export default {
  //命名空间：
  namespace: 'user',
  //模块状态：
  state: {
        
  },
  //异步方法：
  effects: {
    *upDateUserInfo({payload}, { call, put }) {  //  考试类型
        console.log(payload)
      let data = yield call(upDateUserInfo,payload)
      console.log(data)
    //   if (data.code === 1) {
    //     sessionStorage.setItem("examType", JSON.stringify(data.data))
    //     yield put({
    //       type: "examTypeData",
    //       payload: data.data
    //     })
    //   }

    },
  },
  //同步方法：只能在这里修改state
  reducers: {
    AvatarData(state, action) {
      return { ...state, newAvatar: action.payload }
    }
  },
};