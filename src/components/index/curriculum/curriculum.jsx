import React, { Component } from 'react'
import { Menu, Dropdown, Button, Select } from 'antd';
// import { Link } from 'react-router-dom'
import { DownOutlined } from '@ant-design/icons';

import Training from './components/training'
import Boutique from './components/boutique'
import VipCourse from './components/vipcourse'

export default class Overview extends Component {

    state = {
        // 课程分类切换
        current: '0',
    }

    // 课程分类切换
    handleClick(e) {
        this.setState({ current: e.key })
    }

    // 发布课程
    release({ key }) {
        console.info(key)
        this.props.history.push({ pathname: '/releaseone' })
    }

    render() {

        const { Option } = Select

        const menu = (
            <Menu onClick={this.release.bind(this)}>
                <Menu.Item key="1">
                    发布训练营
                </Menu.Item>
                <Menu.Item key="2">
                    发布精品小课
                </Menu.Item>
                <Menu.Item key="3">
                    发布VIP课
                </Menu.Item>
            </Menu>
        );

        return (
            <div style={{ position: 'relative' }}>
                <Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="0" style={{ marginRight: 20 }}>
                        训练营
                    </Menu.Item>
                    <Menu.Item key="1" style={{ marginRight: 20 }}>
                        精品小课
                    </Menu.Item>
                    <Menu.Item key="2">
                        VIP课
                    </Menu.Item>
                </Menu>
                <div style={{ position: 'absolute', right: 10, top: 0 }}>
                    <Dropdown overlay={menu}>
                        <Button type="primary">
                            发布课程 <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <div className="role-search" style={{ marginTop: 20 }}>
                    <div >学科/课程</div>
                    <Select style={{ width: 150, marginLeft: 10, marginRight: 10 }} placeholder="全部学科" >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                    </Select>
                    <Select style={{ width: 150, marginLeft: 10, marginRight: 10 }} placeholder="全部课程/关键词" >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                    </Select>
                    <Button type="primary">查询</Button>
                </div>
                {/* 表格 */}
                {this.state.current === '0' && <Training history={this.props.history} />}
                {this.state.current === '1' && <Boutique history={this.props.history} />}
                {this.state.current === '2' && <VipCourse history={this.props.history} />}
            </div>
        )
    }
}