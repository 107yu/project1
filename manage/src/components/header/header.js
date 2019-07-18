import React,{useEffect,useState} from 'react';
import { connect } from 'dva';
import styles from "./header.scss"
import { Dropdown, Menu,Modal,Form,Input,} from 'antd';
import Axios from 'axios';
function Header(props) {
  const { getFieldDecorator } =props.form;
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          个人中心
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          我的班级
        </a>
      </Menu.Item>
      <Menu.Divider/>
      <Menu.Item key="3">
          设置
      </Menu.Item>
      <Menu.Item key="4">
          退出登录
      </Menu.Item>
    </Menu>
  );
  //重新设置个人信息：
  let [visible,setVisible]=useState(false)
  let [img,setImg]=useState("")
  let  showModal = () => {
      setVisible(true)
  };
  let handleSubmit = () => {
   props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        values.avatar=img
        values.user_id=props.userInfo.data.user_id
        console.log(values)
        props.upDateUser(values)
      }
    });
  };

  let handleOk =()=> {
     setVisible(false)
     handleSubmit()
    
  };
  let  handleCancel =() => {
    setVisible(false)
  };
  let changeInfo=()=>{
    showModal()
  }
  //传头像：
  let changeAvatar=(e)=>{
    let form = new FormData();
    form.append(e.target.files[0].name,e.target.files[0])
    Axios.post('http://123.206.55.50:11000/upload',form).then(res=>{
      let url=res.data.data[0].path
      setImg(url)
    })
  }
  return (
    <div className={styles.header}>
        <h1 className={styles.logo}><img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg' /></h1>
        <div className={styles.settings}>
            <Dropdown overlay={menu}>
                <span onClick={changeInfo}>
                    <b className={styles.avatar}>
                      <img src={props.userInfo.data&&props.userInfo.data.avatar} />
                    </b>
                    {props.userInfo.data&&props.userInfo.data.user_name}
                </span>
            </Dropdown>
        </div>
        <Modal
          title="设置个人信息"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
           <Form>
              <Form.Item label="用户名">
                {getFieldDecorator('user_name')(<Input />)}
              </Form.Item>
              <Form.Item label="密码">
                {getFieldDecorator('user_pwd')(<Input />)}
              </Form.Item>
              <Form.Item label="头像">
                <input type="file" className={styles.ipt} onChange={changeAvatar}/>
                <span className={styles.chooseImg}>
                  <img src={img}/>
                </span>
              </Form.Item>
            </Form>
        </Modal>
  </div>
  );
}
const mapStateToProps = state => {
  console.log(state.login)
  return {
   ...state.login
  };
};
const mapDispatchToProps=(dispatch)=>{
  return {
    upDateUser(payload){
      dispatch({
        type:"user/upDateUserInfo",
        payload,
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(Header));
