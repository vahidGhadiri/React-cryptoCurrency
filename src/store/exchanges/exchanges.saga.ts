import {all, call, put, takeEvery} from 'redux-saga/effects'

import exchangeService from "../../services/http/endpoints/exchanges";
import exchangesActions from "./exchanges.actions";
import {GET_EXCHANGES} from "./exchanges.constant";


export function* getExchanges(): any {
    yield put(exchangesActions.setLoading(true))
    try {
        const response = yield call(() => exchangeService.getExchanges())
        const {exchanges} = response.data.data
        yield  put(exchangesActions.setExchanges(exchanges))
    } finally {
        yield put(exchangesActions.setLoading(false))
    }
}


export function* exchangesSaga() {
    yield all([
        takeEvery(GET_EXCHANGES, getExchanges)
    ])
}