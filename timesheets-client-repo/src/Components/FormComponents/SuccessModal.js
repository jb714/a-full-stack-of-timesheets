import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'

class SuccessModal extends Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
        <Modal.Header closeButton>
          Successfully submitted!
        </Modal.Header>
      </Modal>
    );
  }
}

export default SuccessModal;
