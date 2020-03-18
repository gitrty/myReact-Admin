import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Select, Button } from 'antd'

import Header from '../header'
export default class Limited extends Component {
    render() {

        const { Option } = Select

        return (
            <div>
                <Header title={'限时优惠管理'} />
                <div className="role-search">
                    <div style={{ marginLeft: 40 }}>学科/课程</div>
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
            </div>
        )
    }
}