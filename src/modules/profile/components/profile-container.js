import React, { Component }  from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//import * as LoginActions from '../actions/login-actions'
import Profile from './profile'
import PageHeader from '../../template/pageHeader'

class ProfileContainer extends Component {
  render() {
    return (
        <div>
            <PageHeader name='Profile' small='User'></PageHeader>
            <Profile
                name={this.props.login.name || '---'}
                email={this.props.login.email || '---'}
            />
        </div>
    )
  }
};

/*function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch)
  };
}*/

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, null)(ProfileContainer);
