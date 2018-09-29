import './styles.scss'
import React from 'react'
import BraftEditor from 'braft-editor'
import { Form, Input, Button } from 'antd'
import { formatHTML } from '../utils/base'

import 'antd/lib/input/style/index.css'
import 'antd/lib/button/style/index.css'
import 'antd/lib/form/style/index.css'

const formDemoCode = formatHTML(`
`)

const FormItem = Form.Item

const formItemLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 21, offset: 1 },
}

class FormDemo extends React.Component {

  componentDidMount () {

    // 异步设置编辑器内容
    setTimeout(() => {
      this.props.form.setFieldsValue({
        content: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>')
      })
    }, 1000)

  }

  handleSubmit = (event) => {

    event.preventDefault()

    this.props.form.validateFields((error, values) => {
      if (!error) {
        console.log(values)
      }
    })

  }

  render () {

    const { getFieldDecorator } = this.props.form
    const controls = ['bold', 'italic', 'underline', 'text-color', 'separator', 'link', 'separator', 'media' ]

    return (
      <div className="demo-container pull-right">
        <h3 className="caption">基本使用</h3>
        <h5 className="sub-caption">本页面将演示如何用最基本的方式使用Braft Editor</h5>
        <h5 className="section-caption">功能要点</h5>
        <ul className="points">
          <li>- 使用editorState.toHTML()实时获取html</li>
        </ul>
        <h5 className="section-caption">编辑器演示</h5>
        <div className="form-demo">
          <Form onSubmit={this.handleSubmit}>
            <FormItem {...formItemLayout} label="文章标题">
              {getFieldDecorator('title', {
                rules: [{
                  required: true,
                  message: '请输入标题',
                }],
              })(
                <Input size="large" placeholder="请输入标题"/>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="文章正文">
              {getFieldDecorator('content', {
                validateTrigger: 'onBlur',
                rules: [{
                  required: true,
                  transform: editorState => {
                    return editorState ? editorState.toHTML() : ''
                  },
                  validator: (_, value, callback) => {
                    if (!value || value === '<p></p>') {
                      callback('请输入正文内容')
                    } else {
                      callback()
                    }
                  }
                }],
              })(
                <BraftEditor className="my-editor" controls={controls} placeholder="请输入正文内容" />
              )}
            </FormItem>
            <FormItem {...formItemLayout}>
              <Button size="large" type="primary" htmlType="submit">提交</Button>
            </FormItem>
          </Form>
        </div>
        <h5 className="section-caption">示例源码</h5>
        <pre className="demo-code">
          <code className="language-jsx" dangerouslySetInnerHTML={{
            __html: formDemoCode
          }}></code>
        </pre>
      </div>
    )

  }

}

export default Form.create()(FormDemo)