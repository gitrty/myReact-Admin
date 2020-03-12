import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Table, Modal, message } from 'antd'

import Header from '../header'

import '@/assets/css/mechanism.less'

export default class Mechanism extends Component {
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
                title: '机构名称',
                dataIndex: 'name',
                key: 'name',
                align: 'center'
            },
            {
                title: '排序',
                dataIndex: 'sort',
                key: 'sort',
                align: 'center'
            },
            {
                title: '状态',
                key: 'status',
                dataIndex: 'status',
                align: 'center'
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (    // text,record ->  当前行的 {} 数据
                    <span>

                        <a href="###" className="action-tag tag-green" onClick={this.navToAddmechanism.bind(this, record)}>添加下级</a>
                        <a href="###" className="action-tag" onClick={this.navToDeitmechanism.bind(this, record)}>编辑</a>
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
                name: '咕泡学院',
                sort: 1,
                status: '启用'
            },
            {
                key: '2',
                id: 2,
                name: '技术研发部',
                sort: 2,
                status: '禁用'
            },
            {
                key: '3',
                id: 3,
                name: '线上运营部',
                sort: 3,
                status: '禁用'
            },
        ]
    }

    // 跳转 - 添加下级页面
    navToAddmechanism(value) {
        this.props.history.push({ pathname: '/addmechanism', state: { edit: false, opt: value } });
    }

    // 跳转 - 编辑机构页面
    navToDeitmechanism(value) {
        this.props.history.push({ pathname: '/addmechanism', state: { edit: true, opt: value } });
    }

    // 删除当前行数据
    delet(value) {
        console.info(value)
        Modal.confirm({
            title: '删除提示',
            content: `是否删除:${value.name} 机构信息？`,
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
                <Header title={"机构管理"} />
                <Link to='/addmechanism'>
                    <div className="addMechanism">添加机构</div>
                </Link>

                <Table columns={this.state.columns} dataSource={this.state.data} bordered />
            </div>
        )
    }
}
