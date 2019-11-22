import {put, takeEvery, fork, all} from "redux-saga/effects"
import {push} from "react-router-redux";
import {REGISTER} from "../actions/actionsTypes";

export function* rootSaga() {
    yield all([
            fork(watchSign)
        ])
}

export function* watchSign() {
    yield takeEvery(REGISTER, registerAsync)
}

function* registerAsync() {
    yield put(push("/"));
}
