import React from 'react';
import { connect } from 'dva';
import {injectIntl} from 'react-intl';
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
            {
              props.myView.map(item=>{
                return  <SubMenu
                        key={item.name}
                        title={<span>
                            <Icon type="mail" />
                            <span>{props.intl.formatMessage({id:item.name})}</span>
                          </span>
                        }
                      >
                        {
                          item.children.map(value=>{
                            return <Menu.Item key={value.name}><Link to={value.path}>{props.intl.formatMessage({id:value.name})}</Link></Menu.Item>
                          })
                        }
                      </SubMenu> 
                        })
            }
            {/* <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="mail" />
                  <span>{props.intl.formatMessage({id: 'router.questions'})}</span>
                </span>
              }
            >
              <Menu.Item key="1"><Link to="/main/addquestion">{props.intl.formatMessage({id:'router.questions.add'})}</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/main/questiontype">{props.intl.formatMessage({id:'router.questions.view'})}</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/main/watchquestion">{props.intl.formatMessage({id:'router.questions.type'})}</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="user" />
                  <span>{props.intl.formatMessage({id: 'router.user'})}</span>
                </span>
              }
            >
              <Menu.Item key="4"><Link to="/main/adduser">{props.intl.formatMessage({id:'router.user.add'})}</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/main/showuser">{props.intl.formatMessage({id:'router.user.show'})}</Link></Menu.Item>
            </SubMenu>  
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="user" />
                  <span>{props.intl.formatMessage({id:'router.exam'})}</span>
                </span>
              }
            >
              <Menu.Item key="6"><Link to="/main/addexam">{props.intl.formatMessage({id: 'router.exam.add'})}</Link></Menu.Item>
              <Menu.Item key="7"><Link to="/main/examlist">{props.intl.formatMessage({id:'router.exam.list'})}</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="project" />
                  <span>{props.intl.formatMessage({id:'router.class'})}</span>
                </span>
              }
            >
              <Menu.Item key="8"><Link to="/main/grade">{props.intl.formatMessage({id:'router.class.grade'})}</Link></Menu.Item>
              <Menu.Item key="9"><Link to="/main/room">{props.intl.formatMessage({id: 'router.class.room'})}</Link></Menu.Item>
              <Menu.Item key="10"><Link to="/main/student">{props.intl.formatMessage({id:'router.class.student'})}</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub5"
              title={
                <span>
                  <Icon type="project" />
                  <span>{props.intl.formatMessage({id:'router.marking'})}</span>
                </span>
              }
            >
              <Menu.Item key="11"><Link to="/main/page">{props.intl.formatMessage({id:'router.marking.wait'})}</Link></Menu.Item>
            </SubMenu> */}
          </Menu>
        </div>
  );
}
const mapStateToProps = state => {
  return {
    myView:state.login.myView,
    forbiddenView:state.login.forbiddenView
  };
};
export default injectIntl(connect(mapStateToProps)(Sidebar));
