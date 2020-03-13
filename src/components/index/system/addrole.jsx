import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { Input, Select, Button, Form } from 'antd'

import Header from '../header'

export default class AddRole extends Component {

    state = {
        opt: {
            userName: ''
        }
    }


    // 提交按钮
    submit() {

    }

    userNameChange() {

    }

    render() {

        const { Option } = Select
        const { TextArea } = Input;

        // input组件 - 布局
        const tailLayout = {
            labelCol: { span: 2 },
            wrapperCol: { offset: 0, span: 10 },
        };

        return (
            <div>
                <Header title={"添加成员"} />
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    component={false}
                >
                    <Form.Item
                        {...tailLayout}
                        label="用户名"
                        name="userhName"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >
                        <Input defaultValue={this.state.opt.userName} placeholder="请输入用户名，用于平台展示" onChange={this.userNameChange.bind(this)}
                            disabled={this.state.isEdit ? true : false} />
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="姓名"
                        name="realName"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >
                        <Input placeholder="请输入真实姓名" />
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="上级节点"
                        name="topJd"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >
                        <Select placeholder="选择机构" >
                            {/* <Option value='咕泡学院'>咕泡学院</Option>
                            <Option value='咕泡学院'>技术研发部</Option> */}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="QQ"
                        name="qq"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >
                        <Input placeholder="请输入工作QQ" />
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="头像"
                        name="photo"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >

                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="简介"
                        name="synopsis"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >
                        <TextArea rows={4} placeholder='请输入角色描述' />
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="密码"
                        name="pwd"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >
                        <Input.Password placeholder="请输入密码" />
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="角色"
                        name="role"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >

                    </Form.Item>

                    <Form.Item
                        {...tailLayout}
                        style={{ whiteSpace: "nowrap" }}
                    >
                        <Button type="defalut" style={{ width: '120px', marginLeft: 70 }}>
                            <Link to='/role'>
                                取消
                            </Link>
                        </Button>
                        <Button type="primary" onClick={this.submit.bind(this)} style={{ width: '120px', marginLeft: 16 }}>
                            确认
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        )
    }
}
