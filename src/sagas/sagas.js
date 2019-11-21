import {put, takeEvery, call, fork, all, select} from "redux-saga/effects"
import {register} from "../actions/actions";
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
