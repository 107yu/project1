import React, { useState, useEffect } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { connect } from "dva";
import styles from "./loginPage.scss";
function LoginPage(props) {
  //console.log("props...", props);

  // 模拟componentDidMount
  useEffect(() => {
    // props.login({ user_name: "chenmanjie", user_pwd: "Chenmanjie123!" });
  }, []);
  if (props.isLogin) {
    console.log("props.isLogin.........", props.isLogin);
    props.history.push("/main");
  }
  let handleSubmit = () => {
    props.form.validateFields((err, values) => {
      if (!err) {
        props.login({ user_name: values.username, user_pwd: values.password });
        console.log("Received values of form: ", values);
      }
    });
  };
  // 从Form高阶组件中拿到校验组件
  const { getFieldDecorator } = props.form;
  return (
    <div className="login-from-wrapper">
      <div className={styles.box}>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("username", {
              validateTrigger: "onBlur",
              rules: [
                { required: true, message: "Please input your username!" },
                {
                  min: 3,
                  max: 10,
                  message: "please input your correct username!"
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                {
                  pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!#@*&.]).*$/,
                  message: "Please input your correct password!"
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>记住密码</Checkbox>)}
            <a className="login-form-forgot" href="">
              忘记密码
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  console.log("state...", state);
  return { ...state.login };
};
const mapDispatchToPorps = dispatch => {
  return {
    login: payload => {
      dispatch({
        type: "login/login",
        payload
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPorps
)(Form.create()(LoginPage));
