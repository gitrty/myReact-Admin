import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'   // 路由组件

// 引入图片资源，可在image标签的 src 属性中直接使用
// import logo from './logo.svg';  

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

  componentDidMount() {

    // this.setState(prev => ({
    //   isLogin: true
    // }))

  }

  render() {


    return (
      <div className="App">
        {
          this.state.isLogin ? <Index /> : <Login />
        }
      </div>
    );
  }
}

export default App;
