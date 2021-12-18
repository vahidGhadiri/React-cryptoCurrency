import {takeEvery} from 'redux-saga/effects'
import {EXCHANGES_TYPES} from "../types";
import {handleGetExchanges} from "../actions/exchanges.action";

export function* exchangesSaga() {
    yield takeEvery(EXCHANGES_TYPES.GET_EXCHANGES, handleGetExchanges)
}