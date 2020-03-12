import React from 'react';
import cookie from 'react-cookies'

import { message, Modal } from 'antd'

// 全局css
import './App.css';

// 清楚默认样式文件
import './assets/css/base.css'

// 全局引入 antd.css
import 'antd/dist/antd.css';

// 组件引入
import Login from './components/login/login'
import Index from './components/index/index'

class App extends React.Component {

  state = {
    isLogin: false
  }

  componentWillMount() {
    // 判断用户登录状态
    if (cookie.load('token')) {
      this.setState(prev => ({
        isLogin: true
      }))
    }
  }

  // 登录
  login(uName, uPwd) {

    if (uName === 'admin' && uPwd === 'admin') {
      this.setState({
        isLogin: true
      })
      // 将登录状态保存到cookie
      cookie.save('token', 6666)
      message.success('登录成功')
      return
    }

    // 账号密码错误
    message.error('账号或密码错误')
  }

  // 退出登录
  escLogin() {
    let _this = this
    Modal.confirm({
      title: '确定要退出登录吗?',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        cookie.remove('token')
        _this.setState({
          isLogin: false
        })
        message.success('退出登录成功')
      }
    })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.isLogin ?
            <Index escLogin={this.escLogin.bind(this)} /> :
            <Login goLogin={this.login.bind(this)} />
        }
      </div>
    );
  }
}

export default App;
