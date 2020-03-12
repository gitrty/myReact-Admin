import React, { Component } from 'react'

import '@/assets/css/header.less'

export default class Header extends Component {


    render() {

        return (
            <div>
                <h2 className="con-title">{this.props.title}</h2>
            </div>
        )
    }
}
