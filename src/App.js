import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Solve from "./pages/Solve";
import Mentoring from "./pages/Mentoring";
import ChatWithAdmin from "./pages/ChatWithAdmin";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import SignUp from "./pages/SignUp";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Solve} />
        <Route path="/solve" component={Solve} />
        <Route path="/mentoring" component={Mentoring} />
        <Route path="/chatwithadmin" component={ChatWithAdmin} />
        <Route path="/sign-in/" component={SignIn} />
        <Route path="/sign-out/" component={SignOut} />
        <Route path="/sign-up/" component={SignUp} />
        <Redirect to="/"></Redirect>
      </Switch>
    );
  }
}
export default App;
