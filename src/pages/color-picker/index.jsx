import React from 'react'
import BraftEditor from 'braft-editor'
import PrismWrapper from '../../components/prism'
import { formatHTML } from '../../utils/base'

import 'braft-extensions/dist/color-picker.css'
import ColorPicker from 'braft-extensions/dist/color-picker'

const customDemoCode = formatHTML(`import 'braft-editor/dist/index.css'
import 'braft-extensions/dist/color-picker.css'

import React from 'react'
import BraftEditor from 'braft-editor'
import ColorPicker from 'braft-extensions/dist/color-picker'

BraftEditor.use(ColorPicker({
  includeEditors: ['editor-with-color-picker'],
  theme: 'light' // 支持dark和light两种主题，默认为dark
}))

export default class ColorPickerDemo extends React.Component {

  render () {

    return (
      <div className="editor-container">
        <BraftEditor id="editor-with-color-picker"/>
      </div>
    )

  }

}`)

BraftEditor.use(ColorPicker({
  includeEditors: ['demo-editor-with-color-picker'],
  theme: 'light'
}))

export default class BasicDemo extends PrismWrapper {

  render () {

    const controls = [
      'bold', 'italic', 'underline', 'text-color', 'separator', 'link', 'separator', 'media'
    ]

    return (
      <div className="demo-container pull-right">
        <h3 className="caption">使用高级取色器扩展</h3>
        <h5 className="sub-caption">本页面将演示如何使用braft-extensions包中的高级取色器扩展</h5>
        <h5 className="section-caption">注意事项</h5>
        <ul className="points">
          <li>- 不要忘记引入高级取色器扩展的样式文件braft-extensions/dist/color-picker.css</li>
          <li>- 前往<a href="https://github.com/margox/braft-extensions" target="_blank">Braft Extensions</a>查看所有可用扩展</li>
        </ul>
        <h5 className="section-caption">编辑器演示</h5>
        <div className="embed-editor">
          <BraftEditor controls={controls} id="demo-editor-with-color-picker" contentStyle={{height: 350}}/>
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