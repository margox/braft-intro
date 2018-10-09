import './styles.scss'
import React from 'react'
import BraftEditor from 'braft-editor'
import { Form, Input, Button } from 'antd'
import { formatHTML } from '../utils/base'

import 'antd/lib/input/style/index.css'
import 'antd/lib/button/style/index.css'
import 'antd/lib/form/style/index.css'

const formDemoCode = formatHTML(`import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import { Form, Input, Button } from 'antd'

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
        const submitData = {
          title: values.title,
          content: values.content.toRAW() // or values.content.toHTML()
        }
        console.log(submitData)
      }
    })

  }

  render () {

    const { getFieldDecorator } = this.props.form
    const controls = ['bold', 'italic', 'underline', 'text-color', 'separator', 'link', 'separator', 'media' ]

    return (
      <div className="demo-container">
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
                validator: (_, value, callback) => {
                  if (value.isEmpty()) {
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
    )

  }

}

export default Form.create()(FormDemo)`)

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
        const submitData = {
          title: values.title,
          content: values.content.toRAW() // or toHTML()
        }
        console.log(submitData)
      }
    })

  }

  render () {

    const { getFieldDecorator } = this.props.form
    const controls = ['bold', 'italic', 'underline', 'text-color', 'separator', 'link', 'separator', 'media' ]

    return (
      <div className="demo-container pull-right">
        <h3 className="caption">基本使用</h3>
        <h5 className="sub-caption">本页面将演示如何在Ant Design表单中使用Braft Editor</h5>
        <h5 className="section-caption">注意事项</h5>
        <ul className="points">
          <li>- 编辑器组件的数据格式为ediorState，为此在调用setFieldsValue时和在提交之前，需要进行相应的转换</li>
          <li>- 进行空值校验的话，需要自定义validator，并通过value.isEmpty()来校验，value就是一个editorState</li>
          <li>- 编辑器组件的验证时机需要改成onBlur，以避免不期望的验证提示和不必要的性能开销</li>
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
                  validator: (_, value, callback) => {
                    if (value.isEmpty()) {
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