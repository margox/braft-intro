import React from 'react'
import BraftEditor, { EditorState } from 'braft-editor'
import { formatHTML } from '../utils/base'

const basicDemoCode = formatHTML(`import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor, { EditorState } from 'braft-editor'

export default class BasicDemo extends React.Component {

  state = {
    editorState: EditorState.createFrom(null),
    outputHTML: '<p></p>'
  }

  handleChange = (editorState) => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML()
    })
  }

  render () {

    const { editorState, outputHTML } = this.state

    return (
      <div>
        <div className="editor-wrapper">
          <BraftEditor value={editorState} onChange={this.handleChange}/>
        </div>
        <h5>输出内容</h5>
        <div className="output-content">{outputHTML}</div>
      </div>
    )

  }

}`)

export default class BasicDemo extends React.Component {

  state = {
    editorState: EditorState.createFrom(null),
    outputHTML: '<p></p>'
  }

  handleChange = (editorState) => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML()
    })
  }

  render () {

    const { editorState, outputHTML } = this.state

    return (
      <div className="demo-container pull-right">
        <h3 className="caption">基本使用</h3>
        <h5 className="sub-caption">本页面将演示如何用最基本的方式使用Braft Editor</h5>
        <h5 className="section-caption">功能要点</h5>
        <ul className="points">
          <li>- 使用editorState.toHTML()实时获取html</li>
        </ul>
        <h5 className="section-caption">编辑器演示</h5>
        <div className="embed-editor">
          <BraftEditor value={editorState} onChange={this.handleChange} contentClassName="demo-editor"/>
        </div>
        <h5 className="section-caption">输出内容</h5>
        <div className="output-content"><pre><code>{outputHTML}</code></pre></div>
        <h5 className="section-caption">示例源码</h5>
        <pre className="demo-code">
          <code className="language-jsx" dangerouslySetInnerHTML={{
            __html: basicDemoCode
          }}></code>
        </pre>
      </div>
    )

  }

}