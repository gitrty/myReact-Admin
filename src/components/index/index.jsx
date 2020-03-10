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

    componentWillMount(){

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
                                        <span>Navigation Two</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                                <SubMenu key="sub3" title="Submenu">
                                    <Menu.Item key="7">Option 7</Menu.Item>
                                    <Menu.Item key="8">Option 8</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ paddingLeft: '18px', fontSize: '20px' }}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
                            })}
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
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}