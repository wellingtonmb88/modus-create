import React, { Component } from "react";

const ModalContext = React.createContext();

export class ModalProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(text) {
    this.setState({
      open: true
    });
  }

  closeModal(text) {
    this.setState({
      open: false
    });
  }

  render() {
    const { children } = this.props;
    return (
      <ModalContext.Provider
        value={{
          open: this.state.open,
          openModal: this.openModal,
          closeModal: this.closeModal
        }}
      >
        {children}
      </ModalContext.Provider>
    );
  }
}

export const ModalConsumer = ModalContext.Consumer;
