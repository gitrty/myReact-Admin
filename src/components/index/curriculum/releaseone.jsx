import React, { Component } from 'react'
import { Button, DatePicker, Form, Input, Select, Upload, message, Checkbox, Modal } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import Header from '../header'

// RangePicker 组件汉化
import locale from 'antd/lib/date-picker/locale/zh_CN';
import 'moment/locale/zh-cn';

import '../../../assets/css/release.less'

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

export default class ReleaseOne extends Component {

    state = {
        loading: false,
        // 课程是否免费
        mechPrice: false,

        // 添加成员 - 拟态框状态
        visible: false,
        modalLoading: false,

        // 数据模拟
        leftList: [1, 2, 3],
        rightList: [1, 2, 3, 4, 5, 6],
    }

    // 上架日期
    upDateChange(e) {

    }

    // 所属学科
    subjectChange(e) {

    }

    // 课程封面
    beforeUpload(e) {

    }

    // 上传封面
    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: true,
                }),
            );
        }
    };

    // 收费课
    yesPrice() {
        this.setState({
            mechPrice: true
        })
    }

    // 免费课
    noPrice() {
        this.setState({
            mechPrice: false
        })
    }

    // 购买会员可看
    jurisdictionChange(e) {

    }

    // 添加老师
    addTeacher() {
        this.setState({
            visible: true,
        })
    }

    // 选择老师 - 确定
    handleOk() {
        this.setState({ modalLoading: true });
        setTimeout(() => {
            this.setState({ modalLoading: false, visible: false });
        }, 1000)
    }

    // 选择老师 - 取消
    handleCancel() {
        this.setState({ visible: false });
    }

    // 搜索老师
    selectUser(e) {
        e.persist()
        console.info(e.target.value)
    }

    // 批量添加老师
    addUser() {

    }

    // 批量删除老师
    delUser() {

    }

    // 选择左边checkbox
    selectLeft(index) {
        console.info(index)
    }

    // 选择右边checkbox
    selectRight(index) {

    }

    // 下一步
    navToReleaseTwo() {
        this.props.history.push({ pathname: '/releasetwo' })
    }

    // 取消
    cancelEdit() {
        Modal.confirm({
            title: '取消提示',
            content: `当前已有内容正在编辑，确定取消发布课程吗？`,
            okText: '确定',
            cancelText: '取消',
            onOk() {
                
            }
        })
    }

    render() {

        // const Option = { Select }
        const { visible } = this.state;

        // input组件 - 布局
        const tailLayout = {
            labelCol: { span: 2 },
            wrapperCol: { offset: 0, span: 10 },
        }

        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        const { imageUrl } = this.state;

        return (
            <div className="release-one">
                <Header title={'课程概括1/3'} />
                <h4>请选择课程上架时间</h4>
                <DatePicker locale={locale} onChange={this.upDateChange.bind(this)} style={{ marginBottom: 20, width: 200 }} />
                <h4>请添加课程详情</h4>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    component={false}
                >
                    <Form.Item
                        {...tailLayout}
                        label="所属学科"
                        name="subject"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >
                        <Select placeholder="选择学科" onChange={this.subjectChange.bind(this)} >
                            <Select.Option value='java'>java</Select.Option>
                            <Select.Option value='py'>py</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="课程封面"
                        name="cover"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="课程名称"
                        name="mechName"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >
                        <Input placeholder="请输入课程名称" />
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="课程价格"
                        name="mechPrice"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >
                        <div style={{ display: 'flex' }}>
                            <div className="release-one-isprice">
                                <span onClick={this.yesPrice.bind(this)} className={this.state.mechPrice ? 'select-releaseone' : ''}>收费</span>
                                <span onClick={this.noPrice.bind(this)} className={this.state.mechPrice ? '' : 'select-releaseone'}>免费</span>
                            </div>
                            <Input placeholder="请输入课程价格" addonAfter={'元'} disabled={this.state.mechPrice ? false : true} />
                        </div>
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="讲师介绍"
                        name="lecturer"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >
                        <div className="add-lecturer" onClick={this.addTeacher.bind(this)}>
                            <PlusOutlined style={{ marginRight: 8 }} />
                            添加老师
                        </div>
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="权限控制"
                        name="jurisdiction"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >
                        <Checkbox onChange={this.jurisdictionChange.bind(this)}>会员可看</Checkbox>
                    </Form.Item>
                </Form>
                {/* 添加老师 */}
                <Modal
                    visible={visible}
                    title="选择成员"
                    // onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                    footer={[
                        <Button key="back" onClick={this.handleCancel.bind(this)}>
                            取消
                        </Button>,
                        <Button key="submit" type="primary" loading={this.state.modalLoading} onClick={this.handleOk.bind(this)}>
                            确定
                        </Button>,
                    ]}
                >
                    <div className="manage-model-con">
                        <div>
                            <h3>可选择成员：</h3>
                            <div className="manage-model-left">
                                <Input placeholder={"输入用户名/QQ"} onChange={this.selectUser.bind(this)} />
                                <div className="manage-model-no-select">
                                    {this.state.leftList.map((item, index) => <Checkbox key={index} onChange={this.selectLeft.bind(this, index)} style={{ whiteSpace: "nowrap", marginLeft: 0 }}>merrcc(666666)</Checkbox>)}
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>已选择成员：</h3>
                            <div className="manage-model-right">
                                <div className="manage-model-no-select">
                                    {this.state.rightList.map((item, index) => <Checkbox key={index} onChange={this.selectRight.bind(this, index)} style={{ whiteSpace: "nowrap", marginLeft: 0 }}>merrcc(666666)</Checkbox>)}
                                </div>
                            </div>
                        </div>
                        <div className="manage-model-mid">
                            <Button type="default" style={{ marginLeft: 16, marginTop: 100, marginBottom: 10 }} onClick={this.addUser.bind(this)}>添加></Button>
                            <Button type="default" style={{ marginLeft: 16, marginTop: 10, marginBottom: 20 }} onClick={this.delUser.bind(this)}>&lt;删除</Button>
                            <p>只有在“成员管理”中添加过的成员，才可以添加到某个角色下</p>
                        </div>
                    </div>
                </Modal>
                <div className="release-bottom">
                    <Button style={{ width: 120, marginRight: 20 }} onClick={this.cancelEdit.bind(this)}>取消</Button>
                    <Button type="primary" style={{ width: 120 }} onClick={this.navToReleaseTwo.bind(this)}>下一步</Button>
                </div>
            </div>
        )
    }
}