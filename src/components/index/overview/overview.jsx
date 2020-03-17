import React, { Component } from 'react'
import { Row, Col } from 'antd';

import Header from '../header'
import '@/assets/css/overview.less'
import {
    QuestionCircleOutlined
} from '@ant-design/icons';

export default class Overview extends Component {
    render() {

        return (
            <div>
                <Header title={'网站总览'} />
                <h3 style={{ fontSize: 16 }}>数据概况</h3>
                <Row style={{ border: '1px solid #ccc', marginTop: 15 }}>
                    <Col span={6} style={{ borderRight: '1px solid #ccc', padding: 12 }}>
                        <h4>
                            <span style={{ marginRight: 10 }}>今日新增用户数</span>
                            <span title={'今日首次访问PC/APP/小程序的去重用户数。'}><QuestionCircleOutlined /></span>
                        </h4>
                        <div className="indexview-top">
                            <div>20</div>
                            <div>较昨日<span style={{ color: '#f00', margin: '0 4px', fontSize: 20 }}>▲</span>10</div>
                        </div>
                        <div style={{ marginTop: 20, marginBottom: 8 }}>昨日 10</div>
                        <div>总用户数 10000</div>
                    </Col>
                    <Col span={6} style={{ borderRight: '1px solid #ccc', padding: 12 }}>
                        <h4>
                            <span style={{ marginRight: 10 }}>今日访客用户数</span>
                            <span title={'今日访问PC/APP/小程序的去重用户数。'}><QuestionCircleOutlined /></span>
                        </h4>
                        <div className="indexview-top">
                            <div>20</div>
                            <div>较昨日<span style={{ color: '#f00', margin: '0 4px', fontSize: 20 }}>▲</span>10</div>
                        </div>
                        <div style={{ marginTop: 20, marginBottom: 8 }}>昨日 10</div>
                        <div>总用户数 10000</div>
                    </Col>
                    <Col span={6} style={{ borderRight: '1px solid #ccc', padding: 12 }}>
                        <h4>
                            <span style={{ marginRight: 10 }}>今日付费用户数</span>
                            <span title={'今日在PC/APP/小程序内产生过支付行为且支付金额不为0的去重用户数。'}><QuestionCircleOutlined /></span>
                        </h4>
                        <div className="indexview-top">
                            <div>20</div>
                            <div>较昨日<span style={{ color: '#f00', margin: '0 4px', fontSize: 20 }}>▲</span>10</div>
                        </div>
                        <div style={{ marginTop: 20, marginBottom: 8 }}>昨日 10</div>
                        <div>总用户数 10000</div>
                    </Col>
                    <Col span={6} style={{ padding: 12 }}>
                        <h4>
                            <span style={{ marginRight: 10 }}>今日付费转化率</span>
                            <span title={'今日付费用户数/今日访问用户数。'}><QuestionCircleOutlined /></span>
                        </h4>
                        <div className="indexview-top">
                            <div>20</div>
                            <div>较昨日<span style={{ color: '#f00', margin: '0 4px', fontSize: 20 }}>▲</span>10</div>
                        </div>
                        <div style={{ marginTop: 20, marginBottom: 8 }}>昨日 10</div>
                        <div>总用户数 10000</div>
                    </Col>
                </Row>
                <Row style={{ border: '1px solid #ccc', borderTop: 'none' }}>
                    <Col span={6} style={{ borderRight: '1px solid #ccc', padding: 12 }}>
                        <h4>
                            <span style={{ marginRight: 10 }}>今日订单数</span>
                            <span title={'今日在PC/APP/小程序产生的支付成功的订单总数。'}><QuestionCircleOutlined /></span>
                        </h4>
                        <div className="indexview-top">
                            <div>20</div>
                            <div>较昨日<span style={{ color: '#f00', margin: '0 4px', fontSize: 20 }}>▲</span>10</div>
                        </div>
                        <div style={{ marginTop: 20, marginBottom: 8 }}>昨日 10</div>
                        <div>总用户数 10000</div>
                    </Col>
                    <Col span={6} style={{ borderRight: '1px solid #ccc', padding: 12 }}>
                        <h4>
                            <span style={{ marginRight: 10 }}>今日成交额</span>
                            <span title={'今日用户实际支付的订单金额总和，包含退款订单。'}><QuestionCircleOutlined /></span>
                        </h4>
                        <div className="indexview-top">
                            <div>20</div>
                            <div>较昨日<span style={{ color: '#f00', margin: '0 4px', fontSize: 20 }}>▲</span>10</div>
                        </div>
                        <div style={{ marginTop: 20, marginBottom: 8 }}>昨日 10</div>
                        <div>总用户数 10000</div>
                    </Col>
                    <Col span={6} style={{ borderRight: '1px solid #ccc', padding: 12 }}>
                        <h4>
                            <span style={{ marginRight: 10 }}>今日客单价</span>
                            <span title={'今日成交额/今日付费用户数。'}><QuestionCircleOutlined /></span>
                        </h4>
                        <div className="indexview-top">
                            <div>20</div>
                            <div>较昨日<span style={{ color: '#0f0', margin: '0 4px', fontSize: 20 }}>▼</span>10</div>
                        </div>
                        <div style={{ marginTop: 20, marginBottom: 8 }}>昨日 10</div>
                        <div>总用户数 10000</div>
                    </Col>
                    <Col span={6} style={{ padding: 12 }}></Col>
                </Row>
            </div>
        )
    }
}