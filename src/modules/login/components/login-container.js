import React, { Component }  from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as LoginActions from '../actions/login-actions'
import Login from './login'

const qrcodePayload = {
  service: 'google',
  browserToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o', 
}

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    /** #To-DO
     * Aqui um socket vai ficar escutando o evento para logar o usuário
     * Ao recebe ro evento, vai chamar this.props.actions.loginWithAuthenticator (análogo a this.props.actions.login)
     */
        /*console.log(typeof this.props.actions.loginWithAuthenticator)
    this.props.actions.loginWithAuthenticator({
      token: 'asdadasdsa',
      userId: '1'
    })*/
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
          size: 200,
          payload: JSON.stringify(qrcodePayload)
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
