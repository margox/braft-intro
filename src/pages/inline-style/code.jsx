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
        <BraftEditor id="demo-editor-with-underdot-ext" controls={controls} value={editorState} onChange={this.handleChange}/>
      </div>
    )

  }

}