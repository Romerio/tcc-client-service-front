import React, { Component }  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Snackbar from 'material-ui/Snackbar'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as NotificationActions from '../../notification/actions/notification-actions'

class MySnackbar extends Component {
  handleRequestClose(p1, p2) {
    console.log(p1, p2)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.notification.message;
  }

  handleRequestClose(actions) {
    //console.log(param)
    actions.hide()
  }

  render () {
    const { notification, actions } = this.props;

    return (
      <MuiThemeProvider>
        <Snackbar
          open={notification.isOpen}
          message={notification.message}
          autoHideDuration={3000}
          onRequestClose= {() => this.handleRequestClose(actions)}
        />
      </MuiThemeProvider>
    )
  }
}

/*
function mapStateToProps(state) {
  return state;
}*/

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(NotificationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MySnackbar);
