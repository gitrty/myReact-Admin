import React, { Component } from 'react'
import {Button, Select, Input, Table, Modal} from  'antd'
import Header from '../header'
const { Option } = Select

export default class video extends Component {
    state = { 
        columns: [
            {
                title: '#',   // 字段名
                dataIndex: 'id',  // 对应数据列表name字段
                key: 'id',  // 唯一的key
                align: 'center',   //  该列居中对齐
            },
            {
                title: '所属学科',  
                dataIndex: 'subject',  
                key: 'subject',  
                align: 'center',  
            },
            {
                title: '视频信息',  
                dataIndex: 'videoInfo',  
                key: 'videoInfo', 
                align: 'center', 
            },
            {
                title: '所属课程',  
                dataIndex: 'kecheng',  
                key: 'kecheng', 
                align: 'center', 
            },
            {
                title: '时长',  
                dataIndex: 'time',  
                key: 'time', 
                align: 'center', 
            },
            {
                title: '播放次数',  
                dataIndex: 'cishu',  
                key: 'cishu', 
                align: 'center', 
            },
            {
                title: '文件大小',  
                dataIndex: 'daxiao',  
                key: 'daxiao', 
                align: 'center', 
            },
            {
                title: '上传者',  
                dataIndex: 'shangchuanzhe',  
                key: 'shangchuanzhe', 
                align: 'center', 
            },
            {
                title: '创建时间',  
                dataIndex: 'ctime',  
                key: 'ctime', 
                align: 'center', 
            },
            {
                title: '操作',  
                key: 'action', 
                align: 'center', 
                render: (text, record) =>(
                    <span>
                        <a href="###" className="action-tag" onClick={this.delet.bind(this, record)}>删除</a>
                    </span>
                )
            }
        ],
        data: [
            {
                key: '1',
                id: 1,
                subject: 'JAVA',
                videoInfo: '并发编程入门到入魔',
                kecheng: 'JAVAp6',
                time: '100分钟',
                cishu: '3',
                daxiao: '99M',
                shangchuanzhe: '咕小泡',
                ctime: '2020-3-1 15:00:00'
            }
        ]
    }
    // 删除
    delet (record) {
        Modal.confirm({
            title: '删除提示',
            content: '是否删除：委派模式详解.MP4视频信息?',
            okText: '确认',
            cancelText: '取消',
            onOk: ()=> {}
          });
    }
    //查询
    query () {
    }
    //上传视频
    uploadVideo () {
        this.props.history.push({ pathname: '/uploadVideo' })
    }
    render() {
        return (
            <div>
                <Header title={'视频管理'} />
                <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', right: 10, top: 0 }}>
                        <Button type="primary" onClick={this.uploadVideo.bind(this)}>
                            上传视频
                        </Button>
                    </div>
                    <div className="role-search" style={{ marginTop: 20 }}>
                        <div >学科/课程</div>
                        <Select style={{ width: 150, marginLeft: 10, marginRight: 10 }} placeholder="全部学科" >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                        </Select>

                        <div style={{marginLeft: 10}}>视频信息</div>
                        <Input style={{ width: 200, marginLeft: 10, marginRight: 10 }} placeholder="请输入关键字" />
                        <Button type="primary" onClick={this.query.bind()}>查询</Button>
                    </div>
                </div>
                <Table columns={this.state.columns} dataSource={this.state.data} bordered ></Table>

            </div>
        )
    }
}