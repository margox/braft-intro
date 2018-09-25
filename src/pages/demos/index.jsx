import './styles.scss'
import React from 'react'
import { Route } from 'react-router-dom'

import SideBar from 'components/sidebar'
import BasicDemo from 'pages/basic'

export default () => (
  <div className="page-demo container clearfix">
    <SideBar />
    <Route path="/demos/basic" component={BasicDemo}></Route>
  </div>
)