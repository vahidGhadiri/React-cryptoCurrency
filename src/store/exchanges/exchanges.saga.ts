import {all, call, put, takeEvery} from 'redux-saga/effects'

import exchangeService from "../../api/endpoints/exchanges";
import exchangesAction from "./exchanges.actions";
import exchangesActions from "./exchanges.actions";
import {GET_EXCHANGES} from "./exchanges.constant";


export function* getExchanges(): any {
    try {
        const response = yield call(() => exchangeService.getExchanges())
        const {exchanges} = response.data.data
        yield  put(exchangesActions.setExchanges(exchanges))
    } catch (err: any) {
        yield put(exchangesAction.setErr(err.message))
    }
}


export function* exchangesSaga() {
    yield all([
        takeEvery(GET_EXCHANGES, getExchanges)
    ])
}