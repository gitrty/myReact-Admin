import React, { Component } from 'react'

import globalData from '@/util/global_data'

export default class Two extends Component {

    componentDidMount() {
        console.info(globalData)
    }


    render() {
        return (
            <div>
                two页面
            </div>
        )
    }
}