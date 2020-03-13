import React, { Component } from 'react'
import { Form, Input, Button, Select, Radio, message } from 'antd'
import { Link } from 'react-router-dom'


import Header from '../header'

export default class Addmechanism extends Component {

    state = {
        isEdit: false,
        mechanismList: ['无', '咕泡学院', '技术研发部', '线上运营部'],
        opt: {
            id: "",
            name: "",
            topJd: "",
            sort: "",
            status: -1
        }
    }

    componentWillMount() {
        if (this.props.location.state && this.props.location.state.edit) {
            let newOpt = {}
            newOpt.id = this.props.location.state.opt.id
            newOpt.name = this.props.location.state.opt.name
            newOpt.topJd = ''
            newOpt.sort = this.props.location.state.opt.sort
            newOpt.status = -1
            this.setState({
                isEdit: this.props.location.state.edit,
                opt: newOpt
            })
        }
    }

    submit() {
        if (this.state.opt.name.toString().trim() === '') return (message.error('机构名称必填'))
        if (this.state.opt.topJd.toString().trim() === '') return (message.error('上级节点必填'))
        if (this.state.opt.sort.toString().trim() === '') return (message.error('排序必填'))
        if (this.state.opt.status === -1) return (message.error('请选择账号状态'))
        message.success(this.state.isEdit ? '添加成功' : '编辑成功');

        // 返回机构管理
        this.props.history.push('/mechanism')
    }

    mechNameChange(e) {
        e.persist()
        let newOpt = JSON.parse(JSON.stringify(this.state.opt))
        newOpt.name = e.target.value
        this.setState({
            opt: newOpt
        })
    }

    topJdChange(e) {
        let newOpt = JSON.parse(JSON.stringify(this.state.opt))
        newOpt.topJd = e
        this.setState({
            opt: newOpt
        })
    }

    mechSortChange(e) {
        e.persist()
        let newOpt = JSON.parse(JSON.stringify(this.state.opt))
        newOpt.sort = e.target.value
        this.setState({
            opt: newOpt
        })
    }

    mechStatusChange(e) {
        let newOpt = JSON.parse(JSON.stringify(this.state.opt))
        newOpt.status = e.target.value
        this.setState({
            opt: newOpt
        })
    }

    render() {

        const { Option } = Select

        // input组件 - 布局
        const tailLayout = {
            labelCol: { span: 2 },
            wrapperCol: { offset: 0, span: 10 },
        };


        return (
            <div>
                {!this.state.isEdit && <Header title={'添加机构'} />}
                {this.state.isEdit && <Header title={'编辑机构'} />}
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    component={false}
                >
                    <Form.Item
                        {...tailLayout}
                        label="机构名称"
                        name="mechName"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >
                        <Input defaultValue={this.state.opt.name} placeholder="请输入机构名称" onChange={this.mechNameChange.bind(this)}
                            disabled={this.state.isEdit ? true : false} />
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="上级节点"
                        name="topJd"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >
                        <Select placeholder="选择机构" onChange={this.topJdChange.bind(this)} >
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
                        <Input defaultValue={this.state.opt.sort} placeholder="请输入排序序号" onChange={this.mechSortChange.bind(this)} />
                    </Form.Item>

                    <Form.Item
                        {...tailLayout}
                        label="状态"
                        name="mechStatus"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >
                        <Radio.Group defaultValue="1" onChange={this.mechStatusChange.bind(this)} >
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
                        <Button type="primary" onClick={this.submit.bind(this)} style={{ width: '120px', marginLeft: 16 }}>
                            确认
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}