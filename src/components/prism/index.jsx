import React from 'react'
import Prism from 'prismjs'

export default class PrismWrapper extends React.Component {

  componentDidMount () {
    Prism.highlightAll()
  }

}