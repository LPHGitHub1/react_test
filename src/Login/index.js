import React , { Component }from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './login.css'
import axios from "axios";

class NormalLoginForm extends Component{



    render(){
        const { getFieldDecorator } = this.props.form;
        return(

            <div className='backend'>
                <div className="mainContent">
                    <Form onSubmit={this.handleSubmit} className="login-form">

                        <Form.Item>
                            {getFieldDecorator('username', {rules: [{ required: true, message: '请输入用户名' }],})
                                (
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="账号"
                                    />,
                                )
                            }
                        </Form.Item>

                        <Form.Item>
                            {
                                getFieldDecorator('password', {rules: [{ required: true, message: '请输入密码' }],})
                                (
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码"
                                    />,
                                )
                            }
                        </Form.Item>

                        <Form.Item>

                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>记住密码</Checkbox>)}
                            <a className="login-form-forgot" href="#">
                                忘记密码？
                            </a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                            <a href="#">没有账号？</a>
                        </Form.Item>

                    </Form>
                </div>
            </div>

        )
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                /*在这里处理点击登录后的事务*/
                axios({
                    method : "POST",
                    url:"http://localhost:8080/login",
                    data:{
                        name : values.username,
                        password : values.password
                    }
                }).then((data)=>{
                    if(data.data === "success"){
                        /*跳转只需要写路由名*/
                        window.location.href="/layout";
                    }

                }).catch((data)=>{
                    console.log(data)
                })


            }
        });
    };

}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;