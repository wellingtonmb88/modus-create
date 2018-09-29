import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ModalProvider } from "../contexts/ModalContext";
import { AppConsumer } from "../contexts/AppContext";

const styles = {
  label: {
    textAlign: "center"
  }
};

class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
    this.getUsers = this.getUsers.bind(this);
  }

  getUsers(fetchUsers) {
    this.setState(
      {
        loaded: true
      },
      () => {
        fetchUsers();
        this.props.history.push(`/users-list`);
      }
    );
  }

  render() {
    return (
      <AppConsumer>
        {({ fetchUsers, loggedUser }) => (
          <ModalProvider>
            {loggedUser != null && !this.state.loaded ? (
              this.getUsers(fetchUsers)
            ) : (
              <p style={styles.label}>User Not Logged</p>
            )}
          </ModalProvider>
        )}
      </AppConsumer>
    );
  }
}
export default withRouter(HomeContent);
