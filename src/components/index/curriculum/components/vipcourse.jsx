import React, { Component } from 'react'
import { Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

// VIP课
export default class Boutique extends Component {

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
                title: '学科',
                dataIndex: 'subject',
                key: 'subject',
                align: 'center'
            },
            {
                title: '课程名称',
                dataIndex: 'curriculum',
                key: 'curriculum',
                align: 'center'
            },
            {
                title: '课程封面',
                key: 'cover',
                align: 'center',
                render: (text, record) =>
                    <img src={require("../../../../assets/img/login_bg1.jpg")} alt="" style={{ width: 80, height: 40 }} />
            },
            {
                title: '课程价格（元）',
                key: 'price',
                dataIndex: 'price',
                align: 'center'
            },
            {
                title: '创建时间',
                key: 'startTime',
                dataIndex: 'startTime',
                align: 'center'
            },
            {
                title: '报名人数',
                key: 'signUp',
                dataIndex: 'signUp',
                align: 'center',
            },
            {
                title: '评分',
                key: 'rate',
                align: 'center',
                render: (text, record) => (
                    <div >
                        <span>{record.rate}分</span>
                        <SearchOutlined
                            style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: '#444', color: '#fff', padding: 4, borderRadius: 6, cursor: 'pointer' }}
                            onClick={this.navToEvaluate.bind(this, record)}
                        />
                    </div>
                )
            },
            {
                title: '答疑数',
                key: 'answering',
                align: 'center',
                render: (text, record) => (
                    <div >
                        <span>{record.answering}</span>
                        <SearchOutlined
                            style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: '#444', color: '#fff', padding: 4, borderRadius: 6, cursor: 'pointer' }}
                            onClick={this.navToAnswering.bind(this, record)}
                        />
                    </div>
                )
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (    // text,record ->  当前行的 {} 数据
                    <span>
                        <a href="###" className="action-tag" onClick={this.editChange.bind(this, record)}>编辑</a>
                        <a href="###" className="action-tag" onClick={this.copyChange.bind(this, record)}>复制</a>
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
                curriculum: '并发编程入门到入魔',
                cover: '封面',
                price: '￥199.00',
                startTime: '2020-3-20',
                signUp: 666,
                rate: 4.5,
                answering: 100
            }
        ],
    }

    // 编辑
    editChange() {

    }

    // 复制
    copyChange() {

    }

    // 删除
    delet() {

    }

    // 点击评分 - 跳转评价管理
    navToEvaluate(record) {
        this.props.history.push({ pathname: '/evaluate', state: { record } });
    }

    // 点击答疑数 - 跳转答疑管理
    navToAnswering(record) {
        this.props.history.push({ pathname: '/answering', state: { record } });
    }

    render() {

        return (
            <Table columns={this.state.columns} dataSource={this.state.data} bordered />
        )
    }
}