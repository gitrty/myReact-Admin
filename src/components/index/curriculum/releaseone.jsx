import React, { Component } from 'react'
import { Button, DatePicker, Form, Input, Select, Upload, message, Checkbox } from 'antd';
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
        mechPrice: false
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

    render() {

        // const Option = { Select }

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
                        <div className="add-lecturer">
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
                <div className="release-bottom">
                    <Button style={{ width: 120, marginRight: 20 }}>取消</Button>
                    <Button type="primary" style={{ width: 120 }}>下一步</Button>
                </div>
            </div>
        )
    }
}