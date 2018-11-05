import './styles.scss'
import React from 'react'
import { Route } from 'react-router-dom'
import asyncComponentLoader from '../../helpers/asyncComponetLoader'

import SideBar from 'components/sidebar'

export default () => (
  <div className="page-demo container clearfix">
    <SideBar />
    <Route path="/demos/basic" component={asyncComponentLoader(() => import(/* webpackChunkName: "demo_basic" */ 'pages/basic'))}></Route>
    <Route path="/demos/custom" component={asyncComponentLoader(() => import(/* webpackChunkName: "demo_custom" */ 'pages/custom'))}></Route>
    <Route path="/demos/extend" component={asyncComponentLoader(() => import(/* webpackChunkName: "demo_extend" */ 'pages/extend'))}></Route>
    <Route path="/demos/preview" component={asyncComponentLoader(() => import(/* webpackChunkName: "demo_preview" */ 'pages/preview'))}></Route>
    <Route path="/demos/media" component={asyncComponentLoader(() => import(/* webpackChunkName: "demo_media" */ 'pages/media'))}></Route>
    <Route path="/demos/antd-form" component={asyncComponentLoader(() => import(/* webpackChunkName: "demo_antd_form" */ 'pages/antd-form'))}></Route>
    <Route path="/demos/antd-upload" component={asyncComponentLoader(() => import(/* webpackChunkName: "demo_antd_upload" */ 'pages/antd-upload'))}></Route>
    <Route path="/demos/rem" component={asyncComponentLoader(() => import(/* webpackChunkName: "demo_rem" */ 'pages/rem'))}></Route>
    <Route path="/demos/inline-style" component={asyncComponentLoader(() => import(/* webpackChunkName: "demo_inline_style" */ 'pages/inline-style'))}></Route>
    <Route path="/demos/entity" component={asyncComponentLoader(() => import(/* webpackChunkName: "demo_entity" */ 'pages/entity'))}></Route>
    <Route path="/demos/block" component={asyncComponentLoader(() => import(/* webpackChunkName: "demo_block" */ 'pages/block'))}></Route>
    <Route path="/demos/color-picker" component={asyncComponentLoader(() => import(/* webpackChunkName: "demo_color_picker" */ 'pages/color-picker'))}></Route>
    <Route path="/demos/emoticon" component={asyncComponentLoader(() => import(/* webpackChunkName: "demo_emoticon" */ 'pages/emoticon'))}></Route>
    <Route path="/demos/code-highlighter" component={asyncComponentLoader(() => import(/* webpackChunkName: "demo_code_highlighter" */ 'pages/code-highlighter'))}></Route>
  </div>
)