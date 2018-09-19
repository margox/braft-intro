import './styles.scss'
import React from 'react'

export default () => (
  <div className="navbar">
    <div className="container clearfix">
      <div className="logo pull-left">
        <h3>Braft Editor</h3>
      </div>
      <ul className="menu pull-right">
        <li><a href="#">在线演示</a></li>
        <li><a href="#">使用文档</a></li>
        <li><a href="#">交流反馈</a></li>
      </ul>
    </div>
  </div>
)