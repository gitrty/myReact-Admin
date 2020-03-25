import React, { Component } from 'react'
import { Menu, Button } from 'antd';

import EditOne from './components/editone'
import EditTwo from './components/edittwo'
import EditThree from './components/editthree'

export default class editCurriculum extends Component {

    state = {
        // 编辑分类切换
        current: '0',
    }

    handleClick(e) {
        this.setState({ current: e.key })
    }

    componentWillMount() {
        if (this.props.location.state) {
            // 编辑行的数据
            console.info(this.props.location.state)
        }
    }


    render() {

        return (
            <div>
                <div style={{ position: 'relative', marginBottom: 20 }}>
                    <Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="0" style={{ marginRight: 20 }}>
                            课程概括
                        </Menu.Item>
                        <Menu.Item key="1" style={{ marginRight: 20 }}>
                            图文详情
                        </Menu.Item>
                        <Menu.Item key="2">
                            课程大纲
                        </Menu.Item>
                    </Menu>
                </div>

                {this.state.current === '0' && <EditOne history={this.props.history} />}
                {this.state.current === '1' && <EditTwo history={this.props.history} />}
                {this.state.current === '2' && <EditThree history={this.props.history} />}

                <div className="edit-curriculum-buttom">
                    <Button style={{ width: 120, marginRight: 20 }}>取消</Button>
                    <Button type="primary" style={{ width: 120 }}>保存</Button>
                </div>
            </div>
        )
    }
}