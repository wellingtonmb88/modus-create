import React, { Component } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withRouter } from "react-router-dom";
import { AppConsumer } from "../contexts/AppContext";
import CustomList from "./CustomList";

const styles = {
  root: {
    flexGrow: 1,
    padding: 10
  }
};

class UserList extends Component {
  getUser = user => {
    return {
      id: `${user.id.name}-${user.id.value}`.replace(/ /g, ""),
      firstname: user.name.first,
      lastname: user.name.last,
      email: user.email,
      phone: user.phone,
      picture: user.picture
    };
  };

  goToHome = () => {
    this.props.history.push(`/home`);
  };

  render() {
    return (
      <AppConsumer>
        {({ users, loading, loggedUser }) => (
          <div style={styles.root}>
            {loggedUser == null ? this.goToHome() : null}
            {loading && <LinearProgress />}
            <CustomList
              items={
                users
                  ? users
                      .filter(
                        u =>
                          u.id.name &&
                          u.id.name.length > 0 &&
                          u.id.value != null
                      )
                      .map(u => this.getUser(u))
                  : []
              }
              onItemClick={item => {
                this.props.history.push(`/user/${item.id}`);
              }}
            />
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default withRouter(UserList);
