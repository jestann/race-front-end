import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import { NavLink } from 'reactstrap';
import './../css/navlink.css'

class Navlink extends Component {
  render () {
    return (
      <div>
        <NavLink {...this.props} exact className='navlink'>
          {this.props.label}
        </NavLink>
      </div>
    )
  }
}

export default Navlink

// "exact" before className fixed '/' link always active
// activeClassName doesn't work currently