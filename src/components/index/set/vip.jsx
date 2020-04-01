import React, { Component } from 'react'
import { Button, Input, Table, Modal, message, Checkbox } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import Header from '../header'
import '@/assets/css/vip.less'

export default class Vip extends Component {

    state = {
        // 表格首行（字段）
        columns1: [
            {
                title: '图片',
                key: 'photo',
                align: 'center',
                render: (text, record) =>
                    record.photo !== '' ?
                        <div className="again-upload-img">
                            <img
                                src={require("../../../assets/img/login_bg1.jpg")}
                                alt=""
                                style={{ width: 180, height: 60 }}
                            />
                            <span>重新上传</span>
                        </div> :
                        <div style={{ cursor: 'pointer' }}>
                            <PlusOutlined style={{ marginRight: 10 }} />
                            <span>请上传优惠券图片</span>
                        </div>
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (    // text,record ->  当前行的 {} 数据
                    <span>
                        <a href="###" className="action-tag">上移</a>
                        <a href="###" className="action-tag">下移</a>
                        <a href="###" className="action-tag" onClick={this.delet1.bind(this, record)}>删除</a>
                    </span>
                ),
                align: 'center'
            },
        ],

        // 表格数据
        data1: [
            {
                key: 1,
                photo: 'p'
            },
            {
                key: 2,
                photo: ''
            }
        ],

        columns2: [
            {
                title: '书籍',
                key: 'photo',
                align: 'center',
                render: (text, record) =>
                    record.book !== '' ?
                        <div>{record.book}</div> :
                        <div style={{ cursor: 'pointer' }} onClick={this.addBook.bind(this)}>
                            <PlusOutlined style={{ marginRight: 10 }} />
                            <span>请选择书籍</span>
                        </div>
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (    // text,record ->  当前行的 {} 数据
                    <span>
                        <a href="###" className="action-tag">上移</a>
                        <a href="###" className="action-tag">下移</a>
                        <a href="###" className="action-tag" onClick={this.delet2.bind(this, record)}>删除</a>
                    </span>
                ),
                align: 'center'
            },
        ],

        data2: [
            {
                key: 1,
                book: 'sp5核心原理'
            },
            {
                key: 2,
                book: ''
            }
        ],


        columns3: [
            {
                title: '图片',
                key: 'photo',
                align: 'center',
                render: (text, record) =>
                    record.photo !== '' ?
                        <div className="again-upload-img">
                            <img
                                src={require("../../../assets/img/login_bg1.jpg")}
                                alt=""
                                style={{ width: 180, height: 60 }}
                            />
                            <span>重新上传</span>
                        </div> :
                        <div style={{ cursor: 'pointer' }}>
                            <PlusOutlined style={{ marginRight: 10 }} />
                            <span>请上传权益图片</span>
                        </div>
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (    // text,record ->  当前行的 {} 数据
                    <span>
                        <a href="###" className="action-tag">上移</a>
                        <a href="###" className="action-tag">下移</a>
                        <a href="###" className="action-tag" onClick={this.delet1.bind(this, record)}>删除</a>
                    </span>
                ),
                align: 'center'
            },
        ],

        data3: [
            {
                key: 1,
                photo: 'p'
            },
            {
                key: 2,
                photo: ''
            }
        ],

        isBook: false,
        // 数据模拟
        leftList: [1, 2, 3],
        rightList: [1, 2, 3, 4, 5, 6],
    }

    // 权益一 - 删除
    delet1(record) {
        Modal.confirm({
            title: '删除提示',
            content: `是否删除`,
            okText: '确定',
            cancelText: '取消',
            onOk() {
                message.success('删除成功！')
            }
        })
    }

    // 权益二 - 删除
    delet2(record) {
        Modal.confirm({
            title: '删除提示',
            content: `是否删除`,
            okText: '确定',
            cancelText: '取消',
            onOk() {
                message.success('删除成功！')
            }
        })
    }

    // 权益三 - 删除
    delet3(record) {
        Modal.confirm({
            title: '删除提示',
            content: `是否删除`,
            okText: '确定',
            cancelText: '取消',
            onOk() {
                message.success('删除成功！')
            }
        })
    }

    // 权益一 - 添加
    addSynopsisOne() {
        let newData = JSON.parse(JSON.stringify(this.state.data1))
        newData.push({
            key: new Date(),
            photo: ''
        })
        this.setState({
            data1: newData
        })
    }

    // 权益二 - 添加
    addSynopsisTwo() {
        let newData = JSON.parse(JSON.stringify(this.state.data2))
        newData.push({
            key: new Date(),
            book: ''
        })
        this.setState({
            data2: newData
        })
    }

    // 权益三 - 添加
    addSynopsisThree() {
        let newData = JSON.parse(JSON.stringify(this.state.data3))
        newData.push({
            key: new Date(),
            photo: ''
        })
        this.setState({
            data3: newData
        })
    }

    // 权益二 - 选择书籍
    addBook(value) {
        this.setState({ isBook: true });
    }

    // 权益二 - 选择书籍-取消
    handleCancel() {
        this.setState({ isBook: false });
    }

    // 权益二 - 选择书籍-确定
    handleOk() {
        this.setState({ isBook: false });
    }

    // 选择书籍 - 搜索
    selectUser() {

    }

    selectLeft() {

    }

    selectRight() {

    }

    addUser() {

    }

    delUser() {

    }

    render() {

        return (
            <div>
                <Header title={'会员权益管理'} />
                <div className="vip-con-title">
                    <p>权益一</p>
                    <Button type="primary" onClick={this.addSynopsisOne.bind(this)}>添加</Button>
                </div>
                <div className="vip-synopsis">
                    <span>权益简介</span>
                    <Input placeholder="请输入权益名称" />
                </div>
                <Table
                    columns={this.state.columns1}
                    dataSource={this.state.data1}
                    bordered
                    pagination={false}
                    style={{ marginBottom: 30 }}
                />
                <div className="vip-con-title">
                    <p>权益二 <span className="vip-con-min-title">最多可添加四本书籍</span></p>
                    <Button type="primary" onClick={this.addSynopsisTwo.bind(this)}>添加</Button>
                </div>
                <div className="vip-synopsis">
                    <span>权益简介</span>
                    <Input placeholder="请输入权益名称" />
                </div>
                <Table
                    columns={this.state.columns2}
                    dataSource={this.state.data2}
                    bordered
                    pagination={false}
                    style={{ marginBottom: 30 }}
                />
                <div className="vip-con-title">
                    <p>权益三</p>
                    <Button type="primary" onClick={this.addSynopsisThree.bind(this)}>添加</Button>
                </div>
                <div className="vip-synopsis">
                    <span>权益简介</span>
                    <Input placeholder="请输入权益名称" />
                </div>
                <Table
                    columns={this.state.columns3}
                    dataSource={this.state.data3}
                    bordered
                    pagination={false}
                />
                {/* 权益二 - 添加书籍 */}
                <Modal
                    visible={this.state.isBook}
                    title="选择成员"
                    // onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                    footer={[
                        <Button key="back" onClick={this.handleCancel.bind(this)}>
                            取消
                        </Button>,
                        <Button key="submit" type="primary" onClick={this.handleOk.bind(this)}>
                            确定
                        </Button>,
                    ]}
                >
                    <div className="manage-model-con">
                        <div>
                            <h3>可选择成员：</h3>
                            <div className="manage-model-left">
                                <Input placeholder={"输入用户名/QQ"} onChange={this.selectUser.bind(this)} />
                                <div className="manage-model-no-select">
                                    {this.state.leftList.map((item, index) => <Checkbox key={index} onChange={this.selectLeft.bind(this, index)} style={{ whiteSpace: "nowrap", marginLeft: 0 }}>merrcc(666666)</Checkbox>)}
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>已选择成员：</h3>
                            <div className="manage-model-right">
                                <div className="manage-model-no-select">
                                    {this.state.rightList.map((item, index) => <Checkbox key={index} onChange={this.selectRight.bind(this, index)} style={{ whiteSpace: "nowrap", marginLeft: 0 }}>merrcc(666666)</Checkbox>)}
                                </div>
                            </div>
                        </div>
                        <div className="manage-model-mid">
                            <Button type="default" style={{ marginLeft: 16, marginTop: 100, marginBottom: 10 }} onClick={this.addUser.bind(this)}>添加></Button>
                            <Button type="default" style={{ marginLeft: 16, marginTop: 10, marginBottom: 20 }} onClick={this.delUser.bind(this)}>&lt;删除</Button>
                            <p>只有在“成员管理”中添加过的成员，才可以添加到某个角色下</p>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}