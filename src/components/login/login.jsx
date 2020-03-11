import React, { Component } from 'react';
import { Form, Input, Button } from 'antd'

import '@/assets/css/login.less'

export default class Index extends Component {

    render() {
        // input组件 - 布局
        const tailLayout = {
            wrapperCol: { offset: 0, span: 18 },
        };

        // 账号密码填写后
        const onFinish = values => {
            const uName = values.uName
            const uPwd = values.uPwd
            this.props.goLogin(uName, uPwd)
        };

        // 输入有空时
        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        return (
            <div className="login">
                <div className="login-con">
                    <h1>Gper教育后台管理系统</h1>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            {...tailLayout}
                            label="账号"
                            name="uName"
                            rules={[{ required: true, message: '账号不能为空' }]}
                            className="form-item"
                        >
                            <Input style={{}} />
                        </Form.Item>

                        <Form.Item
                            {...tailLayout}
                            label="密码"
                            name="uPwd"
                            rules={[{ required: true, message: '密码不能为空' }]}
                            className="form-item"
                        >
                            <Input.Password visibilityToggle={false} />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{width:'300px'}}>
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        )
    }
}