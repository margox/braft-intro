import './styles.scss'
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
        <BraftEditor id="demo-editor-with-entity-extension" controls={controls} value={editorState} onChange={this.handleChange}/>
      </div>
    )

  }

}