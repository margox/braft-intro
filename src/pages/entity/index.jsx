import './styles.scss'
import React from 'react'
import BraftEditor from 'braft-editor'
import PrismWrapper from '../../components/prism'
import { formatHTML } from '../../utils/base'

const entityDemoCode = formatHTML(`import './styles.scss'
import React from 'react'
import BraftEditor from 'braft-editor'

const entityExtension = {
  // 指定扩展类型
  type: 'entity',
  // 指定该扩展对哪些编辑器生效，不指定includeEditors则对所有编辑器生效
  includeEditors: ['demo-editor-with-entity-extension'],
  // 指定扩展的entity名称
  name: 'keybord-item',
  // 在编辑器工具栏中增加一个控制按钮，点击时会将所选文字转换为该entity
  control: {
    text: '按键'
  },
  // 指定entity的mutability属性，可选值为MUTABLE和IMMUTABLE，表明该entity是否可编辑，默认为MUTABLE
  mutability: 'IMMUTABLE',
  // 指定通过上面新增的按钮创建entity时的默认附加数据
  data: {
    foo: 'hello'
  },
  // 指定entity在编辑器中的渲染组件
  component: (props) => {
    // 通过entityKey获取entity实例，关于entity实例请参考https://github.com/facebook/draft-js/blob/master/src/model/entity/DraftEntityInstance.js
    const entity = props.contentState.getEntity(props.entityKey)
    // 通过entity.getData()获取该entity的附加数据
    const { foo } = entity.getData()
    return <span data-foo={foo} className="keyboard-item">{props.children}</span>
  },
  // 指定html转换为editorState时，何种规则的内容将会转换成该entity
  importer: (nodeName, node, source) => {
    // source属性表明输入来源，可能值为create、paste或undefined
    console.log(source)
    if (nodeName.toLowerCase() === 'span' && node.classList && node.classList.contains('keyboard-item')) {
      // 此处可以返回true或者一个包含mutability和data属性的对象
      return {
        mutability: 'IMMUTABLE',
        data: {
          foo: node.dataset.foo
        },
      }
    }
  },
  // 指定输出该entnty在输出的html中的呈现方式
  exporter: (entityObject, originalText) => {
    // 注意此处的entityObject并不是一个entity实例，而是一个包含type、mutability和data属性的对象
    const { foo } = entityObject.data
    return <span data-foo={foo} className="keyboard-item">{originalText}</span>
  }
}


// 加载扩展模块
BraftEditor.use(entityExtension)
// BraftEditor.use可以同时传入单个或多个扩展
// BraftEditor.use(ext) 或者 BraftEditor.use([ext1, ext2, [ext3, ext4]])都是合法的

export default class InlineStyleDemo extends React.Component {

  state = {
    // 如果BraftEditor组件指定了id属性，则在通过html创建editorState时，也需要在createEditorState的第二个参数中传入这个id
    editorState: BraftEditor.createEditorState('<p>按下 <span class="keyboard-item" data-foo="Hello World!">Command</span> + <span class="keyboard-item" data-foo="Hello World!">D</span> 来收藏此页面</p>', {
      editorId: 'demo-editor-with-entity-extension'
    }), // 设置编辑器初始内容
    outputHTML: '<p></p>'
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
          id="demo-editor-with-entity-extension"
          controls={controls}
          value={editorState}
          onChange={this.handleChange}
        />
      </div>
    )

  }

}`)

const cssCode = `.keyboard-item{
  box-sizing: border-box;
  position: relative;
  top: -2px;
  padding: 2px 6px;
  background-color: #fff;
  border: 1px solid #bbb;
  border-radius: 2px;
  background-image: linear-gradient(#fff, #f8f8f8);
  box-shadow: 0 1px 0 rgba(0,0,0,.2);
  color: #666;
  font-size: 12px;
  cursor: default;
  &:hover{
    border-color: #999;
    box-shadow: 0 1px 0 rgba(0,0,0,.4);
  }
}`

const entityExtension = {
  // 指定扩展类型
  type: 'entity',
  // 指定该扩展对哪些编辑器生效，不指定includeEditors则对所有编辑器生效
  includeEditors: ['demo-editor-with-entity-extension'],
  // 指定扩展的entity名称
  name: 'keybord-item',
  // 在编辑器工具栏中增加一个控制按钮，点击时会将所选文字转换为该entity
  control: {
    text: '按键'
  },
  // 指定entity的mutability属性，可选值为MUTABLE和IMMUTABLE，表明该entity是否可编辑，默认为MUTABLE
  mutability: 'IMMUTABLE',
  // 指定通过上面新增的按钮创建entity时的默认附加数据
  data: {
    foo: 'hello'
  },
  // 指定entity在编辑器中的渲染组件
  component: (props) => {
    // 通过entityKey获取entity实例，关于entity实例请参考https://github.com/facebook/draft-js/blob/master/src/model/entity/DraftEntityInstance.js
    const entity = props.contentState.getEntity(props.entityKey)
    // 通过entity.getData()获取该entity的附加数据
    const { foo } = entity.getData()
    return <span data-foo={foo} className="keyboard-item">{props.children}</span>
  },
  // 指定html转换为editorState时，何种规则的内容将会转换成该entity
  importer: (nodeName, node, source) => {
    // source属性表明输入来源，可能值为create、paste或undefined
    console.log(source)
    if (nodeName.toLowerCase() === 'span' && node.classList && node.classList.contains('keyboard-item')) {
      // 此处可以返回true或者一个包含mutability和data属性的对象
      return {
        mutability: 'IMMUTABLE',
        data: {
          foo: node.dataset.foo
        },
      }
    }
  },
  // 指定输出该entnty在输出的html中的呈现方式
  exporter: (entityObject, originalText) => {
    // 注意此处的entityObject并不是一个entity实例，而是一个包含type、mutability和data属性的对象
    const { foo } = entityObject.data
    return <span data-foo={foo} className="keyboard-item">{originalText}</span>
  }
}

// BraftEditor.use可以同时传入单个或多个扩展
// BraftEditor.use(ext) 或者 BraftEditor.use([ext1, ext2, [ext3, ext4]])都是合法的
BraftEditor.use(entityExtension)

export default class EntityDemo extends PrismWrapper {

  state = {
    // 如果BraftEditor组件指定了id属性，则在通过html创建editorState时，也需要在createEditorState的第二个参数中传入这个id
    editorState: BraftEditor.createEditorState('<p>按下 <span class="keyboard-item" data-foo="Hello World!">Command</span> + <span class="keyboard-item" data-foo="Hello World!">D</span> 来收藏此页面</p>', {
      editorId: 'demo-editor-with-entity-extension'
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
        <h3 className="caption">增加按键展示效果</h3>
        <h5 className="sub-caption">本页面将演示通过扩展来为编辑器增加着键盘按键展示功能</h5>
        <h5 className="section-caption">功能要点</h5>
        <ul className="points">
          <li>- 编写一个简单的编辑器entity扩展</li>
          <li>- 使用BraftEditor.use加载编辑器扩展</li>
        </ul>
        <h5 className="section-caption">注意事项</h5>
        <ul className="points">
          <li>- 如果定义了className，别忘记在相关页面引入对应的CSS文件</li>
          <li>- 其余见源码注释</li>
        </ul>
        <h5 className="section-caption">编辑器演示</h5>
        <div className="embed-editor">
          <BraftEditor id="demo-editor-with-entity-extension" controls={controls} value={editorState} onChange={this.handleChange} contentClassName="demo-editor"/>
        </div>
        <h5 className="section-caption">输出内容</h5>
        <div className="output-content"><pre><code>{outputHTML}</code></pre></div>
        <h5 className="section-caption">示例源码</h5>
        <pre className="demo-code">
          <code className="language-jsx" dangerouslySetInnerHTML={{
            __html: entityDemoCode
          }}></code>
        </pre>
        <h5 className="section-caption">样式源码</h5>
        <pre className="demo-code">
          <code className="language-css">{cssCode}</code>
        </pre>
      </div>
    )

  }

}