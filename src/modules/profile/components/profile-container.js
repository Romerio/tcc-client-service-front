import React, { Component }  from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Profile from './profile'
import PageHeader from '../../template/pageHeader'
import loginStatus from '../../../helpers/loginStatus'
import LoginContainer from '../../login/components/login-container'

class ProfileContainer extends Component {
  componentWillMount() {
    const loginData = loginStatus()

    this.setState({
        ...this.state,
        login: loginData
    })
}

  render() {
    const loginData = this.props.login.isLoggedIn ? this.props.login : this.state.login

    if(loginData.isLoggedIn) {
          return (
            <div>
                <PageHeader name='Profile' small='User'></PageHeader>
                <Profile
                    name={loginData.name || '---'}
                    email={loginData.email || '---'}
                    token={loginData.token || null}
                    userId={loginData.userId || null}
                />
            </div>
        )
      }

      return (
        <LoginContainer socket={this.props.socket} />
    )
  }
};

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, null)(ProfileContainer);
