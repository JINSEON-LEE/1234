import React, { Component } from 'react';
import Solve from './pages/Solve';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';


class App extends Component {
    render() {      
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Solve} />
                    <Route path="/sign-in/" component={SignIn} />
                    <Route path="/sign-out/" component={SignOut} />
                    <Redirect to="/"></Redirect>
                </Switch>
            </BrowserRouter>
        );
    };
};
export default App;