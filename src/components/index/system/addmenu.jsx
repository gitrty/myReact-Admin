import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { Input, Select, Button, Form, Radio } from 'antd'

import Header from '../header'

export default class AddMenu extends Component {

    state = {
        isEedit: false,
        opt: {
            id: '',
            menuName: '',
            menuInterface: '',
            node: '',
            sort: ''
        }
    }

    componentWillMount() {
        if (this.props.location.state && this.props.location.state.edit) {
            console.info(this.props.location.state.opt)
            let newOpt = {}
            newOpt.id = this.props.location.state.opt.id
            newOpt.menuName = this.props.location.state.opt.menuName
            newOpt.menuInterface = this.props.location.state.opt.menuInterface
            newOpt.node = this.props.location.state.opt.node
            newOpt.sort = this.props.location.state.opt.sort
            this.setState({
                isEdit: this.props.location.state.edit,
                opt: newOpt
            })
        }
    }

    submit() {

    }

    // 菜单名称
    menuNameChange() {

    }

    // 菜单接口
    menuInterfaceChange() {

    }

    // 父节点
    fatherNodeChange() {

    }

    // 节点类型
    nodeChange(e) {
        console.info(e)
    }

    // 排序
    sortChange() {

    }

    render() {
        const { Option } = Select

        const tailLayout = {
            labelCol: { span: 2 },
            wrapperCol: { offset: 0, span: 10 },
        };

        return (
            <div>
                {this.state.isEdit ? <Header title={"编辑菜单"} /> : <Header title={"添加菜单"} />}
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    component={false}
                >
                    <Form.Item
                        {...tailLayout}
                        label="菜单名称"
                        name="menuName"
                        className="form-item"
                        rules={[{ required: true, message: ' ' }]}
                    >
                        <Input placeholder="请输入菜单名称" defaultValue={this.state.opt.menuName} onChange={this.menuNameChange.bind(this)} />
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="菜单接口"
                        name="menuInterface"
                        className="form-item"
                        rules={[{ required: true, message: ' ' }]}
                    >
                        <Input placeholder="请输入菜单接口" defaultValue={this.state.opt.menuInterface} onChange={this.menuInterfaceChange.bind(this)} />
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="父节点"
                        name="fatherNode"
                        className="form-item"
                        rules={[{ required: true, message: ' ' }]}
                    >
                        <Select placeholder="选择父节点" onChange={this.fatherNodeChange.bind(this)} >
                            <Option value='系统管理'>系统管理</Option>
                            <Option value='首页'>首页</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="节点类型"
                        name="node"
                        className="form-item"
                        rules={[{ required: true, message: ' ' }]}
                    >
                        <Radio.Group onChange={this.nodeChange.bind(this)} >
                            <Radio value={0}>导航节点</Radio>
                            <Radio value={1}>功能节点</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="排序"
                        name="sort"
                        className="form-item"
                        rules={[{ required: true, message: ' ' }]}
                    >
                        <Input placeholder="请输入排序序号" defaultValue={this.state.opt.sort} onChange={this.sortChange.bind(this)} />
                    </Form.Item>

                    <Form.Item
                        {...tailLayout}
                        style={{ whiteSpace: "nowrap" }}
                    >
                        <Button type="defalut" style={{ width: '120px', marginLeft: 70 }}>
                            <Link to='/menu'>
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