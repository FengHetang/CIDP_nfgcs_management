import React, {Component} from 'react';
import {Button, Form, Input,Card} from "antd";
import { UserOutlined,UnlockOutlined } from '@ant-design/icons';
import {Row,Col} from "antd/es";
import "./LoginForm.css"
import Logo from "@assets/img/login/CIDPNFG_logo.png"

class LoginForm extends Component {
    render() {
        return (
            <div>
                <Card className={"LogonCard"}>
                    <Form
                        className={"LoginForm"}>
                        <Form.Item className={"CardTop"}>
                            <Row>
                                <Col span={2}><img src={Logo} alt="" className={"logo"}/></Col>
                                <Col span={20} offset={2}><h3 className={"title"}>防灾国护资源信息管理系统</h3></Col>
                            </Row>


                        </Form.Item>
                        <Form.Item>
                            <Input size={"large"} placeholder="请输入用户名" prefix={<UserOutlined />} />
                        </Form.Item>
                        <Form.Item>
                            <Input.Password  placeholder={"请输入密码"} size={"large"} prefix={<UnlockOutlined />} />
                        </Form.Item>
                        <Form.Item>
                            <Row>
                                <Col span={12}><Input size={"large"} placeholder={"请输入验证码"} /></Col>
                                <Col span={8} offset={4}><Input size={"large"}/></Col>
                            </Row>
                        </Form.Item>
                        <Form.Item className={"form_button"}>
                            <Row>
                                <Col span={8} offset={3}><Button type="primary">登录</Button></Col>
                                <Col span={8} offset={2}><Button type="primary">注册</Button></Col>
                            </Row>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default LoginForm;