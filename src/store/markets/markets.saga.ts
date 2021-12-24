import {call, put, takeEvery} from "redux-saga/effects"

import marketsActions from "./markets.action";
import {GET_MARKETS} from "./markets.constant";
import {MarketsActionInterface} from "../../types/markets.type";


export function* getMarkets() {
    yield put(marketsActions.setLoading(true))
    try {
        const response: MarketsActionInterface = yield call(marketsActions.getMarkets)
        const {markets} = response.data.data
        yield put(marketsActions.setMarkets(markets))
    } finally {
        yield put(marketsActions.setLoading(false))
    }
}

export function* marketsSaga() {
    yield takeEvery(GET_MARKETS, getMarkets)
}