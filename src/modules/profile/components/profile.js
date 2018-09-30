import React from 'react';
import { connect } from 'react-redux'
import { logout } from '../../login/actions/login-actions'
import { bindActionCreators } from 'redux'
import QRCode from 'qrcode.react'

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  
  onLogoutHandler() {
    this.props.onLogout()
  }

  render() {
    const qrcodeData = {
      userId: this.props.userId,
      token: this.props.token,
      action: 1,
      service: process.env.SERVICE_NAME || 'Facebook A'
    }

    return (
        <div className="limiter">
            <h2>{this.props.name}</h2>
            <h2>{this.props.email}</h2>
            <button onClick={this.onLogoutHandler.bind(this)}>
              Logout
            </button>
            <br/><br/><br/>
            <h4>Token para associação</h4>
            <div><QRCode value={JSON.stringify(qrcodeData)} size={256} /></div>
        </div>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return {
    onLogout: bindActionCreators(logout, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Profile);
