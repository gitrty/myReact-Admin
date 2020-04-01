import React, { Component } from 'react'
import { Table, Modal, message, Button, Input } from 'antd'
import Header from '../header'

export default class Subject extends Component {

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
                title: '学科名称',
                dataIndex: 'subjectName',
                key: 'subjectName',
                align: 'center'
            },
            {
                title: '排序',
                dataIndex: 'sort',
                key: 'sort',
                align: 'center'
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (    // text,record ->  当前行的 {} 数据
                    <span>
                        <a href="###" className="action-tag" onClick={this.edit.bind(this, record)}>编辑</a>
                        <a href="###" className="action-tag" onClick={this.delet.bind(this, record)}>删除</a>
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
                subjectName: 'Java',
                sort: 1
            },
            {
                key: '2',
                id: 2,
                subjectName: 'web',
                sort: 2
            },
        ],

        visible: false
    }


    // 编辑
    edit(record) {

    }

    // 删除
    delet(record) {
        Modal.confirm({
            title: '删除提示',
            content: `是否删除:${record.subjectName} 角色？`,
            okText: '确定',
            cancelText: '取消',
            onOk() {
                message.success('删除成功！')
            }
        })
    }

    // 添加学科 - 确定
    subadd() {
        this.setState({
            visible: false
        })
    }

    // 添加学科 - 取消
    cancel() {
        this.setState({
            visible: false
        })
    }

    // 添加学科input框变化
    inputChange(e) {
        e.persist()
        console.info(e.target.value)
    }

    render() {

        return (
            <div>
                <Header title={'学科管理'} />
                <Button
                    type="primary"
                    style={{ width: 130, marginBottom: 20, float: 'right', zIndex: 999 }}
                    onClick={() => {
                        this.setState({
                            visible: true
                        })
                    }}
                >添加学科</Button>
                <Modal
                    title="添加学科"
                    visible={this.state.visible}
                    onOk={this.subadd.bind(this)}
                    onCancel={this.cancel.bind(this)}
                    okText="确认"
                    cancelText="取消"
                >
                    <Input placeholder="请输入学科名称" onChange={this.inputChange.bind(this)} />
                </Modal>
                <Table columns={this.state.columns} dataSource={this.state.data} bordered />
            </div>
        )
    }
}