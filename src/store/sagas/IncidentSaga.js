import { call, put, select, takeLatest } from "redux-saga/effects";
import { GET_CALLS, GET_INCIDENTS, GET_WORK_REQUESTS } from "../../constants/action-types";
import incidentService from '../../services/IncidentService';
import { SaveCalls, SaveIncidentsToBase, SaveWorkRequests } from "../actions";
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

export default function* incidentSaga() {
    yield takeLatest(GET_INCIDENTS,getIncidents)
    yield takeLatest(GET_WORK_REQUESTS,GetWorkRequests)
    yield takeLatest(GET_CALLS,GetCalls)
}