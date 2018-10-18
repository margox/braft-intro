import React from 'react'
import BraftEditor from 'braft-editor'
import PrismWrapper from '../../components/prism'
import { formatHTML } from '../../utils/base'

import 'braft-extensions/dist/emoticon.css'
import Emoticon, { defaultEmoticons } from 'braft-extensions/dist/emoticon'

const customDemoCode = formatHTML(`import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'

// 引入表情包组件样式文件
import 'braft-extensions/dist/emoticon.css'

// 引入表情包组件和默认表情包列表
import Emoticon, { defaultEmoticons } from 'braft-extensions/dist/emoticon'

// 转换默认表情包列表，让webpack可以正确加载到默认表情包中的图片，请确保已对png格式的文件配置了loader
const emiticons = defaultEmoticons.map(item => require(\`braft-extensions/dist/assets/\${item}\`))

// 也可以使用自己的表情包资源
// const emiticons = ['http://path/to/emoticon-1.png', 'http://path/to/emoticon-2.png', 'http://path/to/emoticon-3.png', 'http://path/to/emoticon-4.png', ...]

BraftEditor.use(Emoticon({
  includeEditors: ['demo-editor-with-emoticon'],
  emoticons: emiticons
}))

export default class EmoticonDemo extends React.Component {

  render () {

    return (
      <div className="editor-container">
        <BraftEditor id="demo-editor-with-emoticon"/>
      </div>
    )

  }

}`)

const emiticons = defaultEmoticons.map(item => require(`braft-extensions/dist/assets/${item}`))

BraftEditor.use(Emoticon({
  includeEditors: ['demo-editor-with-emoticon'],
  emoticons: emiticons
}))

export default class EmoticonDemo extends PrismWrapper {

  state = {
    editorState: BraftEditor.createEditorState(null, {
      editorId: 'demo-editor-with-emoticon'
    }),
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
    const controls = [
      'bold', 'italic', 'underline', 'text-color', 'separator', 'link', 'separator', 'emoji'
    ]

    return (
      <div className="demo-container pull-right">
        <h3 className="caption">使用自定义表情包扩展</h3>
        <h5 className="sub-caption">本页面将演示如何使用braft-extensions包中的扩展表情包组件</h5>
        <h5 className="section-caption">注意事项</h5>
        <ul className="points">
          <li>- 不要忘记引入扩展表情包组件的样式文件braft-extensions/dist/emoticon.css</li>
          <li>- 表情包组件默认不包含任何表情图，需要自行配置或使用defaultEmoticons</li>
          <li>- defaultEmoticons需要手动按照示例中的代码进行配置，才能被webpack导入</li>
          <li>- 通过本表情包组件插入的表情符号，暂时无法放到超链接中</li>
          <li>- 前往<a href="https://github.com/margox/braft-extensions" target="_blank">Braft Extensions</a>查看所有可用扩展</li>
        </ul>
        <h5 className="section-caption">编辑器演示</h5>
        <div className="embed-editor">
          <BraftEditor value={editorState} onChange={this.handleChange} controls={controls} id="demo-editor-with-emoticon" contentStyle={{height: 350}}/>
        </div>
        <h5 className="section-caption">输出内容</h5>
        <div className="output-content"><pre><code>{outputHTML}</code></pre></div>
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