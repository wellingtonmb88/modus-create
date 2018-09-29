import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ModalProvider } from "../contexts/ModalContext";
import { AppConsumer } from "../contexts/AppContext";
import Button from "./Button";
import LoginModalWithButton from "./LoginModalWithButton";
import If from "./If";
import LetterAvatar from "./LetterAvatar";
import Logo from "../images/favicon-196x196.png";

const styles = {
  header: {
    height: 48,
    width: "100%",
    backgroundColor: "rgb(102,63,180)",
    color: "white",
    padding: "6px 10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  logo: {
    maxHeight: 40,
    float: "left",
    margin: 8
  },
  buttonContainer: {
    float: "right",
    paddingRight: 20,
    margin: "auto"
  },
  buttonBlue: {
    backgroundColor: "blue",
    color: "white"
  },
  buttonRed: {
    backgroundColor: "red",
    color: "white",
    textAlign: "center"
  }
};
export default class TopBar extends Component {
  state: { loggedIn: false };
  render() {
    return (
      <AppConsumer>
        {({ loggedUser, logout }) => (
          <header style={styles.header}>
            <div>
              <Link to="/">
                <img style={styles.logo} alt={"logo"} src={Logo} />
              </Link>
            </div>
            <div>{"Modus Create"}</div>
            <div style={{ float: "left", color: "white", flex: 1 }} />
            <div style={styles.buttonContainer}>
              <div style={{ float: "left" }}>
                <ModalProvider>
                  <If test={loggedUser == null}>
                    <LoginModalWithButton
                      buttonStyle={styles.buttonBlue}
                      buttonTitle="Login"
                    />
                  </If>
                  <If test={loggedUser != null}>
                    <LetterAvatar
                      name={loggedUser ? loggedUser.name : "Wellington"}
                    />
                  </If>
                </ModalProvider>
              </div>
              <div style={{ float: "right" }}>
                <ModalProvider>
                  <If test={loggedUser == null}>
                    <LoginModalWithButton
                      buttonStyle={styles.buttonRed}
                      buttonTitle="Signup"
                    />
                  </If>
                  <If test={loggedUser != null}>
                    <Button
                      style={styles.buttonRed}
                      onClick={() => {
                        logout();
                      }}
                    >
                      Logout
                    </Button>
                  </If>
                </ModalProvider>
              </div>
            </div>
          </header>
        )}
      </AppConsumer>
    );
  }
}
