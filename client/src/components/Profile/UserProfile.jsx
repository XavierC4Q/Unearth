import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'
import '../../styles/Profile.css'
import {
  gotUser,
  gotUserFail,
  profileUser,
  profileChange,
  loadUserProfile,
  loadUser,
  userProfile,
  userProfileChange
} from '../../actions/profile'

class UserProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }
  }

  singleUser = () => {
    let theId = this.props.userID.userID
    let user = `/get/singleuser/${theId}`
    let info = `/get/profileInfo/${theId}`
    this.props.dispatch.loadUserProfile(user, info)
  }

  componentDidMount(){
    if(this.props.profile.loaded && !this.props.profile.info[0]){
      axios.post('/post/newProfile', {
        user_id: Number(this.props.userID.userID)
      })
      .catch(() => {
        console.log('error in the load user with no edit')
      })
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.loaded) {
      this.singleUser()
      this.setState({loaded: true})
    }
  }

  render() {
    if (this.props.profile.loggedInUser[0]) {
      if (this.props.profile.profileUser[0]) {
        console.log('profile props',this.props)
        let isProfile = this.props.profile.loggedInUser[0].user_id === this.props.profile.profileUser[0].user_id
        let userLoaded = this.props.profile.loggedInUser[0]
        let infoFetched = this.props.profile.info[0]
        let editUrl = `/unearth/edit`

        return (<div className='profilecontainer'>
          <div className='topbar'>
            {
              isProfile
                ? <nav>
                    <Link to='/'>Home</Link>
                    {" "}<Link to='/unearth/feed'>Feed</Link>{" "}<Link to={editUrl}>Edit</Link>
                  </nav>
                : ''
            }
          </div>
          <div className='profileheader'>
            <h1>{this.props.profile.profileUser[0].username}</h1>
          </div>
          <div className='profilephoto'>
            {
              userLoaded
                ? <img src={userLoaded.user_image} alt='profile_photo' className='userimage'></img>
                : ''
            }
          </div>
          <div className='profilebio'>
            {
              infoFetched
                ? infoFetched.bio
                : 'Write a bio to tell us more about yourself!'
            }
          </div>
          <div className='profilemedia'>
            {
              infoFetched
                ? <a href={infoFetched.facebook} target='_'>
                    <img src='https://clipart.info/images/ccovers/1509135366facebook-symbol-png-logo.png' alt='facebook' className='mediaimage'></img>
                  </a>
                : ''
            }
            {" "}
            {
              infoFetched
                ? <a href={infoFetched.twitter} target='_'>
                    <img src='http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png' alt='twitter' className='mediaimage'></img>
                  </a>
                : ''
            }
            {" "}
            {
              infoFetched
                ? <a href={infoFetched.youtube} target='_'>
                    <img src='http://www.freepngimg.com/download/youtube/8-2-youtube-transparent.png' alt='youtube' className='mediaimage'></img>
                  </a>
                : ''
            }
            {" "}
            {
              infoFetched
                ? <a href={infoFetched.soundcloud} target='_'>
                    <img src='http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c537.png' alt='soundcloud' className='mediaimage'></img>
                  </a>
                : ''
            }
          </div>
        </div>)
      }
    }
    return (<div>the profile else</div>)
  }
}

const mapStateToProps = (state) => {
  return {users: state.userState, profile: state.profileState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: {
      loadUser: (user) => dispatch(loadUser(user)),
      profileUser: (profileUser) => dispatch(profileUser(profileUser)),
      loadUserProfile: (user, info) => dispatch(loadUserProfile(user, info)),
      gotUserFail: () => dispatch(gotUserFail())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
