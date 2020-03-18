import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, DatePicker, Checkbox } from 'antd';

import Header from '../header'
import '@/assets/css/overview.less'
import { QuestionCircleOutlined, AccountBookOutlined, DashboardOutlined } from '@ant-design/icons';

// RangePicker 组件汉化
import locale from 'antd/lib/date-picker/locale/zh_CN';
import 'moment/locale/zh-cn';

// echarts 组件按需引入
// import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line';
import ReactEcharts from 'echarts-for-react';

export default class Overview extends Component {

    state = {
        option: {
            tooltip: {
                trigger: 'axis',
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '访问人数',
                    type: 'line',   //这块要定义type类型，柱形图是bar,饼图是pie
                    data: [1000, 2000, 1500, 3000, 2000, 1200, 800],
                    smooth: true
                },
                {
                    name: '付费用户数',
                    type: 'line',   //这块要定义type类型，柱形图是bar,饼图是pie
                    data: [500, 200, 150, 300, 200, 120, 80],
                    smooth: true
                }
            ]
        }
    }

    // 流量趋势 - 日期选择器
    dateChange(data, dataString) {
        console.info(dataString)  // ["2020-04-27", "2020-04-30"]
    }

    // 访问人数
    userNum(e) {
        let newOption = JSON.parse(JSON.stringify(this.state.option))

        if (!e.target.checked) {
            newOption.series.forEach((item, index) => {
                if (item.name === '访问人数') newOption.series.splice(index, 1)
            })
        } else {
            newOption.series.push({
                name: '访问人数',
                type: 'line',   //这块要定义type类型，柱形图是bar,饼图是pie
                data: [1000, 2000, 1500, 3000, 2000, 1200, 800],
                smooth: true
            })
        }
        this.setState({
            option: newOption
        })
        this.echarts_react.getEchartsInstance().setOption(newOption, true);   // 重新渲染（数据更新时）
    }

    // 付费用户数
    vipNum(e) {
        let newOption = JSON.parse(JSON.stringify(this.state.option))

        if (!e.target.checked) {
            newOption.series.forEach((item, index) => {
                if (item.name === '付费用户数') newOption.series.splice(index, 1)
            })
        } else {
            newOption.series.push({
                name: '付费用户数',
                type: 'line',   //这块要定义type类型，柱形图是bar,饼图是pie
                data: [500, 200, 150, 300, 200, 120, 80],
                smooth: true
            })
        }
        this.setState({
            option: newOption
        })
        this.echarts_react.getEchartsInstance().setOption(newOption, true);   // 重新渲染（数据更新时）
    }

    render() {

        const { RangePicker } = DatePicker

        return (
            <div>
                <Header title={'网站总览'} />
                {/* 数据概括 */}
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
                {/* 流量趋势 */}
                <h3 className="min-title clearfix">
                    <span className="fl">流量趋势</span>
                    <div className="fr check-time">
                        <span>昨日</span>
                        <span>今日</span>
                        <span>最近7天</span>
                        <span>最近30天</span>
                        <RangePicker locale={locale} onChange={this.dateChange.bind(this)} />
                    </div>
                </h3>
                <div className="check-nums">
                    <Checkbox onChange={this.userNum.bind(this)} defaultChecked={true}>访问人数</Checkbox>
                    <Checkbox onChange={this.vipNum.bind(this)} defaultChecked={true}>付费用户数</Checkbox>
                </div>
                {/* echarts 图表 */}
                <ReactEcharts
                    ref={(e) => { this.echarts_react = e; }}
                    option={this.state.option}
                    theme="Imooc"
                    notMerge={false}
                    lazyUpdate={true}
                    style={{ height: '500px', width: '100%' }}
                />

                <Row style={{ border: '1px solid #ccc', marginTop: 15 }}>
                    <Col span={6} style={{ borderRight: '1px solid #ccc', padding: 12 }}>
                        <h4>
                            <span style={{ marginRight: 10 }}>今日作业提交数</span>
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
                            <span style={{ marginRight: 10 }}>今日提问数</span>
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
                            <span style={{ marginRight: 10 }}>今日回答数</span>
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
                            <span style={{ marginRight: 10 }}>今日撰写文章数</span>
                        </h4>
                        <div className="indexview-top">
                            <div>20</div>
                            <div>较昨日<span style={{ color: '#f00', margin: '0 4px', fontSize: 20 }}>▲</span>10</div>
                        </div>
                        <div style={{ marginTop: 20, marginBottom: 8 }}>昨日 10</div>
                        <div>总用户数 10000</div>
                    </Col>
                </Row>
                {/* 营销工具 */}
                <h3 className="min-title clearfix">
                    <span className="fl">营销工具</span>
                </h3>
                <div style={{ display: 'flex' }}>
                    <Link to='/coupon' className="index-coupon" style={{marginRight:20}}>
                        <AccountBookOutlined style={{ fontSize: 30, marginLeft: 20, marginRight: 14 }} />
                        <div>
                            <p style={{ fontSize: 18, marginBottom: 10 }}>优惠券</p>
                            <p>给学员发放优惠券，促成购买</p>
                        </div>
                    </Link>
                    <Link to='/limited' className="index-coupon">
                        <DashboardOutlined style={{ fontSize: 30, marginLeft: 20, marginRight: 14 }} />
                        <div>
                            <p style={{ fontSize: 18, marginBottom: 10 }}>限时优惠</p>
                            <p>优惠限时限量，刺激学员下单</p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}