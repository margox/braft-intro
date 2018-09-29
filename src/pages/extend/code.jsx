import 'braft-editor/dist/index.css'
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

}