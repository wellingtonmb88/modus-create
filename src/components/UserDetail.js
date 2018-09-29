import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography
} from "@material-ui/core";
import { AppConsumer } from "../contexts/AppContext";

const styles = {
  content: {
    float: "right"
  },
  media: {
    width: 200,
    height: 200,
    float: "left"
  },
  root: {
    padding: 20
  }
};

class UserDetail extends Component {
  getUser = (id, users) => {
    return users.filter(user => `${user.id.name}-${user.id.value}`.replace(/ /g,'') === id)[0];
  };

  getUserFirstName = user => {
    return user ? user.name.first : "";
  };

  getUserLastName = user => {
    return user ? user.name.last : "";
  };

  getUserPhone = user => {
    return user ? user.phone : "";
  };

  getUserEmail = user => {
    return user ? user.email : "";
  };

  getUserPicture = user => {
    return user ? user.picture.large : "";
  };

  goToUsers = () => {
    this.props.history.goBack();
  };

  render() {
    const {
      match: {
        params: { userId }
      }
    } = this.props;
    return (
      <AppConsumer>
        {({ users, loading, loggedUser }) => (
          <div style={styles.root}>
            {loggedUser == null ? (
              this.goToUsers()
            ) : (
              <div>
                <Card style={styles.card}>
                  <CardActionArea>
                    <div style={styles.media}>
                      <img
                        src={`${this.getUserPicture(
                          this.getUser(userId, users)
                        )}`}
                        alt="User"
                      />
                    </div>
                    <div style={styles.content}>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="headline"
                          component="h2"
                        >
                          {`${this.getUserFirstName(
                            this.getUser(userId, users)
                          )} ${this.getUserLastName(
                            this.getUser(userId, users)
                          )}`.toUpperCase()}
                        </Typography>
                        <Typography component="p">
                          {this.getUserPhone(this.getUser(userId, users))}
                        </Typography>
                        <Typography component="p">
                          {this.getUserEmail(this.getUser(userId, users))}
                        </Typography>
                      </CardContent>
                    </div>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => {
                        this.goToUsers();
                      }}
                    >
                      Back
                    </Button>
                  </CardActions>
                </Card>
              </div>
            )}
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default withRouter(UserDetail);
