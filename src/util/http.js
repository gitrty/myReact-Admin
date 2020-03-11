import axios from 'axios'
// import Qs from 'qs'

import { message } from 'antd'

// 提示错误信息
function errorLog(error) {
    message.error(error)
}

// 天气api - 测试使用
axios.defaults.baseURL = 'https://www.tianqiapi.com/api'
// axios.defaults.baseURL = '正式环境'

// 允许携带 cookie
// axios.defaults.withCredentials = true

// 请求拦截器
axios.interceptors.request.use(
    config => {
        // const tk = getToken()
        // if (tk && tk !== 'undefined' && tk !== 'null') {
        // config.headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
        //   config.headers.accessToken = tk
        // }
        // config.transformRequest = [
        //     // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
        //     function (data) {
        //         return Qs.stringify(data)
        //     }
        // ]
        return config
    },
    error => Promise.reject(error)
)

// 响应拦截器
axios.interceptors.response.use(
    response => {
        switch (response.data.code) {
            case '0':
                if (response.data.msg !== 'inactivate') errorLog(response.data.msg)
                break
            case '-2':
                // global.logout()
                // location.reload()
                break
            case '1':
                return response.data.data
            case '-5':
                errorLog(response.data.msg)
                // loading.toast.show(response.data.code, response.data.msg)
                return -5
            case '-3':
                errorLog(response.data.msg)
                // loading.toast.show(response.data.code, response.data.msg)
                return -5
            default:
                if (response.data) return response.data
                errorLog(response.data.msg)
            // loading.toast.show(response.data.code, response.data.msg)
        }
    },
    error => {
        if (error && error.response) {
            switch (error.response.status) {
                case 400: error.message = '请求错误'; break
                case 401: error.message = '未授权，请登录'; break
                case 403: error.message = '拒绝访问'; break
                case 404: error.message = `请求地址出错: ${error.response.config.url}`; break
                case 408: error.message = '请求超时'; break
                case 500: error.message = '服务器内部错误'; break
                case 501: error.message = '服务未实现'; break
                case 502: error.message = '网关错误'; break
                case 503: error.message = '服务不可用'; break
                case 504: error.message = '网关超时'; break
                case 505: error.message = 'HTTP版本不受支持'; break
                default: break
            }
        }
        errorLog(error)
        return Promise.reject(error)
    }
)

export const http = axios