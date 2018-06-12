import React from 'react'
import {connect} from 'react-redux'

import {editUser} from '../../actions/profile'

class UserEdit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      first_name: '',
      last_name: '',
      user_image: '',
      email: '',
      bio: '',
      facebook: '',
      twitter: '',
      youtube: '',
      vimeo: '',
      soundcloud: '',
      linkedIn: '',
      instagram: '',
      search_distance: '',
      message: ''
    }
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSelect = (event) => {
    this.setState({search_distance: event.target.value})
  }

  handleEdit = (event) => {
    event.preventDefault()
    const {
      username,
      first_name,
      last_name,
      bio,
      user_image,
      email,
      facebook,
      twitter,
      youtube,
      vimeo,
      soundcloud,
      instagram,
      linkedIn,
      search_distance
    } = this.state
    if (this.props.info) {
      let user = {
        id: this.props.user.user_id,
        username: username
          ? username
          : this.props.user.username,
        first_name: first_name
          ? first_name
          : this.props.user.first_name,
        last_name: last_name
          ? last_name
          : this.props.user.last_name,
        user_image: user_image
          ? user_image
          : this.props.info.user_image,
        bio: bio
          ? bio
          : this.props.info.bio,
        facebook: facebook
          ? facebook
          : this.props.info.facebook,
        twitter: twitter
          ? twitter
          : this.props.info.twitter,
        youtube: youtube
          ? youtube
          : this.props.info.youtube,
        soundcloud: soundcloud
          ? soundcloud
          : this.props.info.soundcloud,
        vimeo: vimeo
          ? vimeo
          : this.props.info.vimeo,
        instagram: instagram
          ? instagram
          : this.props.info.instagram,
        linkedIn: linkedIn
          ? linkedIn
          : this.props.info.linkedin,
        email: email
          ? email
          : this.props.info.email,
        search_distance: search_distance
          ? Number(search_distance)
          : this.props.info.search_distance
      }

      this.props.dispatch.editUser(user)

      this.setState({
        username: '',
        first_name: '',
        last_name: '',
        user_image: '',
        email: '',
        bio: '',
        facebook: '',
        twitter: '',
        youtube: '',
        vimeo: '',
        soundcloud: '',
        linkedIn: '',
        instagram: '',
        search_distance: '',
        message: 'Changes made'
      })
    } else {
      let user = {
        id: this.props.user.user_id,
        username: username
          ? username
          : this.props.user.username,
        first_name: first_name
          ? first_name
          : this.props.user.first_name,
        last_name: last_name
          ? last_name
          : this.props.user.last_name,
        user_image: user_image
          ? user_image
          : '',
        bio: bio
          ? bio
          : '',
        facebook: facebook
          ? facebook
          : '',
        twitter: twitter
          ? twitter
          : '',
        youtube: youtube
          ? youtube
          : '',
        soundcloud: soundcloud
          ? soundcloud
          : '',
        vimeo: vimeo
          ? vimeo
          : '',
        instagram: instagram
          ? instagram
          : '',
        linkedIn: linkedIn
          ? linkedIn
          : '',
        email: email
          ? email
          : '',
        search_distance: search_distance
          ? Number(search_distance)
          : 5
      }

      this.props.dispatch.editUser(user)

      this.setState({
        username: '',
        first_name: '',
        last_name: '',
        user_image: '',
        email: '',
        bio: '',
        facebook: '',
        twitter: '',
        youtube: '',
        vimeo: '',
        soundcloud: '',
        linkedIn: '',
        instagram: '',
        search_distance: '',
        message: 'Changes made'
      })
    }
  }

  render() {
    const {
      username,
      first_name,
      last_name,
      bio,
      user_image,
      email,
      facebook,
      twitter,
      youtube,
      vimeo,
      soundcloud,
      instagram,
      linkedIn,
      search_distance,
      message
    } = this.state
    let searchValues = [
      5,
      10,
      15,
      25,
      50,
      100
    ]
    console.log('edit props', this.props)
    if (this.props.user) {
      return (<div>
        <h1>Edit Profile Here</h1>
        <form onSubmit={this.handleEdit}>
          <div>
            <label>
              Username {" "}
              <input type='text' onInput={this.handleInput} name='username' value={username}/>
            </label>
          </div>
          <div>
            <label>
              First Name {" "}
              <input type='text' onInput={this.handleInput} name='first_name' value={first_name}/>
            </label>
          </div>
          <div>
            <label>
              Last Name {" "}
              <input type='text' onInput={this.handleInput} name='last_name' value={last_name}/>
            </label>
          </div>
          <div>
            <label>
              Email {" "}
              <input type='text' onInput={this.handleInput} name='email' value={email}/>
            </label>
          </div>
          <div>
            <label>
              Profile Photo {" "}
              <input type='text' onInput={this.handleInput} name='user_image' value={user_image}/>
            </label>
          </div>
          <div>
            <label>
              Bio {" "}
              <input type='textarea' onInput={this.handleInput} name='bio' value={bio} width='350px' height='200px'/>
            </label>
          </div>
          <div>
            <label>
              Facebook {" "}
              <input type='text' onInput={this.handleInput} name='facebook' value={facebook}/>
            </label>
          </div>
          <div>
            <label>
              Twitter {" "}
              <input type='text' onInput={this.handleInput} name='twitter' value={twitter}/>
            </label>
          </div>
          <div>
            <label>
              Soundcloud {" "}
              <input type='text' onInput={this.handleInput} name='soundcloud' value={soundcloud}/>
            </label>
          </div>
          <div>
            <label>
              Youtube {" "}
              <input type='text' onInput={this.handleInput} name='youtube' value={youtube}/>
            </label>
          </div>
          <div>
            <label>
              Vimeo {" "}
              <input type='text' onInput={this.handleInput} name='vimeo' value={vimeo}/>
            </label>
          </div>
          <div>
            <label>
              Instagram {" "}
              <input type='text' onInput={this.handleInput} name='instagram' value={instagram}/>
            </label>
          </div>
          <div>
            <label>
              LinkedIn {" "}
              <input type='text' onInput={this.handleInput} name='linkedIn' value={linkedIn}/>
            </label>
          </div>
          <div>
            <label>
              Search Distance {" "}
              <select onChange={this.handleSelect}>
                {
                  [
                    '', ...searchValues
                  ].map(value => (<option value={value} key={value}>
                    {value}
                  </option>))
                }
              </select>
            </label>
          </div>
          <p>{message}</p>
          <button type='submit'>Submit Changes</button>
        </form>
      </div>)
    }
    return (<div>loading edit page</div>)
  }
}

const mapStateToProps = (state) => {
  return {info: state.profileState.info[0], user: state.profileState.profileUser[0]}
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: {
      editUser: (user) => {
        dispatch(editUser(user))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit)
