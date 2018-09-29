import './styles.scss'
import React from 'react'
import { Route } from 'react-router-dom'

import SideBar from 'components/sidebar'
import BasicDemo from 'pages/basic'
import CustomDemo from 'pages/custom'
import ExtendDemo from 'pages/extend'
import PreviewDemo from 'pages/preview'

export default () => (
  <div className="page-demo container clearfix">
    <SideBar />
    <Route path="/demos/basic" component={BasicDemo}></Route>
    <Route path="/demos/custom" component={CustomDemo}></Route>
    <Route path="/demos/extend" component={ExtendDemo}></Route>
    <Route path="/demos/preview" component={PreviewDemo}></Route>
  </div>
)