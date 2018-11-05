import React from 'react'
import BraftEditor from 'braft-editor'
import PrismWrapper from '../../components/prism'
import { formatHTML } from '../../utils/base'
import { ContentUtils } from 'braft-utils'
import Immutable from 'immutable'
import './styles.scss'

const basicDemoCode = formatHTML(`import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import { ContentUtils } from 'braft-utils'
import Immutable from 'immutable'

// 使用blockRenderMap定义一个新的block类型：block-foo

// 定义block-foo在编辑器中的渲染组件
const FooBlockElement = (props) => {
  return <div className="foo-block-element">{props.children}</div>
}

// 定义block-foo的容器组件，用于包裹单个独立或多个连续的block-foo，这一项是可选的
const FooBlockWrapper = (props) => {
  return <div className="foo-block-wrapper">{props.children}</div>
}

// 声明blockRenderMap
// 此处注意：
// 1: element属性是一个未渲染的React组件，或者是一个有效的html标签字符串，如"div","aside","section"等
// 2: wrapper属性需要是一个已渲染的React组件，用于包裹单个独立或多个连续的element，这一项是可选的
const blockRenderMap = Immutable.Map({
  'block-foo': {
    element: FooBlockElement,
    wrapper: <FooBlockWrapper />
  }
})

// *******分割线******

// 使用blockRendererFn定义一个新的block类型: block-bar

// 定义block-bar在编辑器中的渲染组件
class BarBlockComponent extends React.Component {

  // 注意：通过blockRendererFn定义的block，无法在编辑器中直接删除，需要在组件中增加删除按钮
  removeBarBlock = () => {
    this.props.blockProps.editor.setValue(ContentUtils.removeBlock(this.props.blockProps.editorState, this.props.block))
  }

  render () {

    const blockData = this.props.block.getData()
    const dataB = blockData.get('dataB')

    return (
      <div className="bar-block-component">
        <h2>{\`Hello \${dataB}!\`}</h2>
        <button className="button-remove" onClick={this.removeBarBlock}>
          <i className="bfi-bin"></i>
        </button>
      </div>
    )

  }

}

// 声明blockRendererFn
const blockRendererFn = (block, { editor, editorState }) => {

  if (block.getType() === 'block-bar') {

    return {
      component: BarBlockComponent,
      editable: false, // 此处的editable并不代表组件内容实际可编辑，强烈建议设置为false
      props: { editor, editorState } // 此处传入的内容可以在组件中通过this.props.blockProps获取到
    }

  }

  // 不满足block.getType() === 'block-bar'的情况时请勿return任何内容以免造成其他类型的block显示异常

}

// *******分割线******

// 自定义block输入转换器，用于将符合规则的html内容转换成相应的block，通常与blockExportFn中定义的输出转换规则相对应
const blockImportFn = (nodeName, node) => {

  if (nodeName === 'div' && node.classList.contains('my-block-foo')) {

    const dataA = node.dataset.a

    return {
      type: 'block-foo',
      data: {
        dataA: dataA
      }
    }

  }

  if (nodeName === 'div' && node.classList.contains('my-block-bar')) {

    const text = node.querySelector('span').innerText
    const dataB = node.dataset.b

    return {
      type: 'block-bar',
      data: {
        text: text,
        dataB: dataB
      }
    }

  }

}

// 自定义block输出转换器，用于将不同的block转换成不同的html内容，通常与blockImportFn中定义的输入转换规则相对应
const blockExportFn = (contentState, block) => {

  if (block.type === 'block-foo') {

    const { dataA } = block.data

    return {
      start: \`<div class="my-block-foo" data-a="\${dataA}">\`,
      end: '</div>'
    }

  }

  if (block.type === 'block-bar') {

    const { dataB } = block.data

    return {
      start: \`<div class="my-block-bar" data-b="\${dataB}">\`,
      end: '</div>'
    }

  }

}

// 定义一段html，请留意其内容与上文定义的输入/输出转换器的关联性
const initialContent = \`<p></p>
<div class="my-block-foo" data-a="World!">Hello Foo</div>
<div class="my-block-bar" data-b="1234567"><span>ABCDEFG</span></div>
<p></p>\`

export default class BasicDemo extends React.Component {

  state = {
    // 注意： 使用createEditorState时，需要将上文定义的blockImportFn和blockExportFn作为第二个对象参数的成员传入
    editorState: BraftEditor.createEditorState(initialContent, { blockImportFn, blockExportFn })
  }

  handleChange = (editorState) => {
    this.setState({
      editorState: editorState
    })
  }

  render () {

    const { editorState, outputHTML } = this.state

    // 在组件中传入上文定义的blockRenderMap、blockRendererFn
    // 并将blockImportFn和blockExportFn传入组件的converts属性
    return (
      <div>
        <div className="editor-wrapper">
          <BraftEditor
            value={editorState}
            onChange={this.handleChange}
            blockRenderMap={blockRenderMap}
            blockRendererFn={blockRendererFn}
            converts={{ blockImportFn, blockExportFn }}
          />
        </div>
        <h5>输出内容</h5>
        <div className="output-content">{outputHTML}</div>
      </div>
    )

  }

}`)

const blockImportFn = (nodeName, node) => {

  if (nodeName === 'div' && node.classList.contains('my-block-foo')) {

    const dataA = node.dataset.a

    return {
      type: 'block-foo',
      data: {
        dataA: dataA
      }
    }

  }

  if (nodeName === 'div' && node.classList.contains('my-block-bar')) {

    const dataB = node.dataset.b

    return {
      type: 'block-bar',
      data: {
        dataB: dataB
      }
    }

  }

}

const blockExportFn = (contentState, block) => {

  if (block.type === 'block-foo') {

    const { dataA } = block.data

    return {
      start: `<div class="my-block-foo" data-a="${dataA}">`,
      end: '</div>'
    }

  }

  if (block.type === 'block-bar') {

    const { dataB } = block.data

    return {
      start: `<div class="my-block-bar" data-b="${dataB}">`,
      end: '</div>'
    }

  }

}

const FooBlockElement = (props) => {
  return <div className="foo-block-element">{props.children}</div>
}

const FooBlockWrapper = (props) => {
  return <div className="foo-block-wrapper">{props.children}</div>
}

const blockRenderMap = Immutable.Map({
  'block-foo': {
    element: FooBlockElement,
    wrapper: <FooBlockWrapper />
  }
})

class BarBlockComponent extends React.Component {

  removeBarBlock = () => {
    this.props.blockProps.editor.setValue(ContentUtils.removeBlock(this.props.blockProps.editorState, this.props.block))
  }

  render () {

    const blockData = this.props.block.getData()
    const dataB = blockData.get('dataB')

    return (
      <div className="bar-block-component">
        <h2>{`Hello ${dataB}!`}</h2>
        <button className="button-remove" onClick={this.removeBarBlock}>
          <i className="bfi-bin"></i>
        </button>
      </div>
    )

  }

}

const blockRendererFn = (block, { editor, editorState }) => {

  if (block.getType() === 'block-bar') {

    return {
      component: BarBlockComponent,
      editable: false,
      props: { editor, editorState }
    }

  }

}

export default class BasicDemo extends PrismWrapper {

  state = {
    editorState: BraftEditor.createEditorState(`
      <p></p>
      <div class="my-block-foo" data-a="World!">Hello Foo</div>
      <div class="my-block-bar" data-b="1234567"><span>ABCDEFG</span></div>
      <p></p>
    `, {
      blockImportFn,
      blockExportFn
    }), // 设置编辑器初始内容
    outputHTML: '<p></p>'
  }

  componentDidMount () {

    super.componentDidMount()
    this.isLivinig = true

  }

  componentWillUnmount () {
    this.isLivinig = false
  }

  handleChange = (editorState) => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML()
    })
  }


  render () {

    const { editorState, outputHTML } = this.state

    return (
      <div className="demo-container pull-right">
        <h3 className="caption">扩展自定义Block</h3>
        <h5 className="sub-caption">本页面将演示如何扩展自定的Block</h5>
        <h5 className="section-caption">功能要点</h5>
        <ul className="points">
          <li>- 使用blockRendererFn和blockRenderMap两种方式扩展block</li>
          <li>- 使用blockImportFn和blockExportFn定义block的输入和输出转换</li>
        </ul>
        <h5 className="section-caption">注意事项</h5>
        <ul className="points">
          <li>- blockRenderMap通常用于自定义可编辑区块在编辑器中的渲染形式，请参考：<a href="https://draftjs.org/docs/advanced-topics-custom-block-render-map" target="_blank">Custom Block Rendering</a></li>
          <li>- blockRendererFn通常用于在编辑器中插入一个自定义的组件，其内容通常不受编辑器本身所控制（不可进行文本编辑），请参考：<a href="https://draftjs.org/docs/advanced-topics-block-components" target="_blank">Custom Block Components</a></li>
        </ul>
        <h5 className="section-caption">编辑器演示</h5>
        <div className="embed-editor">
          <BraftEditor
            blockRenderMap={blockRenderMap}
            blockRendererFn={blockRendererFn}
            converts={{ blockImportFn, blockExportFn }}
            value={editorState}
            onChange={this.handleChange}
            contentClassName="demo-editor"
          />
        </div>
        <h5 className="section-caption">输出内容</h5>
        <div className="output-content"><pre><code>{outputHTML}</code></pre></div>
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