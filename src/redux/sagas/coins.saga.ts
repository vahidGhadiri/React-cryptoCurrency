import {takeEvery} from "redux-saga/effects"
import {COINS_TYPES} from "../types";
import {handleGetCoin, handleGetCoins} from "../actions/coins.action";

export function* coinsSaga() {
    yield takeEvery(COINS_TYPES.GET_COINS, handleGetCoins)
}

export function* coinSaga() {
    yield takeEvery(COINS_TYPES.GET_COIN, handleGetCoin)
}