import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Select, Button, Table, Modal } from 'antd'

import Header from '../header'

import '@/assets/css/role.less'

export default class Role extends Component {

    state = {
        // 表格首行（字段）
        columns: [
            {
                title: '#',   // 字段名
                dataIndex: 'id',  // 对应数据列表name字段
                key: 'id',  // 唯一的key
                align: 'center',   //  该列居中对齐
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                key: 'userName',
                align: 'center'
            },
            {
                title: '真实姓名',
                dataIndex: 'realName',
                key: 'realName',
                align: 'center'
            },
            {
                title: '所属机构',
                key: 'subordinate',
                dataIndex: 'subordinate',
                align: 'center',
            },
            {
                title: 'QQ',
                key: 'qq',
                dataIndex: 'qq',
                align: 'center',
            },
            {
                title: '简介',
                key: 'synopsis',
                dataIndex: 'synopsis',
                align: 'center',
            },
            {
                title: '关联课程数',
                key: 'relation',
                dataIndex: 'relation',
                align: 'center',
            },
            {
                title: '角色',
                key: 'role',
                dataIndex: 'role',
                align: 'center',
            },
            {
                title: '状态',
                key: 'status',
                dataIndex: 'status',
                align: 'center',
                render: (text, record) => <span>{record.status ? '启用' : '禁用'}</span>
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (    // text,record ->  当前行的 {} 数据
                    <span>
                        <a href="###" className="action-tag tag-green">编辑</a>
                        <a href="###" className="action-tag" >禁用</a>
                        <a href="###" className="action-tag" onClick={this.showModal.bind(this)}>重置密码</a>
                    </span>
                ),
                align: 'center'
            },
        ],

        // 表格数据
        data: [
            {
                key: '1',
                id: 1,
                userName: '用户名1',
                realName: '真实姓名',
                subordinate: '咕泡学院',
                qq: 666666,
                synopsis: '简介简介简介简介简介简介简介简介',
                relation: '10',
                role: '讲师',
                status: 1
            },
        ],

        // 重置密码拟态框状态
        visible: false
    }

    // 选择机构
    handleChange() {

    }

    // 重置密码拟态框
    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    // 重置密码确认按钮
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    // 重置密码取消按钮
    handleCancel = () => {
        this.setState({ visible: false });
    }

    render() {

        const { Option } = Select;

        return (
            <div>
                <Header title={"成员管理"} />
                <div className="role-search">
                    <div>用户信息</div>
                    <Input style={{ width: 200, marginLeft: 10 }} placeholder="请输入用户名/QQ" />
                    <div style={{ marginLeft: 40 }}>所属机构</div>
                    <Select style={{ width: 150, marginLeft: 10, marginRight: 10 }} onChange={this.handleChange.bind(this)}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                    </Select>
                    <Button type="primary">查询</Button>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
                        <Button type="primary" style={{ width: 130 }}><Link to='/addrole'>添加成员</Link></Button>
                    </div>
                </div>
                <Table columns={this.state.columns} dataSource={this.state.data} bordered />
                {/* 重置密码Modal */}
                <Modal
                    title="重置密码"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            取消
                        </Button>,
                        <Button key="submit" type="primary" onClick={this.handleOk}>
                            确认
                        </Button>,
                    ]}
                >
                    <div style={{ display: 'flex', padding: '40px 20px', justifyContent: 'center', alignItems: 'center' }}>
                        <span>输入密码：</span><Input placeholder="请输入重置密码" style={{ width: 300, marginLeft: 15 }} />
                    </div>
                </Modal>
            </div>
        )
    }
}