import 'assets/scss/_base.scss'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from 'components/navbar'
import IndexPage from 'pages/index'

render((
  <BrowserRouter>
    <div className="page-container">
      <Navbar />
      <Route path="/" component={IndexPage}></Route>
    </div>
  </BrowserRouter>
), document.querySelector('#root'))