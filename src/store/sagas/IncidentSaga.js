import { call, put, takeLatest } from "redux-saga/effects";
import { GET_INCIDENTS } from "../../constants/action-types";
import incidentService from '../../services/IncidentService';
import { SaveIncidentsToBase } from "../actions";

function* getIncidents() {
    const response =  yield call(incidentService.getIncidents)
    console.log(response);
    yield put(SaveIncidentsToBase(response))
}

export default function* incidentSaga() {
    yield takeLatest(GET_INCIDENTS,getIncidents)
}