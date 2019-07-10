import {getQuestionsType, addQuestionsType,getExamType,getSubject,getQuestions} from "../services/index"
export default {
    namespace:'test',
    state: {
        questionsType:[],
        message:""
        
    },
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
       
       
        },
    },
    effects: {
        *getType({ payload,type }, { call, put }) {  // eslint-disable-line
            let data=yield getQuestionsType()
            if(data.code){
                yield put({
                    type:"questionsType",
                    payload:data.data
                })
            }
      },
        *addType({ payload,type }, { call, put }){
            let data=yield addQuestionsType(payload)
            if(data.code){
                yield put({
                  type:"addInfo",
                  payload:data.msg
                })
            }
        },
        *examType({ payload,type }, { call, put }){
            let data=yield getExamType()
            console.log(data)
        },
        *subject({ payload,type }, { call, put }){
            let data=yield getSubject()
            console.log(data)

        },
        *questions({ payload,type }, { call, put }){
            let data=yield getQuestions()
            console.log(data)
        }
    },
    reducers: {
        questionsType(state,action){
          return {...state,questionsType:action.payload}
        },
        addInfo(state,action){
          return {...state,message:action.payload}
        }
    },
  };