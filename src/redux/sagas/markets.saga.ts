import {takeEvery} from "redux-saga/effects"
import {MARKETS_TYPES} from "../types";
import {handleGetMarkets} from "../actions/markets.action";

export function* marketsSaga() {
    yield takeEvery(MARKETS_TYPES.GET_MARKETS, handleGetMarkets)
}