import React from 'react';
import { connect } from 'dva';
import { Route,Redirect} from 'dva/router';
import styles from "./main.css"
import {Spin } from 'antd';
import Grade from "./classRoom/grade"
import Room from "./classRoom/room"
import Student from "./classRoom/student"
import AddExam from "./exam/addexam/addExam"
import ExamList from "./exam/examList/eaxmList"
import AddQuestion from "./question/addQuestion"
import QuestionType from "./question/questionsType"
import WatchQuestion from "./question/checkTheitem"
import Questions from "./question/questions/questions"
import AddUser from "./user/addUser"
import ShowUser from "./user/showUser"
import Page from './checking/page';
import ExamEdit from "./exam/addexam/examEdit"
import ExamDetail from "./exam/examList/examDetail"
//引入组件
import Header from "../../components/header/header"
import Sidebar from "../../components/sidebar/sidebar"
function IndexPage(props) {
  return (
    <div className={styles.layout}>
        <Header></Header>
      <div className={styles.layout_content}>
        <Sidebar></Sidebar>
        <div className={styles.content}>
          <div className={styles.layout_main}>
            {/* <Route path="/main/addquestion" component={AddQuestion} />
            <Route path="/main/questiontype" component={QuestionType} />
            <Route path="/main/watchquestion" component={WatchQuestion} />

            <Route path="/main/adduser" component={AddUser} />
            <Route path="/main/showuser" component={ShowUser} />

             <Route path="/main/addexam" component={AddExam} />
            <Route path="/main/examlist" component={ExamList}/>

            <Route path="/main/grade" component={Grade} />
            <Route path="/main/room" component={Room} />
            <Route path="/main/student" component={Student} /> */}
            {
              props.myView.map(item=>{
                return item.children.map(value=>{
                  return <Route path={value.path} component={value.component}></Route>
                })
              })
            }
            {
              props.forbiddenView.map(item=>{
                return <Redirect path="/403"></Redirect>
              })
            }
            <Redirect path="/404"></Redirect>
         

            {/* <Route path="/main/page" component={Page} /> */}

            <Route path="/main/questions/:id" component={Questions} />
            <Route path="/main/examEdit" component={ExamEdit} />
            <Route path="/main/examDetail" component={ExamDetail} />
          </div>
          {props.global ? <div className={styles.loading}><Spin /></div> : null}
        </div>

      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    ...state.checkTheItem,
    global: state.loading.global,
    myView:state.login.myView,
    forbiddenView:state.login.forbiddenView
  };
};

export default connect(mapStateToProps)(IndexPage);
