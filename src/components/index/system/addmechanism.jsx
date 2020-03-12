import React, { Component } from 'react'
import { Form, Input, Button, Select, Radio, message } from 'antd'
import { Link } from 'react-router-dom'


import Header from '../header'

export default class Addmechanism extends Component {

    state = {
        isEdit: false,
        mechanismList: ['无', '咕泡学院', '技术研发部', '线上运营部'],
        opt: {
            key: "",
            id: "",
            name: "",
            sort: "",
            status: ""
        }
    }

    componentWillMount() {
        if (this.props.location.state && this.props.location.state.edit) {
            this.setState({
                isEdit: this.props.location.state.edit,
                opt: this.props.location.state.opt
            })
        }
    }


    render() {

        const { Option } = Select

        // input组件 - 布局
        const tailLayout = {
            labelCol: { span: 2 },
            wrapperCol: { offset: 0, span: 10 },
        };

        // 确认按钮（无空项时）
        const onFinish = values => {
            console.info(values)
            message.success('添加成功');

            // 返回机构管理
            this.props.history.push('/mechanism')
        };

        // 确认按钮（有未填项）
        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo)
        };

        return (
            <div>
                {!this.state.isEdit && <Header title={'添加机构'} />}
                {this.state.isEdit && <Header title={'编辑机构'} />}
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        {...tailLayout}
                        label="机构名称"
                        name="mechName"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >
                        <Input defaultValue={this.state.opt.name} placeholder="请输入机构名称" />
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="上级节点"
                        name="topJd"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >
                        <Select placeholder="选择机构" >
                            {this.state.mechanismList.map((item, index) => <Option value={item} key={index}>{item}</Option>)}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        {...tailLayout}
                        label="排序"
                        name="mechSort"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >
                        <Input defaultValue={this.state.opt.sort} placeholder="请输入排序序号" />
                    </Form.Item>

                    <Form.Item
                        {...tailLayout}
                        label="状态"
                        name="mechStatus"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >
                        <Radio.Group>
                            <Radio value="1" >启用</Radio>
                            <Radio value="0" >禁用</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item
                        {...tailLayout}
                        style={{ whiteSpace: "nowrap" }}
                    >
                        <Button type="defalut" style={{ width: '120px', marginLeft: 70 }}>
                            <Link to='/mechanism'>
                                取消
                            </Link>
                        </Button>
                        <Button type="primary" htmlType="submit" style={{ width: '120px', marginLeft: 16 }}>
                            确认
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}