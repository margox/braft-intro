import './styles.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <div className="navbar">
    <div className="container clearfix">
      <div className="logo pull-left">
        <h3>Braft Editor</h3>
      </div>
      <ul className="menu pull-right">
        <li><NavLink to="/">首页</NavLink></li>
        <li><NavLink to="/demos/basic">在线演示</NavLink></li>
        <li><a href="https://www.yuque.com/margox/be/lzwpnr" target="_blank">使用文档</a></li>
      </ul>
    </div>
  </div>
)