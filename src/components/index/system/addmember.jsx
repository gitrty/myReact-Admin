import React, { Component } from 'react'
import { Form, Input, Button, message, Checkbox } from 'antd'
import { Link } from 'react-router-dom'

import '@/assets/css/addmember.less'

import Header from '../header'

export default class Addmember extends Component {

    state = {
        isEdit: false,
        opt: {
            id: '',
            role: '',
            describe: '',
            curriculum: [],
            marketing: []
        },
        curriculum: [
            { label: '课程管理', value: '课程管理' },
            { label: '资料管理', value: '资料管理' },
            { label: '视频管理', value: '视频管理' },
            { label: '系列课管理', value: '系列课管理' },
        ],
        marketing: [
            { label: '营销中心', value: '营销中心' },
            { label: '优惠券', value: '优惠券' },
            { label: '显示优惠', value: '显示优惠' },
            { label: '财务', value: '财务' }
        ]
    }

    componentWillMount() {
        if (this.props.location.state && this.props.location.state.edit) {
            let newOpt = {}
            newOpt.id = this.props.location.state.opt.id
            newOpt.role = this.props.location.state.opt.role
            newOpt.describe = ''
            newOpt.curriculum = []
            newOpt.marketing = []
            this.setState({
                isEdit: this.props.location.state.edit,
                opt: newOpt
            })
        }
    }

    // 提交（确认）
    submit() {
        console.info(this.state.opt)
        if (this.state.opt.role.toString().trim() === '') return (message.error('角色名称必填'))
        message.success(this.state.isEdit ? '编辑角色成功' : '新建角色成功');

        // 返回机构管理
        this.props.history.push('/member')
    }

    roleNameChange(e) {
        e.persist()
        let newOpt = JSON.parse(JSON.stringify(this.state.opt))
        newOpt.role = e.target.value
        this.setState({
            opt: newOpt
        })
    }

    roleMsChange(e) {
        e.persist()
        let newOpt = JSON.parse(JSON.stringify(this.state.opt))
        newOpt.describe = e.target.value
        this.setState({
            opt: newOpt
        })
    }

    curriculumChange(e) {
        let newOpt = JSON.parse(JSON.stringify(this.state.opt))
        newOpt.curriculum = e
        this.setState({
            opt: newOpt
        })
    }

    marketingChange(e) {
        let newOpt = JSON.parse(JSON.stringify(this.state.opt))
        newOpt.marketing = e
        this.setState({
            opt: newOpt
        })
    }

    render() {

        const { TextArea } = Input;

        // input组件 - 布局
        const tailLayout = {
            labelCol: { span: 2 },
            wrapperCol: { offset: 0, span: 10 },
        };

        return (
            <div className="addmember">
                {!this.state.isEdit && <Header title={'新建角色'} />}
                {this.state.isEdit && <Header title={'编辑角色'} />}
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    component={false}
                >
                    <Form.Item
                        {...tailLayout}
                        label="角色名称"
                        name="roleName"
                        className="form-item"
                        rules={[{ required: true, message: ' ' }]}
                    >
                        <Input placeholder="请输入角色名称" defaultValue={this.state.opt.role} onChange={this.roleNameChange.bind(this)}
                            disabled={this.state.isEdit ? true : false} />
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="角色描述"
                        name="roleMs"
                        className="form-item"
                    >
                        <TextArea rows={4} placeholder='请输入角色描述' defaultValue={this.state.opt.describe} onChange={this.roleMsChange.bind(this)} />
                    </Form.Item>

                    <div className="small-tit">
                        管理后台权限
                    </div>

                    {/* form.item中使用defaultValue属性需要给Form.Item设置valuePropName属性 */}
                    <Form.Item
                        {...tailLayout}
                        label="课程"
                        name="curriculum"
                        className="form-item"
                    >
                        <Checkbox.Group options={this.state.curriculum} defaultValue={['课程管理', '资料管理']} style={{ marginLeft: 10 }} onChange={this.curriculumChange.bind(this)} />
                    </Form.Item>

                    <Form.Item
                        {...tailLayout}
                        label="营销"
                        name="marketing"
                        className="form-item"
                    >
                        <Checkbox.Group options={this.state.marketing} defaultValue={['营销中心']} style={{ marginLeft: 10 }} onChange={this.marketingChange.bind(this)} />
                    </Form.Item>

                    <Form.Item
                        {...tailLayout}
                        style={{ whiteSpace: "nowrap" }}
                    >
                        <Button type="defalut" style={{ width: '120px', marginLeft: 70 }}>
                            <Link to='/member'>
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