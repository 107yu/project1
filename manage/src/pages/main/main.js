import React from 'react';
import { connect } from 'dva';
import {Route,Link } from 'dva/router';
import styles from "./main.css"
import { Menu, Icon } from 'antd';
import ClassList from "./checking/classList"
import Grade from "./classRoom/grade"
import Room from "./classRoom/room"
import Student from "./classRoom/student"
import AddExam from "./exam/addExam"
import ExamList from "./exam/eaxmList"
import AddQuestion from "./question/addQuestion"
import QuestionType from "./question/questionsType"
import WatchQuestion from "./question/watchQuestion"
import AddUser from "./user/addUser"
import ShowUser from "./user/showUser"
const { SubMenu } = Menu;
function IndexPage() {
  let handleClick = e => {
    console.log('click ', e);
  };
  return (
    <div className={styles.layout}>
        <div className={styles.header}></div>
        <div className={styles.layout_content}>
          <div className={styles.slide}>
            <Menu
              onClick={handleClick}
              style={{ width: 200 }}
              defaultSelectedKeys={[]}
              defaultOpenKeys={[]}
              mode="inline"
              theme="dark"
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="mail" />
                    <span>试题管理</span>
                  </span>
                }
              >
                <Menu.Item key="1"><Link to="/main/addquestion">添加试题</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/main/questiontype">试题分类</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/main/watchquestion">查看试题</Link></Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                   <Icon type="user" />
                    <span>用户管理</span>
                  </span>
                }
              >
                <Menu.Item key="4"><Link to="/main/adduser">添加用户</Link></Menu.Item>
                <Menu.Item key="5"><Link to="/main/showuser">用户展示</Link></Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="schedule" />
                    <span>考试管理</span>
                  </span>
                }
              >
                <Menu.Item key="6"><Link to="/main/addexam">添加考试</Link></Menu.Item>
                <Menu.Item key="7"><Link to="/main/exam                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  list">试卷列表</Link></Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon type="project" />
                    <span>班级管理</span>
                  </span>
                }
              >
                <Menu.Item key="8"><Link to="/main/grade">班级管理</Link></Menu.Item>
                <Menu.Item key="9"><Link to="/main/room">教室管理</Link></Menu.Item>
                <Menu.Item key="10"><Link to="/main/student">学生管理</Link></Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub5"
                title={
                  <span>
                    <Icon type="project" />
                    <span>阅卷管理</span>
                  </span>
                }
              >
                <Menu.Item key="11"><Link to="/main/classlist">待批班级</Link></Menu.Item>
              </SubMenu>
            </Menu>
    );
          </div>
          <div className={styles.content}>
            <Route path="/main/classlist"  component={ClassList} />
            <Route path="/main/grade"  component={Grade} />
            <Route path="/main/room"  component={Room} />
            <Route path="/main/student"  component={Student} />
            <Route path="/main/addexam"  component={AddExam} />
            <Route path="/main/examlist"  component={ExamList} />
            <Route path="/main/addquestion"  component={AddQuestion} />
            <Route path="/main/questiontype"  component={QuestionType} />
            <Route path="/main/watchquestion"  component={WatchQuestion} />
            <Route path="/main/adduser"  component={AddUser} />
            <Route path="/main/showuser"  component={ShowUser} />
          </div>
        </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
