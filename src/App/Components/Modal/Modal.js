import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {Button, Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions} from '@material-ui/core';
import {Close} from '@material-ui/icons';

export default class Modal extends Component {
  static propTypes = {
    title: Proptypes.oneOfType([Proptypes.string, Proptypes.array, Proptypes.object]),
    body: Proptypes.oneOfType([Proptypes.string, Proptypes.array, Proptypes.object]),
    actions: Proptypes.oneOfType([Proptypes.string, Proptypes.array, Proptypes.object]),
    handleClose: Proptypes.func,
    open: Proptypes.bool
  };

  defaultProps = {
    open: false
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{this.props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {this.props.body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {this.props.actions}
        </DialogActions>
      </Dialog>
    );
  }
}