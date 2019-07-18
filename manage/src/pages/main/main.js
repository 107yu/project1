import React from 'react';
import { connect } from 'dva';
import { Route} from 'dva/router';
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
            <Route path="/main/page" component={Page} />
            <Route path="/main/grade" component={Grade} />
            <Route path="/main/room" component={Room} />
            <Route path="/main/student" component={Student} />
            <Route path="/main/addexam" component={AddExam} />
            <Route path="/main/examlist" component={ExamList} />
            <Route path="/main/addquestion" component={AddQuestion} />
            <Route path="/main/questiontype" component={QuestionType} />
            <Route path="/main/watchquestion" component={WatchQuestion} />
            <Route path="/main/questions/:id" component={Questions} />
            <Route path="/main/adduser" component={AddUser} />
            <Route path="/main/showuser" component={ShowUser} />
            <Route path="/main/examEdit" component={ExamEdit} />
            <Route path="/main/examDetail" component={ExamDetail} />
          </div>
          {props.global ? <div className={styles.loading}><Spin /></div> : null}
        </div>

      </div>
    </div>
  );
}
const mapState = state => {
  return {
    ...state.checkTheItem,
    global: state.loading.global
  };
};

export default connect(mapState)(IndexPage);
