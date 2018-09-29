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
    // 获取braftFinder实例
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

}