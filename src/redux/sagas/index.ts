import {all} from "redux-saga/effects"
import {exchangesSaga} from "./exchanges.saga";

export function* RootSaga() {
    yield all([
        exchangesSaga()
    ])
}