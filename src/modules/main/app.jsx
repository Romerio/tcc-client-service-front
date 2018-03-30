import "modules/bootstrap/dist/css/bootstrap.min.css";
import "modules/font-awesome/css/font-awesome.min.css";
import "../template/custom.css";
import React, { Component }  from 'react';
import io from "socket.io-client"

import Menu from '../menu/menu'
import Routes from '../main/routes'

export default class App extends Component {
    componentWillMount() {
        this.socket = io.connect("http://localhost:3003/todo")
    }

    componentWillUnmount() {
        this.socket.disconnect()
    }

    render(){
        return (
            <div className = 'container'>
                <Menu socket={this.socket} />
                <Routes />
            </div>
        )
    }
}
