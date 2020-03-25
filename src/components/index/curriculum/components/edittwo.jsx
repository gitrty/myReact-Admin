import React, { Component } from 'react'
import { Card, Modal } from 'antd';

// 富文本编辑器
import { Editor } from 'react-draft-wysiwyg'
import draftjs from 'draftjs-to-html'
import 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export default class ReleaseTwo extends Component {

    state = {
        showRichText: false,
        editorContent: '',
        editorState: ''
    }

    //清空文本
    handleClearContent = () => {
        this.setState({
            editorState: ''
        })
    }

    //获取文本内容
    handleGetText = () => {
        this.setState({
            showRichText: true
        })
    }

    //编辑器的状态
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState
        })
    }

    //编辑器内容的状态
    onEditorChange = (editorContent) => {
        this.setState({
            editorContent
        })
    }

    // 下一步
    navToReleaseThree() {
        // console.info(draftjs(this.state.editorContent))  // 获取html格式的富文本
        this.props.history.push({ pathname: '/releasethree' })
    }

    // 上一步
    prev() {
        this.props.history.push({ pathname: '/releaseone' })
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

    render() {
        const { editorState } = this.state;
        return (
            <div>
                <div>
                    <Card
                        title="图文详情"
                        extra={<div style={{ color: '#ccc', cursor: 'pointer' }} onClick={this.handleClearContent}>清空内容</div>}
                        style={{ marginTop: 20, marginBottom: 20 }}
                    >
                        <Editor
                            localization={{ locale: 'zh' }}
                            editorState={editorState}
                            onEditorStateChange={this.onEditorStateChange}
                            onContentStateChange={this.onEditorChange}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                        />
                    </Card>
                    <Modal
                        title="富文本"
                        visible={this.state.showRichText}
                        onCancel={() => {
                            this.setState({
                                showRichText: false
                            })
                        }}
                        footer={null}>
                        {draftjs(this.state.editorContent)}
                    </Modal>
                    {/* <Card>
                        <Button type="primary" onClick={this.handleClearContent}>清空内容</Button>
                        <Button type="primary" onClick={this.handleGetText} style={{ marginLeft: 10 }}>获取html文本</Button>
                    </Card> */}
                </div>

            </div>
        )
    }
}