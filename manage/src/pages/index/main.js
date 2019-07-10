import React from "react";
import { Router, Route, Switch, Redirect, Link } from "dva/router";
import Additem from "./testQuestions/AddItem/additem";
import CheckTheitem from "./testQuestions/Checktheitem/checkTheitem";
import Classifty from "./testQuestions/classifty/classifty";
import UsersList from "./userControl/usersList/usersList";
import AddUsers from "./userControl/addUsers/addUsers";
import AddExamination from "./examination/addExamination/addExamination";
import ExaminationPaperList from "./examination/examinationPaperList/examinationPaperList";
import ClassManagement from "./classManagement/classManagement/classManagement";
import ClassroomManagement from "./classManagement/classroomManagement/classroomManagement";
import StudentManagement from "./classManagement/studentManagement/studentManagement";
import AwaitingApprovalClass from "./markingManagement/awaitingApprovalClass/awaitingApprovalClass";
import { connect } from "dva";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
function Homepage(props) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible>
              <div className="logo" />
                  <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                        <SubMenu
                          key="sub1"
                          title={
                            <span>
                              <Icon type="user" />
                              <span>试题管理</span>
                            </span>}>
                              <Menu.Item key="1">
                                <Link to="/main/additem">添加试题</Link>
                              </Menu.Item>
                              <Menu.Item key="2">
                                <Link to="/main/classifty">试题分类</Link>
                              </Menu.Item>
                              <Menu.Item key="3">
                                <Link to="/main/checkTheitem">查看试题</Link>
                              </Menu.Item>
                            </SubMenu>
                            <SubMenu
                              key="sub2"
                              title={
                                <span>
                                  <Icon type="team" />
                                  <span>用户管理</span>
                                </span>
                              }
                            >
                              <Menu.Item key="4">
                                <Link to="/main/AddUsers">添加用户</Link>
                              </Menu.Item>
                              <Menu.Item key="5">
                                <Link to="/main/UsersList">用户展示</Link>
                              </Menu.Item>
                            </SubMenu>
                            <SubMenu
                              key="sub3"
                              title={
                                <span>
                                  <Icon type="team" />
                                  <span>考试管理</span>
                                </span>
                              }
                            >
                              <Menu.Item key="6">
                                <Link to="/main/addExamination">添加考试</Link>
                              </Menu.Item>
                              <Menu.Item key="7">
                                <Link to="/main/examinationPaperList">试卷列表</Link>
                              </Menu.Item>
                            </SubMenu>
                            <SubMenu
                              key="sub4"
                              title={
                                <span>
                                  <Icon type="team" />
                                  <span>班级管理</span>
                                </span>
                              }
                            >
                              <Menu.Item key="8">
                                <Link to="/main/classManagement">班级管理</Link>
                              </Menu.Item>
                              <Menu.Item key="9">
                                <Link to="/main/classroomManagement">教室管理</Link>
                              </Menu.Item>
                              <Menu.Item key="10">
                                <Link to="/main/studentManagement">学生管理</Link>
                              </Menu.Item>
                            </SubMenu>
                            <SubMenu
                              key="sub5"
                              title={
                                <span>
                                  <Icon type="team" />
                                  <span>阅卷管理</span>
                                </span>}>
                              <Menu.Item key="11">
                                <Link to="/main/awaitingApprovalClass">待批班级</Link>
                              </Menu.Item>
                        </SubMenu>
                </Menu>
          </Sider>
          <Layout>
            <Route path="/main/additem" component={Additem} />
            <Route path="/main/classifty" component={Classifty} />
            <Route path="/main/checkTheitem" component={CheckTheitem} />
            <Route path="/main/Userslist" component={UsersList} />
            <Route path="/main/AddUsers" component={AddUsers} />
            <Route path="/main/addExamination" component={AddExamination} />
            <Route path="/main/examinationPaperList" component={ExaminationPaperList}/>
            <Route path="/main/classManagement" component={ClassManagement} />
            <Route path="/main/classroomManagement" component={ClassroomManagement} />
            <Route path="/main/studentManagement" component={StudentManagement} />
            <Route  path="/main/awaitingApprovalClass" component={AwaitingApprovalClass}/>
          </Layout>
    </Layout>
  );
}
export default Homepage;
