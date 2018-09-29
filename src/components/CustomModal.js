import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal } from "@material-ui/core";
import { ModalConsumer } from "../contexts/ModalContext";
import Button from "./Button";

const styles = {
  modal: {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    width: 360,
    backgroundColor: "#FFFFFF",
    boxShadow: 2,
    padding: 10
  }
};

class CustomModal extends Component {
  render() {
    const { children, buttonTitle, buttonStyle } = this.props;
    return (
      <ModalConsumer>
        {({ closeModal, openModal, open }) => (
          <div>
            {buttonTitle ? (
              <Button
                style={buttonStyle}
                onClick={() => {
                  openModal();
                }}
              >
                {buttonTitle}
              </Button>
            ) : null}
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={() => {
                closeModal();
              }}
            >
              <div style={styles.modal}>{children}</div>
            </Modal>
          </div>
        )}
      </ModalConsumer>
    );
  }
}

CustomModal.propTypes = {
  buttonTitle: PropTypes.string,
  buttonStyle: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
};

export default CustomModal;
