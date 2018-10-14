import React from 'react'
import BraftEditor from 'braft-editor'
import PrismWrapper from '../../components/prism'
import { formatHTML } from '../../utils/base'

import 'braft-extensions/dist/code-highlighter.css'
import CodeHighlighter from 'braft-extensions/dist/code-highlighter'

const customDemoCode = formatHTML(`import 'braft-editor/dist/index.css'
import 'braft-extensions/dist/code-highlighter.css'

import React from 'react'
import BraftEditor from 'braft-editor'
import CodeHighlighter from 'braft-extensions/dist/code-highlighter'

BraftEditor.use(CodeHighlighter({
  includeEditors: ['editor-with-code-highlighter'],
}))

export default class CodeHighlighterDemo extends React.Component {

  render () {

    return (
      <div className="editor-container">
        <BraftEditor id="editor-with-code-highlighter"/>
      </div>
    )

  }

}`)

BraftEditor.use(CodeHighlighter({
  includeEditors: ['demo-editor-with-code-highlighter']
}))

export default class BasicDemo extends PrismWrapper {

  componentDidMount () {

    setTimeout(() => {
      super.componentDidMount()
    }, 100)

  }
  
  render () {

    const controls = [
      'bold', 'italic', 'underline', 'text-color', 'separator', 'link', 'separator', 'blockquote', 'code', 'separator', 'media'
    ]

    return (
      <div className="demo-container pull-right">
        <h3 className="caption">使用代码高亮扩展</h3>
        <h5 className="sub-caption">本页面将演示如何使用braft-extensions包中的代码高亮扩展</h5>
        <h5 className="section-caption">注意事项</h5>
        <ul className="points">
          <li>- 不要忘记引入代码高亮扩展的样式文件braft-extensions/dist/code-highlighter.css</li>
          <li>- 在代码块中按Shift + Enter即可跳出代码块</li>
          <li>- 该模块仅用于对编辑器内的代码块进行高亮展示，并不会更改编辑器输出的实际内容</li>
          <li>- 前往<a href="https://github.com/margox/braft-extensions" target="_blank">Braft Extensions</a>查看所有可用扩展</li>
        </ul>
        <h5 className="section-caption">编辑器演示</h5>
        <div className="embed-editor">
          <BraftEditor controls={controls} id="demo-editor-with-code-highlighter" contentStyle={{height: 400}}/>
        </div>
        <h5 className="section-caption">示例源码</h5>
        <pre className="demo-code">
          <code className="language-jsx" dangerouslySetInnerHTML={{
            __html: customDemoCode
          }}></code>
        </pre>
      </div>
    )

  }

}