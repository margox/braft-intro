import React from 'react'
import BraftEditor from 'braft-editor'
import { ContentUtils } from 'braft-utils'
import { formatHTML } from '../utils/base'

const mediaDemoCode = formatHTML(`import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import { ContentUtils } from 'braft-utils'

const mediaItems = [
  {
    id: 1,
    type: 'IMAGE',
    url: 'https://margox.cn/wp-content/uploads/2018/09/IMG_9508.jpg'
  }, {
    id: 2,
    type: 'IMAGE',
    url: 'https://margox.cn/wp-content/uploads/2017/05/IMG_4995-480x267.jpg'
  }, {
    id: 3,
    type: 'IMAGE',
    url: 'https://margox.cn/wp-content/uploads/2017/05/IMG_4984-480x267.jpg'
  }, {
    id: 4,
    type: 'AUDIO',
    url: 'https://margox.cn/wp-content/uploads/2016/10/Jesper-Kyd-Venice-Rooftops.mp3'
  }, {
    id: 5,
    type: 'IMAGE',
    url: 'https://margox.cn/wp-content/uploads/2016/02/DSC_6961-980x654.jpg'
  }
]

export default class BasicDemo extends React.Component {

  state = {
    editorState: BraftEditor.createEditorState()
  }

  componentDidMount () {
    // 获取媒体库实例
    this.braftFinder = this.editorInstance.getFinderInstance()
  }

  addMediaItem = () => {

    // 使用braftFinder.addItems来添加媒体到媒体库
    this.braftFinder.addItems([
      {
        id: new Date().getTime(),
        type: 'IMAGE',
        url: 'https://margox.cn/wp-content/uploads/2017/05/IMG_4995-480x267.jpg'
      }
    ])

  }

  insertMediItem = () => {

    // 使用ContentUtils.insertMedias来插入媒体到editorState
    const editorState = ContentUtils.insertMedias(this.state.editorState, [
      {
        type: 'IMAGE',
        url: 'https://margox.cn/wp-content/uploads/2017/05/IMG_4995-480x267.jpg'
      }
    ])

    // 更新插入媒体后的editorState
    this.setState({ editorState })

  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  render () {

    const { editorState } = this.state
    const controls = ['bold', 'italic', 'underline', 'separator', 'link', 'separator', 'media']
    const extendControls = [
      'separator',
      {
        key: 'add-media',
        type: 'button',
        text: '插入图片到媒体库',
        onClick: this.addMediaItem
      }, {
        key: 'insert-media',
        type: 'button',
        text: '插入图片到编辑器',
        onClick: this.insertMediItem
      }
    ]

    return (
      <div className="editor-wrapper">
        <BraftEditor
          ref={instance => this.editorInstance = instance}
          controls={controls}
          value={editorState}
          onChange={this.handleChange}
          extendControls={extendControls}
          media={{items: mediaItems}}
        />
      </div>
    )

  }

}`)

const mediaItems = [
  {
    id: 1,
    type: 'IMAGE',
    url: 'https://margox.cn/wp-content/uploads/2018/09/IMG_9508.jpg'
  }, {
    id: 2,
    type: 'IMAGE',
    url: 'https://margox.cn/wp-content/uploads/2017/05/IMG_4995-480x267.jpg'
  }, {
    id: 3,
    type: 'IMAGE',
    url: 'https://margox.cn/wp-content/uploads/2017/05/IMG_4984-480x267.jpg'
  }, {
    id: 4,
    type: 'AUDIO',
    url: 'https://margox.cn/wp-content/uploads/2016/10/Jesper-Kyd-Venice-Rooftops.mp3'
  }, {
    id: 5,
    type: 'IMAGE',
    url: 'https://margox.cn/wp-content/uploads/2016/02/DSC_6961-980x654.jpg'
  }
]

export default class BasicDemo extends React.Component {

  state = {
    editorState: BraftEditor.createEditorState()
  }

  componentDidMount () {
    // 获取媒体库实例
    this.braftFinder = this.editorInstance.getFinderInstance()
  }

  addMediaItem = () => {

    // 使用braftFinder.addItems来添加媒体到媒体库
    this.braftFinder.addItems([
      {
        id: new Date().getTime(),
        type: 'IMAGE',
        url: 'https://margox.cn/wp-content/uploads/2017/05/IMG_4995-480x267.jpg'
      }
    ])

  }

  insertMediItem = () => {

    // 使用ContentUtils.insertMedias来插入媒体到editorState
    const editorState = ContentUtils.insertMedias(this.state.editorState, [
      {
        type: 'IMAGE',
        url: 'https://margox.cn/wp-content/uploads/2017/05/IMG_4995-480x267.jpg'
      }
    ])

    // 更新插入媒体后的editorState
    this.setState({ editorState })

  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  render () {

    const { editorState } = this.state
    const controls = ['bold', 'italic', 'underline', 'separator', 'link', 'separator', 'media']
    const extendControls = [
      'separator',
      {
        key: 'add-media',
        type: 'button',
        text: '插入图片到媒体库',
        onClick: this.addMediaItem
      }, {
        key: 'insert-media',
        type: 'button',
        text: '插入图片到编辑器',
        onClick: this.insertMediItem
      }
    ]

    return (
      <div className="demo-container pull-right">
        <h3 className="caption">设置媒体库初始内容</h3>
        <h5 className="sub-caption">本页面将演示如何设置媒体库的初始内容，借此可以实现媒体库列表的持久化</h5>
        <h5 className="section-caption">功能要点</h5>
        <ul className="points">
          <li>- 使用media.items属性设置媒体库内容</li>
          <li>- 使用媒体库实例方法插入媒体到媒体库</li>
          <li>- 使用ContentUtils插入媒体到编辑器</li>
        </ul>
        <h5 className="section-caption">注意事项</h5>
        <ul className="points">
          <li>- 插入到媒体库中的每个项目，都需要指定一个唯一的id属性</li>
          <li>- braftFinder实例的更多方法，暂时请参考<a href="https://github.com/margox/braft-finder/blob/master/src/controller.js" target="_blank">源码</a></li>
        </ul>
        <h5 className="section-caption">编辑器演示</h5>
        <div className="embed-editor">
          <BraftEditor
            ref={instance => this.editorInstance = instance}
            controls={controls}
            value={editorState}
            onChange={this.handleChange}
            extendControls={extendControls}
            media={{items: mediaItems}}
          />
        </div>
        <h5 className="section-caption">示例源码</h5>
        <pre className="demo-code">
          <code className="language-jsx" dangerouslySetInnerHTML={{
            __html: mediaDemoCode
          }}></code>
        </pre>
      </div>
    )

  }

}