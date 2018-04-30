import React from 'react'

const Register = ({ state, register, registerUsername, registerPassword, confirmPassword, registerEmail, registerFirstName, registerLastName}) => {

  return (
    <div>
      <form onSubmit={() => register(state.username, state.password, state.confirmPassword, state.email, state.first_name, state.last_name)}>
        <h2>Sign Up for an account!</h2>
        <div>
          <label>
            Username{" "}
            <input
              type='text'
              onChange={registerUsername}
              />
          </label>
        </div>
        <div>
          <label>
            Password{" "}
            <input
              type='text'
              onChange={registerPassword}
              />
          </label>
        </div>
        <div>
          <label>
            Confirm Password{" "}
            <input
              type='text'
              onChange={confirmPassword}
              />
          </label>
        </div>
        <div>
          <label>
            First Name{" "}
            <input
              type='text'
              onChange={registerFirstName}
              />
          </label>
        </div>
        <div>
          <label>
            Last Name{" "}
            <input
              type='text'
              onChange={registerLastName}
              />
          </label>
        </div>
        <div>
          <label>
            Email{" "}
            <input
              type='text'
              onChange={registerEmail}
              />
          </label>
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register
