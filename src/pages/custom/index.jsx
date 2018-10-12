import React from 'react'
import BraftEditor from 'braft-editor'
import PrismWrapper from '../../components/prism'
import { formatHTML } from '../../utils/base'

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
        <BraftEditor
          controls={controls}
          contentStyle={{height: 210, boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)'}}
        />
      </div>
    )

  }

}`)

export default class BasicDemo extends PrismWrapper {

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
        <h3 className="caption">自定义内置控件</h3>
        <h5 className="sub-caption">本页中的编辑器只显示了少量的控件，并将加粗按钮的图标替换为了文字</h5>
        <h5 className="section-caption">功能要点</h5>
        <ul className="points">
          <li>- 使用controls指定需要展示的控件</li>
          <li>- 使用contentStyle调整编辑区域的高度，并增加内阴影</li>
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