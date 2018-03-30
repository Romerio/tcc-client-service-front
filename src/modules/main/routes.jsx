import React from "react";
import { Router, Route, Redirect } from "react-router";
import hashHistory from './app-history'
import About from "../about/about";
import LoginContainer from "../login/components/login-container";
import ProfileContainer from "../profile/components/profile-container";

export default props => (
    <Router history={hashHistory}>
        <Route path='/profile' component={ProfileContainer} />
        <Route path='/login' component={LoginContainer} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/login' />
    </Router>
)