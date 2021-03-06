import './styles.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <div className="sidebar pull-left">
    <div className="demo-entries">
      <NavLink to="/demos/basic">基本使用</NavLink>
      <NavLink to="/demos/custom">自定义内置控件</NavLink>
      <NavLink to="/demos/extend">增加扩展控件</NavLink>
      <NavLink to="/demos/preview">添加预览功能</NavLink>
      <NavLink to="/demos/media">设置媒体库初始内容</NavLink>
      <NavLink to="/demos/antd-form">在Ant Design表单中使用</NavLink>
      <NavLink to="/demos/antd-upload">集成Ant Design上传组件</NavLink>
      <NavLink to="/demos/rem">输出HTML单位转换为rem</NavLink>
      <NavLink to="/demos/inline-style">增加着重号样式控制</NavLink>
      <NavLink to="/demos/entity">增加按键展示效果</NavLink>
      <NavLink to="/demos/emoticon">使用自定义表情包扩展</NavLink>
      <NavLink to="/demos/color-picker">使用高级取色器扩展</NavLink>
      <NavLink to="/demos/code-highlighter">使用代码高亮扩展</NavLink>
    </div>
  </div>
)