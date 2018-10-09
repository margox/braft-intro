import './styles.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import BraftEditor from 'braft-editor'
import Prism from 'prismjs'
import { formatHTML } from '../utils/base'

const easyDemoCode = formatHTML(`import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'

export default class PageDemo extends React.Component {

  state = {
    editorState: BraftEditor.createEditorState(null)
  }

  render () {
    return (
      <BraftEditor value={this.state.editorStste} onChange={this.handleChange} />
    )
  }

  handleChange = (editorStste) => {
    this.setState({ editorStste })
  }

}`)

export default class PageIndex extends React.Component {

  state = {
    editorMode: 'editor'
  }

  switchMode = (event) => {
    this.setState({
      editorMode: event.currentTarget.dataset.mode
    }, () => {
      this.state.editorMode === 'code' && Prism.highlightAll()
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
              <BraftEditor contentClassName="demo-editor"/>
            ) : (
              <pre className="demo-code">
                <code className="language-jsx" dangerouslySetInnerHTML={{
                  __html: easyDemoCode
                }}></code>
              </pre>
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
              <span>设置媒体库初始内容</span>
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