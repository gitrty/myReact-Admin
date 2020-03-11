import React, { Component } from 'react'
import { Pagination } from 'antd'

// 全局变量
import globalData from '@/util/global_data'

// axios请求
import { system } from '@/api'

const { getTianQi } = system

export default class One extends Component {



    tabPage(page, pageSize) {
        console.info(page)
    }

    async componentWillMount() {
        const a = await getTianQi({ version: 'v1', appid: 19512458, appsecret: 'NBtBYRq7' })
        console.info(a)
    }

    componentDidMount() {
        globalData.name = 'jerry'
        // console.info(globalData)
    }

    render() {
        return (
            <div>
                one页面
                <hr />
                <div>
                    <Pagination defaultCurrent={1} total={100} pageSize={10} onChange={this.tabPage.bind(this)} />
                </div>
            </div>
        )
    }
}
