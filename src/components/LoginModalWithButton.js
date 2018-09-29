import React, { Component } from "react";
import PropTypes from "prop-types";
import { TextField, Button } from "@material-ui/core";
import { ModalConsumer } from "../contexts/ModalContext";
import { AppConsumer } from "../contexts/AppContext";
import CustomModal from "./CustomModal";

const styles = {
  textField: {
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15
  },
  button: { textAlign: "bottom", marginTop: 15 }
};

class LoginModalWithButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      invalidEmail: false,
      showError: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.signIn = this.signIn.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      showError: false,
      [event.target.name]: event.target.value
    });
  }

  validateEmail(email) {
    var re = /^(([^<>()[\],;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  signIn(login, closeModal) {
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({
        showError: true
      });
      return;
    } else if (email && !this.validateEmail(email)) {
      this.setState({
        showError: true,
        invalidEmail: true
      });
      return;
    }
    login("Wellington Barbosa", email);
    closeModal();
    this.setState({
      email: null,
      password: null
    });
  }

  render() {
    const { email, password, showError, invalidEmail } = this.state;
    return (
      <AppConsumer>
        {({ login }) => (
          <ModalConsumer>
            {({ closeModal }) => (
              <div>
                <CustomModal
                  buttonTitle={this.props.buttonTitle}
                  buttonStyle={this.props.buttonStyle}
                >
                  <div>
                    <TextField
                      error={
                        (showError && !email) || (showError && invalidEmail)
                      }
                      id="email"
                      name="email"
                      type="email"
                      label="Email"
                      value={email ? email : ""}
                      onChange={this.handleInputChange}
                      margin="normal"
                    />
                    <TextField
                      error={showError && !password}
                      id="password"
                      name="password"
                      type="password"
                      label="Password"
                      value={password ? password : ""}
                      onChange={this.handleInputChange}
                      style={styles.textField}
                    />
                    <div style={styles.button}>
                      <Button
                        variant="raised"
                        color="primary"
                        onClick={() => {
                          this.signIn(login, closeModal);
                        }}
                      >
                        {this.props.buttonTitle}
                      </Button>
                    </div>
                  </div>
                </CustomModal>
              </div>
            )}
          </ModalConsumer>
        )}
      </AppConsumer>
    );
  }
}

LoginModalWithButton.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  buttonStyle: PropTypes.object.isRequired
};
export default LoginModalWithButton;
