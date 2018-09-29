import React from 'react'
import BraftEditor from 'braft-editor'
import { formatHTML } from '../utils/base'

const previewDemoCode = formatHTML(`import React from 'react'
import BraftEditor from 'braft-editor'

export default class PreviewDemo extends React.Component {

  state = {
    editorState: BraftEditor.createEditorState()
  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  preview = () => {

    if (window.previewWindow) {
      window.previewWindow.close()
    }

    window.previewWindow = window.open()
    window.previewWindow.document.write(this.buildPreviewHtml())
    window.previewWindow.document.close()

  }

  buildPreviewHtml () {

    return \`
      <!Doctype html>
      <html>
        <head>
          <title>Preview Content</title>
          <style>
            html,body{
              height: 100%;
              margin: 0;
              padding: 0;
              overflow: auto;
              background-color: #f1f2f3;
            }
            .container{
              box-sizing: border-box;
              width: 1000px;
              max-width: 100%;
              min-height: 100%;
              margin: 0 auto;
              padding: 30px 20px;
              overflow: hidden;
              background-color: #fff;
              border-right: solid 1px #eee;
              border-left: solid 1px #eee;
            }
            .container img,
            .container audio,
            .container video{
              max-width: 100%;
              height: auto;
            }
            .container p{
              white-space: pre-wrap;
              min-height: 1em;
            }
            .container pre{
              padding: 15px;
              background-color: #f1f1f1;
              border-radius: 5px;
            }
            .container blockquote{
              margin: 0;
              padding: 15px;
              background-color: #f1f1f1;
              border-left: 3px solid #d1d1d1;
            }
          </style>
        </head>
        <body>
          <div class="container">$\{this.state.editorState.toHTML()}</div>
        </body>
      </html>
    \`

  }

  render () {

    const excludeControls = [
      'letter-spacing',
      'line-height',
      'clear',
      'headings',
      'list-ol',
      'list-ul',
      'remove-styles',
      'superscript',
      'subscript',
      'hr',
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

    return (
      <div className="editor-wrapper">
        <BraftEditor onChange={this.handleChange} excludeControls={excludeControls} extendControls={extendControls} contentStyle={{height: 400}}/>
      </div>
    )

  }

}`)

export default class PreviewDemo extends React.Component {

  state = {
    editorState: BraftEditor.createEditorState()
  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  preview = () => {

    if (window.previewWindow) {
      window.previewWindow.close()
    }

    window.previewWindow = window.open()
    window.previewWindow.document.write(this.buildPreviewHtml())
    window.previewWindow.document.close()

  }

  buildPreviewHtml () {

    return `
      <!Doctype html>
      <html>
        <head>
          <title>预览内容</title>
          <style>
            html,body{
              height: 100%;
              margin: 0;
              padding: 0;
              overflow: auto;
              background-color: #f1f2f3;
            }
            .container{
              box-sizing: border-box;
              width: 1000px;
              max-width: 100%;
              min-height: 100%;
              margin: 0 auto;
              padding: 30px 20px;
              overflow: hidden;
              background-color: #fff;
              border-right: solid 1px #eee;
              border-left: solid 1px #eee;
            }
            .container img,
            .container audio,
            .container video{
              max-width: 100%;
              height: auto;
            }
            .container p{
              white-space: pre-wrap;
              min-height: 1em;
            }
            .container pre{
              padding: 15px;
              background-color: #f1f1f1;
              border-radius: 5px;
            }
            .container blockquote{
              margin: 0;
              padding: 15px;
              background-color: #f1f1f1;
              border-left: 3px solid #d1d1d1;
            }
          </style>
        </head>
        <body>
          <div class="container">${this.state.editorState.toHTML()}</div>
        </body>
      </html>
    `

  }

  render () {

    const excludeControls = [
      'letter-spacing',
      'line-height',
      'clear',
      'headings',
      'list-ol',
      'list-ul',
      'remove-styles',
      'superscript',
      'subscript',
      'hr',
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

    return (
      <div className="demo-container pull-right">
        <h3 className="caption">添加预览功能</h3>
        <h5 className="sub-caption">本页将演示如何为编辑器增加预览功能</h5>
        <h5 className="section-caption">功能要点</h5>
        <ul className="points">
          <li>- 使用extendControls属性添加扩展按钮</li>
          <li>- 使用editorState.toHTML()实时获取html</li>
          <li>- 使用window.open在新窗口展示html</li>
        </ul>
        <h5 className="section-caption">注意事项</h5>
        <ul className="points">
          <li>- 编辑器生成的html不包含布局样式，例如代码块和引语块样式，需要自行美化</li>
          <li>- 编辑器生成的html中，空段落为一对空的p标签，需要设置最低高度才能正常展示连续的换行</li>
          <li>- 编辑器生成的html中，空格即为普通的空格，需要设置white-space: pre-wrap;才能正常展示连续的空格</li>
          <li>- 实际使用中，可以使用更友好和美观的模态框代替window.open，例如Ant Design的Modal组件</li>
          <li>- 请注意区分excludeControls和extendControls，它们是完全不同的属性</li>
        </ul>
        <h5 className="section-caption">编辑器演示</h5>
        <div className="embed-editor">
          <BraftEditor onChange={this.handleChange} excludeControls={excludeControls} extendControls={extendControls} contentStyle={{height: 400}}/>
        </div>
        <h5 className="section-caption">示例源码</h5>
        <pre className="demo-code">
          <code className="language-jsx" dangerouslySetInnerHTML={{
            __html: previewDemoCode
          }}></code>
        </pre>
      </div>
    )

  }

}