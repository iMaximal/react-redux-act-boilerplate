import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import TodoLayout from './containers/TodoLayout';
import Demo from './containers/Demo';

class App extends Component {


    render() {
        let routes = (
            <Switch>
                <Route path="/demo" component={ Demo }/>
                <Route path="/" exact component={ TodoLayout }/>
                <Redirect to="/"/>
            </Switch>
        );
        return (
            <div>
                { routes }
            </div>
        );
    }
}

export default withRouter(App);
