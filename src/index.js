import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Landing from "./routes/Landing";
import Home from "./routes/Home";
import Users from "./routes/Users";
import User from "./routes/User";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";

ReactDOM.render(
  <AppProvider>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/users-list" component={Users} />
        <Route path="/user/:userId" component={User} />
      </div>
    </BrowserRouter>
  </AppProvider>,
  document.getElementById("root")
);
registerServiceWorker();
