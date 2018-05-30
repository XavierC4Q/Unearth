import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
import axios from 'axios'

import { loadNearbyUsers } from '../../actions/location'
import { gotUserFail, loadUser } from '../../actions/profile'

class Feed extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      loggedIn: false
    }
  }


  getLoggedInUser = () => {
    axios.get('/get/loggedInUser')
    .then(res => {
      let theUser = res.data[0]
      this.props.dispatch.loadUser(res.data)
      this.props.dispatch.loadNearbyUsers(theUser.latitude, theUser.longitude, theUser.search_distance, this.props.users.allUsers, theUser.user_id)
    })
    .then(() => {
      this.setState({ loggedIn: true })
    })
    .catch(error => {
      this.props.dispatch.gotUserFail()
    })
  }


  componentDidMount(){
    this.getLoggedInUser()
  }

  render(){
    console.log(this.props)
    if(this.state.loggedIn){
      return(
        <div>
          <h1>User Feed</h1>
          <h3>Who is Nearby?</h3>
          {this.props.location.users.map(users => (
            <p>{users.username}</p>
          ))}
        </div>
      )
    }
    return (<div>loading feed</div>)
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userState,
    location: state.locationState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: {
      loadUser: (user) => dispatch(loadUser(user)),
      gotUserFail: () => dispatch(gotUserFail()),
      loadNearbyUsers: (lat, lng, distance, allusers, id) => dispatch(loadNearbyUsers(lat, lng, distance, allusers, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
