import React, { Component }  from 'react';
import qrcode from 'qrcode.react'

export default class QRCodeClass extends Component {

    render() {
        return (
            <QRCode value="http://facebook.github.io/react/" />
        )
    }
}

/*React.render(
  ,
  mountNode
);*/