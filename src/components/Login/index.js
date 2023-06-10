import {Component} from 'react'
import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import {
  LoginMainContainer,
  LoginContainer,
  LoginImage,
  LoginFormContainer,
  FormContainer,
  LoginHeading,
  InputLabel,
  InputElement,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {userId: '', pin: '', showErrorMSg: false, errorMsg: ''}

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
    this.setState({showErrorMSg: false})
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showErrorMSg: true})
  }

  onSubmit = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const userDetails = {user_id: userId, pin}
    const apiUrl = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  render() {
    const {userId, pin, showErrorMSg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginMainContainer>
        <LoginContainer>
          <LoginImage
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <LoginFormContainer>
            <LoginHeading>Welcome Back!</LoginHeading>
            <FormContainer onSubmit={this.onSubmit}>
              <InputLabel htmlFor="userId">User ID</InputLabel>
              <InputElement
                type="text"
                onChange={this.onChangeUserId}
                value={userId}
                placeholder="Enter User ID"
                id="userId"
              />
              <InputLabel htmlFor="pin">PIN</InputLabel>
              <InputElement
                type="password"
                onChange={this.onChangePin}
                value={pin}
                placeholder="Enter PIN"
                id="pin"
              />
              <LoginButton type="submit">Login</LoginButton>
              {showErrorMSg && <ErrorMessage>*{errorMsg}</ErrorMessage>}
            </FormContainer>
          </LoginFormContainer>
        </LoginContainer>
      </LoginMainContainer>
    )
  }
}

export default Login
