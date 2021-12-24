import {all, fork} from "redux-saga/effects"
import {coinsSaga} from "./coins/coins.saga";
import {exchangesSaga} from "./exchanges/exchanges.saga";
import {marketsSaga} from "./markets/markets.saga";
import {statsSaga} from "./stats/stats.saga";

export default function* RootSaga() {
    yield all([
        fork(coinsSaga),
        fork(exchangesSaga),
        fork(marketsSaga),
        fork(statsSaga)
    ])
}