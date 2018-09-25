import 'assets/scss/_base.scss'
import 'braft-editor/dist/index.css'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from 'components/navbar'
import FootBar from 'components/footbar'
import ScrollTop from 'components/scrolltop'

import IndexPage from 'pages/index'
import DemosPage from 'pages/demos'

export default class AppEntry extends React.Component {

  render () {

    return (
      <BrowserRouter>
        <ScrollTop>
          <div className="page-container">
            <Navbar />
            <Route path="/" exact component={IndexPage}></Route>
            <Route path="/demos" component={DemosPage}></Route>
            <FootBar />
          </div>
        </ScrollTop>
      </BrowserRouter>
    )

  }

}