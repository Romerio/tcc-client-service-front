import React, { Component }  from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as LoginActions from '../actions/login-actions'
import Login from './login'

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: '',
        qrcodePayload : {
          service: 'google',
          browserToken: 'Hello world!', 
      }
    };
  }

  componentDidMount() {
    const self = this
    const socket = this.props.socket

    socket.emit('auth.getBrowserToken', (browserToken) => {
      console.log('- browserToken:')
      console.log(browserToken)

      this.setState({
        ...this.state, 
        qrcodePayload: {
          ...this.state.qrcodePayload,
          browserToken
        }
      })
    });

    const browserTokenInverval = setInterval(() => {
      socket.emit('auth.getBrowserToken', (browserToken) => {
        console.log('- browserToken:')
        console.log(browserToken)
  
        self.setState({
          ...self.state, 
          qrcodePayload: {
            ...self.state.qrcodePayload,
            browserToken
          }
        })
      })
    }, 25000)

    this.setState({
      ...this.state,
      browserTokenInverval
    })

    socket.on('auth.login', (authData) => {
      this.props.actions.loginWithAuthenticator(authData)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.browserTokenInverval)
  }

  onChangeUsername(event) {

    this.setState({
      email: event.target.value
    });
  }

  onChangePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  onLogin() {
    this.props.actions.login(
      this.state.email,
      this.state.password
    )
  }

  render() {
    return (
      <Login
        email={this.state.email}
        password={this.state.password}
        qrcodeData={{
          size: 256,
          payload: JSON.stringify(this.state.qrcodePayload)
        }}
        onChangeUsername={this.onChangeUsername.bind(this)}
        onChangePassword={this.onChangePassword.bind(this)}
        onLogin={this.onLogin.bind(this)}
      />
    )
  }
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(LoginContainer);
