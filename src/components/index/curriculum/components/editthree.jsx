import React, { Component } from 'react'
import { Button, Modal, Input, Checkbox } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default class ReleaseThree extends Component {

    state = {
        // 上传视频拟态框
        visible: false,
        // 选择视频拟态框
        selectVisible: false,
        // loading动画
        modalLoading: false,
        // 数据模拟
        leftList: [1, 2, 3],
        rightList: [1, 2, 3, 4, 5, 6],
        // 添加章节数据结构
        everyChapter: [
            {
                title: '大标题',
                content: [
                    {
                        minTitle: '小标题',
                        viedo: ''
                    }
                ]
            },
        ],
    }

    // 确认发布
    successSubmit() {

    }

    // 上一步
    prev() {
        this.props.history.push({ pathname: '/releasetwo' })
    }

    // 取消
    cancelEdit() {
        Modal.confirm({
            title: '取消提示',
            content: `当前已有内容正在编辑，确定取消发布课程吗？`,
            okText: '确定',
            cancelText: '取消',
            onOk() {

            }
        })
    }

    // 添加视频 
    addTeacher() {
        this.setState({
            selectVisible: true,
            visible: false
        })
    }

    // 选择视频 - 确定
    handleOk() {
        this.setState({ modalLoading: true });
        setTimeout(() => {
            this.setState({ modalLoading: false, selectVisible: false });
        }, 1000)
    }

    // 选择视频 - 取消
    handleCancel() {
        this.setState({ selectVisible: false });
    }

    // 搜索视频
    selectUser(e) {
        e.persist()
        console.info(e.target.value)
    }

    // 批量添加视频
    addUser() {

    }

    // 批量删除视频
    delUser() {

    }

    // 选择左边checkbox
    selectLeft(index) {
        console.info(index)
    }

    // 选择右边checkbox
    selectRight(index) {

    }

    // 添加节内容
    addSection(index) {
        let newEveryChapter = JSON.parse(JSON.stringify(this.state.everyChapter))
        newEveryChapter[index].content.push({
            minTitle: '',
            viedo: ''
        })
        this.setState({
            everyChapter: newEveryChapter
        })
    }

    // 添加章节
    addChapter() {
        let newEveryChapter = JSON.parse(JSON.stringify(this.state.everyChapter))
        // 添加一个新章节
        newEveryChapter.push({
            title: '',
            content: [
                {
                    minTitle: '',
                    viedo: ''
                }
            ]
        })
        this.setState({
            everyChapter: newEveryChapter
        })
    }


    render() {
        return (
            <div>
                <h3 style={{ fontSize: 15 }}>课程大纲</h3>
                {this.state.everyChapter.map((item, index) => (
                    <div className="release-three-addviedo" key={index}>
                        <div className="release-three-addviedo-top">
                            <span>第{index + 1}章内容</span><Input placeholder="请输入章内容" defaultValue={item.title} />
                        </div>
                        {item.content.map((item2, index2) => (
                            <div className="release-three-addviedo-mid" key={index2}>
                                <div className="release-three-container">
                                    <span>第{index2 + 1}节内容</span><Input placeholder="请输入节内容" defaultValue={item2.minTitle} />
                                </div>
                                <div className="release-flex">
                                    <span>视频</span>
                                    <div className="release-upload-viedo" onClick={() => { this.setState({ visible: true }) }} ><PlusOutlined style={{ fontSize: 22 }} /> <span>上传视频</span> </div>
                                    <Modal
                                        title="上传视频"
                                        visible={this.state.visible}
                                        onCancel={() => { this.setState({ visible: false }) }}
                                        footer={
                                            [] // 设置footer为空，去掉 取消 确定默认按钮
                                        }
                                    >
                                        <div className="release-modal-addviedo">
                                            <div>
                                                <PlusOutlined style={{ fontSize: 22 }} />
                                                <span>上传视频</span>
                                            </div>
                                            <div onClick={() => { this.setState({ selectVisible: true, visible: false }) }}>
                                                <PlusOutlined style={{ fontSize: 22 }} />
                                                <span>选择视频</span>
                                            </div>
                                        </div>
                                    </Modal>
                                    {/* 选择视频 */}
                                    <Modal
                                        visible={this.state.selectVisible}
                                        title="选择成员"
                                        // onOk={this.handleOk.bind(this)}
                                        onCancel={this.handleCancel.bind(this)}
                                        footer={[
                                            <Button key="back" onClick={this.handleCancel.bind(this)}>
                                                取消
                                               </Button>,
                                            <Button key="submit" type="primary" loading={this.state.modalLoading} onClick={this.handleOk.bind(this)}>
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
                            </div>
                        ))}
                        <div className="release-three-addviedo-bottom" onClick={this.addSection.bind(this, index)}>
                            <PlusOutlined style={{ fontSize: 18 }} /><span>添加节内容</span>
                        </div>
                    </div>
                ))}
                <div className="release-addchapter" onClick={this.addChapter.bind(this)}>
                    <PlusOutlined style={{ fontSize: 16 }} /> <span>添加章节</span>
                </div>
            </div>
        )
    }
}