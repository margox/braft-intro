import './styles.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import BraftEditor from 'braft-editor'

const excludeControls = [
  'letter-spacing',
  'line-height',
  'clear',
  'remove-styles'
]

export default class PageIndex extends React.Component {

  state = {
    editorMode: 'editor'
  }

  switchMode = (event) => {
    this.setState({
      editorMode: event.currentTarget.dataset.mode
    })
  }

  render () {

    const { editorMode } = this.state

    return (
      <div className="page-index">
        <div className="header">
          <h1 className="caption">Braft Editor</h1>
          <h2 className="sub-caption">美观好用的React富文本编辑器</h2>
          <div className="buttons">
            <button className="button-view-doc">查看文档</button>
            <button className="button-fork">Star &amp; Fork</button>
          </div>
          <div className="easy-demo">
            <div className="bar">
              <div className="icon icon-red"></div>
              <div className="icon icon-yellow"></div>
              <div className="icon icon-green"></div>
              <span className="title">{editorMode === 'editor' ? 'Braft Editor' : 'view-source:Braft Editor'}</span>
            </div>
            {editorMode === 'editor' ? (
              <BraftEditor contentClassName="demo-editor" excludeControls={excludeControls}/>
            ) : (
              <div className="demo-code" dangerouslySetInnerHTML={{
                __html: '<pre><code><span style="line-height:normal"><span style="color:#c586c0">import</span> <span style="color:#ce9178">&#x27;braft-editor/dist/index.css&#x27;</span><br/><span style="color:#c586c0">import</span> <span style="color:#9cdcfe">React</span> <span style="color:#c586c0">from</span> <span style="color:#ce9178">&#x27;react&#x27;</span><br/><span style="color:#c586c0">import</span> <span style="color:#9cdcfe">BraftEditor, { EditorState }</span> <span style="color:#c586c0">from</span> <span style="color:#ce9178">&#x27;braft-editor&#x27;</span></span></code><br/><span style="line-height:normal"><span style="color:#ce9178"><code><span style="color:#c586c0">export</span> <span style="color:#c586c0">default</span> <span style="color:#569cd6">class</span> <span style="color:#4ec9b0">PageDemo</span> <span style="color:#569cd6">extends</span> <span style="color:#4ec9b0">React</span><span style="color:#d4d4d4">.</span><span style="color:#4ec9b0">Component</span><span style="color:#d4d4d4"> {</span></code></span></span><br/><code><span style="line-height:normal"><span style="color:#9cdcfe">  state</span> <span style="color:#d4d4d4">= {</span><br/>    <span style="color:#9cdcfe">editorState:</span> <span style="color:#9cdcfe">EditorState</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">createFrom</span><span style="color:#d4d4d4">(</span><span style="color:#569cd6">null</span><span style="color:#d4d4d4">)</span><br/><span style="color:#d4d4d4">  }</span><br/><br/>  <span style="color:#dcdcaa">render</span><span style="color:#d4d4d4"> () {</span><br/> <br/>    <span style="color:#569cd6">const</span><span style="color:#d4d4d4"> { </span><span style="color:#9cdcfe">editorStste</span><span style="color:#d4d4d4"> } =</span> <span style="color:#569cd6">this</span><span style="color:#d4d4d4">.</span><span style="color:#9cdcfe">state</span><br/>    <span style="color:#569cd6">const</span> <span style="color:#9cdcfe">excludeControls</span> <span style="color:#d4d4d4">= [</span><span style="color:#ce9178">&#x27;letter-spacing&#x27;</span><span style="color:#d4d4d4">,</span> <span style="color:#ce9178">&#x27;line-height&#x27;</span><span style="color:#d4d4d4">,</span> <span style="color:#ce9178">&#x27;clear&#x27;</span><span style="color:#d4d4d4">,</span> <span style="color:#ce9178">&#x27;remove-styles&#x27;</span><span style="color:#d4d4d4">]</span><br/><br/>    <span style="color:#c586c0">return</span><span style="color:#d4d4d4"> (</span><br/>      <span style="color:#808080">&lt;</span><span style="color:#4ec9b0">BraftEditor</span> <span style="color:#9cdcfe">value</span><span style="color:#d4d4d4">=</span><span style="color:#569cd6">{</span><span style="color:#9cdcfe">editorStste</span><span style="color:#569cd6">}</span> <span style="color:#9cdcfe">onChange</span><span style="color:#d4d4d4">=</span><span style="color:#569cd6">{this</span><span style="color:#d4d4d4">.</span><span style="color:#9cdcfe">handleChange</span><span style="color:#569cd6">}</span> <span style="color:#9cdcfe">excludeControls</span><span style="color:#d4d4d4">=</span><span style="color:#569cd6">{</span><span style="color:#9cdcfe">excludeControls</span><span style="color:#569cd6">}</span><span style="color:#808080">/&gt;</span><br/><span style="color:#d4d4d4">    )</span><br/><br/><span style="color:#d4d4d4">  }</span><br/><br/>  <span style="color:#dcdcaa">handleChange</span> <span style="color:#d4d4d4">= (</span><span style="color:#9cdcfe">editorStste</span><span style="color:#d4d4d4">) </span><span style="color:#569cd6">=&gt;</span><span style="color:#d4d4d4"> {</span><br/>    <span style="color:#569cd6">this</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">setState</span><span style="color:#d4d4d4">({ </span><span style="color:#9cdcfe">editorStste</span><span style="color:#d4d4d4"> })</span><br/><span style="color:#d4d4d4">  }</span></span></code><br/><span style="color:#ce9178"><code><span style="color:#d4d4d4">}</span></code></span></pre>'
              }}>
              </div>
            )}
          </div>
          <div className="mode-switch">
            <button data-mode="editor" onClick={this.switchMode} className={editorMode === 'editor' ? 'active' : null}>示例</button>
            <button data-mode="code" onClick={this.switchMode} className={editorMode === 'code' ? 'active' : null}>源码</button>
          </div>
          <div className="shape"></div>
        </div>
        <div className="index-section section-features">
          <h3 className="caption">
            <span>编辑器特性</span>
          </h3>
          <div className="container features">
            <div className="item item-1">
              <div className="icon icon-1"></div>
              <h5 className="title">简单易用，轻松上手</h5>
              <p className="description">使用示例代码即可轻松接入，更可加QQ群获取在线支持</p>
            </div>
            <div className="item item-2">
              <div className="icon icon-2"></div>
              <h5 className="title">丰富的多媒体支持</h5>
              <p className="description">不仅支持图片和音视频，更支持插入嵌入式多媒体内容</p>
            </div>
            <div className="item item-3">
              <div className="icon icon-3"></div>
              <h5 className="title">细节皆可定制</h5>
              <p className="description">加粗按钮的图标不喜欢？换换换！</p>
            </div>
            <div className="item item-4">
              <div className="icon icon-4"></div>
              <h5 className="title">完善的扩展能力</h5>
              <p className="description">在工具栏加个按钮不算啥，还有hooks可以控制编辑器的诸多行为</p>
            </div>
          </div>
        </div>
        <div className="index-section section-demos">
          <h3 className="caption">
            <span>使用示例</span>
          </h3>
          <div className="container clearfix demos">
            <Link to="/demos/basic" className="item">
              <span>基本使用</span>
            </Link>
            <Link to="/demos/form" className="item">
              <span>结合Ant.Design表单使用</span>
            </Link>
            <Link to="/demos/custom" className="item">
              <span>自定义内置控件</span>
            </Link>
            <Link to="/demos/extend" className="item">
              <span>增加扩展控件</span>
            </Link>
            <Link to="/demos/preview" className="item">
              <span>添加预览功能</span>
            </Link>
            <Link to="/demos/unsplash" className="item">
              <span>添加Unsplash图库</span>
            </Link>
            <Link to="/demos/upload" className="item">
              <span>使用Ant.Design上传组件</span>
            </Link>
            <a className="item disabled">
              <span>更多示例，敬请期待...</span>
            </a>
          </div>
        </div>
      </div>
    )
  }

}