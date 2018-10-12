import React from 'react'
import BraftEditor from 'braft-editor'
import PrismWrapper from '../../components/prism'
import { formatHTML } from '../../utils/base'

const inlineStyleDemoCode = formatHTML(`import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'

// 编写扩展模块
const underdotExtension = {
  // 指定扩展类型
  type: 'inline-style',
  // 指定该扩展对哪些编辑器生效，不指定includeEditors则对所有编辑器生效
  includeEditors: ['demo-editor-with-underdot-ext'],
  // 指定扩展样式名，推荐使用全大写
  name: 'UNDERDOT',
  // 在编辑器工具栏中增加一个样式控制按钮，text可以为一个react组件
  control: {
    text: '着重号'
  },
  // 指定该扩展样式的CSS规则，请注意，IE/EDGE浏览器暂时不支持textEmphasis
  style: {
    textEmphasis: 'circle',
    textEmphasisPosition: 'under',
    WebkitTextEmphasis: 'circle',
    WebkitTextEmphasisPosition: 'under'
  },
  importer: (nodeName, node) => {
    // 指定html转换为editorState时，何种规则的内容将会附加上该扩展样式
    // 如果编辑器在createEditorState时使用的是RAW数据，并且开启了stripPastedStyles，则可以不指定importer，因为不存在html转editorState的场景
    return nodeName === 'span' && [].find.call(node.style, (styleName) => styleName.indexOf('text-emphasis') !== -1)
  },
  exporter: () => {
    // 指定该样式在输出的html中如何呈现，对于inline-style类型的扩展可以不指定exporter，输出样式即为该扩展的style
    return (
      <span style={{
        textEmphasis: 'circle',
        textEmphasisPosition: 'under',
        WebkitTextEmphasis: 'circle',
        WebkitTextEmphasisPosition: 'under'
      }} />
    )
  }
}

// 加载扩展模块
BraftEditor.use(underdotExtension)
// BraftEditor.use可以同时传入单个或多个扩展
// BraftEditor.use(ext) 或者 BraftEditor.use([ext1, ext2, [ext3, ext4]])都是合法的

export default class InlineStyleDemo extends React.Component {

  state = {
    // 如果BraftEditor组件指定了id属性，则在通过html创建editorState时，也需要在createEditorState的第二个参数中传入这个id
    editorState: BraftEditor.createEditorState('<p>你好<span style="text-emphasis:circle;text-emphasis-position:under;-webkit-text-emphasis:circle;-webkit-text-emphasis-position:under">世界</span>！</p>', {
      editorId: 'demo-editor-with-underdot-ext'
    })
  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  render () {

    const { editorState } = this.state
    const controls = ['bold', 'italic', 'underline', 'strike-through', 'text-color']

    return (        
      <div className="embed-editor">
        <BraftEditor
          id="demo-editor-with-underdot-ext"
          controls={controls}
          value={editorState}
          onChange={this.handleChange}
        />
      </div>
    )

  }

}`)

const underdotExtension = {
  type: 'inline-style',
  // 指定该扩展对哪些编辑器生效，不指定includeEditors则对所有编辑器生效
  includeEditors: ['demo-editor-with-underdot-ext'],
  // 指定扩展样式名，推荐使用全大写
  name: 'UNDERDOT',
  // 在编辑器工具栏中增加一个样式控制按钮，text可以为一个react组件
  control: {
    text: '着重号'
  },
  // 指定该扩展样式的CSS规则
  // 注意：textEmphasis属性IE/EDGE浏览器暂时不支持
  style: {
    textEmphasis: 'circle',
    textEmphasisPosition: 'under',
    WebkitTextEmphasis: 'circle',
    WebkitTextEmphasisPosition: 'under'
  },
  importer: (nodeName, node) => {
    // 指定通过html创建editorState时，何种规则的内容将会附加上该扩展样式
    return nodeName === 'span' && [].find.call(node.style, (styleName) => styleName.indexOf('text-emphasis') !== -1)
  },
  exporter: () => {
    // 指定该样式在输出的html中如何呈现，对于inline-style类型的扩展可以不指定exporter，输出样式即为该扩展的style
    return (
      <span style={{
        textEmphasis: 'circle',
        textEmphasisPosition: 'under',
        WebkitTextEmphasis: 'circle',
        WebkitTextEmphasisPosition: 'under'
      }} />
    )
  }
}

// BraftEditor.use可以同时传入单个或多个扩展
// BraftEditor.use(ext) 或者 BraftEditor.use([ext1, ext2, [ext3, ext4]])都是合法的
BraftEditor.use(underdotExtension)

export default class InlineStyleDemo extends PrismWrapper {

  state = {
    // 如果BraftEditor组件指定了id属性，则在通过html创建editorState时，也需要在createEditorState的第二个参数中传入这个id
    editorState: BraftEditor.createEditorState('<p>你好<span style="text-emphasis:circle;text-emphasis-position:under;-webkit-text-emphasis:circle;-webkit-text-emphasis-position:under">世界</span>！</p>', {
      editorId: 'demo-editor-with-underdot-ext'
    }), // 设置编辑器初始内容
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
    const controls = ['bold', 'italic', 'underline', 'strike-through', 'text-color']

    return (
      <div className="demo-container pull-right">
        <h3 className="caption">增加着重号样式控制</h3>
        <h5 className="sub-caption">本页面将演示通过扩展来为编辑器增加着重号功能</h5>
        <h5 className="section-caption">功能要点</h5>
        <ul className="points">
          <li>- 编写一个简单的编辑器内联样式(inline-style)扩展</li>
          <li>- 使用BraftEditor.use加载编辑器扩展</li>
        </ul>
        <h5 className="section-caption">注意事项</h5>
        <ul className="points">
          <li>见源码注释</li>
        </ul>
        <h5 className="section-caption">编辑器演示</h5>
        <div className="embed-editor">
          <BraftEditor id="demo-editor-with-underdot-ext" controls={controls} value={editorState} onChange={this.handleChange} contentClassName="demo-editor"/>
        </div>
        <h5 className="section-caption">输出内容</h5>
        <div className="output-content"><pre><code>{outputHTML}</code></pre></div>
        <h5 className="section-caption">示例源码</h5>
        <pre className="demo-code">
          <code className="language-jsx" dangerouslySetInnerHTML={{
            __html: inlineStyleDemoCode
          }}></code>
        </pre>
      </div>
    )

  }

}