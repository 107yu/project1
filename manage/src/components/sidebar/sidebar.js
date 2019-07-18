import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from "./sidebar.scss"
import {Menu, Icon } from 'antd';
const { SubMenu } = Menu;

function Sidebar(props) {
  return (
    <div className={styles.slide}>
          <Menu
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
                  <Icon type="user" />
                  <span>考试管理</span>
                </span>
              }
            >
              <Menu.Item key="6"><Link to="/main/addexam">添加考试</Link></Menu.Item>
              <Menu.Item key="7"><Link to="/main/examlist">考试列表</Link></Menu.Item>
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
              <Menu.Item key="11"><Link to="/main/page">待批班级</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </div>
  );
}
const mapState = state => {
  return {
  
  };
};

export default connect(mapState)(Sidebar);
