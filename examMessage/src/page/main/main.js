import React from 'react'
import "../main/main.css"
import { Layout, Menu, Icon } from 'antd';
import { Route,Link,Redirect } from 'dva/router';
import AddQuestion from "../main/testMessage/addQuestions"
import QuestionsType from "../main/testMessage/questionsType"
import WatchQuestions from "../main/testMessage/watchQuestions"
import AddExam from "../main/examMessage/addExam"
import ExamList from "../main/examMessage/examList"
import ExamPaperClassmate from "../main/MarkingManage/examPaperClassmate"
import AddUser from "../main/usersMessage/addUsers"
import ShowUser from "../main/usersMessage/showUsers"
import Class from "../main/classMessage/class"
import Room from "../main/classMessage/room"
import Student from "../main/classMessage/student"
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
function Main(){
    return (
        <div className="home_wrapper">
            <header className="home_header">
                <div className="home_logo">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg"/>
                </div>
                <div className="home_user"></div>
            </header>
            <Layout style={{ background: '#fff', height:"100%" }}>
                <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                theme="dark" mode="inline"
                style={{ width: 200 ,height:"100%"}}
                defaultOpenKeys={['sub1']}
                mode="inline"
                >
                <SubMenu
                    key="sub1"
                    title={
                    <span>
                        <Icon type="sliders" />
                        <span>试卷管理</span>
                    </span>
                    }
                >
                    <Menu.Item key="1"><Link to="/main/addQuestions">添加试题</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/main/questionsType">试题分类</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/main/watchQuestions">查看试题</Link></Menu.Item>
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
                    <Menu.Item key="4"><Link to="/main/addUser">添加用户</Link></Menu.Item>
                    <Menu.Item key="5"><Link to="/main/showUser">用户展示</Link></Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub3"
                    title={
                    <span>
                        <Icon type="calendar" />
                        <span>考试管理</span>
                    </span>
                    }
                >
                    <Menu.Item key="6"><Link to="/main/addExam">添加考试</Link></Menu.Item>
                    <Menu.Item key="7"><Link to="/main/examList">试卷列表</Link></Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub4"
                    title={
                    <span>
                        <Icon type="home" />
                        <span>班级管理</span>
                    </span>
                    }
                >
                    <Menu.Item key="8"><Link to="/main/class">班级管理</Link></Menu.Item>
                    <Menu.Item key="9"><Link to="/main/room">教室管理</Link></Menu.Item>
                    <Menu.Item key="10"><Link to="/main/student">学生管理</Link></Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub5"
                    title={
                    <span>
                        <Icon type="profile" />
                        <span>阅卷管理</span>
                    </span>
                    }
                >
                    <Menu.Item key="11"><Link to="/main/ExamPaperClassmate">待批班级</Link></Menu.Item>
                </SubMenu>
            </Menu>
            </Sider>
                <Content style={{ padding: '0 24px', height:"100%",background:"#f0f2f5"}}>
                    <Route path="/main/addQuestions"  component={AddQuestion}></Route>
                    <Route path="/main/questionsType"  component={QuestionsType}></Route>
                    <Route path="/main/watchQuestions"  component={WatchQuestions}></Route>
                    <Route path="/main/addExam"  component={AddExam}></Route>
                    <Route path="/main/examList"  component={ExamList}></Route>
                    <Route path="/main/addUser"  component={AddUser}></Route>
                    <Route path="/main/showUser"  component={ShowUser}></Route>
                    <Route path="/main/class"  component={Class}></Route>
                    <Route path="/main/room"  component={Room}></Route>
                    <Route path="/main/student"  component={Student}></Route>
                    <Route path="/main/examPaperClassmate"  component={ExamPaperClassmate}></Route>
                </Content>
            </Layout>
        </div>
    )
}
export default Main;
