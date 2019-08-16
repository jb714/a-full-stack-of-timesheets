import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'

class SuccessModal extends Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
        <Modal.Header closeButton>
          <h5>Successfully submitted!</h5> &ensp; &#128526; &#128526; &#128526;
        </Modal.Header>
      </Modal>
    );
  }
}

export default SuccessModal;
