import React, { Component }  from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { search, alterList } from '../todo/todoActions'
import * as LoginActions from '../login/actions/login-actions'

class Menu extends Component {
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

    componentWillReceiveProps(nextProps) {
  
    }

    // <nav className='navbar navbar-default'>
    // <nav className='navbar navbar-inverse bg-inverse'>

    render() {
        return (
            <nav className='navbar navbar-default'>
                <div className='container'>
                    <div className='navbar-header'>
                        <a className='navbar-brand' href='#'>
                            <i className='fa fa-calendar-check-o'></i> Service One
                        </a>
                    </div>

                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><a href='#/profile'>Profile</a></li>
                            <li><a href='#/login'>Login</a></li>
                            <li><a href='#/registar'>Register</a></li>
                            <li><a href='#/about'>About</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

/*const mapStateToProps = (state) => {
    return {
        list: state.todo.list
    }
}*/

// const mapDispatchToProps = (dispatch) => bindActionCreators({ search, alterList }, dispatch)

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(LoginActions, dispatch)
    };
}

//module.exports = Menu
export default connect(null, mapDispatchToProps)(Menu)