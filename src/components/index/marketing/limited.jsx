import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Select, Button, Table, Modal, message, Input } from 'antd'

import Header from '../header'

import copy from 'copy-to-clipboard';

export default class Limited extends Component {

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
                title: '所属学科',
                dataIndex: 'subject',
                key: 'subject',
                align: 'center'
            },
            {
                title: '适用课程',
                dataIndex: 'curriculum',
                key: 'curriculum',
                align: 'center'
            },
            {
                title: '课程价格（元）',
                key: 'price',
                dataIndex: 'price',
                align: 'center'
            },
            {
                title: '优惠后价格（元）',
                key: 'nextPrice',
                dataIndex: 'nextPrice',
                align: 'center'
            },
            {
                title: '可用人数',
                key: 'available',
                dataIndex: 'available',
                align: 'center'
            },
            {
                title: '使用人数',
                key: 'already',
                dataIndex: 'already',
                align: 'center'
            },
            {
                title: '起止时间',
                key: 'time',
                dataIndex: 'time',
                align: 'center'
            },
            {
                title: '状态',
                key: 'status',
                align: 'center',
                render: (text, record) => record.status ? '进行中' : '已失效'
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (    // text,record ->  当前行的 {} 数据
                    <span>
                        {record.status ? <a href="###" className="action-tag" onClick={this.shareChange.bind(this, record)}>分享</a> : ''}
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
                subject: 'JAVA',
                curriculum: 'JAVA-P5',
                price: '￥199.00',
                nextPrice: '￥190.00',
                available: 100,
                already: 10,
                time: '2020-3-11至2020-3-20',
                status: 1
            },
            {
                key: '2',
                id: 2,
                subject: 'JAVA',
                curriculum: 'JAVA-P6',
                price: '￥199.00',
                nextPrice: '￥190.00',
                available: '不限',
                already: 10,
                time: '2020-3-11至2020-3-20',
                status: 0
            }
        ],

        // 分享弹出框状态
        visible: false
    }

    // 分享
    shareChange() {
        this.setState({
            visible: true,
        })
    }

    // 删除
    delet(value) {
        Modal.confirm({
            title: '删除提示',
            content: `确定删除限时优惠吗，删除后课程将恢复原价。`,
            okText: '确定',
            cancelText: '取消',
            onOk() {
                message.success('删除成功！')
            }
        })
    }

    // 分享框成功按钮
    handleOk = e => {
        console.log(e)
        this.setState({
            visible: false,
        })
    }

    // 分享框取消按钮
    handleCancel = e => {
        console.log(e)
        this.setState({
            visible: false,
        })
    }

    // 复制分享链接到剪切板
    copyLj() {
        copy('网址网址');
        message.success('复制成功')
    }

    render() {

        const { Option } = Select

        return (
            <div>
                <Header title={'限时优惠管理'} />
                <div className="role-search">
                    <div>学科/课程</div>
                    <Select style={{ width: 150, marginLeft: 10, marginRight: 10 }} placeholder="全部学科" >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                    </Select>
                    <Select style={{ width: 150, marginLeft: 10, marginRight: 10 }} placeholder="全部课程/关键词" >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                    </Select>
                    <div style={{ marginLeft: 40 }}>状态</div>
                    <Select style={{ width: 150, marginLeft: 10, marginRight: 10 }} placeholder="选择状态" >
                        <Option value="every">全部</Option>
                        <Option value="1">进行中</Option>
                        <Option value="0">已失效</Option>
                    </Select>
                    <Button type="primary">查询</Button>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
                        <Button type="primary" style={{ width: 130 }}><Link to='/addlimited'>发布限时优惠</Link></Button>
                    </div>
                </div>
                <Table columns={this.state.columns} dataSource={this.state.data} bordered />

                <Modal
                    title="分享活动"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            取消
                        </Button>,
                        <Button key="submit" type="primary" onClick={this.handleOk}>
                            确定
                        </Button>,
                    ]}
                >
                    <p style={{ textAlign: 'center' }}>分享课程链接</p>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '18px 0' }}>
                        <Input value="网址" style={{ width: 300 }} />
                        <Button type="primary" onClick={this.copyLj.bind(this)} >复制链接</Button>
                    </div>

                </Modal>
            </div>
        )
    }
}