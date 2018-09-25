import './styles.scss'
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
      <div className="demo-container pull-right">
        <h3 className="caption">基本使用</h3>
        <h5 className="sub-caption">本页面将演示如何用最基本的方式使用Braft Editor</h5>
        <h5 className="section-caption">编辑器演示</h5>
        <div className="embed-editor">
          <BraftEditor value={editorState} onChange={this.handleChange} contentClassName="demo-editor"/>
        </div>
        <h5 className="section-caption">输出内容</h5>
        <div className="output-content">{outputHTML}</div>
        <div className="content">
          <p className="desc"></p>
        </div>
      </div>
    )

  }

}