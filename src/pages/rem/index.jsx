import React from 'react'
import BraftEditor from 'braft-editor'
import { formatHTML } from '../utils/base'
import template from './template.js'

const basicDemoCode = formatHTML(`import 'braft-editor/dist/index.css'
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

}`)

// 定义rem基准值
const sizeBase = 23.4375

// 定义输入转换函数
const unitImportFn = (unit) => {
  if (unit.indexOf('rem')) {
    return parseFloat(unit, 10) * sizeBase
  } else {
    return parseFloat(unit, 10)
  }
}

// 定义输出转换函数
const unitExportFn = (unit, type, target) => {
  if (type === 'line-height') {
    return unit
  }
  if (target === 'html') {
    return unit / sizeBase + 'rem'
  } else {
    return unit + 'px'
  }
}

export default class RemDemo extends React.Component {

  state = {
    editorState: BraftEditor.createEditorState('<p>Hello <span style="font-size:1.28rem;">World!</span></p>', { unitImportFn })
  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  preview = () => {

    if (window.previewWindow) {
      window.previewWindow.close()
    }

    window.previewWindow = window.open(null, '_blank', 'toolbar=no, location=no, directories=no, status=no, menubar=no, titlebar=no, scrollbars=yes, resizable=no, copyhistory=no, width=375, height=667')
    window.previewWindow.document.write(template(this.state.editorState.toHTML()))
    window.previewWindow.document.close()

  }

  render () {

    const excludeControls = [
      'headings',
      'list-ol',
      'list-ul',
      'link',
      'text-indent',
      'remove-styles',
      'superscript',
      'subscript',
      'underline',
      'strike-through',
      'hr',
      'clear',
      'media',
      'text-align'
    ]

    const extendControls = [
      {
        key: 'custom-button',
        type: 'button',
        text: '预览',
        onClick: this.preview
      }
    ]

    const converts = { unitImportFn, unitExportFn }

    return (
      <div className="demo-container pull-right">
        <h3 className="caption">基本使用</h3>
        <h5 className="sub-caption">本页面将演示如何输出兼容rem布局方案的html内容</h5>
        <h5 className="section-caption">功能要点</h5>
        <ul className="points">
          <li>- 通过converts.unitExportFn来对输出的尺寸单位进行转换</li>
          <li>- 通过指定BraftEditor.createEditorState的转换参数来对输入的尺寸单位进行转换</li>
        </ul>
        <h5 className="section-caption">注意事项</h5>
        <ul className="points">
          <li>- unitExportFn目前仅支持转换字号、字间距和行高</li>
          <li>- 在unitExportFn中请根据target参数进行针对性转换，以免在编辑器区域中出现显示异常</li>
          <li>- 若BraftEditor.createEditorState方法传入的是RAW格式的数据，则无需指定转换参数</li>
          <li>- {'也可通过editorState.toHTML({ unitExportFn })进行更自由的输出转换'}</li>
          <li>- 本示例中的rem方案使用的是375的基准宽度，仅供演示</li>
        </ul>
        <h5 className="section-caption">编辑器演示</h5>
        <div className="embed-editor">
          <BraftEditor value={this.state.editorState} onChange={this.handleChange} converts={converts} excludeControls={excludeControls} extendControls={extendControls} contentClassName="demo-editor"/>
        </div>
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