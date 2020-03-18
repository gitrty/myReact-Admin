import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



// 使用redux
// import { createStore, applyMiddleware } from 'redux'
// import { Provider, connect } from 'react-redux'

// 引入reducer
// import reducer from './reducers'

// 创建一个初始化的state
// var initState = {
//     card: {
//         name: 'Jack',
//         picture: 'a.jpg'
//     },
//     dialog: {
//         status: false
//     }
// }


// 创建store
// const store = createStore(reducer, initState)

ReactDOM.render(
    // <Provider store={store}>
        <App />
    // </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
