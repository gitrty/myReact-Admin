import React, { Component } from 'react'
import { Form, Select,  Upload, message, Button} from 'antd'
import {InboxOutlined} from '@ant-design/icons'
import Header from '../header'

export default  class UploadVideo extends  Component {
    subjectChange () {}
    render() {
        const layout = {
            labelCol: { span: 2},
            wrapperCol: { span: 10 },
          };
          const tailLayout = {
            wrapperCol: { offset: 2, span: 10},
          };
        const { Option } = Select
        const props = {
            name: 'file',
            multiple: true,
            action: '',
            accept: 'video/*',
            onChange(info) {
              const { status } = info.file;
              if (status !== 'uploading') {
                console.log(info.file, info.fileList);
              }
              if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
              } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
              }
            },
          };
        return(
            <div>
                 <Header title={'上传视频'} />
                 <Form
                  {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    component={false}
                >
                    <Form.Item
                        label="所属学科"
                        name="subject"
                        rules={[{ required: true, message: ' ' }]}
                        className="form-item"
                    >
                        <Select placeholder="选择学科" onChange={this.subjectChange.bind(this)} >
                            <Option value='java'>java</Option>
                            <Option value='py'>py</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="视频信息"
                        className="form-item"
                    >
                         <Upload.Dragger  {...props}>
                            <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">点击或者拖曳上传</p>
                            <p className="ant-upload-hint">支持单个或多个视频上传</p>
                        </Upload.Dragger>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                    </Form>
            </div>
        )
    }
}