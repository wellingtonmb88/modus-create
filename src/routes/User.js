import React, { Component } from "react";
import TopBar from "../components/TopBar";
import UserDetail from "../components/UserDetail";

export default class User extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <UserDetail />
      </div>
    );
  }
}
