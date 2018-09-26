import 'braft-editor/dist/index.css'
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

}