import React, { Component } from 'react'
import Container from './../components/container'
import './../styles/main.css'

import content from './../content/about'

class Home extends Component {
  render (props) {
    return (
      <Container title="Home" markdown={content} cssLabel="home" {...props} />
    )
  }
}

export default Home