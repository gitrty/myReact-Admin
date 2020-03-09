import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


import One from './one'
import Two from './two'

export default class Index extends Component {

    render() {
        return (
            <Router>
                <ul>
                    <li><Link to='/one'>toOne</Link> </li>
                    <li><Link to='/two'>toTwo</Link> </li>
                </ul>
                <hr />
                <Route path='/one' component={One}></Route>
                <Route path='/two' component={Two}></Route>
            </Router>
        )
    }
}