import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    BarsOutlined,
    SettingOutlined,
    HomeOutlined,
    ContainerOutlined,
    DesktopOutlined,
    ShopOutlined,
    UserSwitchOutlined,
    ProfileOutlined,
    DeploymentUnitOutlined
} from '@ant-design/icons';

// 本页面css
import '@/assets/css/index.less'

// 引入路由
import { routes } from '@/router'

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
                <Layout className="layout-diy" >
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed} >
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['-1']} >
                            <Menu.Item key="0" disabled='true' title="Gper" style={{ 'cursor': 'default' }}>
                                <span style={{ color: '#fff' }}>{this.state.collapsed ? '' : 'Gper教育后台管理系统'}</span>
                            </Menu.Item>
                            {/* 首页 */}
                            <SubMenu
                                key="sub-index"
                                title={
                                    <span>
                                        <HomeOutlined />
                                        <span>首页</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="1"><Link to='/overview'>网站总览</Link></Menu.Item>
                            </SubMenu>
                            {/* 课程 */}
                            <SubMenu
                                key="sub-curriculum"
                                title={
                                    <span>
                                        <ContainerOutlined />
                                        <span>课程</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="2"><Link to='/curriculum'>课程管理</Link></Menu.Item>
                                <Menu.Item key="3"><Link to='/video'>视频管理</Link></Menu.Item>
                            </SubMenu>
                            {/* 教务教学 */}
                            <SubMenu
                                key="sub-edu"
                                title={
                                    <span>
                                        <DesktopOutlined />
                                        <span>教务教学</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="4"><Link to='/evaluate'>评价管理</Link></Menu.Item>
                                <Menu.Item key="5"><Link to='/answering'>答疑管理</Link></Menu.Item>
                                <Menu.Item key="6"><Link to='/task'>作业管理</Link></Menu.Item>
                            </SubMenu>
                            {/* 营销中心 */}
                            <SubMenu
                                key="sub-marketing"
                                title={
                                    <span>
                                        <ShopOutlined />
                                        <span>营销中心</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="7"><Link to='/coupon'>优惠券</Link></Menu.Item>
                                <Menu.Item key="8"><Link to='/limited'>限时优惠</Link></Menu.Item>
                            </SubMenu>
                            {/* 用户 */}
                            <SubMenu
                                key="sub-user"
                                title={
                                    <span>
                                        <UserSwitchOutlined />
                                        <span>用户</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="9"><Link to='/user'>用户管理</Link></Menu.Item>
                            </SubMenu>
                            {/* 订单 */}
                            <SubMenu
                                key="sub-order"
                                title={
                                    <span>
                                        <ProfileOutlined />
                                        <span>订单</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="10"><Link to='/order'>订单管理</Link></Menu.Item>
                            </SubMenu>
                            {/* 运营 */}
                            <SubMenu
                                key="sub-operate"
                                title={
                                    <span>
                                        <DeploymentUnitOutlined />
                                        <span>运营</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="11"><Link to='/commodity'>商品管理</Link></Menu.Item>
                                <Menu.Item key="12"><Link to='/notice'>公告管理</Link></Menu.Item>
                            </SubMenu>
                            {/* 设置 */}
                            <SubMenu
                                key="sub-set"
                                title={
                                    <span>
                                        <BarsOutlined />
                                        <span>设置</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="13"><Link to='/indexview'>首页管理</Link></Menu.Item>
                                <Menu.Item key="14"><Link to='/vip'>会员权益管理</Link></Menu.Item>
                            </SubMenu>
                            {/* 系统管理 */}
                            <SubMenu
                                key="sub-system"
                                title={
                                    <span>
                                        <SettingOutlined />
                                        <span>系统管理</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="15"><Link to='/mechanism'>部门管理</Link></Menu.Item>
                                <Menu.Item key="16"><Link to='/member'>角色管理</Link></Menu.Item>
                                <Menu.Item key="17"><Link to='/role'>成员管理</Link></Menu.Item>
                                <Menu.Item key="18"><Link to='/menu'>菜单管理</Link></Menu.Item>
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
                                <Redirect to='/overview' />
                            )} />
                            {routes.map((item, index) => (
                                <Route path={item.path} component={item.component} key={index}></Route>
                            ))}
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}