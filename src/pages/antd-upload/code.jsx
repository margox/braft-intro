import 'braft-editor/dist/index.css'
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
  
    const fileURL = URL.createObjectURL(param.file)

    ImageUtils.compressImage(fileURL).then((res) => {
      this.setState({
        editorState: ContentUtils.insertMedias(this.state.editorState, [{
          type: 'IMAGE',
          url: res.url
        }])
      })
    }).catch(console.log)

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
              <Icon type="picture" theme="filled" />
            </button>
          </Upload>
        )
      }
    ]

    return (
      <div>
        <div className="editor-wrapper">
          <BraftEditor value={this.state.editorState} onChange={this.handleChange} controls={controls} extendControls={extendControls} />
        </div>
      </div>
    )

  }

}