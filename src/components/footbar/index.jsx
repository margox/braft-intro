import './styles.scss'
import React from 'react'

export default () => (
  <div className="footbar">
    <div className="container clearfix">
      <div className="pull-left copyright">
        &copy;2017-2018 <strong>Braft Editor</strong>&emsp;|&emsp;
      </div>
      <div className="pull-left credit">
        <span>本页面彩色图标来源于 <a href="http://emoji.streamlineicons.com/" target="_blank">Streamline Emoji</a></span>
      </div>
      <div className="pull-right menu">
        <a href="https://margox.cn" target="_blank">作者博客</a>
        <a href="https://weibo.com/margox" target="_blank">微博</a>
        <a href="https://github.com/margox" target="_blank">Github</a>
      </div>
    </div>
  </div>
)