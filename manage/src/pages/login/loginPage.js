import React ,{useEffect,useState}from 'react'
import "./loginPage.scss"
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {connect} from "dva"

function Login (props){
    // useEffect(()=>{

    // },[])
    const {getFieldDecorator}=props.form
    let handleSubmit=(e)=>{
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (!err) {
            // console.log('Received values of form: ', values);
            props.login({'user_name':values.username,'user_pwd':values.pwd}) 
          }
        });

    }
    if(props.isLogin){
        console.log(props)
        props.history.push("/main")
    }
    return (
        <div className="login_page">
            <div className="login">
               <Form  className="login-form" onSubmit={handleSubmit} >
                    <Form.Item>
                        {getFieldDecorator('username', 
                            { 
                                validateTrigger:"onBlur",
                                rules: [
                                    { required: true, message: 'Please input your username!' },
                                    ],
                            })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                            />,
                            )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('pwd', 
                            {   
                                validateTrigger:"onBlur",
                                rules: [
                                    { required: true, message: 'Please input your username!' },
                                    { pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/, message: 'Please input your current pwd!' }
                                    ],
                            })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                            />,
                            )}
                    </Form.Item>
                    <Form.Item>
                        <Checkbox>记住密码</Checkbox>
                        <a className="login-form-forgot" href="">
                            忘记密码
                        </a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
      );
}
    const mapStateToProps=(state)=>{
       return {
            ...state.login
        }
    }
    const mapDispatchToProps=(dispatch)=>{
        return{
            login(payload){
                dispatch({
                    type:"login/login",
                    payload,
                })
            }
        }
    }
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(Login))
