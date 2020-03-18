import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Select, DatePicker, Checkbox } from 'antd';

// DatePicker 组件汉化
import locale from 'antd/lib/date-picker/locale/zh_CN';
import 'moment/locale/zh-cn';

export default class AddLimited extends Component {

    state = {
        disabled: false
    }

    // 可用人数
    peopleNumChange() {

    }

    // 可用人数 - 不限checkbox
    peopleNumCheckChange(e) {
        this.setState({ disabled: e.target.checked ? true : false })
    }

    render() {

        const { Option } = Select

        const onFinish = values => {
            // 注：提交时不会获取可用人数栏，需单独获取
            console.log('Success:', values);
        }

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        }

        const tailLayout = {
            labelCol: { span: 2 },
            wrapperCol: { offset: 0, span: 10 },
        }

        return (
            <div>
                <div className="manage-tit"> <span><Link to='/limited'>&lt;返回 </Link></span>丨<span>添加限时优惠</span></div>

                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        {...tailLayout}
                        label="选择学科"
                        name="subject"
                        className="form-item"
                        rules={[{ required: true, message: ' ' }]}
                    >
                        <Select
                            placeholder="选择学科"
                        >
                            <Option value="java">java</Option>
                            <Option value="dsj">大数据</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="选择课程"
                        name="curriculum"
                        className="form-item"
                        rules={[{ required: true, message: ' ' }]}
                    >
                        <Select
                            placeholder="选择课程"
                        >
                            <Option value="java">java</Option>
                            <Option value="dsj">大数据</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="课程价格"
                        name="price"
                        className="form-item"
                    >
                        <span>6666元</span>
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="优惠后价格"
                        name="nextPrice"
                        className="form-item"
                        rules={[{ required: true, message: ' ' }]}
                    >
                        <Input placeholder="请输入优惠后的价格" addonAfter={'元'} />
                    </Form.Item>
                    <div >
                        <Form.Item
                            {...tailLayout}
                            label="可用人数"
                            name="peopleNum"
                            className="form-item"
                            rules={[{ required: true, message: ' ' }]}

                        >
                            <Input placeholder="≥1的整数" addonAfter={'人'} disabled={this.state.disabled} onChange={this.peopleNumCheckChange.bind(this)} />
                            <Checkbox onChange={this.peopleNumCheckChange.bind(this)}>不限</Checkbox>
                        </Form.Item>

                    </div>

                    <Form.Item
                        {...tailLayout}
                        label="开始时间"
                        name="startTime"
                        className="form-item"
                        rules={[{ required: true, message: ' ' }]}
                    >
                        <DatePicker locale={locale} />
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        label="结束时间"
                        name="endTime"
                        className="form-item"
                        rules={[{ required: true, message: ' ' }]}
                    >
                        <DatePicker locale={locale} />
                    </Form.Item>

                    <Form.Item
                        {...tailLayout}
                        style={{ whiteSpace: "nowrap" }}
                    >
                        <Button type="defalut" style={{ width: '120px', marginLeft: 70 }}>
                            <Link to='/limited'>
                                取消
                            </Link>
                        </Button>
                        <Button type="primary" htmlType="submit" style={{ width: '120px', marginLeft: 16 }}>
                            确认
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}