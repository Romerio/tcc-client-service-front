import React, { Component }  from 'react';

// mudar a versão do material-ui se não der certo
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import QRCode from 'qrcode.react'

class Login extends Component {
  render() {
    const { onChangeUsername, onChangePassword, onLogin } = this.props;
    const { email, password, qrcodeData } = this.props;

    return (
      <MuiThemeProvider>
        <div className="limiter">
          <TextField
            name={'email'}
            value={email}
            onChange={onChangeUsername}
            floatingLabelText="E-mail"
          />
          <TextField
            name={'password'}
            value={password}
            onChange={onChangePassword}
            floatingLabelText="Password"
            type="password"
          />
          <div className="button-holder">
            <RaisedButton
              label="Login"
              primary={true}
              fullWidth={true}
              onClick={onLogin}
            />
          </div>
          <br />
          <div><QRCode value={qrcodeData.payload} size={qrcodeData.size} /></div>
        </div>
      </MuiThemeProvider>
    )
  }
};

export default Login;
