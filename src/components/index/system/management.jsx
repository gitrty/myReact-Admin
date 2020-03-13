import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Table, Modal, message, Button, Input, Checkbox } from 'antd'

import '@/assets/css/management.less'

// 管理成员
export default class Management extends Component {

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
                title: '成员名称',
                dataIndex: 'name',
                key: 'name',
                align: 'center'
            },
            {
                title: 'QQ',
                dataIndex: 'qq',
                key: 'qq',
                align: 'center'
            },
            {
                title: '关联课程数',
                key: 'relation',
                dataIndex: 'relation',
                align: 'center'
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (    // text,record ->  当前行的 {} 数据
                    <span>
                        <a href="###" className="action-tag" style={{ margin: 0 }} onClick={this.delet.bind(this, record)}>删除</a>
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
                name: 'mecrr',
                qq: 1,
                relation: 66
            },
        ],

        // 权限
        position: '超级管理员',

        // 添加成员 - 提交时等待请求完成
        loading: false,

        // 添加成员 - 拟态框状态
        visible: false,

        // 数据模拟
        leftList: [1, 2, 3],
        rightList: [1, 2, 3, 4, 5, 6]
    }

    // 删除当前行数据
    delet(value) {
        console.info(value)
        Modal.confirm({
            title: '删除提示',
            content: `确定将 ${value.name} 从${this.state.position}中移除吗？`,
            okText: '确定',
            cancelText: '取消',
            onOk() {
                message.success('删除成功！')
            }
        })
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    componentWillMount() {
        if (this.props.location.state && this.props.location.state.position) {
            this.setState({
                position: this.props.location.state.position
            })
        }
    }

    // 选择左边checkbox
    selectLeft(index) {
        console.info(index)
    }

    // 选择右边checkbox
    selectRight(index) {

    }

    // 搜索用户
    selectUser(e) {
        e.persist()
        console.info(e.target.value)
    }

    // 批量添加用户
    addUser(){

    }

    // 批量删除用户
    delUser(){

    }


    render() {

        const { visible, loading } = this.state;

        return (
            <div>
                <div className="manage-tit"> <span><Link to='/member'>&lt;返回 </Link></span>丨<span>管理成员</span></div>

                <div className="addMechanism" onClick={this.showModal}>添加成员</div>

                <Table columns={this.state.columns} dataSource={this.state.data} bordered />

                <Modal
                    visible={visible}
                    title="选择成员"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            取消
                        </Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
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
            </div>
        )
    }
}