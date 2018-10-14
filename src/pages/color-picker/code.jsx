import 'braft-editor/dist/index.css'
import 'braft-extensions/dist/color-picker.css'

import React from 'react'
import BraftEditor from 'braft-editor'
import ColorPicker from 'braft-extensions/dist/color-picker'

BraftEditor.use(ColorPicker({
  includeEditors: ['editor-with-color-picker'],
  theme: 'light' // 支持dark和light两种主题
}))

export default class ColorPickerDemo extends React.Component {

  render () {

    return (
      <div className="editor-container">
        <BraftEditor id="editor-with-color-picker" contentStyle={{boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)'}}/>
      </div>
    )

  }

}