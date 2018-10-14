import React from 'react'
import BraftEditor from 'braft-editor'
import { ContentUtils } from 'braft-utils'
// import { Upload, Icon } from 'antd'
import PrismWrapper from '../../components/prism'
import { formatHTML } from '../../utils/base'

import Upload from 'antd/lib/upload'
// import 'antd/lib/upload/style/css'

const basicDemoCode = formatHTML(`import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import { ContentUtils } from 'braft-utils'
import { ImageUtils } from 'braft-finder'
import { Upload } from 'antd'

export default class UploadDemo extends React.Component {

  state = {
    editorState: BraftEditor.createEditorState(null)
  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  uploadHandler = (param) => {

    if (!param.file) {
      return false
    }
  
    this.setState({
      editorState: ContentUtils.insertMedias(this.state.editorState, [{
        type: 'IMAGE',
        url: URL.createObjectURL
      }])
    })

  }

  render () {

    const controls = ['bold', 'italic', 'underline', 'text-color', 'separator', 'link', 'separator']
    const extendControls = [
      {
        key: 'antd-uploader',
        type: 'component',
        component: (
          <Upload
            accept="image/*"
            showUploadList={false}
            customRequest={this.uploadHandler}
          >
            <button className="control-item button upload-button" data-title="插入图片">
              <Icon type="picture" theme="filled" />
            </button>
          </Upload>
        )
      }
    ]

    return (
      <div>
        <div className="editor-wrapper">
          <BraftEditor
            value={this.state.editorState}
            onChange={this.handleChange}
            controls={controls}
            extendControls={extendControls}
          />
        </div>
      </div>
    )

  }

}`)

export default class BasicDemo extends PrismWrapper {

  state = {
    editorState: BraftEditor.createEditorState(null)
  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  uploadHandler = (param) => {

    if (!param.file) {
      return false
    }
  
    this.setState({
      editorState: ContentUtils.insertMedias(this.state.editorState, [{
        type: 'IMAGE',
        url: URL.createObjectURL(param.file)
      }])
    })

  }

  render () {

    const controls = ['bold', 'italic', 'underline', 'text-color', 'separator', 'link', 'separator' ]
    const extendControls = [
      {
        key: 'antd-uploader',
        type: 'component',
        component: (
          <Upload
            accept="image/*"
            showUploadList={false}
            customRequest={this.uploadHandler}
          >
            <button className="control-item button upload-button" data-title="插入图片">
            插入图片
            </button>
          </Upload>
        )
      }
    ]

    return (
      <div className="demo-container pull-right">
        <h3 className="caption">集成Ant Design上传组件</h3>
        <h5 className="sub-caption">本页面将演示如何用将Ant Design的Upload组件集成到编辑器</h5>
        <h5 className="section-caption">功能要点</h5>
        <ul className="points">
          <li>- 使用controls或者excludeControls来隐藏编辑器自带的媒体库控件</li>
          <li>- 使用component类型的extendControls将Upload组件集成到编辑器工具栏</li>
          <li>- 使用ContentUtils来将上传后的图片插入到编辑器</li>
        </ul>
        <h5 className="section-caption">注意事项</h5>
        <ul className="points">
          <li>- 本示例中的URL.createObjectURL仅作为演示用，实际使用中请使用真实的上传功能</li>
          <li>- 通过component类型的extendControls来集成Upload组件，需要设置showUploadList为false以保证显示正常</li>
          <li>- 若需要使用完整的Upload组件功能，请使用dropdown或者modal类型的extendControls来进行集成</li>
        </ul>
        <h5 className="section-caption">编辑器演示</h5>
        <div className="embed-editor">
          <BraftEditor value={this.state.editorState} onChange={this.handleChange} controls={controls} extendControls={extendControls} contentClassName="demo-editor"/>
        </div>
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