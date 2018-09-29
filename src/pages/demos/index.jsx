import './styles.scss'
import React from 'react'
import { Route } from 'react-router-dom'

import SideBar from 'components/sidebar'
import BasicDemo from 'pages/basic'
import CustomDemo from 'pages/custom'
import ExtendDemo from 'pages/extend'
import PreviewDemo from 'pages/preview'
import MediaDemo from 'pages/media'
import FormDemo from 'pages/antd-form'

export default () => (
  <div className="page-demo container clearfix">
    <SideBar />
    <Route path="/demos/basic" component={BasicDemo}></Route>
    <Route path="/demos/custom" component={CustomDemo}></Route>
    <Route path="/demos/extend" component={ExtendDemo}></Route>
    <Route path="/demos/preview" component={PreviewDemo}></Route>
    <Route path="/demos/media" component={MediaDemo}></Route>
    <Route path="/demos/antd-form" component={FormDemo}></Route>
  </div>
)