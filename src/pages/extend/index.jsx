import React from 'react'
import BraftEditor from 'braft-editor'
import { ContentUtils } from 'braft-utils'
import { formatHTML } from '../utils/base'

const extendDemoCode = formatHTML(`import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import { ContentUtils } from 'braft-utils'

export default class ExtendDemo extends React.Component {

  state = {
    editorState: BraftEditor.createEditorState(null)
  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  insertHello = () => {
    this.setState({
      editorState: ContentUtils.insertText(this.state.editorState, '你好啊！')
    })
  }

  render () {

    const { editorState } = this.state
    const controls = ['bold', 'italic', 'underline', 'separator']
    const extendControls = [
      {
        key: 'custom-button',
        type: 'button',
        text: '按钮',
        onClick: this.insertHello
      }, {
        key: 'custom-dropdown',
        type: 'dropdown',
        text: '下拉组件',
        component: <div style={{color: '#fff', padding: 10}}>你好啊！</div>
      }, {
        key: 'custom-modal',
        type: 'modal',
        text: '模态框',
        modal: {
          id: 'my-moda-1',
          title: '你好啊',
          children: (
            <div style={{width: 400, padding: '0 10px'}}>
              <img src="https://margox.cn/wp-content/uploads/2016/10/FA157E13E8B77E6E11290E9DF4C5ED7D-480x359.jpg" style={{width: '100%', height: 'auto'}}/>
            </div>
          )
        }
      }
    ]

    return (
      <div className="editor-wrapper">
        <BraftEditor value={editorState} onChange={this.handleChange} controls={controls} extendControls={extendControls} contentStyle={{height: 200}}/>
      </div>
    )

  }

}`)

export default class ExtendDemo extends React.Component {

  state = {
    editorState: BraftEditor.createEditorState(null)
  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  insertHi = () => {
    this.setState({
      editorState: ContentUtils.insertText(this.state.editorState, '你好啊！')
    })
  }

  render () {

    const { editorState } = this.state
    const controls = ['bold', 'italic', 'underline', 'separator']
    const extendControls = [
      {
        key: 'custom-button',
        type: 'button',
        text: '按钮',
        onClick: this.insertHi
      }, {
        key: 'custom-dropdown',
        type: 'dropdown',
        text: '下拉组件',
        component: <div style={{color: '#fff', padding: 10}}>你好啊！</div>
      }, {
        key: 'custom-modal',
        type: 'modal',
        text: '模态框',
        modal: {
          id: 'my-modal-1',
          title: '你好啊',
          children: (
            <div style={{width: 550, padding: '0 10px'}}>
              <img src="https://margox.cn/wp-content/uploads/2016/10/FA157E13E8B77E6E11290E9DF4C5ED7D-480x359.jpg" style={{width: '100%', height: 'auto'}}/>
            </div>
          )
        }
      }
    ]

    return (
      <div className="demo-container pull-right">
        <h3 className="caption">增加扩展控件</h3>
        <h5 className="sub-caption">本页中的编辑器，增加了个4种不同类型的扩展控件，分别是：按钮、下拉菜单、模态框和自定义组件</h5>
        <h5 className="section-caption">功能要点</h5>
        <ul className="points">
          <li>- 使用extendControls属性添加扩展控件</li>
          <li>- 使用ContentUtils在外部修改编辑器内容</li>
        </ul>
        <h5 className="section-caption">注意事项</h5>
        <ul className="points">
          <li>- extendControls中的每一项，都需要指定唯一的key属性</li>
          <li>- extendControls中的项目，放到controls属性中同样有效</li>
          <li>- 只有用受控组件的方式使用编辑器，才能使用ContentUtils</li>
          <li>- 若用受控组件的方式，必须使用BraftEditor.createEditorState()来创建初始editorState</li>
        </ul>
        <h5 className="section-caption">编辑器演示</h5>
        <div className="embed-editor">
          <BraftEditor value={editorState} onChange={this.handleChange} controls={controls} extendControls={extendControls} contentStyle={{height: 200}}/>
        </div>
        <h5 className="section-caption">示例源码</h5>
        <pre className="demo-code">
          <code className="language-jsx" dangerouslySetInnerHTML={{
            __html: extendDemoCode
          }}></code>
        </pre>
      </div>
    )

  }

}