import 'assets/scss/_base.scss'
import 'braft-editor/dist/index.css'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import asyncComponentLoader from './helpers/asyncComponetLoader'

import Navbar from 'components/navbar'
import FootBar from 'components/footbar'
import ScrollTop from 'components/scrolltop'

export default class AppEntry extends React.Component {

  render () {

    return (
      <BrowserRouter>
        <ScrollTop>
          <div className="page-container">
            <Navbar />
            <Route path="/" exact component={asyncComponentLoader(() => import(/* webpackChunkName: "page_index" */ 'pages/index'))}></Route>
            <Route path="/demos" component={asyncComponentLoader(() => import(/* webpackChunkName: "page_demo" */ 'pages/demos'))}></Route>
            <FootBar />
          </div>
        </ScrollTop>
      </BrowserRouter>
    )

  }

}