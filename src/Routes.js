import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthComponent from './components/Authentication/AuthComponent';
import DashBoardHome from './components/dashboard/DashboardHome';
import IncidentBrowserComponent from './components/dashboard/IncidentBrowserComponent';
import NewIncidentComponent from './components/dashboard/NewIncidentComponent';
import NewWorkRequest from './components/new-work-request/NewWorkRequest';
import AdminPreferences from './components/Authentication/AdminPreferences';
import UserInfoComponent from './components/Authentication/UserInfoComponent';
import MapsComponent from './components/dashboard/MapsComponent';
import Settings from './components/settings/Settings';
import CallsComponent from './components/calls/CallsComponent';
import NotificationsComponent from './components/Notifications/NotificationsComponent';
import DocumentsComponent from './components/dashboard/DocumentsComponent';
import CrewComponent from './components/crew/CrewComponent';
import AnonymousCalls from './components/calls/AnonymousCalls';
import Unauthorized from './components/Unauthorized';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={AuthComponent}/>
        <Route exact path="/dashboard/home" component={DashBoardHome}/>
        <Route exact path="/dashboard/incidentbrowser" component={IncidentBrowserComponent}/>
        <Route exact path="/dashboard/new-incident" component={NewIncidentComponent} />
        <Route exact path="/dashboard/documents" component={DocumentsComponent} />
        <Route exact path="/dashboard/new-work-request" component={NewWorkRequest}/>
        <Route exact path="/admin" component={AdminPreferences}/>
        <Route exact path="/user" component={UserInfoComponent}/>
        <Route exact path="/map" component={MapsComponent}/>
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/calls" component={CallsComponent} />
        <Route exact path="/notifications" component={NotificationsComponent} />
        <Route exact path="/crews" component={CrewComponent} />
        <Route exact path="/anonymous-calls" component={AnonymousCalls} />
        <Route exact path="/Unauthorized" component={Unauthorized}/>
    </Switch>
)

export default Routes;