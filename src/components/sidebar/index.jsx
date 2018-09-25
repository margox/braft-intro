import './styles.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <div className="sidebar pull-left">
    <div className="demo-entries">
      <NavLink to="/demos/basic">基本使用</NavLink>
      <NavLink to="/demos/form">结合Ant Design表单使用</NavLink>
      <NavLink to="/demos/custom">自定义内置控件</NavLink>
      <NavLink to="/demos/extend">增加扩展控件</NavLink>
      <NavLink to="/demos/preview">添加预览功能</NavLink>
      <NavLink to="/demos/unsplash">添加Unsplash图库</NavLink>
      <NavLink to="/demos/upload">使用Ant Design上传组件</NavLink>
    </div>
  </div>
)