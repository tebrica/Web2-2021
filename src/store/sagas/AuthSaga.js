import { put, call, takeLatest } from "redux-saga/effects";
import { REGISTER } from "../../constants/action-types";

function* registerUser(payload) {
    console.log(payload)
    yield call("")
}

export default function* authSaga() {
    yield takeLatest(REGISTER, registerUser)
}