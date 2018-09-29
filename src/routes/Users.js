import React, { Component } from "react";
import TopBar from "../components/TopBar";
import UserList from "../components/UserList";

export default class Users extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <UserList />
      </div>
    );
  }
}
