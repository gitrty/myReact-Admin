import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    MailOutlined,
    AppstoreOutlined,
} from '@ant-design/icons';

// 本页面css
import '@/assets/css/index.less'

// 路由组件
import One from './one'
import Two from './two'

import Mechanism from './system/mechanism'
import Member from './system/member'
import Role from './system/role'
import Addmechanism from './system/addmechanism'
import Addmember from './system/addmember'
import Management from './system/management'

const { SubMenu } = Menu;

const { Header, Sider, Content } = Layout;

export default class SiderDemo extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    componentWillMount() {

    }

    render() {

        return (
            <Router>
                <Layout className="layout-diy">
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed} >
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['-1']} >
                            <Menu.Item key="0" disabled='true' title="Gper" style={{ 'cursor': 'default' }}>
                                <span style={{ color: '#fff' }}>{this.state.collapsed ? '' : 'Gper教育后台管理系统'}</span>
                            </Menu.Item>
                            {/* 导航1 */}
                            <Menu.Item key="777">
                                <Link to='/one'>
                                    <UserOutlined />
                                    <span className="menu-item-txt">nav 1</span>
                                </Link>
                            </Menu.Item>
                            {/* 导航2 */}
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <MailOutlined />
                                        <span>Navigation One</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="1"><Link to='/one'>去one页面</Link></Menu.Item>
                                <Menu.Item key="2"><Link to='/two'>去two页面</Link></Menu.Item>
                                <Menu.Item key="3">Option 3</Menu.Item>
                                <Menu.Item key="4">Option 4</Menu.Item>
                            </SubMenu>
                            {/* 导航3 */}
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <AppstoreOutlined />
                                        <span>系统管理</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="5"><Link to='/mechanism'>机构管理</Link></Menu.Item>
                                <Menu.Item key="6"><Link to='/member'>角色管理</Link></Menu.Item>
                                <Menu.Item key="7"><Link to='/role'>成员管理</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ paddingLeft: '18px', fontSize: '20px' }}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
                            })}
                            <div className="userInfo">
                                <img src={require("../../assets/img/login_bg1.jpg")} alt="" className="user-avatar" />
                                <span className="user-name">用户名</span>
                                <span className="user-esc" onClick={this.props.escLogin}>退出</span>
                            </div>
                        </Header>
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
                                overflow: 'auto'
                            }}
                        >

                            <Route path='/' exact render={() => (
                                <Redirect to='/one' />
                            )} />
                            <Route path='/one' component={One}></Route>
                            <Route path='/two' component={Two}></Route>
                            <Route path='/mechanism' component={Mechanism}></Route>
                            <Route path='/member' component={Member}></Route>
                            <Route path='/role' component={Role}></Route>
                            <Route path='/addmechanism' component={Addmechanism}></Route>
                            <Route path='/addmember' component={Addmember}></Route>
                            <Route path='/management' component={Management}></Route>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}