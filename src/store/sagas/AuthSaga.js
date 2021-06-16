import { put, call, takeLatest } from "redux-saga/effects";
import { REGISTER, LOGIN, LOGOUT, REFRESH_TOKEN } from "../../constants/action-types";
import authService from "../../services/AuthService";
import { SaveToken } from "../actions";

function* registerUser({payload}) {
    const data = { Email: payload.email, Password: payload.pass, ConfirmPassword: payload.pass2 }
    yield call(authService.registerNewUser,data)
}

function* loginUser({payload}) {
    const token = yield call(authService.loginUser,payload.data);
    if (token !== undefined) {
        yield put(SaveToken(token));
        yield call(payload.loginCallback)
    }
}

function* logoutUser() {
    console.log('User logged out!')
    yield put(SaveToken(''))
}

function* saveAuthToken() {
    const token = localStorage.getItem('token');
    yield put(SaveToken(token));
}

export default function* authSaga() {
    yield takeLatest(REGISTER, registerUser)
    yield takeLatest(LOGIN, loginUser)
    yield takeLatest(LOGOUT,logoutUser)
    yield takeLatest(REFRESH_TOKEN, saveAuthToken)
}