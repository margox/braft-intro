import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'

// 定义rem基准值
const sizeBase = 23.4375

// 定义输入转换函数
const unitImportFn = (unit, type, source) => {

  // type为单位类型，例如font-size等
  // source为输入来源，可能值为create或paste
  console.log(type, source)

  // 此函数的返回结果，需要过滤掉单位，只返回数值
  if (unit.indexOf('rem')) {
    return parseFloat(unit, 10) * sizeBase
  } else {
    return parseFloat(unit, 10)
  }

}

// 定义输出转换函数
const unitExportFn = (unit, type, target) => {

  if (type === 'line-height') {
    // 输出行高时不添加单位
    return unit
  }

  // target的值可能是html或者editor，对应输出到html和在编辑器中显示这两个场景
  if (target === 'html') {
    // 只在将内容输出为html时才进行转换
    return unit / sizeBase + 'rem'
  } else {
    // 在编辑器中显示时，按px单位展示
    return unit + 'px'
  }

}

export default class BasicDemo extends React.Component {

  state = {
    editorState: BraftEditor.createEditorState('<p>Hello <span style="font-size:1.28rem;">World!</span></p>', { unitImportFn })
  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  render () {

    return (
      <div>
        <div className="editor-wrapper">
          <BraftEditor value={this.state.editorState} converts={{ unitImportFn, unitExportFn }} onChange={this.handleChange}/>
        </div>
      </div>
    )

  }

}