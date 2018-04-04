import React, { Component }  from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//import * as LoginActions from '../actions/login-actions'
import Menu from './menu'
import loginStatus from '../../helpers/loginStatus'

class MenuContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    componentWillMount() {
        const loginStage = loginStatus()

        this.setState({
            ...this.state,
            login: loginStage
        })
        //console.log(JSON.parse(localStorage.loginData))
    }

    componentDidMount() {
        const socket = this.props.socket

		socket.on("connect", (param) => {
            console.log("Socket connected");

        });

		socket.on("disconnect", (param) => {
            console.log("Socket Disconnected");
        });
        
        socket.on('reconnect', (attemptNumber) => {
            console.log('reconnected')
        });
    }

  render() {
    const loginData = this.props.login.isLoggedIn ? this.props.login : this.state.login

    return (        
        <Menu login={loginData} />
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

export default connect(mapStateToProps, null)(MenuContainer);
