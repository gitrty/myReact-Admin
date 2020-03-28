import React, { Component } from 'react'
import {Button, Select, Input, Table, DatePicker, Modal} from  'antd'
import { DownOutlined } from '@ant-design/icons';
import Header from '../header'
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input;


export default class Evaluate extends Component {
    state= {
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
                title: '所属课程',  
                dataIndex: 'kecheng',  
                key: 'kecheng', 
                align: 'center', 
            },
            {
                title: '用户名',  
                dataIndex: 'userName',  
                key: 'userName', 
                align: 'center', 
            },
            {
                title: '手机',  
                dataIndex: 'tel',  
                key: 'tel', 
                align: 'center', 
            },
            {
                title: '评分',  
                dataIndex: 'evaluate',  
                key: 'evaluate', 
                align: 'center', 
            },
            {
                title: '评价内容',  
                dataIndex: 'comment',  
                key: 'comment', 
                align: 'center', 
                ellipsis: true,
            },
            {
                title: '官网回复',  
                dataIndex: 'reply',  
                key: 'reply', 
                align: 'center', 
                ellipsis: true,
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
                width: 210,
                render: (text, record) =>(
                    <span>
                        <a href="###" className="action-tag" onClick={this.reply.bind(this, record)}>回复</a>
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
                kecheng: 'JAVAp6',
                userName: '咕小泡',
                tel: '13011112222',
                evaluate: '3分',
                comment: '评价感受感受评价评价',
                reply: '谢谢你的认可谢谢你的认可谢谢你的认可谢谢你的认可',
                ctime: '2020-3-1 15:00:00'
            }
        ],
        showAdvancedQuery: false,
        visible:false
    }
    reply (record) {
        this.setState({visible: true})
    }
    delet(record) {
        Modal.confirm({
            title: '删除提示',
            content: '是否删除',
            okText: '确认',
            cancelText: '取消',
            onOk: ()=> {}
          });
    }
    query() {}
    toggleAllQuery () {
        this.setState({showAdvancedQuery: !this.state.showAdvancedQuery})
    }
    handleOk = e => {
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        this.setState({
          visible: false,
        });
      };
    timePicker(props) {
        if (props.showAdvancedQuery) {
           return <div  style={{marginBottom:10}}>创建时间<RangePicker  style={{ marginLeft: 10, marginRight: 10 }} placeholder={['开始日期','结束日期']} /></div>
        } 
        return null
    }
    render() {
        return (
            <div>
                <Header title={'评价管理'} />
                <div style={{ position: 'relative' }}>
                    <div className="role-search" style={{ marginTop: 20 ,marginBottom:10}}>
                        <div >学科/课程</div>
                        <Select style={{ width: 150, marginLeft: 10, marginRight: 10 }} placeholder="全部学科" >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                        </Select>
                     
                        <Select style={{ width: 150, marginLeft: 10, marginRight: 10 }} placeholder="全部课程" >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                        </Select>
                        <div style={{marginLeft: 10}}>评分</div>
                        <Select style={{ width: 150, marginLeft: 10, marginRight: 10 }} placeholder="全部评分" >
                            <Option value="5">5分</Option>
                            <Option value="4">4分</Option>
                            <Option value="3">3分</Option>
                            <Option value="2">2分</Option>
                            <Option value="1">1分</Option>
                        </Select>
                        <div style={{marginLeft: 10}}>回复状态</div>
                        <Select style={{ width: 150, marginLeft: 10, marginRight: 10 }} placeholder="全部" >
                            <Option value="1">已回复</Option>
                            <Option value="0">未回复</Option>
                        </Select>
                        <div style={{marginLeft: 10}}>评价内容</div>
                        <Input style={{ width: 200, marginLeft: 10, marginRight: 10 }} placeholder="请输入关键字" />
                        <Button type="primary" onClick={this.toggleAllQuery.bind(this)}>高级查询 <DownOutlined /></Button>
                    </div>
                   <this.timePicker showAdvancedQuery={this.state.showAdvancedQuery}></this.timePicker>
                    <div style={{marginBottom:30}}><Button type="primary" onClick={this.query.bind()}>查询</Button></div> 
                </div>
                <Table columns={this.state.columns} dataSource={this.state.data} bordered ></Table>

                <Modal
                title="官方回复"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                okText="确认"
                cancelText="取消"
                >
                <TextArea rows={4}  placeholder="请输入官方回复内容"/>
                </Modal>
            </div>
        )
    }
}