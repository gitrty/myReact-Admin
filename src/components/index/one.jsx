import React, { Component } from 'react'
import { Pagination } from 'antd'

import globalData from '@/util/global_data'

export default class One extends Component {

    tabPage(page, pageSize) {
        console.info(page)
    }

    componentDidMount() {
        globalData.name = 'jerry'
        console.info(globalData)
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