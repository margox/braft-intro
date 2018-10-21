import React from 'react'
import './styles.scss'

export default () => (
  <div className="page-loading">
    <div className="loader">
      <div className="rect rect-1"></div>
      <div className="rect rect-2"></div>
      <div className="rect rect-3"></div>
      <div className="rect rect-4"></div>
      <div className="rect rect-5"></div>
    </div>
    <span className="text">页面加载中</span>
  </div>
)