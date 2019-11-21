import {applyMiddleware, createStore, compose} from "redux";
import {rootReducer} from "../reducers/reducer";
import createSagaMiddleware from "redux-saga"
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';
import {rootSaga} from "../sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

export const history = createHistory();

let store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware, routerMiddleware(history)),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(rootSaga);

export default store;
