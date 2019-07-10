import React, { Component,useState,useEffect } from 'react'
import "./login.css"
import { Form, Icon, Input, Button, Checkbox,message} from 'antd';
import { connect } from 'dva';
function Login(props){
    useEffect(()=>{
        if(props.isLogin===1){
            message.success("登陆成功")
            let path="/main";
            if(props.history.search){
                path=decodeURIComponent(props.history.search.split("=")[1]) 
            }
            props.history.push(path)
        }else if(props.isLogin===0){
            message.error("登陆失败")
        }
    },[props.isLogin])
    let {getFieldDecorator}=props.form
    let handleSubmit=(e)=>{
        e.preventDefault();
        props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
            props.login({user_name:values.username,user_pwd:values.password})  
        }
        });
    }
    return (
        <div className="login_wrapper">
            <div className="login_wrap">
                <Form onSubmit={handleSubmit} className="login-form">
                    <Form.Item>
                    {getFieldDecorator('username', {
                        validateTrigger:"onBlur",
                        rules: [
                            { required: true, message: 'Please input your username!' },
                            {pattern:/^[a-zA-Z0-9]{5,15}$/,message:"Please input your correct username"}
                        ],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="请输入用户名"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('password', {
                       validateTrigger:"onBlur",
                       rules: [
                           { required: true, message: 'Please input your passward!' },
                           {max:15,min:6,message:"Please input your correct passward!"},
                           {pattern:/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!#@*&.])[a-zA-Z\d!#@*&.]*$/,
                            message:"Please input your correct passward"}
                       ],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="请输入用户密码"
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
                    Or <a href="">注册</a>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
let mapStateToProps=state=>{
    return {
        ...state.login
    }
}
let mapDispatchToProps=dispatch=>{
    return {
        login:payload=>{
            dispatch({
                type:"login/login",
                payload
            })
        }
    }

}
 
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(Login))
