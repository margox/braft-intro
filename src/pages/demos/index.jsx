import React from 'react'
import { Route } from 'react-router-dom'

import SideBar from 'components/sidebar'
import BasicDemo from 'pages/basic'

export default () => (
  <div className="full-width-container clearfix">
    <SideBar />
    <Route path="/basic" component={BasicDemo}></Route>
  </div>
)