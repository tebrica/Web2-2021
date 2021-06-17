export const tokenSelector = (state) => state.auth.token;

export const incidentSelector = (state) => state.incident.incidents;

export const workRequestSelector = (state) => state.incident.workRequests;

export const loggedUserSelector = (state) => state.auth.currentlyLogged;