import React, { Component } from 'react'

// import globalData from '@/util/global_data'

import { Table, Tag } from 'antd';

export default class Two extends Component {


    state = {
        // 表格首行（字段）
        columns: [
            {
                title: '姓名',   // 字段名
                dataIndex: 'name',  // 对应数据列表name字段
                key: 'name',  // 唯一的key
                // render: text => <a>{text}</a>,
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '是否为VIP',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: 'Tags',
                key: 'tags',
                dataIndex: 'tags',
                render: tags => (
                    <span>
                        {tags.map(tag => {
                            let color = tag.length > 5 ? 'geekblue' : 'green';
                            if (tag === 'loser') {
                                color = 'volcano';
                            }
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </span>
                ),
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (    // text,record ->  当前行的 {} 数据
                    <span>
                        <a href="###" style={{ marginRight: 16 }}>Invite {record.name}</a>
                        <a href="###" onClick={this.delet.bind(this, record)}>删除</a>
                    </span>
                ),
            },
        ],

        // 表格数据
        data: [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'false',
                tags: ['nice', 'developer'],
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'true',
                tags: ['loser'],
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'false',
                tags: ['cool', 'teacher'],
            },
        ]
    }

    componentDidMount() {

    }

    // 删除按钮触发 - 参数为当前行的所有数据
    delet(indexObj) {
        // 深克隆一份state用来操作（因为splice会改变原数组）
        let assignData = JSON.parse(JSON.stringify(this.state.data))

        this.state.data.forEach((item, index) => {
            if (item.key === indexObj.key) {
                assignData.splice(index, 1)
                this.setState(({
                    data: assignData
                }))
            }
        })

    }

    render() {

        return (
            <div>
                <Table columns={this.state.columns} dataSource={this.state.data} align="center" />
            </div>
        )
    }
}