import React from 'react';
import Dialog from '@material-ui/core/Dialog';

export function Modal(props) {
  const handleClose = () => {
    props.handleClose();
  };

  return (
    <Dialog open={props.isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
      {props.children}
    </Dialog>
  );
}
