import React from "react";
import { Router, Route, Redirect } from "react-router";
import hashHistory from './app-history'
import About from "../about/about";
import LoginContainer from "../login/components/login-container";
import ProfileContainer from "../profile/components/profile-container";
import loginStatus from '../../helpers/loginStatus'

export default class Routes extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/profile' component={(props) => (
                    <ProfileContainer {...props} socket={this.props.socket} />
                )}/>
                <Route path='/login' component={(props) => (
                    <LoginContainer {...props} socket={this.props.socket} />
                )}/>
                <Route path='/about' component={About} />
                <Redirect from='*' to='/profile' />
            </Router>
        )
    }
}