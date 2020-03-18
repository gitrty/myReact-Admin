import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { Input, Select, Button, Form, Upload, message, Checkbox } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import Header from '../header'

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/bmp';
    if (!isJpgOrPng) {
        message.error('请选择支持的格式!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('图片大小不能超过2MB!');
    }
    return isJpgOrPng && isLt2M;
}

export default class AddRole extends Component {

    state = {
        isEdit: false,
        opt: {
            userName: '',
            realName: '',
            topJd: '',
            qq: '',
            photo: '',
            synopsis: '',
            pwd: '',
            role: ''
        },
        loading: false,
        options: [
            { label: '超级管理员', value: '超级管理员' },
            { label: '教学管理员', value: '教学管理员' },
            { label: '老师', value: '老师' },
            { label: '助教', value: '助教' },
            { label: '销售管理员', value: '销售管理员' },
            { label: '教务', value: '教务' },
            { label: '销售', value: '销售' },
            { label: '财务', value: '财务' },
        ]
    }

    componentWillMount() {
        if (this.props.location.state && this.props.location.state.edit) {
            let newOpt = {}
            newOpt.userName = this.props.location.state.opt.userName
            newOpt.realName = this.props.location.state.opt.realName
            this.setState({
                isEdit: this.props.location.state.edit,
                opt: newOpt
            })
        }
    }


    // 提交按钮
    submit() {

    }

    // 用户名
    userNameChange(e) {
        e.persist()
    }

    // 真实姓名
    realNameChange() {

    }

    //部门
    topJdChange() {

    }

    //qq
    qqChange() {

    }

    // 头像上传
    handleChange(info) {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            )
        }
    }

    // 简介
    synopsisChange() {

    }

    // 密码
    pwdChange() {

    }

    // 角色
    roleChange(e) {
        console.info(e)
    }

    render() {

        const { Option } = Select
        const { TextArea } = Input;

        // input组件 - 布局
        const tailLayout = {
            labelCol: { span: 2 },
            wrapperCol: { offset: 0, span: 10 },
        };

        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;


        return (
            <div>
                {this.state.isEdit ? <Header title={"编辑成员"} /> : <Header title={"添加成员"} />}
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    component={false}
                >
                    <Form.Item
                        {...tailLayout}
                        label="手机"
                        name="userPhone"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >
                        <Input defaultValue={this.state.opt.userName} placeholder="请输入手机号" />
                    </Form.Item>
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
                        <Input placeholder="请输入真实姓名" defaultValue={this.state.opt.realName} onChange={this.realNameChange.bind(this)} />
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="部门"
                        name="topJd"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >
                        <Select placeholder="选择部门" onChange={this.topJdChange.bind(this)}>
                            <Option value='咕泡学院'>咕泡学院</Option>
                            <Option value='技术研发部'>技术研发部</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="QQ"
                        name="qq"
                        className="form-item"
                    >
                        <Input placeholder="请输入工作QQ" onChange={this.qqChange.bind(this)} />
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="头像"
                        name="photo"
                        className="form-item"
                    >
                        <Upload
                            name="photo"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange.bind(this)}
                            style={{ position: "relative" }}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                        <div style={{ position: 'absolute', top: 10, left: 120 }}>
                            <p style={{ marginBottom: 10 }}>图片小于2M</p>
                            <p style={{ marginBottom: 10 }}>支持jpg/png/gif/bmp格式</p>
                            <p>课程老师请使用真人头像</p>
                        </div>
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="简介"
                        name="synopsis"
                        className="form-item"
                    >
                        <TextArea rows={4} placeholder='请输入角色描述' onChange={this.synopsisChange.bind(this)} />
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="密码"
                        name="pwd"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >
                        <Input.Password placeholder="请输入密码" onChange={this.pwdChange.bind(this)} />
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="角色"
                        name="role"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >
                        <Checkbox.Group options={this.state.options} defaultValue={['Apple']} onChange={this.roleChange.bind(this)} />
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
