import './styles.scss'
import React from 'react'
import { Route } from 'react-router-dom'
import asyncComponentLoader from '../../helpers/asyncComponetLoader'

import SideBar from 'components/sidebar'

export default () => (
  <div className="page-demo container clearfix">
    <SideBar />
    <Route path="/demos/basic" component={asyncComponentLoader(() => import(/* webpackChunkName: "page-demo-basic" */ 'pages/basic'))}></Route>
    <Route path="/demos/custom" component={asyncComponentLoader(() => import(/* webpackChunkName: "page-demo-custom" */ 'pages/custom'))}></Route>
    <Route path="/demos/extend" component={asyncComponentLoader(() => import(/* webpackChunkName: "page-demo-extend" */ 'pages/extend'))}></Route>
    <Route path="/demos/preview" component={asyncComponentLoader(() => import(/* webpackChunkName: "page-demo-preview" */ 'pages/preview'))}></Route>
    <Route path="/demos/media" component={asyncComponentLoader(() => import(/* webpackChunkName: "page-demo-media" */ 'pages/media'))}></Route>
    <Route path="/demos/antd-form" component={asyncComponentLoader(() => import(/* webpackChunkName: "page-demo-antd-form" */ 'pages/antd-form'))}></Route>
    <Route path="/demos/antd-upload" component={asyncComponentLoader(() => import(/* webpackChunkName: "page-demo-antd-upload" */ 'pages/antd-upload'))}></Route>
    <Route path="/demos/rem" component={asyncComponentLoader(() => import(/* webpackChunkName: "page-demo-rem" */ 'pages/rem'))}></Route>
    <Route path="/demos/inline-style" component={asyncComponentLoader(() => import(/* webpackChunkName: "page-demo-inline-style" */ 'pages/inline-style'))}></Route>
    <Route path="/demos/entity" component={asyncComponentLoader(() => import(/* webpackChunkName: "page-demo-entity" */ 'pages/entity'))}></Route>
  </div>
)