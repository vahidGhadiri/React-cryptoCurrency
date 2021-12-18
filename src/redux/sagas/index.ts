import {all} from "redux-saga/effects"
import {exchangesSaga} from "./exchanges.saga";
import {marketsSaga} from "./markets.saga";

export function* RootSaga() {
    yield all([
        exchangesSaga(),
        marketsSaga()
    ])
}