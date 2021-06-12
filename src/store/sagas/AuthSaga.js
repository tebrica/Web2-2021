import { put, call, takeLatest } from "redux-saga/effects";
import { REGISTER, LOGIN } from "../../constants/action-types";
import authService from "../../services/AuthService";
import { SaveToken } from "../actions";

function* registerUser({payload}) {
    const data = { Email: payload.email, Password: payload.pass, ConfirmPassword: payload.pass2 }
    yield call(authService.registerNewUser,data)
}

function* loginUser({payload}) {
    console.log(payload)
    const token = yield call(authService.loginUser,payload.data);
    if (token !== undefined) {
        yield put(SaveToken(token));
        yield call(payload.loginCallback)
    }
}

export default function* authSaga() {
    yield takeLatest(REGISTER, registerUser)
    yield takeLatest(LOGIN, loginUser)
}