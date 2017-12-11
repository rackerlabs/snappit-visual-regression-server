import * as React from 'react';
import './App.css';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui';

class OAuthDialog extends React.Component {
  state = {
    open: false,
  };

  open = () => {
    this.setState({ open: true });
  }

  close = () => {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <Button color="contrast" onClick={this.open}>Login</Button>
        <Dialog open={this.state.open} onRequestClose={this.close}>
          <DialogTitle>{'Authenticate with Github OAuth?'}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Allow this application to manage visual regression for repositories you have access to?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.close} color="primary">
              Disagree
            </Button>
            <Button onClick={this.close} color="primary" autoFocus={true}>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default OAuthDialog;