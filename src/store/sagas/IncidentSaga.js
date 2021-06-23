import { call, put, select, takeLatest } from "redux-saga/effects";
import { ADD_DEVICE, ADD_INCIDENT, GET_CALLS, GET_DEVICES, GET_INCIDENTS, GET_WORK_REQUESTS } from "../../constants/action-types";
import incidentService from '../../services/IncidentService';
import { SaveCalls, SaveDevices, SaveIncidentsToBase, SaveWorkRequests } from "../actions";
import { loggedUserSelector } from "../selectors/AuthSelector";

function* getIncidents({payload}) {
    let response;
    if (payload === 'all') {
        response =  yield call(incidentService.getIncidents)
    }
    else {
        const user = yield select(loggedUserSelector)
        response = yield call(incidentService.getMyIncidents,user.Username)
    }
    yield put(SaveIncidentsToBase(response))
}

function* GetWorkRequests() {
    const response = yield call(incidentService.getWorkRequests);
    yield put(SaveWorkRequests(response))
}

function* GetCalls() {
    const response = yield call(incidentService.getPozivi);
    yield put(SaveCalls(response));
}

function* AddIncident({payload}) {
    yield call(incidentService.addNewIncident,payload)
}

function* getDevices() {
    const response = yield call(incidentService.getOprema)
    yield put(SaveDevices(response))
}

function* addDevice(payload) {
    yield call(incidentService.postOprema,payload)
    const response = yield call(incidentService.getOprema)
    yield put(SaveDevices(response))
}

export default function* incidentSaga() {
    yield takeLatest(GET_INCIDENTS,getIncidents)
    yield takeLatest(GET_WORK_REQUESTS,GetWorkRequests)
    yield takeLatest(GET_CALLS,GetCalls)
    yield takeLatest(ADD_INCIDENT, AddIncident)
    yield takeLatest(GET_DEVICES, getDevices)
    yield takeLatest(ADD_DEVICE, addDevice)
}