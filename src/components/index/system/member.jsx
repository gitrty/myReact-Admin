import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Table, Modal, message } from 'antd'

import Header from '../header'

export default class Member extends Component {

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
                title: '角色',
                dataIndex: 'role',
                key: 'role',
                align: 'center'
            },
            {
                title: '描述',
                dataIndex: 'describe',
                key: 'describe',
                align: 'center'
            },
            {
                title: '成员数',
                key: 'number',
                dataIndex: 'number',
                align: 'center'
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (    // text,record ->  当前行的 {} 数据
                    <span>
                        <a href="###" className="action-tag tag-green" onClick={this.navToAddmechanism.bind(this, record)}>管理成员</a>
                        <a href="###" className="action-tag" onClick={this.navToDeitmechanism.bind(this, record)}>编辑角色</a>
                        <a href="###" className="action-tag" onClick={this.delet.bind(this, record)}>删除</a>
                        {/* <a href="###" onClick={this.delet.bind(this, record)}>删除</a> */}
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
                role: '超级管理员',
                describe: '机构创始人，拥有所有功能的权限，且可以为其他角色自由配置功能',
                number: 1
            },
            {
                key: '2',
                id: 2,
                role: '老师',
                describe: '老师老师老师老师老师老师老师老师',
                number: 66
            }
        ]
    }

    // 跳转 - 管理成员页面
    navToAddmechanism(value) {
        // console.info(value)
        this.props.history.push({ pathname: '/management', state: { position: value.role } });
    }

    // 跳转 - 编辑角色页面
    navToDeitmechanism(value) {
        this.props.history.push({ pathname: '/addmember', state: { edit: true, opt: value } });
    }

    // 删除当前行数据
    delet(value) {
        console.info(value)
        Modal.confirm({
            title: '删除提示',
            content: `是否删除:${value.role} 角色？`,
            okText: '确定',
            cancelText: '取消',
            onOk() {
                message.success('删除成功！')
            }
        })
    }

    render() {

        return (
            <div>
                <Header title={"角色管理"} />
                <Link to='/addmember'>
                    <div className="addMechanism">新建角色</div>
                </Link>

                <Table columns={this.state.columns} dataSource={this.state.data} bordered />
            </div>
        )
    }

}