import React, { Component } from 'react'
import UserView from './../views/userView'
import Fetcher from './../tools/fetcher'
import './../css/main.css'

class User extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      userInactivated: false,
      loadError: false,
      editPermission: false,
      deletePermission: false,
      userViewed: {},
      userBeingViewed: {
        id: 1,
        name: "Ann", 
        bio: "I am the best runner.",
        team: "One",
        races: [
          { name: "Best Race Ever", year: "2016" },
          { name: "Super Race", year: "2017" },
          { name: "Super Cool Race", year: "2018" }
        ]
      }
    }
    
    this.getUserData = this.getUserData.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  
  async getUserData () {
    this.setState({loading: true})
    
    let data = await this.props.fetcher.userShow(this.props.token, this.props.params.userId)
    if (data.success) {
      this.setState({userBeingViewed: data.user, loading: false})
      console.log("user retrieved: ", data.user)
      console.loog("state set: ", this.state.userBeingViewed)
      
    } else {
      this.setState({loading: false})
      this.props.sendMessage(data.message /* this.message ? */, true)
    }
    
  }
  
  handleDelete () {
    let confirmed = confirm("Are you sure you want to deactivate your account?")
    if (confirmed && this.state.userBeingViewed.id === 1 /* this.props.user.id */) {
      // api call
      // redirect here, you deleted yourself.
      this.setState({loadError: true})
    } else {
      // api call
      this.setState({userInactivated: true})
    }
  }
  
  render () {
    <UserView {...this.state} handleDelete={this.handleDelete} />
  }
}

export default User

// {this.props.params.userId}