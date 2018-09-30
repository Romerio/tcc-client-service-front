import React, { Component }  from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { search, alterList } from '../todo/todoActions'
import * as LoginActions from '../login/actions/login-actions'

const ConditionalItems = (state) => {
    if (state.isLoggedIn) {
      return (                        
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li><a href='#/profile'>Profile</a></li>
                    <li><a href='#/about'>About</a></li>
                </ul>
            </div>
        )
    } else{
        return (                        
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li><a href='#/login'>Login</a></li>
                    <li><a href='#/registar'>Register</a></li>
                    <li><a href='#/about'>About</a></li>
                </ul>
            </div>
        )
    }
}

class Menu extends Component {
    // <nav className='navbar navbar-default'>
    // <nav className='navbar navbar-inverse bg-inverse'>

    render() {
        const login = this.props.login

        return (
            <nav className='navbar navbar-default'>
                <div className='container'>
                    <div className='navbar-header'>
                        <a className='navbar-brand' href='#'>
                            <i className='fa fa-calendar-check-o'></i> Facebook A
                        </a>
                    </div>
                    <ConditionalItems isLoggedIn={login.isLoggedIn} />
                </div>
            </nav>
        )
    }
}

module.exports = Menu
