import React from 'react'
import Prism from 'prismjs'
import { withRouter } from 'react-router'

class ScrollTop extends React.Component {

  componentDidMount () {
    Prism.highlightAll()
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      Prism.highlightAll()
      window.scrollTo(0, 0)
    }
  }

  render () {
    return this.props.children
  }

}

export default withRouter(ScrollTop)