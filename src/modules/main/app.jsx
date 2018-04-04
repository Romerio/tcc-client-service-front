import "modules/bootstrap/dist/css/bootstrap.min.css";
import "modules/font-awesome/css/font-awesome.min.css";
import "../template/custom.css";
import React, { Component }  from 'react';
import io from "socket.io-client"

import MenuContainer from '../menu/menu-container'
import Routes from '../main/routes'
import * as Config from "./config";

export default class App extends Component {
    componentWillMount() {
        this.socket = io.connect(Config.SOCKET_PATH)
    }

    componentWillUnmount() {
        this.socket.disconnect()
    }

    render(){
        return (
            <div className = 'container'>
                <MenuContainer socket={this.socket} />
                <Routes socket={this.socket} />
            </div>
        )
    }
}
