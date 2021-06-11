import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthComponent from './components/Authentication/AuthComponent';
import DashBoardHome from './components/dashboard/DashboardHome';
import IncidentBrowserComponent from './components/dashboard/IncidentBrowserComponent';
import NewIncidentComponent from './components/dashboard/NewIncidentComponent';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={AuthComponent}/>
        <Route exact path="/dashboard/home" component={DashBoardHome}/>
        <Route exact path="/dashboard/incidentbrowser" component={IncidentBrowserComponent}/>
        <Route exact path="/dashboard/new-incident" component={NewIncidentComponent} />
    </Switch>
)

export default Routes;