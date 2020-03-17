import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Button, Table } from 'antd'
import Header from '../header'

export default class Menu extends Component {

    state = {
        data: [
            {
                key: 1,
                id: 1,
                menuName: '系统管理',
                menuInterface: '/menu',
                node: '导航节点',
                sort: 66,
                description: 'xxxxx',
            }
        ],
        columns: [
            { title: '#', dataIndex: 'id', key: 'id', align: 'center' },
            { title: '菜单名称', dataIndex: 'menuName', key: 'menuName', align: 'center' },
            { title: '菜单接口', dataIndex: 'menuInterface', key: 'menuInterface', align: 'center' },
            { title: '节点类型', dataIndex: 'node', key: 'node', align: 'center' },
            { title: '排序', dataIndex: 'sort', key: 'sort', align: 'center' },
            {
                title: '操作',
                dataIndex: '',
                key: 'x',
                render: (text, record) => (    // text,record ->  当前行的 {} 数据
                    <span>
                        <a href="###" className="action-tag tag-green" onClick={this.navToAddMenu.bind(this)}>添加下级</a>
                        <a href="###" className="action-tag" onClick={this.edit.bind(this, record)}>编辑</a>
                        <a href="###" className="action-tag" onClick={this.del.bind(this, record)}>删除</a>
                    </span>
                ),
                align: 'center'
            },
        ]
    }

    // 添加下级
    navToAddMenu() {
        this.props.history.push({ pathname: '/addmenu' })
    }

    // 编辑
    edit(value) {
        this.props.history.push({ pathname: '/addmenu', state: { edit: true, opt: value } });
    }

    // 删除
    del() {

    }

    // 请输入菜单名称
    handleChange() {

    }


    render() {

        const expandedRowRender = () => {
            const columns2 = [
                { title: '#', dataIndex: 'id', key: 'id', align: 'center' },
                { title: '菜单名称', dataIndex: 'menuName', key: 'menuName', align: 'center' },
                { title: '菜单接口', dataIndex: 'menuInterface', key: 'menuInterface', align: 'center' },
                { title: '节点类型', dataIndex: 'node', key: 'node', align: 'center' },
                { title: '排序', dataIndex: 'sort', key: 'sort', align: 'center' },
                {
                    title: '操作',
                    dataIndex: '',
                    key: 'x',
                    render: (text, record) => (    // text,record ->  当前行的 {} 数据
                        <span>
                            <a href="###" className="action-tag" onClick={this.edit.bind(this, record)}>编辑</a>
                            <a href="###" className="action-tag" onClick={this.del.bind(this, record)}>删除</a>
                        </span>
                    ),
                    align: 'center'
                },
            ]
            const data = [];
            for (let i = 0; i < 3; ++i) {
                data.push({
                    key: 2,
                    id: 2,
                    menuName: '部门管理',
                    menuInterface: '/mechanism',
                    node: '导航节点',
                    sort: 77,
                });
            }
            return <Table columns={columns2} showHeader={false} dataSource={data} pagination={false} />;
        };


        return (
            <div>
                <Header title={"菜单管理"} />
                <div className="role-search">
                    <div>菜单名称</div>
                    <Input style={{ width: 200, marginLeft: 10, marginRight: 30 }} placeholder="请输入菜单名称" />
                    <Button type="primary">查询</Button>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
                        <Button type="primary" style={{ width: 130 }}><Link to='/addmenu'>添加菜单</Link></Button>
                    </div>
                </div>
                <Table
                    columns={this.state.columns}
                    expandable={{
                        expandedRowRender
                    }}
                    dataSource={this.state.data}
                />
            </div>
        )
    }
}