import 'braft-editor/dist/index.css'
import 'braft-extensions/dist/code-highlighter.css'

import React from 'react'
import BraftEditor from 'braft-editor'
import CodeHighlighter from 'braft-extensions/dist/code-highlighter'

BraftEditor.use(CodeHighlighter({
  includeEditors: ['editor-with-code-highlighter'],
}))

export default class ColorPickerDemo extends React.Component {

  render () {

    return (
      <div className="editor-container">
        <BraftEditor id="editor-with-code-highlighter"/>
      </div>
    )

  }

}