import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthComponent from './components/Authentication/AuthComponent';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={AuthComponent}/>
    </Switch>
)

export default Routes;