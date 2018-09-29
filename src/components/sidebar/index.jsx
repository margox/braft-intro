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
      <NavLink to="/demos/unsplash">设置媒体库初始内容</NavLink>
      <NavLink to="/demos/form">在Ant Design表单中使用</NavLink>
      <NavLink to="/demos/upload">使用Ant Design上传组件</NavLink>
      <NavLink to="/demos/form">使用行为钩子hooks</NavLink>
      <NavLink to="/demos/medias">设置初始媒体库内容</NavLink>
      <NavLink to="/demos/braft-finder">单独使用媒体库组件</NavLink>
      <NavLink to="/demos/braft-utils">结合Braft Utils使用</NavLink>
    </div>
  </div>
)