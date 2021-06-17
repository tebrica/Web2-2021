import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthComponent from './components/Authentication/AuthComponent';
import DashBoardHome from './components/dashboard/DashboardHome';
import IncidentBrowserComponent from './components/dashboard/IncidentBrowserComponent';
import NewIncidentComponent from './components/dashboard/NewIncidentComponent';
import NewWorkRequest from './components/new-work-request/NewWorkRequest';
import WorkRequests from './components/dashboard/WorkRequests';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={AuthComponent}/>
        <Route exact path="/dashboard/home" component={DashBoardHome}/>
        <Route exact path="/dashboard/incidentbrowser" component={IncidentBrowserComponent}/>
        <Route exact path="/dashboard/new-incident" component={NewIncidentComponent} />
        <Route exact path="/dashboard/work-requests" component={WorkRequests} />
        <Route exact path="/dashboard/new-work-request" component={NewWorkRequest}/>
    </Switch>
)

export default Routes;