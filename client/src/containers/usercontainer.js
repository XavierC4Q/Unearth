import React, { Component } from 'react'
import { connect } from 'react-redux'
import Users from '../components/Users/Users'

class UserContainer extends React.Component{
  allUsers = () => {
    const { dispatch, user } = this.props
    dispatch({ type: "ALL" })
    console.log('went thrruuuuuu')
  }

  render(){
    const { user } = this.props

    return(
      <Users
      state={user}
      allUsers={this.allUsers}
      />
    )
  }
}

export default connect(state => state)(UserContainer)
