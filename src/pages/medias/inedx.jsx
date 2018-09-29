import React from 'react'
import BraftEditor from 'braft-editor'
import { formatHTML } from '../utils/base'

const customDemoCode = formatHTML(`import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'

export default class CustomDemo extends React.Component {

  render () {

    const controls = [
      {
        key: 'bold',
        text: <b>加粗</b>
      },
      'italic', 'underline', 'separator', 'link', 'separator', 'media'
    ]

    return (
      <div className="editor-wrapper">
        <BraftEditor controls={controls} contentStyle={{height: 210, boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)'}}/>
      </div>
    )

  }

}`)

export default class BasicDemo extends React.Component {

  render () {

    const controls = [
      {
        key: 'bold',
        text: <b>加粗</b>
      },
      'italic', 'underline', 'separator', 'link', 'separator', 'media'
    ]

    return (
      <div className="demo-container pull-right">
        <h3 className="caption">设置媒体库初始内容</h3>
        <h5 className="sub-caption">本页面将演示如何设置媒体库的初始内容，借此可以实现媒体库列表的持久化</h5>
        <h5 className="section-caption">功能要点</h5>
        <ul className="points">
          <li>- 使用media.items属性设置媒体库内容</li>
          <li>- 获取媒体库实例并操作媒体库内容</li>
        </ul>
        <h5 className="section-caption">注意事项</h5>
        <ul className="points">
          <li>- 如果仅需要隐藏少量控件，使用excludeControls更方便</li>
          <li>- 请仅在需要动态设置样式的时候使用contentStyle，否则推荐使用contentClassName</li>
        </ul>
        <h5 className="section-caption">编辑器演示</h5>
        <div className="embed-editor">
          <BraftEditor controls={controls} contentStyle={{height: 210, boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)'}}/>
        </div>
        <h5 className="section-caption">示例源码</h5>
        <pre className="demo-code">
          <code className="language-jsx" dangerouslySetInnerHTML={{
            __html: customDemoCode
          }}></code>
        </pre>
      </div>
    )

  }

}