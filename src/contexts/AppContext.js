import React, { Component } from "react";
import UserService from "../services/UserService";

const USER_NAME = "USER_NAME";
const USER_EMAIL = "USER_EMAIL";

const AppContext = React.createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loggedUser: null,
      loading: false
    };
    this.fetchUsers = this.fetchUsers.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.setLoading = this.setLoading.bind(this);
  }
  componentDidMount() {
    const name = localStorage.getItem(USER_NAME);
    const email = localStorage.getItem(USER_EMAIL);
    if (name && email) {
      this.setState({
        loggedUser: { name, email }
      });
    }
  }
  async fetchUsers() {
    this.setLoading(true);
    const users = await UserService.getUsers();
    this.setState({
      users
    });
    this.setLoading(false);
  }

  login(name, email) {
    this.setLoading(true);
    const loggedUser = {
      email,
      name
    };
    this.setState({
      loggedUser
    });
    this.setLoading(false);
    localStorage.setItem(USER_NAME, name);
    localStorage.setItem(USER_EMAIL, email);
  }

  logout() {
    this.setLoading(true);
    this.setState({
      loggedUser: null
    });
    this.setLoading(false);
    localStorage.setItem(USER_NAME, null);
    localStorage.setItem(USER_EMAIL, null);
  }

  setLoading(isLoading) {
    this.setState({
      loading: isLoading
    });
  }

  render() {
    const { children } = this.props;
    return (
      <AppContext.Provider
        value={{
          loading: this.state.loading,
          loggedUser: this.state.loggedUser,
          users: this.state.users,
          fetchUsers: this.fetchUsers,
          login: this.login,
          logout: this.logout
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

export const AppConsumer = AppContext.Consumer;
